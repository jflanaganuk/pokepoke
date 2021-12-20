import React from "react";
import { capitalizeMoveName, capitalizeFirstLetter } from "../../../utils";
import { PokemonDetailProps } from "../PokemonDetail";

interface PokemonMovesProps {
  moves: PokemonDetailProps["moves"];
}

export function PokemonMoves(props: PokemonMovesProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Level Learnt</th>
          <th>Move Name</th>
          <th>Type</th>
          <th>PP</th>
          <th>Power</th>
          <th>Effect</th>
        </tr>
      </thead>
      <tbody>
        {sanitizeMoves(props.moves).map((move) => (
          <tr>
            <td>{move.level}</td>
            <td>{capitalizeMoveName(move.name)}</td>
            <td>{capitalizeFirstLetter(move.type)}</td>
            <td>{move.pp}</td>
            <td>{move.power ? move.power : "--"}</td>
            <td>{move.effect}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function sanitizeMoves(
  input: PokemonMovesProps["moves"]
): PokemonMovesProps["moves"] {
  return input
    .filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.name === value.name)
    )
    .filter((value) => value.level !== 0)
    .slice()
    .sort((a, b) => {
      if (Number(a.level) > Number(b.level)) return 1;
      if (Number(a.level) < Number(b.level)) return -1;
      return 0;
    });
}
