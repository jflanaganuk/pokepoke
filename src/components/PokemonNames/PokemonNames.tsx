import React from "react";
import { useQuery } from "@apollo/client";
import {
  samplePokeAPIquery,
  samplePokeAPIqueryVariables,
} from "../../queries/__generated__/samplePokeAPIquery";
import { order_by } from "../../../__generated__/globalTypes";
import POKEMON_NAMES from "../../queries/samplePokeApiquery.graphql";

interface PokemonNamesProps {
  currentPage: number;
}

export function PokemonNames(props: PokemonNamesProps) {
  const variables: samplePokeAPIqueryVariables = {
    limit: 10,
    offset: props.currentPage * 10,
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
    <div>
      {results.pokemon_v2_pokemonspecies.map((pokemon) => {
        return (
          <div key={pokemon.name}>
            <p>{pokemon.name}</p>
          </div>
        );
      })}
    </div>
  );
}
