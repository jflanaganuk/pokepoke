import React from "react";
import css from "./PokemonRow.scss";
import { capitalizeFirstLetter, IMG_URL } from "../../utils";
import { Link } from "react-router-dom";

interface PokemonRowProps {
  id: number;
  name: string;
}

export function PokemonRow(props: PokemonRowProps) {
  return (
    <Link to={`/pokemon/${props.id}`} className={css.pokemon}>
      <img width={128} src={`${IMG_URL}${props.id}.png`} />
      <p>
        #{props.id} {capitalizeFirstLetter(props.name)}
      </p>
    </Link>
  );
}
