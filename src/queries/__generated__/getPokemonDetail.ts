/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { pokemon_v2_pokemon_bool_exp } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getPokemonDetail
// ====================================================

export interface getPokemonDetail_pokemon_v2_pokemon_pokemon_v2_pokemonforms {
  __typename: "pokemon_v2_pokemonform";
  form_name: string;
  form_order: number | null;
  is_battle_only: boolean;
  is_default: boolean;
  is_mega: boolean;
  name: string;
  version_group_id: number | null;
}

export interface getPokemonDetail_pokemon_v2_pokemon_pokemon_v2_pokemongameindices {
  __typename: "pokemon_v2_pokemongameindex";
  game_index: number;
  version_id: number | null;
}

export interface getPokemonDetail_pokemon_v2_pokemon_pokemon_v2_pokemonmoves_pokemon_v2_move {
  __typename: "pokemon_v2_move";
  accuracy: number | null;
  contest_effect_id: number | null;
  contest_type_id: number | null;
  generation_id: number | null;
  move_damage_class_id: number | null;
  move_effect_chance: number | null;
  name: string;
}

export interface getPokemonDetail_pokemon_v2_pokemon_pokemon_v2_pokemonmoves {
  __typename: "pokemon_v2_pokemonmove";
  level: number;
  move_id: number | null;
  move_learn_method_id: number | null;
  /**
   * An object relationship
   */
  pokemon_v2_move: getPokemonDetail_pokemon_v2_pokemon_pokemon_v2_pokemonmoves_pokemon_v2_move | null;
}

export interface getPokemonDetail_pokemon_v2_pokemon {
  __typename: "pokemon_v2_pokemon";
  name: string;
  height: number | null;
  weight: number | null;
  pokemon_species_id: number | null;
  /**
   * An array relationship
   */
  pokemon_v2_pokemonforms: getPokemonDetail_pokemon_v2_pokemon_pokemon_v2_pokemonforms[];
  /**
   * An array relationship
   */
  pokemon_v2_pokemongameindices: getPokemonDetail_pokemon_v2_pokemon_pokemon_v2_pokemongameindices[];
  /**
   * An array relationship
   */
  pokemon_v2_pokemonmoves: getPokemonDetail_pokemon_v2_pokemon_pokemon_v2_pokemonmoves[];
}

export interface getPokemonDetail {
  /**
   * fetch data from the table: "pokemon_v2_pokemon"
   */
  pokemon_v2_pokemon: getPokemonDetail_pokemon_v2_pokemon[];
}

export interface getPokemonDetailVariables {
  where?: pokemon_v2_pokemon_bool_exp | null;
}
