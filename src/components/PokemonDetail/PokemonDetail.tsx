import React from "react";
import css from "./PokemonDetail.scss";
import { capitalizeFirstLetter, IMG_URL } from "../../utils";
import { PokemonMoves } from "./PokemonMoves/PokemonMoves";

export interface PokemonDetailProps {
  name: string;
  height: number;
  weight: number;
  pokemon_species_id: number;
  forms: {
    form_name: string;
    form_order: number;
    is_battle_only: boolean;
    is_default: boolean;
    is_mega: boolean;
    name: string;
    version_group_id: number;
  }[];
  moves: {
    level: number;
    name: string;
    pp: number | null;
    power: number | null;
    type: string;
    effect: string;
  }[];
}

export function PokemonDetail(props: PokemonDetailProps) {
  return (
    <div className={css.container}>
      <h2>
        #{props.pokemon_species_id} {capitalizeFirstLetter(props.name)}
      </h2>
      <img
        className={css.heroImage}
        src={`${IMG_URL}${props.pokemon_species_id}.png`}
        alt=""
      />
      <PokemonMoves moves={props.moves} />
    </div>
  );
}
