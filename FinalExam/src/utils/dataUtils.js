//fetch the data from the csv
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

//parse the data from the CSV
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
    if (!groupedMatches[match.data]) {
      groupedMatches[match.data] = [];
    }
    groupedMatches[match.data].push(match);
    return groupedMatches;
  }, {});
}