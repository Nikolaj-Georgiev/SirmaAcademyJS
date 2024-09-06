# Football Tournament Website

## Description

WEB application that visualizes the matches and results
from the European Football Championship.

## Input data

A CSV files with data in the following format:

### players.csv

`ID`, `TeamNumber`, `Position`, `FullName`, `TeamID`  
1, 1, GK, Manuel Neuer, 1  
2, 2, DF, Antonio Rüdiger, 1  
...

### teams.csv

`ID`, `Name`, `ManagerFullName`, `Group`  
1, Germany, Julian Nagelsmann, A  
2, Scotland, Steve Clarke, A  
...

### matches.csv

`ID`, `ATeamID`, `BTeamID`, `Date`, `Score`  
1, 1, 2, 6/14/2024, 5-1  
2, 3, 4, 6/15/2024, 1-3  
...

### records.csv

`ID`, `PlayerID`, `MatchID`, `fromMinutes`, `toMinutes`  
1, 1, 1, 0, NULL  
2, 2, 1, 0, 90  
...

## Requirements

1. **Data Loading**:

   - All data must be loaded from CSV files without using external libraries for CSV parsing.

2. **Match Sorting**:

   - Matches should be sorted by date and organized into a tournament bracket.

3. **Date Formats**:

   - The application should support multiple date formats. Extra points for supporting all possible formats.

4. **Visualization**:

   - Create a user interface using React that includes:
     - A Homepage with a visualization of the tournament bracket.
     - A Match Details page showing the formations and the result of each match.
     - A Team Details page that includes a roster view of all players in the team.

5. **Clean Code**:

   - Follow best practices for clean code.

6. **README File**:
   - This README file should explain the task and describe the algorithm used to implement the functionalities.

## Project Architecture

The project is structured as follows:

- **App**: The main component that manages the routing of the application.
- **Home**: The component that visualizes the tournament stages and all matches. Click on any match lead to Match Details page.
- **MatchDetails**: The component for match details, displaying formations and results.
- **TeamDetails**: The component for team details, including a roster of all players.
- **Bracket**: A component displaying bracket view of the final four stages of the tournament

## Implementation Algorithm

### Loading CSV Files

CSV files are loaded using JavaScript's `fetch` function and are manually parsed into appropriate objects.

### Match Sorting

Matches are sorted by date. The tournament bracket is organized by stages (round of 16, quarter final, etc.).

### Visualization

React is used to create components that visualize different aspects of the tournament. The structure is designed to be responsive and easy to use.

### Installation

1. **Clone the repository**:

```bash
git clone https://github.com/Nikolaj-Georgiev/SirmaAcademyJS.git
```

2.**Navigate into the project subfolder**:

```bash
cd SirmaAcademyJS/FinalExam
```

3.**Install dependencies**:

```bash
npm install
```

4.**Run the development server**:

```bash
npm run dev
```

5.**This will start the project on localhost**

### Deployment

**You can access the deployed project at**:
[text](https://ng-football.netlify.app/)https://ng-football.netlify.app/
