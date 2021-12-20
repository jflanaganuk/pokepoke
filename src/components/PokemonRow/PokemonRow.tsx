import React from "react";
import css from "./PokemonRow.scss";

interface PokemonRowProps {
  id: number;
  name: string;
}

const DREAM_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/";

function capitalizeFirstLetter(input: string): string {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

export function PokemonRow(props: PokemonRowProps) {
  return (
    <div className={css.pokemon}>
      <img width={128} src={`${DREAM_URL}${props.id}.png`} />
      <p>
        #{props.id} {capitalizeFirstLetter(props.name)}
      </p>
    </div>
  );
}
