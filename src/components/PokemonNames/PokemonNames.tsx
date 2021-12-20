import React from "react";
import { useQuery } from "@apollo/client";
import {
  samplePokeAPIquery,
  samplePokeAPIqueryVariables,
} from "../../queries/__generated__/samplePokeAPIquery";
import { order_by } from "../../../__generated__/globalTypes";
import POKEMON_NAMES from "../../queries/samplePokeApiquery.graphql";
import { PokemonRow } from "../PokemonRow/PokemonRow";
import css from "./PokemonNames.scss";

interface PokemonNamesProps {
  currentPage: number;
}

export function PokemonNames(props: PokemonNamesProps) {
  const variables: samplePokeAPIqueryVariables = {
    limit: 50,
    offset: props.currentPage * 50,
    order_by: [
      {
        order: order_by.asc,
      },
    ],
  };
  const { loading, error, data } = useQuery(POKEMON_NAMES, {
    variables,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const results: samplePokeAPIquery = data;
  return (
    <div className={css.pokeGrid}>
      {results.pokemon_v2_pokemonspecies.map((pokemon) => {
        return (
          <PokemonRow key={pokemon.id} id={pokemon.id} name={pokemon.name} />
        );
      })}
    </div>
  );
}
