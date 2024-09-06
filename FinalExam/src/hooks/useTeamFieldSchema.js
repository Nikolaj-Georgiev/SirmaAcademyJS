import { useMemo } from "react";
import { POSITIONS } from "../utils/config";
import { getMatchPlayersByPosition } from "../utils/dataUtils";

export default function useTeamFieldSchema(teamSchema, players) {
  const playersByPosition = useMemo(() => getMatchPlayersByPosition(players, POSITIONS), [players]);

  return useMemo(() => {
    return teamSchema.map((numPlayers, index) => {
      let currentPosition = POSITIONS[index]
      const lastUsedPosition = POSITIONS[index - 1];
      currentPosition = currentPosition ? currentPosition : lastUsedPosition;
      const playersInPosition = playersByPosition[currentPosition] || [];
      console.log(`Position: ${currentPosition}, Players:`, playersInPosition);
      return playersInPosition.slice(0, numPlayers);
    })
  }, [teamSchema, playersByPosition]);
}