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

ID, Name, ManagerFullName, Group  
1, Germany, Julian Nagelsmann, A  
2, Scotland, Steve Clarke, A  
...

### matches.csv

ID, ATeamID, BTeamID, Date, Score  
1, 1, 2, 6/14/2024, 5-1  
2, 3, 4, 6/15/2024, 1-3  
...

### records.csv

ID, PlayerID, MatchID, fromMinutes, toMinutes  
1, 1, 1, 0, NULL  
2, 2, 1, 0, 90  
...
