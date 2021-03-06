import React from "react";
import { useQuery } from "@apollo/client";
import {
  getPokemonDetail,
  getPokemonDetailVariables,
  getPokemonDetail_pokemon_v2_pokemon,
} from "../../queries/__generated__/getPokemonDetail";
import POKEMON_DETAIL from "../../queries/getPokemonDetail.graphql";
import { PokemonDetail, PokemonDetailProps } from "./PokemonDetail";
import { PokeballLoader } from "../PokeballLoader/PokeballLoader";
import { useParams } from "react-router-dom";

function sanitize(
  input: getPokemonDetail_pokemon_v2_pokemon
): PokemonDetailProps {
  return {
    name: input.name,
    height: input.height || 0,
    weight: input.weight || 0,
    forms: input.pokemon_v2_pokemonforms.map((form) => ({
      form_name: form.form_name,
      form_order: form.form_order || 0,
      is_battle_only: form.is_battle_only,
      is_mega: form.is_mega,
      is_default: form.is_default,
      name: form.name,
      version_group_id: form.version_group_id || 0,
    })),
    encounters: input.pokemon_v2_encounters.map((encounter) => ({
      game_index: encounter.pokemon_v2_locationarea?.game_index || 0,
      max_level: encounter.max_level,
      min_level: encounter.min_level,
      name: encounter.pokemon_v2_locationarea?.name || "",
    })),
    moves: input.pokemon_v2_pokemonmoves.map((move) => ({
      level: move.level,
      name: move.pokemon_v2_move?.name || "",
      power: move.pokemon_v2_move?.power || null,
      pp: move.pokemon_v2_move?.pp || null,
      effect:
        move.pokemon_v2_move?.pokemon_v2_moveeffect
          ?.pokemon_v2_moveeffecteffecttexts[0].effect || "",
      type: move.pokemon_v2_move?.pokemon_v2_type?.name || "",
    })),
    pokemon_species_id: input.pokemon_species_id || 0,
  };
}

export function PokemonDetailWrapper() {
  const { id }: { id: number } = useParams();
  const variables: getPokemonDetailVariables = {
    where: {
      id: {
        _eq: id,
      },
    },
  };
  const { loading, error, data } = useQuery(POKEMON_DETAIL, { variables });

  if (loading) return <PokeballLoader />;
  if (error) return <p>Error :(</p>;

  const results: getPokemonDetail = data;
  const pokemon = results.pokemon_v2_pokemon[0];
  const pokemonSanitized = sanitize(pokemon);

  return (
    <PokemonDetail
      name={pokemonSanitized.name}
      forms={pokemonSanitized.forms}
      height={pokemonSanitized.height}
      weight={pokemonSanitized.weight}
      moves={pokemonSanitized.moves}
      encounters={pokemonSanitized.encounters}
      pokemon_species_id={pokemonSanitized.pokemon_species_id}
    />
  );
}
