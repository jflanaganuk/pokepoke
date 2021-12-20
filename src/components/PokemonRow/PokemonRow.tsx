import React from "react";
import css from "./PokemonRow.scss";
import { capitalizeFirstLetter, IMG_URL } from "../../utils";

interface PokemonRowProps {
  id: number;
  name: string;
}

export function PokemonRow(props: PokemonRowProps) {
  return (
    <div className={css.pokemon}>
      <img width={128} src={`${IMG_URL}${props.id}.png`} />
      <p>
        #{props.id} {capitalizeFirstLetter(props.name)}
      </p>
    </div>
  );
}
