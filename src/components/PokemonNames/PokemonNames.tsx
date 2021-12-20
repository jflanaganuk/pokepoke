import React from "react";
import { PokemonRow } from "../PokemonRow/PokemonRow";
import css from "./PokemonNames.scss";

import { getPokemonSpecies } from "../../queries/__generated__/getPokemonSpecies";

interface PokemonNamesProps {
  results: getPokemonSpecies;
}

export function PokemonNames(props: PokemonNamesProps) {
  return (
    <div className={css.pokeGrid}>
      {props.results.pokemon_v2_pokemonspecies.map((pokemon) => {
        return (
          <PokemonRow key={pokemon.id} id={pokemon.id} name={pokemon.name} />
        );
      })}
    </div>
  );
}
