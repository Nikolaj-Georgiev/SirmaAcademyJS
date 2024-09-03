import { useMemo } from "react";
import { POSITIONS } from "../utils/config";
import { getPlayersByPosition } from "../utils/dataUtils";

export default function useTeamFieldSchema(teamSchema, players) {
  const playersByPosition = useMemo(() => getPlayersByPosition(players, POSITIONS), [players]);
  console.log(playersByPosition);

  const lastUsedPosition = '';

  return useMemo(() => {
    return teamSchema.map((numPlayers, index) => {
      const currentPosition = POSITIONS[index] || lastUsedPosition;
      const playersInPosition = playersByPosition[currentPosition] || [];
      lastUsedPosition = currentPosition;
      return playersInPosition.slice(0, numPlayers);
    })
  }, [teamSchema, playersByPosition])
}