//fetch the data from the csv
export async function fetchCSV(url) {
  try {
    const response = await fetch(url);
    console.log(response);
    console.log('Babaluga');

    if (!response.ok) {
      throw new Error(`Couldn't fetch! Status: ${response.status}`);
    }

    const data = await response.text();
    console.log(data);
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

    const headers = lines[0].split(',').map(header => header.trim());

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
  return teams.find(team => team.name.toLocaleLowerCase() === name.toLocaleLowerCase())
}

export function getMatchById(matches, id) {
  return matches.find(match => match.id === parseInt(id, 10));
}