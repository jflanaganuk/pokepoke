/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: samplePokeAPIquery
// ====================================================

export interface samplePokeAPIquery_pokemon_v2_pokemonspecies {
  __typename: "pokemon_v2_pokemonspecies";
  name: string;
}

export interface samplePokeAPIquery {
  /**
   * An array relationship
   */
  pokemon_v2_pokemonspecies: samplePokeAPIquery_pokemon_v2_pokemonspecies[];
}
