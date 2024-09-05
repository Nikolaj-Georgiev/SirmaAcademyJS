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

export function getScoreFromMatch(match) {
  const [teamAScore, teamBScore] = match.score.split('-');
  return {
    teamA: teamAScore,
    teamB: teamBScore
  }
}

export function getWinnerIdAndWinWayFromMatch(match) {
  let winWay = true;
  let winnerId = null;
  const winnerAndWay = ({ teamA: score1, teamB: score2 }) => {
    if (!isNaN(+score1) && !isNaN(+score2)) {
      winnerId = score1 > score2 ? match.ateamid : match.bteamid;
      return { winnerId, winWay }
      // return [winnerId, winWay]
    }
    const score1New = score1.slice(-2).slice(0, 1)//this is football there are no 2 digits results :)
    const score2New = score2.slice(-2).slice(0, 1)
    winnerId = score1New > score2New ? match.ateamid : match.bteamid;
    winWay = false;
    return { winnerId, winWay }
    // return [winnerId, winWay]
  }

  return winnerAndWay(getScoreFromMatch(match));
}

function dateValidateAndParseMMDDYYYY(dateString) {
  // months in en and bg
  const monthNames = {
    en: {
      january: 1, february: 2, march: 3, april: 4, may: 5, june: 6,
      july: 7, august: 8, september: 9, october: 10, november: 11, december: 12,
      jan: 1, feb: 2, mar: 3, apr: 4, jun: 6, jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12
    },
    bg: {
      януари: 1, февруари: 2, март: 3, април: 4, май: 5, юни: 6,
      юли: 7, август: 8, септември: 9, октомври: 10, ноември: 11, декември: 12
    }
  };

  // regex for BG date format '5 септември 2024 г.'
  const dateRegexBG = /^(\d{1,2})[-/. ]?([а-яА-Я]+)[-/. ]?(\d{4}) г\.?$/;

  const dateRegexStandard = /^(\d{1,2})([-/. ])?([a-zA-Z]+|\d{1,2})([-/. ])?(\d{2,4})$/;

  // regex to check if date is with leading year '2024-09-05'
  const dateRegexLeadingYear = /^(\d{2,4})([-/. ])?(\d{1,2})([-/. ])?(\d{1,2})$/;

  let match, year, month, day;


  if (dateRegexBG.test(dateString)) {
    match = dateString.match(dateRegexBG);
    day = parseInt(match[1]);
    const monthText = match[2].toLowerCase();
    year = parseInt(match[3]);

    month = monthNames['bg'][monthText];
    if (!month) return 'Fake Date'; // if no such month (only full names)
  } else if (dateRegexStandard.test(dateString)) {
    match = dateString.match(dateRegexStandard);
    day = parseInt(match[1]);
    year = parseInt(match[5]);

    // if month is text check english
    if (isNaN(parseInt(match[3]))) {
      const monthText = match[3].toLowerCase();
      month = monthNames['en'][monthText];
      if (!month) return 'Fake Date'; // if text is not a valid month
    } else {
      month = parseInt(match[3]);
    }

    // check if month is bigger then 12
    if (month > 12 && day <= 12) {
      [day, month] = [month, day]; // switch date and month to match the needed format
    }
  } else if (dateRegexLeadingYear.test(dateString)) {
    match = dateString.match(dateRegexLeadingYear);
    year = parseInt(match[1]);
    month = parseInt(match[3]);
    day = parseInt(match[5]);

    if (month > 12 && day <= 12) {
      [day, month] = [month, day]; // same as above
    }
  } else {
    return 'Fake Date';
  }

  // fix the year if it's 2 digits
  if (year < 100) {
    year += year > 50 ? 1900 : 2000;
  }

  // Create date and check validity
  const date = new Date(year, month - 1, day);
  if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
    return 'Fake Date';
  }

  // I return this format MM/DD/YYYY here because the rest of the app works with it 
  return `${String(month).padStart(2, '0')}/${String(day).padStart(2, '0')}/${year}`;
}