import React from "react";
import { useQuery } from "@apollo/client";
import {
  getPokemonSpecies,
  getPokemonSpeciesVariables,
} from "../../queries/__generated__/getPokemonSpecies";
import { order_by } from "../../../__generated__/globalTypes";
import POKEMON_NAMES from "../../queries/getPokemonSpecies.graphql";
import { PokemonNames } from "./PokemonNames";

interface PokemonNamesWrapperProps {
  currentPage: number;
}

export function PokemonNamesWrapper(props: PokemonNamesWrapperProps) {
  const variables: getPokemonSpeciesVariables = {
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

  const results: getPokemonSpecies = data;
  return <PokemonNames results={results} />;
}
