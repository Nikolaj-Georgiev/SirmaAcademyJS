import { useMemo } from "react";
import { POSITIONS } from "../utils/config";

export default function useTeamFieldSchema(teamSchema, players) {
  const playersByPosition = useMemo(() => {
    return POSITIONS.reduce(() => { })
  }, [players])


  return;
}