export async function fetchCSV(url) {
  try {
    const response = await fetch(url);
    // console.log(response);

    if (!response.ok) {
      throw new Error(`Couldn't fetch! Status: ${response.status}`);
    }

    const data = await response.text();
    return data;
  } catch (err) {
    console.error('Error fetching CSV:', err);
    throw err; // Transfer the error for later handling
  }
}

export function parseCSVData(data) {
  try {
    const lines = data.split('\n').filter(line => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('CSV data is empty :(')
    }

    const headers = lines[0].split(',').map(header => header.trim().toLocaleLowerCase());

    return lines.slice(1).map(line => {
      const values = line.split(',').map(value => value.trim());

      if (values.length !== headers.length) {
        throw new Error('CSV roll does not match header length')
      }

      return headers.reduce((obj, header, index) => {
        obj[header] = values[index];
        return obj;
      }, {})
    })
  } catch (err) {
    console.error('Error parsing CSV', err);
    throw err;
  }
}

export function getTeamByName(teams, name) {
  return teams.find(team => team?.name === name)
}

export function getTeamById(teams, id) {
  return teams.find(team => team?.id === id)
}

export function getMatchById(matches, id) {
  return matches.find(match => match?.id === id);
}

export function getPlayersFromTeam(teamId, players) {
  return players.filter(player => player.teamid === teamId);
}

export function getSortedMatchesByDate(matches) {
  return [...matches].sort((a, b) => new Date(a.date) - new Date(b.date));
}

export const getMatchesByDate = (matches) => {
  const date = matches[0]?.date;
  const onDateMatches = matches.filter((match) => match.date === date);
  return { date, onDateMatches };
};

export function getGroupedMatchesByDate(matches) {
  return matches.reduce((groupedMatches, match) => {
    if (!groupedMatches[match.date]) {
      groupedMatches[match.date] = [];
    }
    groupedMatches[match.date].push(match);
    return groupedMatches;
  }, {});
}

export function divideMatchesByStage(matches, cutOffDate) {
  const stages = {
    groupPhase: [],
    roundOf16: [],
    quarterFinals: [],
    semiFinals: [],
    final: []
  };

  let phaseIndex = 0;
  const phaseMatchCounts = [8, 4, 2, 1];
  const phaseOrder = ['roundOf16', 'quarterFinals', 'semiFinals', 'final'];

  matches.forEach((match) => {
    //
    const matchDate = new Date(match.date);
    if (match.date <= cutOffDate) {
      stages.groupPhase.push(match);
    } else {
      if (stages[phaseOrder[phaseIndex]].length < phaseMatchCounts[phaseIndex]) {
        stages[phaseOrder[phaseIndex]].push(match);
      } else {
        phaseIndex++;
        stages[phaseOrder[phaseIndex]].push(match);
      }
    }
  });

  return stages;
}

export function createRecordsIndexObj(records) {
  return records.reduce((indexObj, record) => {
    if (!indexObj[record.matchid]) {
      indexObj[record.matchid] = [];
    }

    indexObj[record.matchid].push(record);
    return indexObj
  }, {});
}

export function addPlayingTimeToPlayers(teamPlayers, playingTime) {
  return teamPlayers.map((player) => {
    const playerPlayingTime = playingTime
      .filter(playing => playing.playerId === player.id)
      .map(playing => ({ fromminutes: playing.fromMinutes, tominutes: playing.toMinutes }))
    return {
      ...player,
      playingTime: playerPlayingTime,
    };
  });
}

export function getMatchDetailsById(matchId, matches, teams, players, recordsIndexObj, flagsUrl) {
  const match = getMatchById(matches, matchId);
  if (!match) return null;

  const teamA = getTeamById(teams, match.ateamid);
  const teamB = getTeamById(teams, match.bteamid);

  // console.log(teamA);
  // console.log(teamB);

  const teamAPlayers = getPlayersFromTeam(teamA.id, players);
  const teamBPlayers = getPlayersFromTeam(teamB.id, players);

  // console.log(teamAPlayers);
  // console.log(teamBPlayers);

  // console.log(recordsIndexObj);

  const playingTime = (recordsIndexObj[matchId] || []).map(record => ({
    playerId: record.playerid,
    fromMinutes: record.fromminutes,
    toMinutes: record.tominutes !== 'NULL' ? record.tominutes : '90',
  }));

  const [teamAScore, teamBScore] = match.score.split('-');
  // console.log(goals);

  const teamAWithPlayingTime = addPlayingTimeToPlayers(teamAPlayers, playingTime);
  const teamBWithPlayingTime = addPlayingTimeToPlayers(teamBPlayers, playingTime);

  // console.log(teamAWithGoals);
  // console.log(teamBWithGoals);

  return {
    matchId,
    date: match.date,
    score: match.score,
    teamA: {
      name: teamA.name,
      manager: teamA.managerfullname,
      flag: flagsUrl[teamA.name],
      players: teamAWithPlayingTime,
      teamScore: teamAScore,
    },
    teamB: {
      name: teamB.name,
      manager: teamB.managerfullname,
      flag: flagsUrl[teamB.name],
      players: teamBWithPlayingTime,
      teamScore: teamBScore,
    }
  }
}

export function getTeamFieldSchemaByTeamName(teamName, fieldSchemasArray) {
  const teamSchema = fieldSchemasArray.find((fieldSchema) => fieldSchema.name === teamName);
  return teamSchema ? teamSchema.schema : null;
}

export function getPlayersByPosition(players, positions) {
  return positions.reduce((playersByPositionAccumulator, position) => {
    playersByPositionAccumulator[position] = players.filter(player => player.position === position);
    return playersByPositionAccumulator;
  }, {})
}