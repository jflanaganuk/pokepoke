/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { pokemon_v2_pokemonspecies_order_by } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getPokemonSpecies
// ====================================================

export interface getPokemonSpecies_pokemon_v2_pokemonspecies {
  __typename: "pokemon_v2_pokemonspecies";
  name: string;
  id: number;
}

export interface getPokemonSpecies {
  /**
   * An array relationship
   */
  pokemon_v2_pokemonspecies: getPokemonSpecies_pokemon_v2_pokemonspecies[];
}

export interface getPokemonSpeciesVariables {
  limit?: number | null;
  offset?: number | null;
  order_by?: pokemon_v2_pokemonspecies_order_by[] | null;
}
