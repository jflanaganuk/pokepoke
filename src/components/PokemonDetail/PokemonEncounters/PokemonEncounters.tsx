import React from "react";
import { capitalizeMoveName } from "../../../utils";
import { PokemonDetailProps } from "../PokemonDetail";

interface PokemonEncountersProps {
  encounters: PokemonDetailProps["encounters"];
}

export function PokemonEncounters(props: PokemonEncountersProps) {
  if (props.encounters.length === 0) return <p>Not available in game</p>;
  return (
    <table>
      <thead>
        <tr>
          <th>Game</th>
          <th>Location</th>
          <th>Min</th>
          <th>Max</th>
        </tr>
      </thead>
      <tbody>
        {sanitizeEncounters(props.encounters).map((encounter) => (
          <tr>
            <td>{encounter.game_index}</td>
            <td>{capitalizeMoveName(encounter.name)}</td>
            <td>{encounter.min_level}</td>
            <td>{encounter.max_level}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function sanitizeEncounters(
  input: PokemonEncountersProps["encounters"]
): PokemonEncountersProps["encounters"] {
  return input
    .filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.name === value.name)
    )
    .slice()
    .sort((a, b) => {
      if (Number(a.game_index) > Number(b.game_index)) return 1;
      if (Number(a.game_index) < Number(b.game_index)) return -1;
      return 0;
    });
}

function mapIdToGameVersion(input: number): string {
  switch (input) {
    case 0:
      return "X&Y";
    case 1:
      return "Red";
    case 2:
      return "Blue";
    case 3:
      return "Yellow";
    case 4:
      return "Gold";
    default:
      return "Unknown";
  }
}
