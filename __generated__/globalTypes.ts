/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * column ordering options
 */
export enum order_by {
  asc = "asc",
  asc_nulls_first = "asc_nulls_first",
  asc_nulls_last = "asc_nulls_last",
  desc = "desc",
  desc_nulls_first = "desc_nulls_first",
  desc_nulls_last = "desc_nulls_last",
}

/**
 * Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'.
 */
export interface Boolean_comparison_exp {
  _eq?: boolean | null;
  _gt?: boolean | null;
  _gte?: boolean | null;
  _in?: boolean[] | null;
  _is_null?: boolean | null;
  _lt?: boolean | null;
  _lte?: boolean | null;
  _neq?: boolean | null;
  _nin?: boolean[] | null;
}

/**
 * Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'.
 */
export interface Int_comparison_exp {
  _eq?: number | null;
  _gt?: number | null;
  _gte?: number | null;
  _in?: number[] | null;
  _is_null?: boolean | null;
  _lt?: number | null;
  _lte?: number | null;
  _neq?: number | null;
  _nin?: number[] | null;
}

/**
 * Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'.
 */
export interface String_comparison_exp {
  _eq?: string | null;
  _gt?: string | null;
  _gte?: string | null;
  _ilike?: string | null;
  _in?: string[] | null;
  _iregex?: string | null;
  _is_null?: boolean | null;
  _like?: string | null;
  _lt?: string | null;
  _lte?: string | null;
  _neq?: string | null;
  _nilike?: string | null;
  _nin?: string[] | null;
  _niregex?: string | null;
  _nlike?: string | null;
  _nregex?: string | null;
  _nsimilar?: string | null;
  _regex?: string | null;
  _similar?: string | null;
}

/**
 * order by aggregate values of table "pokemon_v2_ability"
 */
export interface pokemon_v2_ability_aggregate_order_by {
  avg?: pokemon_v2_ability_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_ability_max_order_by | null;
  min?: pokemon_v2_ability_min_order_by | null;
  stddev?: pokemon_v2_ability_stddev_order_by | null;
  stddev_pop?: pokemon_v2_ability_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_ability_stddev_samp_order_by | null;
  sum?: pokemon_v2_ability_sum_order_by | null;
  var_pop?: pokemon_v2_ability_var_pop_order_by | null;
  var_samp?: pokemon_v2_ability_var_samp_order_by | null;
  variance?: pokemon_v2_ability_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_ability"
 */
export interface pokemon_v2_ability_avg_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_ability". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_ability_bool_exp {
  _and?: pokemon_v2_ability_bool_exp[] | null;
  _not?: pokemon_v2_ability_bool_exp | null;
  _or?: pokemon_v2_ability_bool_exp[] | null;
  generation_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  is_main_series?: Boolean_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_abilitychanges?: pokemon_v2_abilitychange_bool_exp | null;
  pokemon_v2_abilityeffecttexts?: pokemon_v2_abilityeffecttext_bool_exp | null;
  pokemon_v2_abilityflavortexts?: pokemon_v2_abilityflavortext_bool_exp | null;
  pokemon_v2_abilitynames?: pokemon_v2_abilityname_bool_exp | null;
  pokemon_v2_generation?: pokemon_v2_generation_bool_exp | null;
  pokemon_v2_pokemonabilities?: pokemon_v2_pokemonability_bool_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_ability"
 */
export interface pokemon_v2_ability_max_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_ability"
 */
export interface pokemon_v2_ability_min_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_ability"
 */
export interface pokemon_v2_ability_stddev_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_ability"
 */
export interface pokemon_v2_ability_stddev_pop_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_ability"
 */
export interface pokemon_v2_ability_stddev_samp_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_ability"
 */
export interface pokemon_v2_ability_sum_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_ability"
 */
export interface pokemon_v2_ability_var_pop_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_ability"
 */
export interface pokemon_v2_ability_var_samp_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_ability"
 */
export interface pokemon_v2_ability_variance_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_abilitychange". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_abilitychange_bool_exp {
  _and?: pokemon_v2_abilitychange_bool_exp[] | null;
  _not?: pokemon_v2_abilitychange_bool_exp | null;
  _or?: pokemon_v2_abilitychange_bool_exp[] | null;
  ability_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  pokemon_v2_ability?: pokemon_v2_ability_bool_exp | null;
  pokemon_v2_abilitychangeeffecttexts?: pokemon_v2_abilitychangeeffecttext_bool_exp | null;
  pokemon_v2_versiongroup?: pokemon_v2_versiongroup_bool_exp | null;
  version_group_id?: Int_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_abilitychangeeffecttext". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_abilitychangeeffecttext_bool_exp {
  _and?: pokemon_v2_abilitychangeeffecttext_bool_exp[] | null;
  _not?: pokemon_v2_abilitychangeeffecttext_bool_exp | null;
  _or?: pokemon_v2_abilitychangeeffecttext_bool_exp[] | null;
  ability_change_id?: Int_comparison_exp | null;
  effect?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  pokemon_v2_abilitychange?: pokemon_v2_abilitychange_bool_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_abilityeffecttext". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_abilityeffecttext_bool_exp {
  _and?: pokemon_v2_abilityeffecttext_bool_exp[] | null;
  _not?: pokemon_v2_abilityeffecttext_bool_exp | null;
  _or?: pokemon_v2_abilityeffecttext_bool_exp[] | null;
  ability_id?: Int_comparison_exp | null;
  effect?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  pokemon_v2_ability?: pokemon_v2_ability_bool_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  short_effect?: String_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_abilityflavortext". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_abilityflavortext_bool_exp {
  _and?: pokemon_v2_abilityflavortext_bool_exp[] | null;
  _not?: pokemon_v2_abilityflavortext_bool_exp | null;
  _or?: pokemon_v2_abilityflavortext_bool_exp[] | null;
  ability_id?: Int_comparison_exp | null;
  flavor_text?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  pokemon_v2_ability?: pokemon_v2_ability_bool_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_versiongroup?: pokemon_v2_versiongroup_bool_exp | null;
  version_group_id?: Int_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_abilityname". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_abilityname_bool_exp {
  _and?: pokemon_v2_abilityname_bool_exp[] | null;
  _not?: pokemon_v2_abilityname_bool_exp | null;
  _or?: pokemon_v2_abilityname_bool_exp[] | null;
  ability_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_ability?: pokemon_v2_ability_bool_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
}

/**
 * order by aggregate values of table "pokemon_v2_berry"
 */
export interface pokemon_v2_berry_aggregate_order_by {
  avg?: pokemon_v2_berry_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_berry_max_order_by | null;
  min?: pokemon_v2_berry_min_order_by | null;
  stddev?: pokemon_v2_berry_stddev_order_by | null;
  stddev_pop?: pokemon_v2_berry_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_berry_stddev_samp_order_by | null;
  sum?: pokemon_v2_berry_sum_order_by | null;
  var_pop?: pokemon_v2_berry_var_pop_order_by | null;
  var_samp?: pokemon_v2_berry_var_samp_order_by | null;
  variance?: pokemon_v2_berry_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_berry"
 */
export interface pokemon_v2_berry_avg_order_by {
  berry_firmness_id?: order_by | null;
  growth_time?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  max_harvest?: order_by | null;
  natural_gift_power?: order_by | null;
  natural_gift_type_id?: order_by | null;
  size?: order_by | null;
  smoothness?: order_by | null;
  soil_dryness?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_berry". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_berry_bool_exp {
  _and?: pokemon_v2_berry_bool_exp[] | null;
  _not?: pokemon_v2_berry_bool_exp | null;
  _or?: pokemon_v2_berry_bool_exp[] | null;
  berry_firmness_id?: Int_comparison_exp | null;
  growth_time?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  item_id?: Int_comparison_exp | null;
  max_harvest?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  natural_gift_power?: Int_comparison_exp | null;
  natural_gift_type_id?: Int_comparison_exp | null;
  pokemon_v2_berryfirmness?: pokemon_v2_berryfirmness_bool_exp | null;
  pokemon_v2_berryflavormaps?: pokemon_v2_berryflavormap_bool_exp | null;
  pokemon_v2_item?: pokemon_v2_item_bool_exp | null;
  pokemon_v2_type?: pokemon_v2_type_bool_exp | null;
  size?: Int_comparison_exp | null;
  smoothness?: Int_comparison_exp | null;
  soil_dryness?: Int_comparison_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_berry"
 */
export interface pokemon_v2_berry_max_order_by {
  berry_firmness_id?: order_by | null;
  growth_time?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  max_harvest?: order_by | null;
  name?: order_by | null;
  natural_gift_power?: order_by | null;
  natural_gift_type_id?: order_by | null;
  size?: order_by | null;
  smoothness?: order_by | null;
  soil_dryness?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_berry"
 */
export interface pokemon_v2_berry_min_order_by {
  berry_firmness_id?: order_by | null;
  growth_time?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  max_harvest?: order_by | null;
  name?: order_by | null;
  natural_gift_power?: order_by | null;
  natural_gift_type_id?: order_by | null;
  size?: order_by | null;
  smoothness?: order_by | null;
  soil_dryness?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_berry"
 */
export interface pokemon_v2_berry_stddev_order_by {
  berry_firmness_id?: order_by | null;
  growth_time?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  max_harvest?: order_by | null;
  natural_gift_power?: order_by | null;
  natural_gift_type_id?: order_by | null;
  size?: order_by | null;
  smoothness?: order_by | null;
  soil_dryness?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_berry"
 */
export interface pokemon_v2_berry_stddev_pop_order_by {
  berry_firmness_id?: order_by | null;
  growth_time?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  max_harvest?: order_by | null;
  natural_gift_power?: order_by | null;
  natural_gift_type_id?: order_by | null;
  size?: order_by | null;
  smoothness?: order_by | null;
  soil_dryness?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_berry"
 */
export interface pokemon_v2_berry_stddev_samp_order_by {
  berry_firmness_id?: order_by | null;
  growth_time?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  max_harvest?: order_by | null;
  natural_gift_power?: order_by | null;
  natural_gift_type_id?: order_by | null;
  size?: order_by | null;
  smoothness?: order_by | null;
  soil_dryness?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_berry"
 */
export interface pokemon_v2_berry_sum_order_by {
  berry_firmness_id?: order_by | null;
  growth_time?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  max_harvest?: order_by | null;
  natural_gift_power?: order_by | null;
  natural_gift_type_id?: order_by | null;
  size?: order_by | null;
  smoothness?: order_by | null;
  soil_dryness?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_berry"
 */
export interface pokemon_v2_berry_var_pop_order_by {
  berry_firmness_id?: order_by | null;
  growth_time?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  max_harvest?: order_by | null;
  natural_gift_power?: order_by | null;
  natural_gift_type_id?: order_by | null;
  size?: order_by | null;
  smoothness?: order_by | null;
  soil_dryness?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_berry"
 */
export interface pokemon_v2_berry_var_samp_order_by {
  berry_firmness_id?: order_by | null;
  growth_time?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  max_harvest?: order_by | null;
  natural_gift_power?: order_by | null;
  natural_gift_type_id?: order_by | null;
  size?: order_by | null;
  smoothness?: order_by | null;
  soil_dryness?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_berry"
 */
export interface pokemon_v2_berry_variance_order_by {
  berry_firmness_id?: order_by | null;
  growth_time?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  max_harvest?: order_by | null;
  natural_gift_power?: order_by | null;
  natural_gift_type_id?: order_by | null;
  size?: order_by | null;
  smoothness?: order_by | null;
  soil_dryness?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_berryfirmness". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_berryfirmness_bool_exp {
  _and?: pokemon_v2_berryfirmness_bool_exp[] | null;
  _not?: pokemon_v2_berryfirmness_bool_exp | null;
  _or?: pokemon_v2_berryfirmness_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_berries?: pokemon_v2_berry_bool_exp | null;
  pokemon_v2_berryfirmnessnames?: pokemon_v2_berryfirmnessname_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_berryfirmnessname". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_berryfirmnessname_bool_exp {
  _and?: pokemon_v2_berryfirmnessname_bool_exp[] | null;
  _not?: pokemon_v2_berryfirmnessname_bool_exp | null;
  _or?: pokemon_v2_berryfirmnessname_bool_exp[] | null;
  berry_firmness_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_berryfirmness?: pokemon_v2_berryfirmness_bool_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_berryflavor". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_berryflavor_bool_exp {
  _and?: pokemon_v2_berryflavor_bool_exp[] | null;
  _not?: pokemon_v2_berryflavor_bool_exp | null;
  _or?: pokemon_v2_berryflavor_bool_exp[] | null;
  contest_type_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemonV2NaturesByLikesFlavorId?: pokemon_v2_nature_bool_exp | null;
  pokemon_v2_berryflavormaps?: pokemon_v2_berryflavormap_bool_exp | null;
  pokemon_v2_berryflavornames?: pokemon_v2_berryflavorname_bool_exp | null;
  pokemon_v2_contesttype?: pokemon_v2_contesttype_bool_exp | null;
  pokemon_v2_natures?: pokemon_v2_nature_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_berryflavormap". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_berryflavormap_bool_exp {
  _and?: pokemon_v2_berryflavormap_bool_exp[] | null;
  _not?: pokemon_v2_berryflavormap_bool_exp | null;
  _or?: pokemon_v2_berryflavormap_bool_exp[] | null;
  berry_flavor_id?: Int_comparison_exp | null;
  berry_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  pokemon_v2_berry?: pokemon_v2_berry_bool_exp | null;
  pokemon_v2_berryflavor?: pokemon_v2_berryflavor_bool_exp | null;
  potency?: Int_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_berryflavorname". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_berryflavorname_bool_exp {
  _and?: pokemon_v2_berryflavorname_bool_exp[] | null;
  _not?: pokemon_v2_berryflavorname_bool_exp | null;
  _or?: pokemon_v2_berryflavorname_bool_exp[] | null;
  berry_flavor_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_berryflavor?: pokemon_v2_berryflavor_bool_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_characteristic". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_characteristic_bool_exp {
  _and?: pokemon_v2_characteristic_bool_exp[] | null;
  _not?: pokemon_v2_characteristic_bool_exp | null;
  _or?: pokemon_v2_characteristic_bool_exp[] | null;
  gene_mod_5?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  pokemon_v2_characteristicdescriptions?: pokemon_v2_characteristicdescription_bool_exp | null;
  pokemon_v2_stat?: pokemon_v2_stat_bool_exp | null;
  stat_id?: Int_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_characteristicdescription". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_characteristicdescription_bool_exp {
  _and?: pokemon_v2_characteristicdescription_bool_exp[] | null;
  _not?: pokemon_v2_characteristicdescription_bool_exp | null;
  _or?: pokemon_v2_characteristicdescription_bool_exp[] | null;
  characteristic_id?: Int_comparison_exp | null;
  description?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  pokemon_v2_characteristic?: pokemon_v2_characteristic_bool_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_contestcombo". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_contestcombo_bool_exp {
  _and?: pokemon_v2_contestcombo_bool_exp[] | null;
  _not?: pokemon_v2_contestcombo_bool_exp | null;
  _or?: pokemon_v2_contestcombo_bool_exp[] | null;
  first_move_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  pokemonV2MoveBySecondMoveId?: pokemon_v2_move_bool_exp | null;
  pokemon_v2_move?: pokemon_v2_move_bool_exp | null;
  second_move_id?: Int_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_contesteffect". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_contesteffect_bool_exp {
  _and?: pokemon_v2_contesteffect_bool_exp[] | null;
  _not?: pokemon_v2_contesteffect_bool_exp | null;
  _or?: pokemon_v2_contesteffect_bool_exp[] | null;
  appeal?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  jam?: Int_comparison_exp | null;
  pokemon_v2_contesteffecteffecttexts?: pokemon_v2_contesteffecteffecttext_bool_exp | null;
  pokemon_v2_contesteffectflavortexts?: pokemon_v2_contesteffectflavortext_bool_exp | null;
  pokemon_v2_moves?: pokemon_v2_move_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_contesteffecteffecttext". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_contesteffecteffecttext_bool_exp {
  _and?: pokemon_v2_contesteffecteffecttext_bool_exp[] | null;
  _not?: pokemon_v2_contesteffecteffecttext_bool_exp | null;
  _or?: pokemon_v2_contesteffecteffecttext_bool_exp[] | null;
  contest_effect_id?: Int_comparison_exp | null;
  effect?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  pokemon_v2_contesteffect?: pokemon_v2_contesteffect_bool_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_contesteffectflavortext". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_contesteffectflavortext_bool_exp {
  _and?: pokemon_v2_contesteffectflavortext_bool_exp[] | null;
  _not?: pokemon_v2_contesteffectflavortext_bool_exp | null;
  _or?: pokemon_v2_contesteffectflavortext_bool_exp[] | null;
  contest_effect_id?: Int_comparison_exp | null;
  flavor_text?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  pokemon_v2_contesteffect?: pokemon_v2_contesteffect_bool_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_contesttype". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_contesttype_bool_exp {
  _and?: pokemon_v2_contesttype_bool_exp[] | null;
  _not?: pokemon_v2_contesttype_bool_exp | null;
  _or?: pokemon_v2_contesttype_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_berryflavors?: pokemon_v2_berryflavor_bool_exp | null;
  pokemon_v2_contesttypenames?: pokemon_v2_contesttypename_bool_exp | null;
  pokemon_v2_moves?: pokemon_v2_move_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_contesttypename". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_contesttypename_bool_exp {
  _and?: pokemon_v2_contesttypename_bool_exp[] | null;
  _not?: pokemon_v2_contesttypename_bool_exp | null;
  _or?: pokemon_v2_contesttypename_bool_exp[] | null;
  color?: String_comparison_exp | null;
  contest_type_id?: Int_comparison_exp | null;
  flavor?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_contesttype?: pokemon_v2_contesttype_bool_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_egggroup". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_egggroup_bool_exp {
  _and?: pokemon_v2_egggroup_bool_exp[] | null;
  _not?: pokemon_v2_egggroup_bool_exp | null;
  _or?: pokemon_v2_egggroup_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_egggroupnames?: pokemon_v2_egggroupname_bool_exp | null;
  pokemon_v2_pokemonegggroups?: pokemon_v2_pokemonegggroup_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_egggroupname". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_egggroupname_bool_exp {
  _and?: pokemon_v2_egggroupname_bool_exp[] | null;
  _not?: pokemon_v2_egggroupname_bool_exp | null;
  _or?: pokemon_v2_egggroupname_bool_exp[] | null;
  egg_group_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_egggroup?: pokemon_v2_egggroup_bool_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_encounter". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_encounter_bool_exp {
  _and?: pokemon_v2_encounter_bool_exp[] | null;
  _not?: pokemon_v2_encounter_bool_exp | null;
  _or?: pokemon_v2_encounter_bool_exp[] | null;
  encounter_slot_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  location_area_id?: Int_comparison_exp | null;
  max_level?: Int_comparison_exp | null;
  min_level?: Int_comparison_exp | null;
  pokemon_id?: Int_comparison_exp | null;
  pokemon_v2_encounterconditionvaluemaps?: pokemon_v2_encounterconditionvaluemap_bool_exp | null;
  pokemon_v2_encounterslot?: pokemon_v2_encounterslot_bool_exp | null;
  pokemon_v2_locationarea?: pokemon_v2_locationarea_bool_exp | null;
  pokemon_v2_pokemon?: pokemon_v2_pokemon_bool_exp | null;
  pokemon_v2_version?: pokemon_v2_version_bool_exp | null;
  version_id?: Int_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_encountercondition". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_encountercondition_bool_exp {
  _and?: pokemon_v2_encountercondition_bool_exp[] | null;
  _not?: pokemon_v2_encountercondition_bool_exp | null;
  _or?: pokemon_v2_encountercondition_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_encounterconditionnames?: pokemon_v2_encounterconditionname_bool_exp | null;
  pokemon_v2_encounterconditionvalues?: pokemon_v2_encounterconditionvalue_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_encounterconditionname". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_encounterconditionname_bool_exp {
  _and?: pokemon_v2_encounterconditionname_bool_exp[] | null;
  _not?: pokemon_v2_encounterconditionname_bool_exp | null;
  _or?: pokemon_v2_encounterconditionname_bool_exp[] | null;
  encounter_condition_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_encountercondition?: pokemon_v2_encountercondition_bool_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_encounterconditionvalue". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_encounterconditionvalue_bool_exp {
  _and?: pokemon_v2_encounterconditionvalue_bool_exp[] | null;
  _not?: pokemon_v2_encounterconditionvalue_bool_exp | null;
  _or?: pokemon_v2_encounterconditionvalue_bool_exp[] | null;
  encounter_condition_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  is_default?: Boolean_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_encountercondition?: pokemon_v2_encountercondition_bool_exp | null;
  pokemon_v2_encounterconditionvaluemaps?: pokemon_v2_encounterconditionvaluemap_bool_exp | null;
  pokemon_v2_encounterconditionvaluenames?: pokemon_v2_encounterconditionvaluename_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_encounterconditionvaluemap". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_encounterconditionvaluemap_bool_exp {
  _and?: pokemon_v2_encounterconditionvaluemap_bool_exp[] | null;
  _not?: pokemon_v2_encounterconditionvaluemap_bool_exp | null;
  _or?: pokemon_v2_encounterconditionvaluemap_bool_exp[] | null;
  encounter_condition_value_id?: Int_comparison_exp | null;
  encounter_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  pokemon_v2_encounter?: pokemon_v2_encounter_bool_exp | null;
  pokemon_v2_encounterconditionvalue?: pokemon_v2_encounterconditionvalue_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_encounterconditionvaluename". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_encounterconditionvaluename_bool_exp {
  _and?: pokemon_v2_encounterconditionvaluename_bool_exp[] | null;
  _not?: pokemon_v2_encounterconditionvaluename_bool_exp | null;
  _or?: pokemon_v2_encounterconditionvaluename_bool_exp[] | null;
  encounter_condition_value_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_encounterconditionvalue?: pokemon_v2_encounterconditionvalue_bool_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_encountermethod". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_encountermethod_bool_exp {
  _and?: pokemon_v2_encountermethod_bool_exp[] | null;
  _not?: pokemon_v2_encountermethod_bool_exp | null;
  _or?: pokemon_v2_encountermethod_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  order?: Int_comparison_exp | null;
  pokemon_v2_encountermethodnames?: pokemon_v2_encountermethodname_bool_exp | null;
  pokemon_v2_encounterslots?: pokemon_v2_encounterslot_bool_exp | null;
  pokemon_v2_locationareaencounterrates?: pokemon_v2_locationareaencounterrate_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_encountermethodname". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_encountermethodname_bool_exp {
  _and?: pokemon_v2_encountermethodname_bool_exp[] | null;
  _not?: pokemon_v2_encountermethodname_bool_exp | null;
  _or?: pokemon_v2_encountermethodname_bool_exp[] | null;
  encounter_method_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_encountermethod?: pokemon_v2_encountermethod_bool_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_encounterslot". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_encounterslot_bool_exp {
  _and?: pokemon_v2_encounterslot_bool_exp[] | null;
  _not?: pokemon_v2_encounterslot_bool_exp | null;
  _or?: pokemon_v2_encounterslot_bool_exp[] | null;
  encounter_method_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  pokemon_v2_encountermethod?: pokemon_v2_encountermethod_bool_exp | null;
  pokemon_v2_encounters?: pokemon_v2_encounter_bool_exp | null;
  pokemon_v2_versiongroup?: pokemon_v2_versiongroup_bool_exp | null;
  rarity?: Int_comparison_exp | null;
  slot?: Int_comparison_exp | null;
  version_group_id?: Int_comparison_exp | null;
}

/**
 * order by aggregate values of table "pokemon_v2_evolutionchain"
 */
export interface pokemon_v2_evolutionchain_aggregate_order_by {
  avg?: pokemon_v2_evolutionchain_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_evolutionchain_max_order_by | null;
  min?: pokemon_v2_evolutionchain_min_order_by | null;
  stddev?: pokemon_v2_evolutionchain_stddev_order_by | null;
  stddev_pop?: pokemon_v2_evolutionchain_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_evolutionchain_stddev_samp_order_by | null;
  sum?: pokemon_v2_evolutionchain_sum_order_by | null;
  var_pop?: pokemon_v2_evolutionchain_var_pop_order_by | null;
  var_samp?: pokemon_v2_evolutionchain_var_samp_order_by | null;
  variance?: pokemon_v2_evolutionchain_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_evolutionchain"
 */
export interface pokemon_v2_evolutionchain_avg_order_by {
  baby_trigger_item_id?: order_by | null;
  id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_evolutionchain". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_evolutionchain_bool_exp {
  _and?: pokemon_v2_evolutionchain_bool_exp[] | null;
  _not?: pokemon_v2_evolutionchain_bool_exp | null;
  _or?: pokemon_v2_evolutionchain_bool_exp[] | null;
  baby_trigger_item_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  pokemon_v2_item?: pokemon_v2_item_bool_exp | null;
  pokemon_v2_pokemonspecies?: pokemon_v2_pokemonspecies_bool_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_evolutionchain"
 */
export interface pokemon_v2_evolutionchain_max_order_by {
  baby_trigger_item_id?: order_by | null;
  id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_evolutionchain"
 */
export interface pokemon_v2_evolutionchain_min_order_by {
  baby_trigger_item_id?: order_by | null;
  id?: order_by | null;
}

/**
 * Ordering options when selecting data from "pokemon_v2_evolutionchain".
 */
export interface pokemon_v2_evolutionchain_order_by {
  baby_trigger_item_id?: order_by | null;
  id?: order_by | null;
  pokemon_v2_item?: pokemon_v2_item_order_by | null;
  pokemon_v2_pokemonspecies_aggregate?: pokemon_v2_pokemonspecies_aggregate_order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_evolutionchain"
 */
export interface pokemon_v2_evolutionchain_stddev_order_by {
  baby_trigger_item_id?: order_by | null;
  id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_evolutionchain"
 */
export interface pokemon_v2_evolutionchain_stddev_pop_order_by {
  baby_trigger_item_id?: order_by | null;
  id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_evolutionchain"
 */
export interface pokemon_v2_evolutionchain_stddev_samp_order_by {
  baby_trigger_item_id?: order_by | null;
  id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_evolutionchain"
 */
export interface pokemon_v2_evolutionchain_sum_order_by {
  baby_trigger_item_id?: order_by | null;
  id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_evolutionchain"
 */
export interface pokemon_v2_evolutionchain_var_pop_order_by {
  baby_trigger_item_id?: order_by | null;
  id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_evolutionchain"
 */
export interface pokemon_v2_evolutionchain_var_samp_order_by {
  baby_trigger_item_id?: order_by | null;
  id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_evolutionchain"
 */
export interface pokemon_v2_evolutionchain_variance_order_by {
  baby_trigger_item_id?: order_by | null;
  id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_evolutiontrigger". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_evolutiontrigger_bool_exp {
  _and?: pokemon_v2_evolutiontrigger_bool_exp[] | null;
  _not?: pokemon_v2_evolutiontrigger_bool_exp | null;
  _or?: pokemon_v2_evolutiontrigger_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_evolutiontriggernames?: pokemon_v2_evolutiontriggername_bool_exp | null;
  pokemon_v2_pokemonevolutions?: pokemon_v2_pokemonevolution_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_evolutiontriggername". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_evolutiontriggername_bool_exp {
  _and?: pokemon_v2_evolutiontriggername_bool_exp[] | null;
  _not?: pokemon_v2_evolutiontriggername_bool_exp | null;
  _or?: pokemon_v2_evolutiontriggername_bool_exp[] | null;
  evolution_trigger_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_evolutiontrigger?: pokemon_v2_evolutiontrigger_bool_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
}

/**
 * order by aggregate values of table "pokemon_v2_experience"
 */
export interface pokemon_v2_experience_aggregate_order_by {
  avg?: pokemon_v2_experience_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_experience_max_order_by | null;
  min?: pokemon_v2_experience_min_order_by | null;
  stddev?: pokemon_v2_experience_stddev_order_by | null;
  stddev_pop?: pokemon_v2_experience_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_experience_stddev_samp_order_by | null;
  sum?: pokemon_v2_experience_sum_order_by | null;
  var_pop?: pokemon_v2_experience_var_pop_order_by | null;
  var_samp?: pokemon_v2_experience_var_samp_order_by | null;
  variance?: pokemon_v2_experience_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_experience"
 */
export interface pokemon_v2_experience_avg_order_by {
  experience?: order_by | null;
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  level?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_experience". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_experience_bool_exp {
  _and?: pokemon_v2_experience_bool_exp[] | null;
  _not?: pokemon_v2_experience_bool_exp | null;
  _or?: pokemon_v2_experience_bool_exp[] | null;
  experience?: Int_comparison_exp | null;
  growth_rate_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  level?: Int_comparison_exp | null;
  pokemon_v2_growthrate?: pokemon_v2_growthrate_bool_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_experience"
 */
export interface pokemon_v2_experience_max_order_by {
  experience?: order_by | null;
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  level?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_experience"
 */
export interface pokemon_v2_experience_min_order_by {
  experience?: order_by | null;
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  level?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_experience"
 */
export interface pokemon_v2_experience_stddev_order_by {
  experience?: order_by | null;
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  level?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_experience"
 */
export interface pokemon_v2_experience_stddev_pop_order_by {
  experience?: order_by | null;
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  level?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_experience"
 */
export interface pokemon_v2_experience_stddev_samp_order_by {
  experience?: order_by | null;
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  level?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_experience"
 */
export interface pokemon_v2_experience_sum_order_by {
  experience?: order_by | null;
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  level?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_experience"
 */
export interface pokemon_v2_experience_var_pop_order_by {
  experience?: order_by | null;
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  level?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_experience"
 */
export interface pokemon_v2_experience_var_samp_order_by {
  experience?: order_by | null;
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  level?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_experience"
 */
export interface pokemon_v2_experience_variance_order_by {
  experience?: order_by | null;
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  level?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_gender". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_gender_bool_exp {
  _and?: pokemon_v2_gender_bool_exp[] | null;
  _not?: pokemon_v2_gender_bool_exp | null;
  _or?: pokemon_v2_gender_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_pokemonevolutions?: pokemon_v2_pokemonevolution_bool_exp | null;
}

/**
 * order by aggregate values of table "pokemon_v2_generation"
 */
export interface pokemon_v2_generation_aggregate_order_by {
  avg?: pokemon_v2_generation_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_generation_max_order_by | null;
  min?: pokemon_v2_generation_min_order_by | null;
  stddev?: pokemon_v2_generation_stddev_order_by | null;
  stddev_pop?: pokemon_v2_generation_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_generation_stddev_samp_order_by | null;
  sum?: pokemon_v2_generation_sum_order_by | null;
  var_pop?: pokemon_v2_generation_var_pop_order_by | null;
  var_samp?: pokemon_v2_generation_var_samp_order_by | null;
  variance?: pokemon_v2_generation_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_generation"
 */
export interface pokemon_v2_generation_avg_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_generation". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_generation_bool_exp {
  _and?: pokemon_v2_generation_bool_exp[] | null;
  _not?: pokemon_v2_generation_bool_exp | null;
  _or?: pokemon_v2_generation_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_abilities?: pokemon_v2_ability_bool_exp | null;
  pokemon_v2_generationnames?: pokemon_v2_generationname_bool_exp | null;
  pokemon_v2_itemgameindices?: pokemon_v2_itemgameindex_bool_exp | null;
  pokemon_v2_locationgameindices?: pokemon_v2_locationgameindex_bool_exp | null;
  pokemon_v2_moves?: pokemon_v2_move_bool_exp | null;
  pokemon_v2_pokemonformgenerations?: pokemon_v2_pokemonformgeneration_bool_exp | null;
  pokemon_v2_pokemonspecies?: pokemon_v2_pokemonspecies_bool_exp | null;
  pokemon_v2_pokemontypepasts?: pokemon_v2_pokemontypepast_bool_exp | null;
  pokemon_v2_region?: pokemon_v2_region_bool_exp | null;
  pokemon_v2_typegameindices?: pokemon_v2_typegameindex_bool_exp | null;
  pokemon_v2_types?: pokemon_v2_type_bool_exp | null;
  pokemon_v2_versiongroups?: pokemon_v2_versiongroup_bool_exp | null;
  region_id?: Int_comparison_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_generation"
 */
export interface pokemon_v2_generation_max_order_by {
  id?: order_by | null;
  name?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_generation"
 */
export interface pokemon_v2_generation_min_order_by {
  id?: order_by | null;
  name?: order_by | null;
  region_id?: order_by | null;
}

/**
 * Ordering options when selecting data from "pokemon_v2_generation".
 */
export interface pokemon_v2_generation_order_by {
  id?: order_by | null;
  name?: order_by | null;
  pokemon_v2_abilities_aggregate?: pokemon_v2_ability_aggregate_order_by | null;
  pokemon_v2_generationnames_aggregate?: pokemon_v2_generationname_aggregate_order_by | null;
  pokemon_v2_itemgameindices_aggregate?: pokemon_v2_itemgameindex_aggregate_order_by | null;
  pokemon_v2_locationgameindices_aggregate?: pokemon_v2_locationgameindex_aggregate_order_by | null;
  pokemon_v2_moves_aggregate?: pokemon_v2_move_aggregate_order_by | null;
  pokemon_v2_pokemonformgenerations_aggregate?: pokemon_v2_pokemonformgeneration_aggregate_order_by | null;
  pokemon_v2_pokemonspecies_aggregate?: pokemon_v2_pokemonspecies_aggregate_order_by | null;
  pokemon_v2_pokemontypepasts_aggregate?: pokemon_v2_pokemontypepast_aggregate_order_by | null;
  pokemon_v2_region?: pokemon_v2_region_order_by | null;
  pokemon_v2_typegameindices_aggregate?: pokemon_v2_typegameindex_aggregate_order_by | null;
  pokemon_v2_types_aggregate?: pokemon_v2_type_aggregate_order_by | null;
  pokemon_v2_versiongroups_aggregate?: pokemon_v2_versiongroup_aggregate_order_by | null;
  region_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_generation"
 */
export interface pokemon_v2_generation_stddev_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_generation"
 */
export interface pokemon_v2_generation_stddev_pop_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_generation"
 */
export interface pokemon_v2_generation_stddev_samp_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_generation"
 */
export interface pokemon_v2_generation_sum_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_generation"
 */
export interface pokemon_v2_generation_var_pop_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_generation"
 */
export interface pokemon_v2_generation_var_samp_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_generation"
 */
export interface pokemon_v2_generation_variance_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_generationname"
 */
export interface pokemon_v2_generationname_aggregate_order_by {
  avg?: pokemon_v2_generationname_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_generationname_max_order_by | null;
  min?: pokemon_v2_generationname_min_order_by | null;
  stddev?: pokemon_v2_generationname_stddev_order_by | null;
  stddev_pop?: pokemon_v2_generationname_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_generationname_stddev_samp_order_by | null;
  sum?: pokemon_v2_generationname_sum_order_by | null;
  var_pop?: pokemon_v2_generationname_var_pop_order_by | null;
  var_samp?: pokemon_v2_generationname_var_samp_order_by | null;
  variance?: pokemon_v2_generationname_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_generationname"
 */
export interface pokemon_v2_generationname_avg_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_generationname". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_generationname_bool_exp {
  _and?: pokemon_v2_generationname_bool_exp[] | null;
  _not?: pokemon_v2_generationname_bool_exp | null;
  _or?: pokemon_v2_generationname_bool_exp[] | null;
  generation_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_generation?: pokemon_v2_generation_bool_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_generationname"
 */
export interface pokemon_v2_generationname_max_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
  name?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_generationname"
 */
export interface pokemon_v2_generationname_min_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
  name?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_generationname"
 */
export interface pokemon_v2_generationname_stddev_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_generationname"
 */
export interface pokemon_v2_generationname_stddev_pop_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_generationname"
 */
export interface pokemon_v2_generationname_stddev_samp_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_generationname"
 */
export interface pokemon_v2_generationname_sum_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_generationname"
 */
export interface pokemon_v2_generationname_var_pop_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_generationname"
 */
export interface pokemon_v2_generationname_var_samp_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_generationname"
 */
export interface pokemon_v2_generationname_variance_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_growthrate". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_growthrate_bool_exp {
  _and?: pokemon_v2_growthrate_bool_exp[] | null;
  _not?: pokemon_v2_growthrate_bool_exp | null;
  _or?: pokemon_v2_growthrate_bool_exp[] | null;
  formula?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_experiences?: pokemon_v2_experience_bool_exp | null;
  pokemon_v2_growthratedescriptions?: pokemon_v2_growthratedescription_bool_exp | null;
  pokemon_v2_machines?: pokemon_v2_machine_bool_exp | null;
  pokemon_v2_pokemonspecies?: pokemon_v2_pokemonspecies_bool_exp | null;
}

/**
 * Ordering options when selecting data from "pokemon_v2_growthrate".
 */
export interface pokemon_v2_growthrate_order_by {
  formula?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
  pokemon_v2_experiences_aggregate?: pokemon_v2_experience_aggregate_order_by | null;
  pokemon_v2_growthratedescriptions_aggregate?: pokemon_v2_growthratedescription_aggregate_order_by | null;
  pokemon_v2_machines_aggregate?: pokemon_v2_machine_aggregate_order_by | null;
  pokemon_v2_pokemonspecies_aggregate?: pokemon_v2_pokemonspecies_aggregate_order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_growthratedescription"
 */
export interface pokemon_v2_growthratedescription_aggregate_order_by {
  avg?: pokemon_v2_growthratedescription_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_growthratedescription_max_order_by | null;
  min?: pokemon_v2_growthratedescription_min_order_by | null;
  stddev?: pokemon_v2_growthratedescription_stddev_order_by | null;
  stddev_pop?: pokemon_v2_growthratedescription_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_growthratedescription_stddev_samp_order_by | null;
  sum?: pokemon_v2_growthratedescription_sum_order_by | null;
  var_pop?: pokemon_v2_growthratedescription_var_pop_order_by | null;
  var_samp?: pokemon_v2_growthratedescription_var_samp_order_by | null;
  variance?: pokemon_v2_growthratedescription_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_growthratedescription"
 */
export interface pokemon_v2_growthratedescription_avg_order_by {
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_growthratedescription". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_growthratedescription_bool_exp {
  _and?: pokemon_v2_growthratedescription_bool_exp[] | null;
  _not?: pokemon_v2_growthratedescription_bool_exp | null;
  _or?: pokemon_v2_growthratedescription_bool_exp[] | null;
  description?: String_comparison_exp | null;
  growth_rate_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  pokemon_v2_growthrate?: pokemon_v2_growthrate_bool_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_growthratedescription"
 */
export interface pokemon_v2_growthratedescription_max_order_by {
  description?: order_by | null;
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_growthratedescription"
 */
export interface pokemon_v2_growthratedescription_min_order_by {
  description?: order_by | null;
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_growthratedescription"
 */
export interface pokemon_v2_growthratedescription_stddev_order_by {
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_growthratedescription"
 */
export interface pokemon_v2_growthratedescription_stddev_pop_order_by {
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_growthratedescription"
 */
export interface pokemon_v2_growthratedescription_stddev_samp_order_by {
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_growthratedescription"
 */
export interface pokemon_v2_growthratedescription_sum_order_by {
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_growthratedescription"
 */
export interface pokemon_v2_growthratedescription_var_pop_order_by {
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_growthratedescription"
 */
export interface pokemon_v2_growthratedescription_var_samp_order_by {
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_growthratedescription"
 */
export interface pokemon_v2_growthratedescription_variance_order_by {
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_item"
 */
export interface pokemon_v2_item_aggregate_order_by {
  avg?: pokemon_v2_item_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_item_max_order_by | null;
  min?: pokemon_v2_item_min_order_by | null;
  stddev?: pokemon_v2_item_stddev_order_by | null;
  stddev_pop?: pokemon_v2_item_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_item_stddev_samp_order_by | null;
  sum?: pokemon_v2_item_sum_order_by | null;
  var_pop?: pokemon_v2_item_var_pop_order_by | null;
  var_samp?: pokemon_v2_item_var_samp_order_by | null;
  variance?: pokemon_v2_item_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_item"
 */
export interface pokemon_v2_item_avg_order_by {
  cost?: order_by | null;
  fling_power?: order_by | null;
  id?: order_by | null;
  item_category_id?: order_by | null;
  item_fling_effect_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_item". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_item_bool_exp {
  _and?: pokemon_v2_item_bool_exp[] | null;
  _not?: pokemon_v2_item_bool_exp | null;
  _or?: pokemon_v2_item_bool_exp[] | null;
  cost?: Int_comparison_exp | null;
  fling_power?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  item_category_id?: Int_comparison_exp | null;
  item_fling_effect_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemonV2PokemonevolutionsByHeldItemId?: pokemon_v2_pokemonevolution_bool_exp | null;
  pokemon_v2_berries?: pokemon_v2_berry_bool_exp | null;
  pokemon_v2_evolutionchains?: pokemon_v2_evolutionchain_bool_exp | null;
  pokemon_v2_itemattributemaps?: pokemon_v2_itemattributemap_bool_exp | null;
  pokemon_v2_itemcategory?: pokemon_v2_itemcategory_bool_exp | null;
  pokemon_v2_itemeffecttexts?: pokemon_v2_itemeffecttext_bool_exp | null;
  pokemon_v2_itemflavortexts?: pokemon_v2_itemflavortext_bool_exp | null;
  pokemon_v2_itemflingeffect?: pokemon_v2_itemflingeffect_bool_exp | null;
  pokemon_v2_itemgameindices?: pokemon_v2_itemgameindex_bool_exp | null;
  pokemon_v2_itemnames?: pokemon_v2_itemname_bool_exp | null;
  pokemon_v2_itemsprites?: pokemon_v2_itemsprites_bool_exp | null;
  pokemon_v2_machines?: pokemon_v2_machine_bool_exp | null;
  pokemon_v2_pokemonevolutions?: pokemon_v2_pokemonevolution_bool_exp | null;
  pokemon_v2_pokemonitems?: pokemon_v2_pokemonitem_bool_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_item"
 */
export interface pokemon_v2_item_max_order_by {
  cost?: order_by | null;
  fling_power?: order_by | null;
  id?: order_by | null;
  item_category_id?: order_by | null;
  item_fling_effect_id?: order_by | null;
  name?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_item"
 */
export interface pokemon_v2_item_min_order_by {
  cost?: order_by | null;
  fling_power?: order_by | null;
  id?: order_by | null;
  item_category_id?: order_by | null;
  item_fling_effect_id?: order_by | null;
  name?: order_by | null;
}

/**
 * Ordering options when selecting data from "pokemon_v2_item".
 */
export interface pokemon_v2_item_order_by {
  cost?: order_by | null;
  fling_power?: order_by | null;
  id?: order_by | null;
  item_category_id?: order_by | null;
  item_fling_effect_id?: order_by | null;
  name?: order_by | null;
  pokemonV2PokemonevolutionsByHeldItemId_aggregate?: pokemon_v2_pokemonevolution_aggregate_order_by | null;
  pokemon_v2_berries_aggregate?: pokemon_v2_berry_aggregate_order_by | null;
  pokemon_v2_evolutionchains_aggregate?: pokemon_v2_evolutionchain_aggregate_order_by | null;
  pokemon_v2_itemattributemaps_aggregate?: pokemon_v2_itemattributemap_aggregate_order_by | null;
  pokemon_v2_itemcategory?: pokemon_v2_itemcategory_order_by | null;
  pokemon_v2_itemeffecttexts_aggregate?: pokemon_v2_itemeffecttext_aggregate_order_by | null;
  pokemon_v2_itemflavortexts_aggregate?: pokemon_v2_itemflavortext_aggregate_order_by | null;
  pokemon_v2_itemflingeffect?: pokemon_v2_itemflingeffect_order_by | null;
  pokemon_v2_itemgameindices_aggregate?: pokemon_v2_itemgameindex_aggregate_order_by | null;
  pokemon_v2_itemnames_aggregate?: pokemon_v2_itemname_aggregate_order_by | null;
  pokemon_v2_itemsprites_aggregate?: pokemon_v2_itemsprites_aggregate_order_by | null;
  pokemon_v2_machines_aggregate?: pokemon_v2_machine_aggregate_order_by | null;
  pokemon_v2_pokemonevolutions_aggregate?: pokemon_v2_pokemonevolution_aggregate_order_by | null;
  pokemon_v2_pokemonitems_aggregate?: pokemon_v2_pokemonitem_aggregate_order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_item"
 */
export interface pokemon_v2_item_stddev_order_by {
  cost?: order_by | null;
  fling_power?: order_by | null;
  id?: order_by | null;
  item_category_id?: order_by | null;
  item_fling_effect_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_item"
 */
export interface pokemon_v2_item_stddev_pop_order_by {
  cost?: order_by | null;
  fling_power?: order_by | null;
  id?: order_by | null;
  item_category_id?: order_by | null;
  item_fling_effect_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_item"
 */
export interface pokemon_v2_item_stddev_samp_order_by {
  cost?: order_by | null;
  fling_power?: order_by | null;
  id?: order_by | null;
  item_category_id?: order_by | null;
  item_fling_effect_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_item"
 */
export interface pokemon_v2_item_sum_order_by {
  cost?: order_by | null;
  fling_power?: order_by | null;
  id?: order_by | null;
  item_category_id?: order_by | null;
  item_fling_effect_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_item"
 */
export interface pokemon_v2_item_var_pop_order_by {
  cost?: order_by | null;
  fling_power?: order_by | null;
  id?: order_by | null;
  item_category_id?: order_by | null;
  item_fling_effect_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_item"
 */
export interface pokemon_v2_item_var_samp_order_by {
  cost?: order_by | null;
  fling_power?: order_by | null;
  id?: order_by | null;
  item_category_id?: order_by | null;
  item_fling_effect_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_item"
 */
export interface pokemon_v2_item_variance_order_by {
  cost?: order_by | null;
  fling_power?: order_by | null;
  id?: order_by | null;
  item_category_id?: order_by | null;
  item_fling_effect_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_itemattribute". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_itemattribute_bool_exp {
  _and?: pokemon_v2_itemattribute_bool_exp[] | null;
  _not?: pokemon_v2_itemattribute_bool_exp | null;
  _or?: pokemon_v2_itemattribute_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_itemattributedescriptions?: pokemon_v2_itemattributedescription_bool_exp | null;
  pokemon_v2_itemattributemaps?: pokemon_v2_itemattributemap_bool_exp | null;
  pokemon_v2_itemattributenames?: pokemon_v2_itemattributename_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_itemattributedescription". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_itemattributedescription_bool_exp {
  _and?: pokemon_v2_itemattributedescription_bool_exp[] | null;
  _not?: pokemon_v2_itemattributedescription_bool_exp | null;
  _or?: pokemon_v2_itemattributedescription_bool_exp[] | null;
  description?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  item_attribute_id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  pokemon_v2_itemattribute?: pokemon_v2_itemattribute_bool_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
}

/**
 * order by aggregate values of table "pokemon_v2_itemattributemap"
 */
export interface pokemon_v2_itemattributemap_aggregate_order_by {
  avg?: pokemon_v2_itemattributemap_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_itemattributemap_max_order_by | null;
  min?: pokemon_v2_itemattributemap_min_order_by | null;
  stddev?: pokemon_v2_itemattributemap_stddev_order_by | null;
  stddev_pop?: pokemon_v2_itemattributemap_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_itemattributemap_stddev_samp_order_by | null;
  sum?: pokemon_v2_itemattributemap_sum_order_by | null;
  var_pop?: pokemon_v2_itemattributemap_var_pop_order_by | null;
  var_samp?: pokemon_v2_itemattributemap_var_samp_order_by | null;
  variance?: pokemon_v2_itemattributemap_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_itemattributemap"
 */
export interface pokemon_v2_itemattributemap_avg_order_by {
  id?: order_by | null;
  item_attribute_id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_itemattributemap". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_itemattributemap_bool_exp {
  _and?: pokemon_v2_itemattributemap_bool_exp[] | null;
  _not?: pokemon_v2_itemattributemap_bool_exp | null;
  _or?: pokemon_v2_itemattributemap_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  item_attribute_id?: Int_comparison_exp | null;
  item_id?: Int_comparison_exp | null;
  pokemon_v2_item?: pokemon_v2_item_bool_exp | null;
  pokemon_v2_itemattribute?: pokemon_v2_itemattribute_bool_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_itemattributemap"
 */
export interface pokemon_v2_itemattributemap_max_order_by {
  id?: order_by | null;
  item_attribute_id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_itemattributemap"
 */
export interface pokemon_v2_itemattributemap_min_order_by {
  id?: order_by | null;
  item_attribute_id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_itemattributemap"
 */
export interface pokemon_v2_itemattributemap_stddev_order_by {
  id?: order_by | null;
  item_attribute_id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_itemattributemap"
 */
export interface pokemon_v2_itemattributemap_stddev_pop_order_by {
  id?: order_by | null;
  item_attribute_id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_itemattributemap"
 */
export interface pokemon_v2_itemattributemap_stddev_samp_order_by {
  id?: order_by | null;
  item_attribute_id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_itemattributemap"
 */
export interface pokemon_v2_itemattributemap_sum_order_by {
  id?: order_by | null;
  item_attribute_id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_itemattributemap"
 */
export interface pokemon_v2_itemattributemap_var_pop_order_by {
  id?: order_by | null;
  item_attribute_id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_itemattributemap"
 */
export interface pokemon_v2_itemattributemap_var_samp_order_by {
  id?: order_by | null;
  item_attribute_id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_itemattributemap"
 */
export interface pokemon_v2_itemattributemap_variance_order_by {
  id?: order_by | null;
  item_attribute_id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_itemattributename". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_itemattributename_bool_exp {
  _and?: pokemon_v2_itemattributename_bool_exp[] | null;
  _not?: pokemon_v2_itemattributename_bool_exp | null;
  _or?: pokemon_v2_itemattributename_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  item_attribute_id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_itemattribute?: pokemon_v2_itemattribute_bool_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
}

/**
 * order by aggregate values of table "pokemon_v2_itemcategory"
 */
export interface pokemon_v2_itemcategory_aggregate_order_by {
  avg?: pokemon_v2_itemcategory_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_itemcategory_max_order_by | null;
  min?: pokemon_v2_itemcategory_min_order_by | null;
  stddev?: pokemon_v2_itemcategory_stddev_order_by | null;
  stddev_pop?: pokemon_v2_itemcategory_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_itemcategory_stddev_samp_order_by | null;
  sum?: pokemon_v2_itemcategory_sum_order_by | null;
  var_pop?: pokemon_v2_itemcategory_var_pop_order_by | null;
  var_samp?: pokemon_v2_itemcategory_var_samp_order_by | null;
  variance?: pokemon_v2_itemcategory_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_itemcategory"
 */
export interface pokemon_v2_itemcategory_avg_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_itemcategory". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_itemcategory_bool_exp {
  _and?: pokemon_v2_itemcategory_bool_exp[] | null;
  _not?: pokemon_v2_itemcategory_bool_exp | null;
  _or?: pokemon_v2_itemcategory_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  item_pocket_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_itemcategorynames?: pokemon_v2_itemcategoryname_bool_exp | null;
  pokemon_v2_itempocket?: pokemon_v2_itempocket_bool_exp | null;
  pokemon_v2_items?: pokemon_v2_item_bool_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_itemcategory"
 */
export interface pokemon_v2_itemcategory_max_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
  name?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_itemcategory"
 */
export interface pokemon_v2_itemcategory_min_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
  name?: order_by | null;
}

/**
 * Ordering options when selecting data from "pokemon_v2_itemcategory".
 */
export interface pokemon_v2_itemcategory_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
  name?: order_by | null;
  pokemon_v2_itemcategorynames_aggregate?: pokemon_v2_itemcategoryname_aggregate_order_by | null;
  pokemon_v2_itempocket?: pokemon_v2_itempocket_order_by | null;
  pokemon_v2_items_aggregate?: pokemon_v2_item_aggregate_order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_itemcategory"
 */
export interface pokemon_v2_itemcategory_stddev_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_itemcategory"
 */
export interface pokemon_v2_itemcategory_stddev_pop_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_itemcategory"
 */
export interface pokemon_v2_itemcategory_stddev_samp_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_itemcategory"
 */
export interface pokemon_v2_itemcategory_sum_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_itemcategory"
 */
export interface pokemon_v2_itemcategory_var_pop_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_itemcategory"
 */
export interface pokemon_v2_itemcategory_var_samp_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_itemcategory"
 */
export interface pokemon_v2_itemcategory_variance_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_itemcategoryname"
 */
export interface pokemon_v2_itemcategoryname_aggregate_order_by {
  avg?: pokemon_v2_itemcategoryname_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_itemcategoryname_max_order_by | null;
  min?: pokemon_v2_itemcategoryname_min_order_by | null;
  stddev?: pokemon_v2_itemcategoryname_stddev_order_by | null;
  stddev_pop?: pokemon_v2_itemcategoryname_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_itemcategoryname_stddev_samp_order_by | null;
  sum?: pokemon_v2_itemcategoryname_sum_order_by | null;
  var_pop?: pokemon_v2_itemcategoryname_var_pop_order_by | null;
  var_samp?: pokemon_v2_itemcategoryname_var_samp_order_by | null;
  variance?: pokemon_v2_itemcategoryname_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_itemcategoryname"
 */
export interface pokemon_v2_itemcategoryname_avg_order_by {
  id?: order_by | null;
  item_category_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_itemcategoryname". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_itemcategoryname_bool_exp {
  _and?: pokemon_v2_itemcategoryname_bool_exp[] | null;
  _not?: pokemon_v2_itemcategoryname_bool_exp | null;
  _or?: pokemon_v2_itemcategoryname_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  item_category_id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_itemcategory?: pokemon_v2_itemcategory_bool_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_itemcategoryname"
 */
export interface pokemon_v2_itemcategoryname_max_order_by {
  id?: order_by | null;
  item_category_id?: order_by | null;
  language_id?: order_by | null;
  name?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_itemcategoryname"
 */
export interface pokemon_v2_itemcategoryname_min_order_by {
  id?: order_by | null;
  item_category_id?: order_by | null;
  language_id?: order_by | null;
  name?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_itemcategoryname"
 */
export interface pokemon_v2_itemcategoryname_stddev_order_by {
  id?: order_by | null;
  item_category_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_itemcategoryname"
 */
export interface pokemon_v2_itemcategoryname_stddev_pop_order_by {
  id?: order_by | null;
  item_category_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_itemcategoryname"
 */
export interface pokemon_v2_itemcategoryname_stddev_samp_order_by {
  id?: order_by | null;
  item_category_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_itemcategoryname"
 */
export interface pokemon_v2_itemcategoryname_sum_order_by {
  id?: order_by | null;
  item_category_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_itemcategoryname"
 */
export interface pokemon_v2_itemcategoryname_var_pop_order_by {
  id?: order_by | null;
  item_category_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_itemcategoryname"
 */
export interface pokemon_v2_itemcategoryname_var_samp_order_by {
  id?: order_by | null;
  item_category_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_itemcategoryname"
 */
export interface pokemon_v2_itemcategoryname_variance_order_by {
  id?: order_by | null;
  item_category_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_itemeffecttext"
 */
export interface pokemon_v2_itemeffecttext_aggregate_order_by {
  avg?: pokemon_v2_itemeffecttext_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_itemeffecttext_max_order_by | null;
  min?: pokemon_v2_itemeffecttext_min_order_by | null;
  stddev?: pokemon_v2_itemeffecttext_stddev_order_by | null;
  stddev_pop?: pokemon_v2_itemeffecttext_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_itemeffecttext_stddev_samp_order_by | null;
  sum?: pokemon_v2_itemeffecttext_sum_order_by | null;
  var_pop?: pokemon_v2_itemeffecttext_var_pop_order_by | null;
  var_samp?: pokemon_v2_itemeffecttext_var_samp_order_by | null;
  variance?: pokemon_v2_itemeffecttext_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_itemeffecttext"
 */
export interface pokemon_v2_itemeffecttext_avg_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_itemeffecttext". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_itemeffecttext_bool_exp {
  _and?: pokemon_v2_itemeffecttext_bool_exp[] | null;
  _not?: pokemon_v2_itemeffecttext_bool_exp | null;
  _or?: pokemon_v2_itemeffecttext_bool_exp[] | null;
  effect?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  item_id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  pokemon_v2_item?: pokemon_v2_item_bool_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  short_effect?: String_comparison_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_itemeffecttext"
 */
export interface pokemon_v2_itemeffecttext_max_order_by {
  effect?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
  short_effect?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_itemeffecttext"
 */
export interface pokemon_v2_itemeffecttext_min_order_by {
  effect?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
  short_effect?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_itemeffecttext"
 */
export interface pokemon_v2_itemeffecttext_stddev_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_itemeffecttext"
 */
export interface pokemon_v2_itemeffecttext_stddev_pop_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_itemeffecttext"
 */
export interface pokemon_v2_itemeffecttext_stddev_samp_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_itemeffecttext"
 */
export interface pokemon_v2_itemeffecttext_sum_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_itemeffecttext"
 */
export interface pokemon_v2_itemeffecttext_var_pop_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_itemeffecttext"
 */
export interface pokemon_v2_itemeffecttext_var_samp_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_itemeffecttext"
 */
export interface pokemon_v2_itemeffecttext_variance_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_itemflavortext"
 */
export interface pokemon_v2_itemflavortext_aggregate_order_by {
  avg?: pokemon_v2_itemflavortext_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_itemflavortext_max_order_by | null;
  min?: pokemon_v2_itemflavortext_min_order_by | null;
  stddev?: pokemon_v2_itemflavortext_stddev_order_by | null;
  stddev_pop?: pokemon_v2_itemflavortext_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_itemflavortext_stddev_samp_order_by | null;
  sum?: pokemon_v2_itemflavortext_sum_order_by | null;
  var_pop?: pokemon_v2_itemflavortext_var_pop_order_by | null;
  var_samp?: pokemon_v2_itemflavortext_var_samp_order_by | null;
  variance?: pokemon_v2_itemflavortext_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_itemflavortext"
 */
export interface pokemon_v2_itemflavortext_avg_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_itemflavortext". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_itemflavortext_bool_exp {
  _and?: pokemon_v2_itemflavortext_bool_exp[] | null;
  _not?: pokemon_v2_itemflavortext_bool_exp | null;
  _or?: pokemon_v2_itemflavortext_bool_exp[] | null;
  flavor_text?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  item_id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  pokemon_v2_item?: pokemon_v2_item_bool_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_versiongroup?: pokemon_v2_versiongroup_bool_exp | null;
  version_group_id?: Int_comparison_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_itemflavortext"
 */
export interface pokemon_v2_itemflavortext_max_order_by {
  flavor_text?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_itemflavortext"
 */
export interface pokemon_v2_itemflavortext_min_order_by {
  flavor_text?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_itemflavortext"
 */
export interface pokemon_v2_itemflavortext_stddev_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_itemflavortext"
 */
export interface pokemon_v2_itemflavortext_stddev_pop_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_itemflavortext"
 */
export interface pokemon_v2_itemflavortext_stddev_samp_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_itemflavortext"
 */
export interface pokemon_v2_itemflavortext_sum_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_itemflavortext"
 */
export interface pokemon_v2_itemflavortext_var_pop_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_itemflavortext"
 */
export interface pokemon_v2_itemflavortext_var_samp_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_itemflavortext"
 */
export interface pokemon_v2_itemflavortext_variance_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_itemflingeffect". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_itemflingeffect_bool_exp {
  _and?: pokemon_v2_itemflingeffect_bool_exp[] | null;
  _not?: pokemon_v2_itemflingeffect_bool_exp | null;
  _or?: pokemon_v2_itemflingeffect_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_itemflingeffecteffecttexts?: pokemon_v2_itemflingeffecteffecttext_bool_exp | null;
  pokemon_v2_items?: pokemon_v2_item_bool_exp | null;
}

/**
 * Ordering options when selecting data from "pokemon_v2_itemflingeffect".
 */
export interface pokemon_v2_itemflingeffect_order_by {
  id?: order_by | null;
  name?: order_by | null;
  pokemon_v2_itemflingeffecteffecttexts_aggregate?: pokemon_v2_itemflingeffecteffecttext_aggregate_order_by | null;
  pokemon_v2_items_aggregate?: pokemon_v2_item_aggregate_order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_itemflingeffecteffecttext"
 */
export interface pokemon_v2_itemflingeffecteffecttext_aggregate_order_by {
  avg?: pokemon_v2_itemflingeffecteffecttext_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_itemflingeffecteffecttext_max_order_by | null;
  min?: pokemon_v2_itemflingeffecteffecttext_min_order_by | null;
  stddev?: pokemon_v2_itemflingeffecteffecttext_stddev_order_by | null;
  stddev_pop?: pokemon_v2_itemflingeffecteffecttext_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_itemflingeffecteffecttext_stddev_samp_order_by | null;
  sum?: pokemon_v2_itemflingeffecteffecttext_sum_order_by | null;
  var_pop?: pokemon_v2_itemflingeffecteffecttext_var_pop_order_by | null;
  var_samp?: pokemon_v2_itemflingeffecteffecttext_var_samp_order_by | null;
  variance?: pokemon_v2_itemflingeffecteffecttext_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_itemflingeffecteffecttext"
 */
export interface pokemon_v2_itemflingeffecteffecttext_avg_order_by {
  id?: order_by | null;
  item_fling_effect_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_itemflingeffecteffecttext". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_itemflingeffecteffecttext_bool_exp {
  _and?: pokemon_v2_itemflingeffecteffecttext_bool_exp[] | null;
  _not?: pokemon_v2_itemflingeffecteffecttext_bool_exp | null;
  _or?: pokemon_v2_itemflingeffecteffecttext_bool_exp[] | null;
  effect?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  item_fling_effect_id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  pokemon_v2_itemflingeffect?: pokemon_v2_itemflingeffect_bool_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_itemflingeffecteffecttext"
 */
export interface pokemon_v2_itemflingeffecteffecttext_max_order_by {
  effect?: order_by | null;
  id?: order_by | null;
  item_fling_effect_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_itemflingeffecteffecttext"
 */
export interface pokemon_v2_itemflingeffecteffecttext_min_order_by {
  effect?: order_by | null;
  id?: order_by | null;
  item_fling_effect_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_itemflingeffecteffecttext"
 */
export interface pokemon_v2_itemflingeffecteffecttext_stddev_order_by {
  id?: order_by | null;
  item_fling_effect_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_itemflingeffecteffecttext"
 */
export interface pokemon_v2_itemflingeffecteffecttext_stddev_pop_order_by {
  id?: order_by | null;
  item_fling_effect_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_itemflingeffecteffecttext"
 */
export interface pokemon_v2_itemflingeffecteffecttext_stddev_samp_order_by {
  id?: order_by | null;
  item_fling_effect_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_itemflingeffecteffecttext"
 */
export interface pokemon_v2_itemflingeffecteffecttext_sum_order_by {
  id?: order_by | null;
  item_fling_effect_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_itemflingeffecteffecttext"
 */
export interface pokemon_v2_itemflingeffecteffecttext_var_pop_order_by {
  id?: order_by | null;
  item_fling_effect_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_itemflingeffecteffecttext"
 */
export interface pokemon_v2_itemflingeffecteffecttext_var_samp_order_by {
  id?: order_by | null;
  item_fling_effect_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_itemflingeffecteffecttext"
 */
export interface pokemon_v2_itemflingeffecteffecttext_variance_order_by {
  id?: order_by | null;
  item_fling_effect_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_itemgameindex"
 */
export interface pokemon_v2_itemgameindex_aggregate_order_by {
  avg?: pokemon_v2_itemgameindex_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_itemgameindex_max_order_by | null;
  min?: pokemon_v2_itemgameindex_min_order_by | null;
  stddev?: pokemon_v2_itemgameindex_stddev_order_by | null;
  stddev_pop?: pokemon_v2_itemgameindex_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_itemgameindex_stddev_samp_order_by | null;
  sum?: pokemon_v2_itemgameindex_sum_order_by | null;
  var_pop?: pokemon_v2_itemgameindex_var_pop_order_by | null;
  var_samp?: pokemon_v2_itemgameindex_var_samp_order_by | null;
  variance?: pokemon_v2_itemgameindex_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_itemgameindex"
 */
export interface pokemon_v2_itemgameindex_avg_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_itemgameindex". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_itemgameindex_bool_exp {
  _and?: pokemon_v2_itemgameindex_bool_exp[] | null;
  _not?: pokemon_v2_itemgameindex_bool_exp | null;
  _or?: pokemon_v2_itemgameindex_bool_exp[] | null;
  game_index?: Int_comparison_exp | null;
  generation_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  item_id?: Int_comparison_exp | null;
  pokemon_v2_generation?: pokemon_v2_generation_bool_exp | null;
  pokemon_v2_item?: pokemon_v2_item_bool_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_itemgameindex"
 */
export interface pokemon_v2_itemgameindex_max_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_itemgameindex"
 */
export interface pokemon_v2_itemgameindex_min_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_itemgameindex"
 */
export interface pokemon_v2_itemgameindex_stddev_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_itemgameindex"
 */
export interface pokemon_v2_itemgameindex_stddev_pop_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_itemgameindex"
 */
export interface pokemon_v2_itemgameindex_stddev_samp_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_itemgameindex"
 */
export interface pokemon_v2_itemgameindex_sum_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_itemgameindex"
 */
export interface pokemon_v2_itemgameindex_var_pop_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_itemgameindex"
 */
export interface pokemon_v2_itemgameindex_var_samp_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_itemgameindex"
 */
export interface pokemon_v2_itemgameindex_variance_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_itemname"
 */
export interface pokemon_v2_itemname_aggregate_order_by {
  avg?: pokemon_v2_itemname_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_itemname_max_order_by | null;
  min?: pokemon_v2_itemname_min_order_by | null;
  stddev?: pokemon_v2_itemname_stddev_order_by | null;
  stddev_pop?: pokemon_v2_itemname_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_itemname_stddev_samp_order_by | null;
  sum?: pokemon_v2_itemname_sum_order_by | null;
  var_pop?: pokemon_v2_itemname_var_pop_order_by | null;
  var_samp?: pokemon_v2_itemname_var_samp_order_by | null;
  variance?: pokemon_v2_itemname_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_itemname"
 */
export interface pokemon_v2_itemname_avg_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_itemname". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_itemname_bool_exp {
  _and?: pokemon_v2_itemname_bool_exp[] | null;
  _not?: pokemon_v2_itemname_bool_exp | null;
  _or?: pokemon_v2_itemname_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  item_id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_item?: pokemon_v2_item_bool_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_itemname"
 */
export interface pokemon_v2_itemname_max_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
  name?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_itemname"
 */
export interface pokemon_v2_itemname_min_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
  name?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_itemname"
 */
export interface pokemon_v2_itemname_stddev_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_itemname"
 */
export interface pokemon_v2_itemname_stddev_pop_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_itemname"
 */
export interface pokemon_v2_itemname_stddev_samp_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_itemname"
 */
export interface pokemon_v2_itemname_sum_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_itemname"
 */
export interface pokemon_v2_itemname_var_pop_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_itemname"
 */
export interface pokemon_v2_itemname_var_samp_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_itemname"
 */
export interface pokemon_v2_itemname_variance_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_itempocket". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_itempocket_bool_exp {
  _and?: pokemon_v2_itempocket_bool_exp[] | null;
  _not?: pokemon_v2_itempocket_bool_exp | null;
  _or?: pokemon_v2_itempocket_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_itemcategories?: pokemon_v2_itemcategory_bool_exp | null;
  pokemon_v2_itempocketnames?: pokemon_v2_itempocketname_bool_exp | null;
}

/**
 * Ordering options when selecting data from "pokemon_v2_itempocket".
 */
export interface pokemon_v2_itempocket_order_by {
  id?: order_by | null;
  name?: order_by | null;
  pokemon_v2_itemcategories_aggregate?: pokemon_v2_itemcategory_aggregate_order_by | null;
  pokemon_v2_itempocketnames_aggregate?: pokemon_v2_itempocketname_aggregate_order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_itempocketname"
 */
export interface pokemon_v2_itempocketname_aggregate_order_by {
  avg?: pokemon_v2_itempocketname_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_itempocketname_max_order_by | null;
  min?: pokemon_v2_itempocketname_min_order_by | null;
  stddev?: pokemon_v2_itempocketname_stddev_order_by | null;
  stddev_pop?: pokemon_v2_itempocketname_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_itempocketname_stddev_samp_order_by | null;
  sum?: pokemon_v2_itempocketname_sum_order_by | null;
  var_pop?: pokemon_v2_itempocketname_var_pop_order_by | null;
  var_samp?: pokemon_v2_itempocketname_var_samp_order_by | null;
  variance?: pokemon_v2_itempocketname_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_itempocketname"
 */
export interface pokemon_v2_itempocketname_avg_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_itempocketname". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_itempocketname_bool_exp {
  _and?: pokemon_v2_itempocketname_bool_exp[] | null;
  _not?: pokemon_v2_itempocketname_bool_exp | null;
  _or?: pokemon_v2_itempocketname_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  item_pocket_id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_itempocket?: pokemon_v2_itempocket_bool_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_itempocketname"
 */
export interface pokemon_v2_itempocketname_max_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
  language_id?: order_by | null;
  name?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_itempocketname"
 */
export interface pokemon_v2_itempocketname_min_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
  language_id?: order_by | null;
  name?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_itempocketname"
 */
export interface pokemon_v2_itempocketname_stddev_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_itempocketname"
 */
export interface pokemon_v2_itempocketname_stddev_pop_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_itempocketname"
 */
export interface pokemon_v2_itempocketname_stddev_samp_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_itempocketname"
 */
export interface pokemon_v2_itempocketname_sum_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_itempocketname"
 */
export interface pokemon_v2_itempocketname_var_pop_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_itempocketname"
 */
export interface pokemon_v2_itempocketname_var_samp_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_itempocketname"
 */
export interface pokemon_v2_itempocketname_variance_order_by {
  id?: order_by | null;
  item_pocket_id?: order_by | null;
  language_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_itemsprites"
 */
export interface pokemon_v2_itemsprites_aggregate_order_by {
  avg?: pokemon_v2_itemsprites_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_itemsprites_max_order_by | null;
  min?: pokemon_v2_itemsprites_min_order_by | null;
  stddev?: pokemon_v2_itemsprites_stddev_order_by | null;
  stddev_pop?: pokemon_v2_itemsprites_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_itemsprites_stddev_samp_order_by | null;
  sum?: pokemon_v2_itemsprites_sum_order_by | null;
  var_pop?: pokemon_v2_itemsprites_var_pop_order_by | null;
  var_samp?: pokemon_v2_itemsprites_var_samp_order_by | null;
  variance?: pokemon_v2_itemsprites_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_itemsprites"
 */
export interface pokemon_v2_itemsprites_avg_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_itemsprites". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_itemsprites_bool_exp {
  _and?: pokemon_v2_itemsprites_bool_exp[] | null;
  _not?: pokemon_v2_itemsprites_bool_exp | null;
  _or?: pokemon_v2_itemsprites_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  item_id?: Int_comparison_exp | null;
  pokemon_v2_item?: pokemon_v2_item_bool_exp | null;
  sprites?: String_comparison_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_itemsprites"
 */
export interface pokemon_v2_itemsprites_max_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  sprites?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_itemsprites"
 */
export interface pokemon_v2_itemsprites_min_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  sprites?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_itemsprites"
 */
export interface pokemon_v2_itemsprites_stddev_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_itemsprites"
 */
export interface pokemon_v2_itemsprites_stddev_pop_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_itemsprites"
 */
export interface pokemon_v2_itemsprites_stddev_samp_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_itemsprites"
 */
export interface pokemon_v2_itemsprites_sum_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_itemsprites"
 */
export interface pokemon_v2_itemsprites_var_pop_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_itemsprites"
 */
export interface pokemon_v2_itemsprites_var_samp_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_itemsprites"
 */
export interface pokemon_v2_itemsprites_variance_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_language". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_language_bool_exp {
  _and?: pokemon_v2_language_bool_exp[] | null;
  _not?: pokemon_v2_language_bool_exp | null;
  _or?: pokemon_v2_language_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  iso3166?: String_comparison_exp | null;
  iso639?: String_comparison_exp | null;
  name?: String_comparison_exp | null;
  official?: Boolean_comparison_exp | null;
  order?: Int_comparison_exp | null;
  pokemonV2LanguagenamesByLocalLanguageId?: pokemon_v2_languagename_bool_exp | null;
  pokemon_v2_abilitychangeeffecttexts?: pokemon_v2_abilitychangeeffecttext_bool_exp | null;
  pokemon_v2_abilityeffecttexts?: pokemon_v2_abilityeffecttext_bool_exp | null;
  pokemon_v2_abilityflavortexts?: pokemon_v2_abilityflavortext_bool_exp | null;
  pokemon_v2_abilitynames?: pokemon_v2_abilityname_bool_exp | null;
  pokemon_v2_berryfirmnessnames?: pokemon_v2_berryfirmnessname_bool_exp | null;
  pokemon_v2_berryflavornames?: pokemon_v2_berryflavorname_bool_exp | null;
  pokemon_v2_characteristicdescriptions?: pokemon_v2_characteristicdescription_bool_exp | null;
  pokemon_v2_contesteffecteffecttexts?: pokemon_v2_contesteffecteffecttext_bool_exp | null;
  pokemon_v2_contesteffectflavortexts?: pokemon_v2_contesteffectflavortext_bool_exp | null;
  pokemon_v2_contesttypenames?: pokemon_v2_contesttypename_bool_exp | null;
  pokemon_v2_egggroupnames?: pokemon_v2_egggroupname_bool_exp | null;
  pokemon_v2_encounterconditionnames?: pokemon_v2_encounterconditionname_bool_exp | null;
  pokemon_v2_encounterconditionvaluenames?: pokemon_v2_encounterconditionvaluename_bool_exp | null;
  pokemon_v2_encountermethodnames?: pokemon_v2_encountermethodname_bool_exp | null;
  pokemon_v2_evolutiontriggernames?: pokemon_v2_evolutiontriggername_bool_exp | null;
  pokemon_v2_generationnames?: pokemon_v2_generationname_bool_exp | null;
  pokemon_v2_growthratedescriptions?: pokemon_v2_growthratedescription_bool_exp | null;
  pokemon_v2_itemattributedescriptions?: pokemon_v2_itemattributedescription_bool_exp | null;
  pokemon_v2_itemattributenames?: pokemon_v2_itemattributename_bool_exp | null;
  pokemon_v2_itemcategorynames?: pokemon_v2_itemcategoryname_bool_exp | null;
  pokemon_v2_itemeffecttexts?: pokemon_v2_itemeffecttext_bool_exp | null;
  pokemon_v2_itemflavortexts?: pokemon_v2_itemflavortext_bool_exp | null;
  pokemon_v2_itemflingeffecteffecttexts?: pokemon_v2_itemflingeffecteffecttext_bool_exp | null;
  pokemon_v2_itemnames?: pokemon_v2_itemname_bool_exp | null;
  pokemon_v2_itempocketnames?: pokemon_v2_itempocketname_bool_exp | null;
  pokemon_v2_languagenames?: pokemon_v2_languagename_bool_exp | null;
  pokemon_v2_locationareanames?: pokemon_v2_locationareaname_bool_exp | null;
  pokemon_v2_locationnames?: pokemon_v2_locationname_bool_exp | null;
  pokemon_v2_moveattributedescriptions?: pokemon_v2_moveattributedescription_bool_exp | null;
  pokemon_v2_moveattributenames?: pokemon_v2_moveattributename_bool_exp | null;
  pokemon_v2_movebattlestylenames?: pokemon_v2_movebattlestylename_bool_exp | null;
  pokemon_v2_movedamageclassdescriptions?: pokemon_v2_movedamageclassdescription_bool_exp | null;
  pokemon_v2_movedamageclassnames?: pokemon_v2_movedamageclassname_bool_exp | null;
  pokemon_v2_moveeffectchangeeffecttexts?: pokemon_v2_moveeffectchangeeffecttext_bool_exp | null;
  pokemon_v2_moveeffecteffecttexts?: pokemon_v2_moveeffecteffecttext_bool_exp | null;
  pokemon_v2_moveflavortexts?: pokemon_v2_moveflavortext_bool_exp | null;
  pokemon_v2_movelearnmethoddescriptions?: pokemon_v2_movelearnmethoddescription_bool_exp | null;
  pokemon_v2_movelearnmethodnames?: pokemon_v2_movelearnmethodname_bool_exp | null;
  pokemon_v2_movemetaailmentnames?: pokemon_v2_movemetaailmentname_bool_exp | null;
  pokemon_v2_movemetacategorydescriptions?: pokemon_v2_movemetacategorydescription_bool_exp | null;
  pokemon_v2_movenames?: pokemon_v2_movename_bool_exp | null;
  pokemon_v2_movetargetdescriptions?: pokemon_v2_movetargetdescription_bool_exp | null;
  pokemon_v2_movetargetnames?: pokemon_v2_movetargetname_bool_exp | null;
  pokemon_v2_naturenames?: pokemon_v2_naturename_bool_exp | null;
  pokemon_v2_palparkareanames?: pokemon_v2_palparkareaname_bool_exp | null;
  pokemon_v2_pokeathlonstatnames?: pokemon_v2_pokeathlonstatname_bool_exp | null;
  pokemon_v2_pokedexdescriptions?: pokemon_v2_pokedexdescription_bool_exp | null;
  pokemon_v2_pokedexnames?: pokemon_v2_pokedexname_bool_exp | null;
  pokemon_v2_pokemoncolornames?: pokemon_v2_pokemoncolorname_bool_exp | null;
  pokemon_v2_pokemonformnames?: pokemon_v2_pokemonformname_bool_exp | null;
  pokemon_v2_pokemonhabitatnames?: pokemon_v2_pokemonhabitatname_bool_exp | null;
  pokemon_v2_pokemonshapenames?: pokemon_v2_pokemonshapename_bool_exp | null;
  pokemon_v2_pokemonspeciesdescriptions?: pokemon_v2_pokemonspeciesdescription_bool_exp | null;
  pokemon_v2_pokemonspeciesflavortexts?: pokemon_v2_pokemonspeciesflavortext_bool_exp | null;
  pokemon_v2_pokemonspeciesnames?: pokemon_v2_pokemonspeciesname_bool_exp | null;
  pokemon_v2_regionnames?: pokemon_v2_regionname_bool_exp | null;
  pokemon_v2_statnames?: pokemon_v2_statname_bool_exp | null;
  pokemon_v2_supercontesteffectflavortexts?: pokemon_v2_supercontesteffectflavortext_bool_exp | null;
  pokemon_v2_typenames?: pokemon_v2_typename_bool_exp | null;
  pokemon_v2_versionnames?: pokemon_v2_versionname_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_languagename". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_languagename_bool_exp {
  _and?: pokemon_v2_languagename_bool_exp[] | null;
  _not?: pokemon_v2_languagename_bool_exp | null;
  _or?: pokemon_v2_languagename_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  local_language_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemonV2LanguageByLocalLanguageId?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
}

/**
 * order by aggregate values of table "pokemon_v2_location"
 */
export interface pokemon_v2_location_aggregate_order_by {
  avg?: pokemon_v2_location_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_location_max_order_by | null;
  min?: pokemon_v2_location_min_order_by | null;
  stddev?: pokemon_v2_location_stddev_order_by | null;
  stddev_pop?: pokemon_v2_location_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_location_stddev_samp_order_by | null;
  sum?: pokemon_v2_location_sum_order_by | null;
  var_pop?: pokemon_v2_location_var_pop_order_by | null;
  var_samp?: pokemon_v2_location_var_samp_order_by | null;
  variance?: pokemon_v2_location_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_location"
 */
export interface pokemon_v2_location_avg_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_location". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_location_bool_exp {
  _and?: pokemon_v2_location_bool_exp[] | null;
  _not?: pokemon_v2_location_bool_exp | null;
  _or?: pokemon_v2_location_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_locationareas?: pokemon_v2_locationarea_bool_exp | null;
  pokemon_v2_locationgameindices?: pokemon_v2_locationgameindex_bool_exp | null;
  pokemon_v2_locationnames?: pokemon_v2_locationname_bool_exp | null;
  pokemon_v2_pokemonevolutions?: pokemon_v2_pokemonevolution_bool_exp | null;
  pokemon_v2_region?: pokemon_v2_region_bool_exp | null;
  region_id?: Int_comparison_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_location"
 */
export interface pokemon_v2_location_max_order_by {
  id?: order_by | null;
  name?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_location"
 */
export interface pokemon_v2_location_min_order_by {
  id?: order_by | null;
  name?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_location"
 */
export interface pokemon_v2_location_stddev_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_location"
 */
export interface pokemon_v2_location_stddev_pop_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_location"
 */
export interface pokemon_v2_location_stddev_samp_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_location"
 */
export interface pokemon_v2_location_sum_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_location"
 */
export interface pokemon_v2_location_var_pop_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_location"
 */
export interface pokemon_v2_location_var_samp_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_location"
 */
export interface pokemon_v2_location_variance_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_locationarea". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_locationarea_bool_exp {
  _and?: pokemon_v2_locationarea_bool_exp[] | null;
  _not?: pokemon_v2_locationarea_bool_exp | null;
  _or?: pokemon_v2_locationarea_bool_exp[] | null;
  game_index?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  location_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_encounters?: pokemon_v2_encounter_bool_exp | null;
  pokemon_v2_location?: pokemon_v2_location_bool_exp | null;
  pokemon_v2_locationareaencounterrates?: pokemon_v2_locationareaencounterrate_bool_exp | null;
  pokemon_v2_locationareanames?: pokemon_v2_locationareaname_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_locationareaencounterrate". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_locationareaencounterrate_bool_exp {
  _and?: pokemon_v2_locationareaencounterrate_bool_exp[] | null;
  _not?: pokemon_v2_locationareaencounterrate_bool_exp | null;
  _or?: pokemon_v2_locationareaencounterrate_bool_exp[] | null;
  encounter_method_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  location_area_id?: Int_comparison_exp | null;
  pokemon_v2_encountermethod?: pokemon_v2_encountermethod_bool_exp | null;
  pokemon_v2_locationarea?: pokemon_v2_locationarea_bool_exp | null;
  pokemon_v2_version?: pokemon_v2_version_bool_exp | null;
  rate?: Int_comparison_exp | null;
  version_id?: Int_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_locationareaname". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_locationareaname_bool_exp {
  _and?: pokemon_v2_locationareaname_bool_exp[] | null;
  _not?: pokemon_v2_locationareaname_bool_exp | null;
  _or?: pokemon_v2_locationareaname_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  location_area_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_locationarea?: pokemon_v2_locationarea_bool_exp | null;
}

/**
 * order by aggregate values of table "pokemon_v2_locationgameindex"
 */
export interface pokemon_v2_locationgameindex_aggregate_order_by {
  avg?: pokemon_v2_locationgameindex_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_locationgameindex_max_order_by | null;
  min?: pokemon_v2_locationgameindex_min_order_by | null;
  stddev?: pokemon_v2_locationgameindex_stddev_order_by | null;
  stddev_pop?: pokemon_v2_locationgameindex_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_locationgameindex_stddev_samp_order_by | null;
  sum?: pokemon_v2_locationgameindex_sum_order_by | null;
  var_pop?: pokemon_v2_locationgameindex_var_pop_order_by | null;
  var_samp?: pokemon_v2_locationgameindex_var_samp_order_by | null;
  variance?: pokemon_v2_locationgameindex_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_locationgameindex"
 */
export interface pokemon_v2_locationgameindex_avg_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  location_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_locationgameindex". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_locationgameindex_bool_exp {
  _and?: pokemon_v2_locationgameindex_bool_exp[] | null;
  _not?: pokemon_v2_locationgameindex_bool_exp | null;
  _or?: pokemon_v2_locationgameindex_bool_exp[] | null;
  game_index?: Int_comparison_exp | null;
  generation_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  location_id?: Int_comparison_exp | null;
  pokemon_v2_generation?: pokemon_v2_generation_bool_exp | null;
  pokemon_v2_location?: pokemon_v2_location_bool_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_locationgameindex"
 */
export interface pokemon_v2_locationgameindex_max_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  location_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_locationgameindex"
 */
export interface pokemon_v2_locationgameindex_min_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  location_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_locationgameindex"
 */
export interface pokemon_v2_locationgameindex_stddev_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  location_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_locationgameindex"
 */
export interface pokemon_v2_locationgameindex_stddev_pop_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  location_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_locationgameindex"
 */
export interface pokemon_v2_locationgameindex_stddev_samp_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  location_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_locationgameindex"
 */
export interface pokemon_v2_locationgameindex_sum_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  location_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_locationgameindex"
 */
export interface pokemon_v2_locationgameindex_var_pop_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  location_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_locationgameindex"
 */
export interface pokemon_v2_locationgameindex_var_samp_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  location_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_locationgameindex"
 */
export interface pokemon_v2_locationgameindex_variance_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  location_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_locationname". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_locationname_bool_exp {
  _and?: pokemon_v2_locationname_bool_exp[] | null;
  _not?: pokemon_v2_locationname_bool_exp | null;
  _or?: pokemon_v2_locationname_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  location_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_location?: pokemon_v2_location_bool_exp | null;
}

/**
 * order by aggregate values of table "pokemon_v2_machine"
 */
export interface pokemon_v2_machine_aggregate_order_by {
  avg?: pokemon_v2_machine_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_machine_max_order_by | null;
  min?: pokemon_v2_machine_min_order_by | null;
  stddev?: pokemon_v2_machine_stddev_order_by | null;
  stddev_pop?: pokemon_v2_machine_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_machine_stddev_samp_order_by | null;
  sum?: pokemon_v2_machine_sum_order_by | null;
  var_pop?: pokemon_v2_machine_var_pop_order_by | null;
  var_samp?: pokemon_v2_machine_var_samp_order_by | null;
  variance?: pokemon_v2_machine_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_machine"
 */
export interface pokemon_v2_machine_avg_order_by {
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  machine_number?: order_by | null;
  move_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_machine". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_machine_bool_exp {
  _and?: pokemon_v2_machine_bool_exp[] | null;
  _not?: pokemon_v2_machine_bool_exp | null;
  _or?: pokemon_v2_machine_bool_exp[] | null;
  growth_rate_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  item_id?: Int_comparison_exp | null;
  machine_number?: Int_comparison_exp | null;
  move_id?: Int_comparison_exp | null;
  pokemon_v2_growthrate?: pokemon_v2_growthrate_bool_exp | null;
  pokemon_v2_item?: pokemon_v2_item_bool_exp | null;
  pokemon_v2_move?: pokemon_v2_move_bool_exp | null;
  pokemon_v2_versiongroup?: pokemon_v2_versiongroup_bool_exp | null;
  version_group_id?: Int_comparison_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_machine"
 */
export interface pokemon_v2_machine_max_order_by {
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  machine_number?: order_by | null;
  move_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_machine"
 */
export interface pokemon_v2_machine_min_order_by {
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  machine_number?: order_by | null;
  move_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_machine"
 */
export interface pokemon_v2_machine_stddev_order_by {
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  machine_number?: order_by | null;
  move_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_machine"
 */
export interface pokemon_v2_machine_stddev_pop_order_by {
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  machine_number?: order_by | null;
  move_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_machine"
 */
export interface pokemon_v2_machine_stddev_samp_order_by {
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  machine_number?: order_by | null;
  move_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_machine"
 */
export interface pokemon_v2_machine_sum_order_by {
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  machine_number?: order_by | null;
  move_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_machine"
 */
export interface pokemon_v2_machine_var_pop_order_by {
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  machine_number?: order_by | null;
  move_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_machine"
 */
export interface pokemon_v2_machine_var_samp_order_by {
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  machine_number?: order_by | null;
  move_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_machine"
 */
export interface pokemon_v2_machine_variance_order_by {
  growth_rate_id?: order_by | null;
  id?: order_by | null;
  item_id?: order_by | null;
  machine_number?: order_by | null;
  move_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_move"
 */
export interface pokemon_v2_move_aggregate_order_by {
  avg?: pokemon_v2_move_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_move_max_order_by | null;
  min?: pokemon_v2_move_min_order_by | null;
  stddev?: pokemon_v2_move_stddev_order_by | null;
  stddev_pop?: pokemon_v2_move_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_move_stddev_samp_order_by | null;
  sum?: pokemon_v2_move_sum_order_by | null;
  var_pop?: pokemon_v2_move_var_pop_order_by | null;
  var_samp?: pokemon_v2_move_var_samp_order_by | null;
  variance?: pokemon_v2_move_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_move"
 */
export interface pokemon_v2_move_avg_order_by {
  accuracy?: order_by | null;
  contest_effect_id?: order_by | null;
  contest_type_id?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
  move_effect_chance?: order_by | null;
  move_effect_id?: order_by | null;
  move_target_id?: order_by | null;
  power?: order_by | null;
  pp?: order_by | null;
  priority?: order_by | null;
  super_contest_effect_id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_move". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_move_bool_exp {
  _and?: pokemon_v2_move_bool_exp[] | null;
  _not?: pokemon_v2_move_bool_exp | null;
  _or?: pokemon_v2_move_bool_exp[] | null;
  accuracy?: Int_comparison_exp | null;
  contest_effect_id?: Int_comparison_exp | null;
  contest_type_id?: Int_comparison_exp | null;
  generation_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  move_damage_class_id?: Int_comparison_exp | null;
  move_effect_chance?: Int_comparison_exp | null;
  move_effect_id?: Int_comparison_exp | null;
  move_target_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemonV2ContestcombosBySecondMoveId?: pokemon_v2_contestcombo_bool_exp | null;
  pokemonV2SupercontestcombosBySecondMoveId?: pokemon_v2_supercontestcombo_bool_exp | null;
  pokemon_v2_contestcombos?: pokemon_v2_contestcombo_bool_exp | null;
  pokemon_v2_contesteffect?: pokemon_v2_contesteffect_bool_exp | null;
  pokemon_v2_contesttype?: pokemon_v2_contesttype_bool_exp | null;
  pokemon_v2_generation?: pokemon_v2_generation_bool_exp | null;
  pokemon_v2_machines?: pokemon_v2_machine_bool_exp | null;
  pokemon_v2_moveattributemaps?: pokemon_v2_moveattributemap_bool_exp | null;
  pokemon_v2_movechanges?: pokemon_v2_movechange_bool_exp | null;
  pokemon_v2_movedamageclass?: pokemon_v2_movedamageclass_bool_exp | null;
  pokemon_v2_moveeffect?: pokemon_v2_moveeffect_bool_exp | null;
  pokemon_v2_moveflavortexts?: pokemon_v2_moveflavortext_bool_exp | null;
  pokemon_v2_movemeta?: pokemon_v2_movemeta_bool_exp | null;
  pokemon_v2_movemetastatchanges?: pokemon_v2_movemetastatchange_bool_exp | null;
  pokemon_v2_movemetum?: pokemon_v2_movemeta_bool_exp | null;
  pokemon_v2_movenames?: pokemon_v2_movename_bool_exp | null;
  pokemon_v2_movetarget?: pokemon_v2_movetarget_bool_exp | null;
  pokemon_v2_pokemonevolutions?: pokemon_v2_pokemonevolution_bool_exp | null;
  pokemon_v2_pokemonmoves?: pokemon_v2_pokemonmove_bool_exp | null;
  pokemon_v2_supercontestcombos?: pokemon_v2_supercontestcombo_bool_exp | null;
  pokemon_v2_supercontesteffect?: pokemon_v2_supercontesteffect_bool_exp | null;
  pokemon_v2_type?: pokemon_v2_type_bool_exp | null;
  power?: Int_comparison_exp | null;
  pp?: Int_comparison_exp | null;
  priority?: Int_comparison_exp | null;
  super_contest_effect_id?: Int_comparison_exp | null;
  type_id?: Int_comparison_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_move"
 */
export interface pokemon_v2_move_max_order_by {
  accuracy?: order_by | null;
  contest_effect_id?: order_by | null;
  contest_type_id?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
  move_effect_chance?: order_by | null;
  move_effect_id?: order_by | null;
  move_target_id?: order_by | null;
  name?: order_by | null;
  power?: order_by | null;
  pp?: order_by | null;
  priority?: order_by | null;
  super_contest_effect_id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_move"
 */
export interface pokemon_v2_move_min_order_by {
  accuracy?: order_by | null;
  contest_effect_id?: order_by | null;
  contest_type_id?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
  move_effect_chance?: order_by | null;
  move_effect_id?: order_by | null;
  move_target_id?: order_by | null;
  name?: order_by | null;
  power?: order_by | null;
  pp?: order_by | null;
  priority?: order_by | null;
  super_contest_effect_id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_move"
 */
export interface pokemon_v2_move_stddev_order_by {
  accuracy?: order_by | null;
  contest_effect_id?: order_by | null;
  contest_type_id?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
  move_effect_chance?: order_by | null;
  move_effect_id?: order_by | null;
  move_target_id?: order_by | null;
  power?: order_by | null;
  pp?: order_by | null;
  priority?: order_by | null;
  super_contest_effect_id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_move"
 */
export interface pokemon_v2_move_stddev_pop_order_by {
  accuracy?: order_by | null;
  contest_effect_id?: order_by | null;
  contest_type_id?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
  move_effect_chance?: order_by | null;
  move_effect_id?: order_by | null;
  move_target_id?: order_by | null;
  power?: order_by | null;
  pp?: order_by | null;
  priority?: order_by | null;
  super_contest_effect_id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_move"
 */
export interface pokemon_v2_move_stddev_samp_order_by {
  accuracy?: order_by | null;
  contest_effect_id?: order_by | null;
  contest_type_id?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
  move_effect_chance?: order_by | null;
  move_effect_id?: order_by | null;
  move_target_id?: order_by | null;
  power?: order_by | null;
  pp?: order_by | null;
  priority?: order_by | null;
  super_contest_effect_id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_move"
 */
export interface pokemon_v2_move_sum_order_by {
  accuracy?: order_by | null;
  contest_effect_id?: order_by | null;
  contest_type_id?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
  move_effect_chance?: order_by | null;
  move_effect_id?: order_by | null;
  move_target_id?: order_by | null;
  power?: order_by | null;
  pp?: order_by | null;
  priority?: order_by | null;
  super_contest_effect_id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_move"
 */
export interface pokemon_v2_move_var_pop_order_by {
  accuracy?: order_by | null;
  contest_effect_id?: order_by | null;
  contest_type_id?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
  move_effect_chance?: order_by | null;
  move_effect_id?: order_by | null;
  move_target_id?: order_by | null;
  power?: order_by | null;
  pp?: order_by | null;
  priority?: order_by | null;
  super_contest_effect_id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_move"
 */
export interface pokemon_v2_move_var_samp_order_by {
  accuracy?: order_by | null;
  contest_effect_id?: order_by | null;
  contest_type_id?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
  move_effect_chance?: order_by | null;
  move_effect_id?: order_by | null;
  move_target_id?: order_by | null;
  power?: order_by | null;
  pp?: order_by | null;
  priority?: order_by | null;
  super_contest_effect_id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_move"
 */
export interface pokemon_v2_move_variance_order_by {
  accuracy?: order_by | null;
  contest_effect_id?: order_by | null;
  contest_type_id?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
  move_effect_chance?: order_by | null;
  move_effect_id?: order_by | null;
  move_target_id?: order_by | null;
  power?: order_by | null;
  pp?: order_by | null;
  priority?: order_by | null;
  super_contest_effect_id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_moveattribute". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_moveattribute_bool_exp {
  _and?: pokemon_v2_moveattribute_bool_exp[] | null;
  _not?: pokemon_v2_moveattribute_bool_exp | null;
  _or?: pokemon_v2_moveattribute_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_moveattributedescriptions?: pokemon_v2_moveattributedescription_bool_exp | null;
  pokemon_v2_moveattributemaps?: pokemon_v2_moveattributemap_bool_exp | null;
  pokemon_v2_moveattributenames?: pokemon_v2_moveattributename_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_moveattributedescription". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_moveattributedescription_bool_exp {
  _and?: pokemon_v2_moveattributedescription_bool_exp[] | null;
  _not?: pokemon_v2_moveattributedescription_bool_exp | null;
  _or?: pokemon_v2_moveattributedescription_bool_exp[] | null;
  description?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  move_attribute_id?: Int_comparison_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_moveattribute?: pokemon_v2_moveattribute_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_moveattributemap". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_moveattributemap_bool_exp {
  _and?: pokemon_v2_moveattributemap_bool_exp[] | null;
  _not?: pokemon_v2_moveattributemap_bool_exp | null;
  _or?: pokemon_v2_moveattributemap_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  move_attribute_id?: Int_comparison_exp | null;
  move_id?: Int_comparison_exp | null;
  pokemon_v2_move?: pokemon_v2_move_bool_exp | null;
  pokemon_v2_moveattribute?: pokemon_v2_moveattribute_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_moveattributename". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_moveattributename_bool_exp {
  _and?: pokemon_v2_moveattributename_bool_exp[] | null;
  _not?: pokemon_v2_moveattributename_bool_exp | null;
  _or?: pokemon_v2_moveattributename_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  move_attribute_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_moveattribute?: pokemon_v2_moveattribute_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_movebattlestyle". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_movebattlestyle_bool_exp {
  _and?: pokemon_v2_movebattlestyle_bool_exp[] | null;
  _not?: pokemon_v2_movebattlestyle_bool_exp | null;
  _or?: pokemon_v2_movebattlestyle_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_movebattlestylenames?: pokemon_v2_movebattlestylename_bool_exp | null;
  pokemon_v2_naturebattlestylepreferences?: pokemon_v2_naturebattlestylepreference_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_movebattlestylename". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_movebattlestylename_bool_exp {
  _and?: pokemon_v2_movebattlestylename_bool_exp[] | null;
  _not?: pokemon_v2_movebattlestylename_bool_exp | null;
  _or?: pokemon_v2_movebattlestylename_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  move_battle_style_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_movebattlestyle?: pokemon_v2_movebattlestyle_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_movechange". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_movechange_bool_exp {
  _and?: pokemon_v2_movechange_bool_exp[] | null;
  _not?: pokemon_v2_movechange_bool_exp | null;
  _or?: pokemon_v2_movechange_bool_exp[] | null;
  accuracy?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  move_effect_chance?: Int_comparison_exp | null;
  move_effect_id?: Int_comparison_exp | null;
  move_id?: Int_comparison_exp | null;
  pokemon_v2_move?: pokemon_v2_move_bool_exp | null;
  pokemon_v2_moveeffect?: pokemon_v2_moveeffect_bool_exp | null;
  pokemon_v2_type?: pokemon_v2_type_bool_exp | null;
  pokemon_v2_versiongroup?: pokemon_v2_versiongroup_bool_exp | null;
  power?: Int_comparison_exp | null;
  pp?: Int_comparison_exp | null;
  type_id?: Int_comparison_exp | null;
  version_group_id?: Int_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_movedamageclass". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_movedamageclass_bool_exp {
  _and?: pokemon_v2_movedamageclass_bool_exp[] | null;
  _not?: pokemon_v2_movedamageclass_bool_exp | null;
  _or?: pokemon_v2_movedamageclass_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_movedamageclassdescriptions?: pokemon_v2_movedamageclassdescription_bool_exp | null;
  pokemon_v2_movedamageclassnames?: pokemon_v2_movedamageclassname_bool_exp | null;
  pokemon_v2_moves?: pokemon_v2_move_bool_exp | null;
  pokemon_v2_stats?: pokemon_v2_stat_bool_exp | null;
  pokemon_v2_types?: pokemon_v2_type_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_movedamageclassdescription". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_movedamageclassdescription_bool_exp {
  _and?: pokemon_v2_movedamageclassdescription_bool_exp[] | null;
  _not?: pokemon_v2_movedamageclassdescription_bool_exp | null;
  _or?: pokemon_v2_movedamageclassdescription_bool_exp[] | null;
  description?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  move_damage_class_id?: Int_comparison_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_movedamageclass?: pokemon_v2_movedamageclass_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_movedamageclassname". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_movedamageclassname_bool_exp {
  _and?: pokemon_v2_movedamageclassname_bool_exp[] | null;
  _not?: pokemon_v2_movedamageclassname_bool_exp | null;
  _or?: pokemon_v2_movedamageclassname_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  move_damage_class_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_movedamageclass?: pokemon_v2_movedamageclass_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_moveeffect". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_moveeffect_bool_exp {
  _and?: pokemon_v2_moveeffect_bool_exp[] | null;
  _not?: pokemon_v2_moveeffect_bool_exp | null;
  _or?: pokemon_v2_moveeffect_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  pokemon_v2_movechanges?: pokemon_v2_movechange_bool_exp | null;
  pokemon_v2_moveeffectchanges?: pokemon_v2_moveeffectchange_bool_exp | null;
  pokemon_v2_moveeffecteffecttexts?: pokemon_v2_moveeffecteffecttext_bool_exp | null;
  pokemon_v2_moves?: pokemon_v2_move_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_moveeffectchange". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_moveeffectchange_bool_exp {
  _and?: pokemon_v2_moveeffectchange_bool_exp[] | null;
  _not?: pokemon_v2_moveeffectchange_bool_exp | null;
  _or?: pokemon_v2_moveeffectchange_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  move_effect_id?: Int_comparison_exp | null;
  pokemon_v2_moveeffect?: pokemon_v2_moveeffect_bool_exp | null;
  pokemon_v2_moveeffectchangeeffecttexts?: pokemon_v2_moveeffectchangeeffecttext_bool_exp | null;
  pokemon_v2_versiongroup?: pokemon_v2_versiongroup_bool_exp | null;
  version_group_id?: Int_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_moveeffectchangeeffecttext". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_moveeffectchangeeffecttext_bool_exp {
  _and?: pokemon_v2_moveeffectchangeeffecttext_bool_exp[] | null;
  _not?: pokemon_v2_moveeffectchangeeffecttext_bool_exp | null;
  _or?: pokemon_v2_moveeffectchangeeffecttext_bool_exp[] | null;
  effect?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  move_effect_change_id?: Int_comparison_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_moveeffectchange?: pokemon_v2_moveeffectchange_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_moveeffecteffecttext". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_moveeffecteffecttext_bool_exp {
  _and?: pokemon_v2_moveeffecteffecttext_bool_exp[] | null;
  _not?: pokemon_v2_moveeffecteffecttext_bool_exp | null;
  _or?: pokemon_v2_moveeffecteffecttext_bool_exp[] | null;
  effect?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  move_effect_id?: Int_comparison_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_moveeffect?: pokemon_v2_moveeffect_bool_exp | null;
  short_effect?: String_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_moveflavortext". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_moveflavortext_bool_exp {
  _and?: pokemon_v2_moveflavortext_bool_exp[] | null;
  _not?: pokemon_v2_moveflavortext_bool_exp | null;
  _or?: pokemon_v2_moveflavortext_bool_exp[] | null;
  flavor_text?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  move_id?: Int_comparison_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_move?: pokemon_v2_move_bool_exp | null;
  pokemon_v2_versiongroup?: pokemon_v2_versiongroup_bool_exp | null;
  version_group_id?: Int_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_movelearnmethod". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_movelearnmethod_bool_exp {
  _and?: pokemon_v2_movelearnmethod_bool_exp[] | null;
  _not?: pokemon_v2_movelearnmethod_bool_exp | null;
  _or?: pokemon_v2_movelearnmethod_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_movelearnmethoddescriptions?: pokemon_v2_movelearnmethoddescription_bool_exp | null;
  pokemon_v2_movelearnmethodnames?: pokemon_v2_movelearnmethodname_bool_exp | null;
  pokemon_v2_pokemonmoves?: pokemon_v2_pokemonmove_bool_exp | null;
  pokemon_v2_versiongroupmovelearnmethods?: pokemon_v2_versiongroupmovelearnmethod_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_movelearnmethoddescription". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_movelearnmethoddescription_bool_exp {
  _and?: pokemon_v2_movelearnmethoddescription_bool_exp[] | null;
  _not?: pokemon_v2_movelearnmethoddescription_bool_exp | null;
  _or?: pokemon_v2_movelearnmethoddescription_bool_exp[] | null;
  description?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  move_learn_method_id?: Int_comparison_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_movelearnmethod?: pokemon_v2_movelearnmethod_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_movelearnmethodname". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_movelearnmethodname_bool_exp {
  _and?: pokemon_v2_movelearnmethodname_bool_exp[] | null;
  _not?: pokemon_v2_movelearnmethodname_bool_exp | null;
  _or?: pokemon_v2_movelearnmethodname_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  move_learn_method_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_movelearnmethod?: pokemon_v2_movelearnmethod_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_movemeta". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_movemeta_bool_exp {
  _and?: pokemon_v2_movemeta_bool_exp[] | null;
  _not?: pokemon_v2_movemeta_bool_exp | null;
  _or?: pokemon_v2_movemeta_bool_exp[] | null;
  ailment_chance?: Int_comparison_exp | null;
  crit_rate?: Int_comparison_exp | null;
  drain?: Int_comparison_exp | null;
  flinch_chance?: Int_comparison_exp | null;
  healing?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  max_hits?: Int_comparison_exp | null;
  max_turns?: Int_comparison_exp | null;
  min_hits?: Int_comparison_exp | null;
  min_turns?: Int_comparison_exp | null;
  move_id?: Int_comparison_exp | null;
  move_meta_ailment_id?: Int_comparison_exp | null;
  move_meta_category_id?: Int_comparison_exp | null;
  pokemon_v2_move?: pokemon_v2_move_bool_exp | null;
  pokemon_v2_movemetaailment?: pokemon_v2_movemetaailment_bool_exp | null;
  pokemon_v2_movemetacategory?: pokemon_v2_movemetacategory_bool_exp | null;
  stat_chance?: Int_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_movemetaailment". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_movemetaailment_bool_exp {
  _and?: pokemon_v2_movemetaailment_bool_exp[] | null;
  _not?: pokemon_v2_movemetaailment_bool_exp | null;
  _or?: pokemon_v2_movemetaailment_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_movemeta?: pokemon_v2_movemeta_bool_exp | null;
  pokemon_v2_movemetaailmentnames?: pokemon_v2_movemetaailmentname_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_movemetaailmentname". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_movemetaailmentname_bool_exp {
  _and?: pokemon_v2_movemetaailmentname_bool_exp[] | null;
  _not?: pokemon_v2_movemetaailmentname_bool_exp | null;
  _or?: pokemon_v2_movemetaailmentname_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  move_meta_ailment_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_movemetaailment?: pokemon_v2_movemetaailment_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_movemetacategory". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_movemetacategory_bool_exp {
  _and?: pokemon_v2_movemetacategory_bool_exp[] | null;
  _not?: pokemon_v2_movemetacategory_bool_exp | null;
  _or?: pokemon_v2_movemetacategory_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_movemeta?: pokemon_v2_movemeta_bool_exp | null;
  pokemon_v2_movemetacategorydescriptions?: pokemon_v2_movemetacategorydescription_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_movemetacategorydescription". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_movemetacategorydescription_bool_exp {
  _and?: pokemon_v2_movemetacategorydescription_bool_exp[] | null;
  _not?: pokemon_v2_movemetacategorydescription_bool_exp | null;
  _or?: pokemon_v2_movemetacategorydescription_bool_exp[] | null;
  description?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  move_meta_category_id?: Int_comparison_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_movemetacategory?: pokemon_v2_movemetacategory_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_movemetastatchange". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_movemetastatchange_bool_exp {
  _and?: pokemon_v2_movemetastatchange_bool_exp[] | null;
  _not?: pokemon_v2_movemetastatchange_bool_exp | null;
  _or?: pokemon_v2_movemetastatchange_bool_exp[] | null;
  change?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  move_id?: Int_comparison_exp | null;
  pokemon_v2_move?: pokemon_v2_move_bool_exp | null;
  pokemon_v2_stat?: pokemon_v2_stat_bool_exp | null;
  stat_id?: Int_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_movename". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_movename_bool_exp {
  _and?: pokemon_v2_movename_bool_exp[] | null;
  _not?: pokemon_v2_movename_bool_exp | null;
  _or?: pokemon_v2_movename_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  move_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_move?: pokemon_v2_move_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_movetarget". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_movetarget_bool_exp {
  _and?: pokemon_v2_movetarget_bool_exp[] | null;
  _not?: pokemon_v2_movetarget_bool_exp | null;
  _or?: pokemon_v2_movetarget_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_moves?: pokemon_v2_move_bool_exp | null;
  pokemon_v2_movetargetdescriptions?: pokemon_v2_movetargetdescription_bool_exp | null;
  pokemon_v2_movetargetnames?: pokemon_v2_movetargetname_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_movetargetdescription". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_movetargetdescription_bool_exp {
  _and?: pokemon_v2_movetargetdescription_bool_exp[] | null;
  _not?: pokemon_v2_movetargetdescription_bool_exp | null;
  _or?: pokemon_v2_movetargetdescription_bool_exp[] | null;
  description?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  move_target_id?: Int_comparison_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_movetarget?: pokemon_v2_movetarget_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_movetargetname". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_movetargetname_bool_exp {
  _and?: pokemon_v2_movetargetname_bool_exp[] | null;
  _not?: pokemon_v2_movetargetname_bool_exp | null;
  _or?: pokemon_v2_movetargetname_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  move_target_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_movetarget?: pokemon_v2_movetarget_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_nature". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_nature_bool_exp {
  _and?: pokemon_v2_nature_bool_exp[] | null;
  _not?: pokemon_v2_nature_bool_exp | null;
  _or?: pokemon_v2_nature_bool_exp[] | null;
  decreased_stat_id?: Int_comparison_exp | null;
  game_index?: Int_comparison_exp | null;
  hates_flavor_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  increased_stat_id?: Int_comparison_exp | null;
  likes_flavor_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemonV2BerryflavorByLikesFlavorId?: pokemon_v2_berryflavor_bool_exp | null;
  pokemonV2StatByIncreasedStatId?: pokemon_v2_stat_bool_exp | null;
  pokemon_v2_berryflavor?: pokemon_v2_berryflavor_bool_exp | null;
  pokemon_v2_naturebattlestylepreferences?: pokemon_v2_naturebattlestylepreference_bool_exp | null;
  pokemon_v2_naturenames?: pokemon_v2_naturename_bool_exp | null;
  pokemon_v2_naturepokeathlonstats?: pokemon_v2_naturepokeathlonstat_bool_exp | null;
  pokemon_v2_stat?: pokemon_v2_stat_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_naturebattlestylepreference". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_naturebattlestylepreference_bool_exp {
  _and?: pokemon_v2_naturebattlestylepreference_bool_exp[] | null;
  _not?: pokemon_v2_naturebattlestylepreference_bool_exp | null;
  _or?: pokemon_v2_naturebattlestylepreference_bool_exp[] | null;
  high_hp_preference?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  low_hp_preference?: Int_comparison_exp | null;
  move_battle_style_id?: Int_comparison_exp | null;
  nature_id?: Int_comparison_exp | null;
  pokemon_v2_movebattlestyle?: pokemon_v2_movebattlestyle_bool_exp | null;
  pokemon_v2_nature?: pokemon_v2_nature_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_naturename". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_naturename_bool_exp {
  _and?: pokemon_v2_naturename_bool_exp[] | null;
  _not?: pokemon_v2_naturename_bool_exp | null;
  _or?: pokemon_v2_naturename_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  nature_id?: Int_comparison_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_nature?: pokemon_v2_nature_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_naturepokeathlonstat". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_naturepokeathlonstat_bool_exp {
  _and?: pokemon_v2_naturepokeathlonstat_bool_exp[] | null;
  _not?: pokemon_v2_naturepokeathlonstat_bool_exp | null;
  _or?: pokemon_v2_naturepokeathlonstat_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  max_change?: Int_comparison_exp | null;
  nature_id?: Int_comparison_exp | null;
  pokeathlon_stat_id?: Int_comparison_exp | null;
  pokemon_v2_nature?: pokemon_v2_nature_bool_exp | null;
  pokemon_v2_pokeathlonstat?: pokemon_v2_pokeathlonstat_bool_exp | null;
}

/**
 * order by aggregate values of table "pokemon_v2_palpark"
 */
export interface pokemon_v2_palpark_aggregate_order_by {
  avg?: pokemon_v2_palpark_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_palpark_max_order_by | null;
  min?: pokemon_v2_palpark_min_order_by | null;
  stddev?: pokemon_v2_palpark_stddev_order_by | null;
  stddev_pop?: pokemon_v2_palpark_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_palpark_stddev_samp_order_by | null;
  sum?: pokemon_v2_palpark_sum_order_by | null;
  var_pop?: pokemon_v2_palpark_var_pop_order_by | null;
  var_samp?: pokemon_v2_palpark_var_samp_order_by | null;
  variance?: pokemon_v2_palpark_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_palpark"
 */
export interface pokemon_v2_palpark_avg_order_by {
  base_score?: order_by | null;
  id?: order_by | null;
  pal_park_area_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  rate?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_palpark". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_palpark_bool_exp {
  _and?: pokemon_v2_palpark_bool_exp[] | null;
  _not?: pokemon_v2_palpark_bool_exp | null;
  _or?: pokemon_v2_palpark_bool_exp[] | null;
  base_score?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  pal_park_area_id?: Int_comparison_exp | null;
  pokemon_species_id?: Int_comparison_exp | null;
  pokemon_v2_palparkarea?: pokemon_v2_palparkarea_bool_exp | null;
  pokemon_v2_pokemonspecy?: pokemon_v2_pokemonspecies_bool_exp | null;
  rate?: Int_comparison_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_palpark"
 */
export interface pokemon_v2_palpark_max_order_by {
  base_score?: order_by | null;
  id?: order_by | null;
  pal_park_area_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  rate?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_palpark"
 */
export interface pokemon_v2_palpark_min_order_by {
  base_score?: order_by | null;
  id?: order_by | null;
  pal_park_area_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  rate?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_palpark"
 */
export interface pokemon_v2_palpark_stddev_order_by {
  base_score?: order_by | null;
  id?: order_by | null;
  pal_park_area_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  rate?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_palpark"
 */
export interface pokemon_v2_palpark_stddev_pop_order_by {
  base_score?: order_by | null;
  id?: order_by | null;
  pal_park_area_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  rate?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_palpark"
 */
export interface pokemon_v2_palpark_stddev_samp_order_by {
  base_score?: order_by | null;
  id?: order_by | null;
  pal_park_area_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  rate?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_palpark"
 */
export interface pokemon_v2_palpark_sum_order_by {
  base_score?: order_by | null;
  id?: order_by | null;
  pal_park_area_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  rate?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_palpark"
 */
export interface pokemon_v2_palpark_var_pop_order_by {
  base_score?: order_by | null;
  id?: order_by | null;
  pal_park_area_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  rate?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_palpark"
 */
export interface pokemon_v2_palpark_var_samp_order_by {
  base_score?: order_by | null;
  id?: order_by | null;
  pal_park_area_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  rate?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_palpark"
 */
export interface pokemon_v2_palpark_variance_order_by {
  base_score?: order_by | null;
  id?: order_by | null;
  pal_park_area_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  rate?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_palparkarea". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_palparkarea_bool_exp {
  _and?: pokemon_v2_palparkarea_bool_exp[] | null;
  _not?: pokemon_v2_palparkarea_bool_exp | null;
  _or?: pokemon_v2_palparkarea_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_palparkareanames?: pokemon_v2_palparkareaname_bool_exp | null;
  pokemon_v2_palparks?: pokemon_v2_palpark_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_palparkareaname". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_palparkareaname_bool_exp {
  _and?: pokemon_v2_palparkareaname_bool_exp[] | null;
  _not?: pokemon_v2_palparkareaname_bool_exp | null;
  _or?: pokemon_v2_palparkareaname_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pal_park_area_id?: Int_comparison_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_palparkarea?: pokemon_v2_palparkarea_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_pokeathlonstat". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_pokeathlonstat_bool_exp {
  _and?: pokemon_v2_pokeathlonstat_bool_exp[] | null;
  _not?: pokemon_v2_pokeathlonstat_bool_exp | null;
  _or?: pokemon_v2_pokeathlonstat_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_naturepokeathlonstats?: pokemon_v2_naturepokeathlonstat_bool_exp | null;
  pokemon_v2_pokeathlonstatnames?: pokemon_v2_pokeathlonstatname_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_pokeathlonstatname". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_pokeathlonstatname_bool_exp {
  _and?: pokemon_v2_pokeathlonstatname_bool_exp[] | null;
  _not?: pokemon_v2_pokeathlonstatname_bool_exp | null;
  _or?: pokemon_v2_pokeathlonstatname_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokeathlon_stat_id?: Int_comparison_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_pokeathlonstat?: pokemon_v2_pokeathlonstat_bool_exp | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokedex"
 */
export interface pokemon_v2_pokedex_aggregate_order_by {
  avg?: pokemon_v2_pokedex_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokedex_max_order_by | null;
  min?: pokemon_v2_pokedex_min_order_by | null;
  stddev?: pokemon_v2_pokedex_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokedex_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokedex_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokedex_sum_order_by | null;
  var_pop?: pokemon_v2_pokedex_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokedex_var_samp_order_by | null;
  variance?: pokemon_v2_pokedex_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokedex"
 */
export interface pokemon_v2_pokedex_avg_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_pokedex". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_pokedex_bool_exp {
  _and?: pokemon_v2_pokedex_bool_exp[] | null;
  _not?: pokemon_v2_pokedex_bool_exp | null;
  _or?: pokemon_v2_pokedex_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  is_main_series?: Boolean_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_pokedexdescriptions?: pokemon_v2_pokedexdescription_bool_exp | null;
  pokemon_v2_pokedexnames?: pokemon_v2_pokedexname_bool_exp | null;
  pokemon_v2_pokedexversiongroups?: pokemon_v2_pokedexversiongroup_bool_exp | null;
  pokemon_v2_pokemondexnumbers?: pokemon_v2_pokemondexnumber_bool_exp | null;
  pokemon_v2_region?: pokemon_v2_region_bool_exp | null;
  region_id?: Int_comparison_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokedex"
 */
export interface pokemon_v2_pokedex_max_order_by {
  id?: order_by | null;
  name?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokedex"
 */
export interface pokemon_v2_pokedex_min_order_by {
  id?: order_by | null;
  name?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokedex"
 */
export interface pokemon_v2_pokedex_stddev_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokedex"
 */
export interface pokemon_v2_pokedex_stddev_pop_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokedex"
 */
export interface pokemon_v2_pokedex_stddev_samp_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokedex"
 */
export interface pokemon_v2_pokedex_sum_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokedex"
 */
export interface pokemon_v2_pokedex_var_pop_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokedex"
 */
export interface pokemon_v2_pokedex_var_samp_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokedex"
 */
export interface pokemon_v2_pokedex_variance_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_pokedexdescription". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_pokedexdescription_bool_exp {
  _and?: pokemon_v2_pokedexdescription_bool_exp[] | null;
  _not?: pokemon_v2_pokedexdescription_bool_exp | null;
  _or?: pokemon_v2_pokedexdescription_bool_exp[] | null;
  description?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  pokedex_id?: Int_comparison_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_pokedex?: pokemon_v2_pokedex_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_pokedexname". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_pokedexname_bool_exp {
  _and?: pokemon_v2_pokedexname_bool_exp[] | null;
  _not?: pokemon_v2_pokedexname_bool_exp | null;
  _or?: pokemon_v2_pokedexname_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokedex_id?: Int_comparison_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_pokedex?: pokemon_v2_pokedex_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_pokedexversiongroup". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_pokedexversiongroup_bool_exp {
  _and?: pokemon_v2_pokedexversiongroup_bool_exp[] | null;
  _not?: pokemon_v2_pokedexversiongroup_bool_exp | null;
  _or?: pokemon_v2_pokedexversiongroup_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  pokedex_id?: Int_comparison_exp | null;
  pokemon_v2_pokedex?: pokemon_v2_pokedex_bool_exp | null;
  pokemon_v2_versiongroup?: pokemon_v2_versiongroup_bool_exp | null;
  version_group_id?: Int_comparison_exp | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokemon"
 */
export interface pokemon_v2_pokemon_aggregate_order_by {
  avg?: pokemon_v2_pokemon_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokemon_max_order_by | null;
  min?: pokemon_v2_pokemon_min_order_by | null;
  stddev?: pokemon_v2_pokemon_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokemon_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokemon_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokemon_sum_order_by | null;
  var_pop?: pokemon_v2_pokemon_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokemon_var_samp_order_by | null;
  variance?: pokemon_v2_pokemon_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokemon"
 */
export interface pokemon_v2_pokemon_avg_order_by {
  base_experience?: order_by | null;
  height?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_species_id?: order_by | null;
  weight?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_pokemon". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_pokemon_bool_exp {
  _and?: pokemon_v2_pokemon_bool_exp[] | null;
  _not?: pokemon_v2_pokemon_bool_exp | null;
  _or?: pokemon_v2_pokemon_bool_exp[] | null;
  base_experience?: Int_comparison_exp | null;
  height?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  is_default?: Boolean_comparison_exp | null;
  name?: String_comparison_exp | null;
  order?: Int_comparison_exp | null;
  pokemon_species_id?: Int_comparison_exp | null;
  pokemon_v2_encounters?: pokemon_v2_encounter_bool_exp | null;
  pokemon_v2_pokemonabilities?: pokemon_v2_pokemonability_bool_exp | null;
  pokemon_v2_pokemonforms?: pokemon_v2_pokemonform_bool_exp | null;
  pokemon_v2_pokemongameindices?: pokemon_v2_pokemongameindex_bool_exp | null;
  pokemon_v2_pokemonitems?: pokemon_v2_pokemonitem_bool_exp | null;
  pokemon_v2_pokemonmoves?: pokemon_v2_pokemonmove_bool_exp | null;
  pokemon_v2_pokemonspecy?: pokemon_v2_pokemonspecies_bool_exp | null;
  pokemon_v2_pokemonsprites?: pokemon_v2_pokemonsprites_bool_exp | null;
  pokemon_v2_pokemonstats?: pokemon_v2_pokemonstat_bool_exp | null;
  pokemon_v2_pokemontypepasts?: pokemon_v2_pokemontypepast_bool_exp | null;
  pokemon_v2_pokemontypes?: pokemon_v2_pokemontype_bool_exp | null;
  weight?: Int_comparison_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokemon"
 */
export interface pokemon_v2_pokemon_max_order_by {
  base_experience?: order_by | null;
  height?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
  order?: order_by | null;
  pokemon_species_id?: order_by | null;
  weight?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokemon"
 */
export interface pokemon_v2_pokemon_min_order_by {
  base_experience?: order_by | null;
  height?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
  order?: order_by | null;
  pokemon_species_id?: order_by | null;
  weight?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokemon"
 */
export interface pokemon_v2_pokemon_stddev_order_by {
  base_experience?: order_by | null;
  height?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_species_id?: order_by | null;
  weight?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokemon"
 */
export interface pokemon_v2_pokemon_stddev_pop_order_by {
  base_experience?: order_by | null;
  height?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_species_id?: order_by | null;
  weight?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokemon"
 */
export interface pokemon_v2_pokemon_stddev_samp_order_by {
  base_experience?: order_by | null;
  height?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_species_id?: order_by | null;
  weight?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokemon"
 */
export interface pokemon_v2_pokemon_sum_order_by {
  base_experience?: order_by | null;
  height?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_species_id?: order_by | null;
  weight?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokemon"
 */
export interface pokemon_v2_pokemon_var_pop_order_by {
  base_experience?: order_by | null;
  height?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_species_id?: order_by | null;
  weight?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokemon"
 */
export interface pokemon_v2_pokemon_var_samp_order_by {
  base_experience?: order_by | null;
  height?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_species_id?: order_by | null;
  weight?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokemon"
 */
export interface pokemon_v2_pokemon_variance_order_by {
  base_experience?: order_by | null;
  height?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_species_id?: order_by | null;
  weight?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_pokemonability". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_pokemonability_bool_exp {
  _and?: pokemon_v2_pokemonability_bool_exp[] | null;
  _not?: pokemon_v2_pokemonability_bool_exp | null;
  _or?: pokemon_v2_pokemonability_bool_exp[] | null;
  ability_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  is_hidden?: Boolean_comparison_exp | null;
  pokemon_id?: Int_comparison_exp | null;
  pokemon_v2_ability?: pokemon_v2_ability_bool_exp | null;
  pokemon_v2_pokemon?: pokemon_v2_pokemon_bool_exp | null;
  slot?: Int_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_pokemoncolor". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_pokemoncolor_bool_exp {
  _and?: pokemon_v2_pokemoncolor_bool_exp[] | null;
  _not?: pokemon_v2_pokemoncolor_bool_exp | null;
  _or?: pokemon_v2_pokemoncolor_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_pokemoncolornames?: pokemon_v2_pokemoncolorname_bool_exp | null;
  pokemon_v2_pokemonspecies?: pokemon_v2_pokemonspecies_bool_exp | null;
}

/**
 * Ordering options when selecting data from "pokemon_v2_pokemoncolor".
 */
export interface pokemon_v2_pokemoncolor_order_by {
  id?: order_by | null;
  name?: order_by | null;
  pokemon_v2_pokemoncolornames_aggregate?: pokemon_v2_pokemoncolorname_aggregate_order_by | null;
  pokemon_v2_pokemonspecies_aggregate?: pokemon_v2_pokemonspecies_aggregate_order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokemoncolorname"
 */
export interface pokemon_v2_pokemoncolorname_aggregate_order_by {
  avg?: pokemon_v2_pokemoncolorname_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokemoncolorname_max_order_by | null;
  min?: pokemon_v2_pokemoncolorname_min_order_by | null;
  stddev?: pokemon_v2_pokemoncolorname_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokemoncolorname_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokemoncolorname_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokemoncolorname_sum_order_by | null;
  var_pop?: pokemon_v2_pokemoncolorname_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokemoncolorname_var_samp_order_by | null;
  variance?: pokemon_v2_pokemoncolorname_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokemoncolorname"
 */
export interface pokemon_v2_pokemoncolorname_avg_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_color_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_pokemoncolorname". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_pokemoncolorname_bool_exp {
  _and?: pokemon_v2_pokemoncolorname_bool_exp[] | null;
  _not?: pokemon_v2_pokemoncolorname_bool_exp | null;
  _or?: pokemon_v2_pokemoncolorname_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_color_id?: Int_comparison_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_pokemoncolor?: pokemon_v2_pokemoncolor_bool_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokemoncolorname"
 */
export interface pokemon_v2_pokemoncolorname_max_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  name?: order_by | null;
  pokemon_color_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokemoncolorname"
 */
export interface pokemon_v2_pokemoncolorname_min_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  name?: order_by | null;
  pokemon_color_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokemoncolorname"
 */
export interface pokemon_v2_pokemoncolorname_stddev_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_color_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokemoncolorname"
 */
export interface pokemon_v2_pokemoncolorname_stddev_pop_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_color_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokemoncolorname"
 */
export interface pokemon_v2_pokemoncolorname_stddev_samp_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_color_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokemoncolorname"
 */
export interface pokemon_v2_pokemoncolorname_sum_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_color_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokemoncolorname"
 */
export interface pokemon_v2_pokemoncolorname_var_pop_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_color_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokemoncolorname"
 */
export interface pokemon_v2_pokemoncolorname_var_samp_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_color_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokemoncolorname"
 */
export interface pokemon_v2_pokemoncolorname_variance_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_color_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokemondexnumber"
 */
export interface pokemon_v2_pokemondexnumber_aggregate_order_by {
  avg?: pokemon_v2_pokemondexnumber_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokemondexnumber_max_order_by | null;
  min?: pokemon_v2_pokemondexnumber_min_order_by | null;
  stddev?: pokemon_v2_pokemondexnumber_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokemondexnumber_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokemondexnumber_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokemondexnumber_sum_order_by | null;
  var_pop?: pokemon_v2_pokemondexnumber_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokemondexnumber_var_samp_order_by | null;
  variance?: pokemon_v2_pokemondexnumber_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokemondexnumber"
 */
export interface pokemon_v2_pokemondexnumber_avg_order_by {
  id?: order_by | null;
  pokedex_id?: order_by | null;
  pokedex_number?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_pokemondexnumber". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_pokemondexnumber_bool_exp {
  _and?: pokemon_v2_pokemondexnumber_bool_exp[] | null;
  _not?: pokemon_v2_pokemondexnumber_bool_exp | null;
  _or?: pokemon_v2_pokemondexnumber_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  pokedex_id?: Int_comparison_exp | null;
  pokedex_number?: Int_comparison_exp | null;
  pokemon_species_id?: Int_comparison_exp | null;
  pokemon_v2_pokedex?: pokemon_v2_pokedex_bool_exp | null;
  pokemon_v2_pokemonspecy?: pokemon_v2_pokemonspecies_bool_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokemondexnumber"
 */
export interface pokemon_v2_pokemondexnumber_max_order_by {
  id?: order_by | null;
  pokedex_id?: order_by | null;
  pokedex_number?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokemondexnumber"
 */
export interface pokemon_v2_pokemondexnumber_min_order_by {
  id?: order_by | null;
  pokedex_id?: order_by | null;
  pokedex_number?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokemondexnumber"
 */
export interface pokemon_v2_pokemondexnumber_stddev_order_by {
  id?: order_by | null;
  pokedex_id?: order_by | null;
  pokedex_number?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokemondexnumber"
 */
export interface pokemon_v2_pokemondexnumber_stddev_pop_order_by {
  id?: order_by | null;
  pokedex_id?: order_by | null;
  pokedex_number?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokemondexnumber"
 */
export interface pokemon_v2_pokemondexnumber_stddev_samp_order_by {
  id?: order_by | null;
  pokedex_id?: order_by | null;
  pokedex_number?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokemondexnumber"
 */
export interface pokemon_v2_pokemondexnumber_sum_order_by {
  id?: order_by | null;
  pokedex_id?: order_by | null;
  pokedex_number?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokemondexnumber"
 */
export interface pokemon_v2_pokemondexnumber_var_pop_order_by {
  id?: order_by | null;
  pokedex_id?: order_by | null;
  pokedex_number?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokemondexnumber"
 */
export interface pokemon_v2_pokemondexnumber_var_samp_order_by {
  id?: order_by | null;
  pokedex_id?: order_by | null;
  pokedex_number?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokemondexnumber"
 */
export interface pokemon_v2_pokemondexnumber_variance_order_by {
  id?: order_by | null;
  pokedex_id?: order_by | null;
  pokedex_number?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokemonegggroup"
 */
export interface pokemon_v2_pokemonegggroup_aggregate_order_by {
  avg?: pokemon_v2_pokemonegggroup_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokemonegggroup_max_order_by | null;
  min?: pokemon_v2_pokemonegggroup_min_order_by | null;
  stddev?: pokemon_v2_pokemonegggroup_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokemonegggroup_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokemonegggroup_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokemonegggroup_sum_order_by | null;
  var_pop?: pokemon_v2_pokemonegggroup_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokemonegggroup_var_samp_order_by | null;
  variance?: pokemon_v2_pokemonegggroup_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokemonegggroup"
 */
export interface pokemon_v2_pokemonegggroup_avg_order_by {
  egg_group_id?: order_by | null;
  id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_pokemonegggroup". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_pokemonegggroup_bool_exp {
  _and?: pokemon_v2_pokemonegggroup_bool_exp[] | null;
  _not?: pokemon_v2_pokemonegggroup_bool_exp | null;
  _or?: pokemon_v2_pokemonegggroup_bool_exp[] | null;
  egg_group_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  pokemon_species_id?: Int_comparison_exp | null;
  pokemon_v2_egggroup?: pokemon_v2_egggroup_bool_exp | null;
  pokemon_v2_pokemonspecy?: pokemon_v2_pokemonspecies_bool_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokemonegggroup"
 */
export interface pokemon_v2_pokemonegggroup_max_order_by {
  egg_group_id?: order_by | null;
  id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokemonegggroup"
 */
export interface pokemon_v2_pokemonegggroup_min_order_by {
  egg_group_id?: order_by | null;
  id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokemonegggroup"
 */
export interface pokemon_v2_pokemonegggroup_stddev_order_by {
  egg_group_id?: order_by | null;
  id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokemonegggroup"
 */
export interface pokemon_v2_pokemonegggroup_stddev_pop_order_by {
  egg_group_id?: order_by | null;
  id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokemonegggroup"
 */
export interface pokemon_v2_pokemonegggroup_stddev_samp_order_by {
  egg_group_id?: order_by | null;
  id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokemonegggroup"
 */
export interface pokemon_v2_pokemonegggroup_sum_order_by {
  egg_group_id?: order_by | null;
  id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokemonegggroup"
 */
export interface pokemon_v2_pokemonegggroup_var_pop_order_by {
  egg_group_id?: order_by | null;
  id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokemonegggroup"
 */
export interface pokemon_v2_pokemonegggroup_var_samp_order_by {
  egg_group_id?: order_by | null;
  id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokemonegggroup"
 */
export interface pokemon_v2_pokemonegggroup_variance_order_by {
  egg_group_id?: order_by | null;
  id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokemonevolution"
 */
export interface pokemon_v2_pokemonevolution_aggregate_order_by {
  avg?: pokemon_v2_pokemonevolution_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokemonevolution_max_order_by | null;
  min?: pokemon_v2_pokemonevolution_min_order_by | null;
  stddev?: pokemon_v2_pokemonevolution_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokemonevolution_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokemonevolution_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokemonevolution_sum_order_by | null;
  var_pop?: pokemon_v2_pokemonevolution_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokemonevolution_var_samp_order_by | null;
  variance?: pokemon_v2_pokemonevolution_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokemonevolution"
 */
export interface pokemon_v2_pokemonevolution_avg_order_by {
  evolution_item_id?: order_by | null;
  evolution_trigger_id?: order_by | null;
  evolved_species_id?: order_by | null;
  gender_id?: order_by | null;
  held_item_id?: order_by | null;
  id?: order_by | null;
  known_move_id?: order_by | null;
  known_move_type_id?: order_by | null;
  location_id?: order_by | null;
  min_affection?: order_by | null;
  min_beauty?: order_by | null;
  min_happiness?: order_by | null;
  min_level?: order_by | null;
  party_species_id?: order_by | null;
  party_type_id?: order_by | null;
  relative_physical_stats?: order_by | null;
  trade_species_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_pokemonevolution". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_pokemonevolution_bool_exp {
  _and?: pokemon_v2_pokemonevolution_bool_exp[] | null;
  _not?: pokemon_v2_pokemonevolution_bool_exp | null;
  _or?: pokemon_v2_pokemonevolution_bool_exp[] | null;
  evolution_item_id?: Int_comparison_exp | null;
  evolution_trigger_id?: Int_comparison_exp | null;
  evolved_species_id?: Int_comparison_exp | null;
  gender_id?: Int_comparison_exp | null;
  held_item_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  known_move_id?: Int_comparison_exp | null;
  known_move_type_id?: Int_comparison_exp | null;
  location_id?: Int_comparison_exp | null;
  min_affection?: Int_comparison_exp | null;
  min_beauty?: Int_comparison_exp | null;
  min_happiness?: Int_comparison_exp | null;
  min_level?: Int_comparison_exp | null;
  needs_overworld_rain?: Boolean_comparison_exp | null;
  party_species_id?: Int_comparison_exp | null;
  party_type_id?: Int_comparison_exp | null;
  pokemonV2ItemByHeldItemId?: pokemon_v2_item_bool_exp | null;
  pokemonV2PokemonspecyByPartySpeciesId?: pokemon_v2_pokemonspecies_bool_exp | null;
  pokemonV2PokemonspecyByTradeSpeciesId?: pokemon_v2_pokemonspecies_bool_exp | null;
  pokemonV2TypeByPartyTypeId?: pokemon_v2_type_bool_exp | null;
  pokemon_v2_evolutiontrigger?: pokemon_v2_evolutiontrigger_bool_exp | null;
  pokemon_v2_gender?: pokemon_v2_gender_bool_exp | null;
  pokemon_v2_item?: pokemon_v2_item_bool_exp | null;
  pokemon_v2_location?: pokemon_v2_location_bool_exp | null;
  pokemon_v2_move?: pokemon_v2_move_bool_exp | null;
  pokemon_v2_pokemonspecy?: pokemon_v2_pokemonspecies_bool_exp | null;
  pokemon_v2_type?: pokemon_v2_type_bool_exp | null;
  relative_physical_stats?: Int_comparison_exp | null;
  time_of_day?: String_comparison_exp | null;
  trade_species_id?: Int_comparison_exp | null;
  turn_upside_down?: Boolean_comparison_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokemonevolution"
 */
export interface pokemon_v2_pokemonevolution_max_order_by {
  evolution_item_id?: order_by | null;
  evolution_trigger_id?: order_by | null;
  evolved_species_id?: order_by | null;
  gender_id?: order_by | null;
  held_item_id?: order_by | null;
  id?: order_by | null;
  known_move_id?: order_by | null;
  known_move_type_id?: order_by | null;
  location_id?: order_by | null;
  min_affection?: order_by | null;
  min_beauty?: order_by | null;
  min_happiness?: order_by | null;
  min_level?: order_by | null;
  party_species_id?: order_by | null;
  party_type_id?: order_by | null;
  relative_physical_stats?: order_by | null;
  time_of_day?: order_by | null;
  trade_species_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokemonevolution"
 */
export interface pokemon_v2_pokemonevolution_min_order_by {
  evolution_item_id?: order_by | null;
  evolution_trigger_id?: order_by | null;
  evolved_species_id?: order_by | null;
  gender_id?: order_by | null;
  held_item_id?: order_by | null;
  id?: order_by | null;
  known_move_id?: order_by | null;
  known_move_type_id?: order_by | null;
  location_id?: order_by | null;
  min_affection?: order_by | null;
  min_beauty?: order_by | null;
  min_happiness?: order_by | null;
  min_level?: order_by | null;
  party_species_id?: order_by | null;
  party_type_id?: order_by | null;
  relative_physical_stats?: order_by | null;
  time_of_day?: order_by | null;
  trade_species_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokemonevolution"
 */
export interface pokemon_v2_pokemonevolution_stddev_order_by {
  evolution_item_id?: order_by | null;
  evolution_trigger_id?: order_by | null;
  evolved_species_id?: order_by | null;
  gender_id?: order_by | null;
  held_item_id?: order_by | null;
  id?: order_by | null;
  known_move_id?: order_by | null;
  known_move_type_id?: order_by | null;
  location_id?: order_by | null;
  min_affection?: order_by | null;
  min_beauty?: order_by | null;
  min_happiness?: order_by | null;
  min_level?: order_by | null;
  party_species_id?: order_by | null;
  party_type_id?: order_by | null;
  relative_physical_stats?: order_by | null;
  trade_species_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokemonevolution"
 */
export interface pokemon_v2_pokemonevolution_stddev_pop_order_by {
  evolution_item_id?: order_by | null;
  evolution_trigger_id?: order_by | null;
  evolved_species_id?: order_by | null;
  gender_id?: order_by | null;
  held_item_id?: order_by | null;
  id?: order_by | null;
  known_move_id?: order_by | null;
  known_move_type_id?: order_by | null;
  location_id?: order_by | null;
  min_affection?: order_by | null;
  min_beauty?: order_by | null;
  min_happiness?: order_by | null;
  min_level?: order_by | null;
  party_species_id?: order_by | null;
  party_type_id?: order_by | null;
  relative_physical_stats?: order_by | null;
  trade_species_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokemonevolution"
 */
export interface pokemon_v2_pokemonevolution_stddev_samp_order_by {
  evolution_item_id?: order_by | null;
  evolution_trigger_id?: order_by | null;
  evolved_species_id?: order_by | null;
  gender_id?: order_by | null;
  held_item_id?: order_by | null;
  id?: order_by | null;
  known_move_id?: order_by | null;
  known_move_type_id?: order_by | null;
  location_id?: order_by | null;
  min_affection?: order_by | null;
  min_beauty?: order_by | null;
  min_happiness?: order_by | null;
  min_level?: order_by | null;
  party_species_id?: order_by | null;
  party_type_id?: order_by | null;
  relative_physical_stats?: order_by | null;
  trade_species_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokemonevolution"
 */
export interface pokemon_v2_pokemonevolution_sum_order_by {
  evolution_item_id?: order_by | null;
  evolution_trigger_id?: order_by | null;
  evolved_species_id?: order_by | null;
  gender_id?: order_by | null;
  held_item_id?: order_by | null;
  id?: order_by | null;
  known_move_id?: order_by | null;
  known_move_type_id?: order_by | null;
  location_id?: order_by | null;
  min_affection?: order_by | null;
  min_beauty?: order_by | null;
  min_happiness?: order_by | null;
  min_level?: order_by | null;
  party_species_id?: order_by | null;
  party_type_id?: order_by | null;
  relative_physical_stats?: order_by | null;
  trade_species_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokemonevolution"
 */
export interface pokemon_v2_pokemonevolution_var_pop_order_by {
  evolution_item_id?: order_by | null;
  evolution_trigger_id?: order_by | null;
  evolved_species_id?: order_by | null;
  gender_id?: order_by | null;
  held_item_id?: order_by | null;
  id?: order_by | null;
  known_move_id?: order_by | null;
  known_move_type_id?: order_by | null;
  location_id?: order_by | null;
  min_affection?: order_by | null;
  min_beauty?: order_by | null;
  min_happiness?: order_by | null;
  min_level?: order_by | null;
  party_species_id?: order_by | null;
  party_type_id?: order_by | null;
  relative_physical_stats?: order_by | null;
  trade_species_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokemonevolution"
 */
export interface pokemon_v2_pokemonevolution_var_samp_order_by {
  evolution_item_id?: order_by | null;
  evolution_trigger_id?: order_by | null;
  evolved_species_id?: order_by | null;
  gender_id?: order_by | null;
  held_item_id?: order_by | null;
  id?: order_by | null;
  known_move_id?: order_by | null;
  known_move_type_id?: order_by | null;
  location_id?: order_by | null;
  min_affection?: order_by | null;
  min_beauty?: order_by | null;
  min_happiness?: order_by | null;
  min_level?: order_by | null;
  party_species_id?: order_by | null;
  party_type_id?: order_by | null;
  relative_physical_stats?: order_by | null;
  trade_species_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokemonevolution"
 */
export interface pokemon_v2_pokemonevolution_variance_order_by {
  evolution_item_id?: order_by | null;
  evolution_trigger_id?: order_by | null;
  evolved_species_id?: order_by | null;
  gender_id?: order_by | null;
  held_item_id?: order_by | null;
  id?: order_by | null;
  known_move_id?: order_by | null;
  known_move_type_id?: order_by | null;
  location_id?: order_by | null;
  min_affection?: order_by | null;
  min_beauty?: order_by | null;
  min_happiness?: order_by | null;
  min_level?: order_by | null;
  party_species_id?: order_by | null;
  party_type_id?: order_by | null;
  relative_physical_stats?: order_by | null;
  trade_species_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_pokemonform". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_pokemonform_bool_exp {
  _and?: pokemon_v2_pokemonform_bool_exp[] | null;
  _not?: pokemon_v2_pokemonform_bool_exp | null;
  _or?: pokemon_v2_pokemonform_bool_exp[] | null;
  form_name?: String_comparison_exp | null;
  form_order?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  is_battle_only?: Boolean_comparison_exp | null;
  is_default?: Boolean_comparison_exp | null;
  is_mega?: Boolean_comparison_exp | null;
  name?: String_comparison_exp | null;
  order?: Int_comparison_exp | null;
  pokemon_id?: Int_comparison_exp | null;
  pokemon_v2_pokemon?: pokemon_v2_pokemon_bool_exp | null;
  pokemon_v2_pokemonformgenerations?: pokemon_v2_pokemonformgeneration_bool_exp | null;
  pokemon_v2_pokemonformnames?: pokemon_v2_pokemonformname_bool_exp | null;
  pokemon_v2_pokemonformsprites?: pokemon_v2_pokemonformsprites_bool_exp | null;
  pokemon_v2_pokemonformtypes?: pokemon_v2_pokemonformtype_bool_exp | null;
  pokemon_v2_versiongroup?: pokemon_v2_versiongroup_bool_exp | null;
  version_group_id?: Int_comparison_exp | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokemonformgeneration"
 */
export interface pokemon_v2_pokemonformgeneration_aggregate_order_by {
  avg?: pokemon_v2_pokemonformgeneration_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokemonformgeneration_max_order_by | null;
  min?: pokemon_v2_pokemonformgeneration_min_order_by | null;
  stddev?: pokemon_v2_pokemonformgeneration_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokemonformgeneration_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokemonformgeneration_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokemonformgeneration_sum_order_by | null;
  var_pop?: pokemon_v2_pokemonformgeneration_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokemonformgeneration_var_samp_order_by | null;
  variance?: pokemon_v2_pokemonformgeneration_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokemonformgeneration"
 */
export interface pokemon_v2_pokemonformgeneration_avg_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_form_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_pokemonformgeneration". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_pokemonformgeneration_bool_exp {
  _and?: pokemon_v2_pokemonformgeneration_bool_exp[] | null;
  _not?: pokemon_v2_pokemonformgeneration_bool_exp | null;
  _or?: pokemon_v2_pokemonformgeneration_bool_exp[] | null;
  game_index?: Int_comparison_exp | null;
  generation_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  pokemon_form_id?: Int_comparison_exp | null;
  pokemon_v2_generation?: pokemon_v2_generation_bool_exp | null;
  pokemon_v2_pokemonform?: pokemon_v2_pokemonform_bool_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokemonformgeneration"
 */
export interface pokemon_v2_pokemonformgeneration_max_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_form_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokemonformgeneration"
 */
export interface pokemon_v2_pokemonformgeneration_min_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_form_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokemonformgeneration"
 */
export interface pokemon_v2_pokemonformgeneration_stddev_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_form_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokemonformgeneration"
 */
export interface pokemon_v2_pokemonformgeneration_stddev_pop_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_form_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokemonformgeneration"
 */
export interface pokemon_v2_pokemonformgeneration_stddev_samp_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_form_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokemonformgeneration"
 */
export interface pokemon_v2_pokemonformgeneration_sum_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_form_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokemonformgeneration"
 */
export interface pokemon_v2_pokemonformgeneration_var_pop_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_form_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokemonformgeneration"
 */
export interface pokemon_v2_pokemonformgeneration_var_samp_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_form_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokemonformgeneration"
 */
export interface pokemon_v2_pokemonformgeneration_variance_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_form_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_pokemonformname". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_pokemonformname_bool_exp {
  _and?: pokemon_v2_pokemonformname_bool_exp[] | null;
  _not?: pokemon_v2_pokemonformname_bool_exp | null;
  _or?: pokemon_v2_pokemonformname_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_form_id?: Int_comparison_exp | null;
  pokemon_name?: String_comparison_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_pokemonform?: pokemon_v2_pokemonform_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_pokemonformsprites". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_pokemonformsprites_bool_exp {
  _and?: pokemon_v2_pokemonformsprites_bool_exp[] | null;
  _not?: pokemon_v2_pokemonformsprites_bool_exp | null;
  _or?: pokemon_v2_pokemonformsprites_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  pokemon_form_id?: Int_comparison_exp | null;
  pokemon_v2_pokemonform?: pokemon_v2_pokemonform_bool_exp | null;
  sprites?: String_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_pokemonformtype". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_pokemonformtype_bool_exp {
  _and?: pokemon_v2_pokemonformtype_bool_exp[] | null;
  _not?: pokemon_v2_pokemonformtype_bool_exp | null;
  _or?: pokemon_v2_pokemonformtype_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  pokemon_form_id?: Int_comparison_exp | null;
  pokemon_v2_pokemonform?: pokemon_v2_pokemonform_bool_exp | null;
  pokemon_v2_type?: pokemon_v2_type_bool_exp | null;
  slot?: Int_comparison_exp | null;
  type_id?: Int_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_pokemongameindex". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_pokemongameindex_bool_exp {
  _and?: pokemon_v2_pokemongameindex_bool_exp[] | null;
  _not?: pokemon_v2_pokemongameindex_bool_exp | null;
  _or?: pokemon_v2_pokemongameindex_bool_exp[] | null;
  game_index?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  pokemon_id?: Int_comparison_exp | null;
  pokemon_v2_pokemon?: pokemon_v2_pokemon_bool_exp | null;
  pokemon_v2_version?: pokemon_v2_version_bool_exp | null;
  version_id?: Int_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_pokemonhabitat". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_pokemonhabitat_bool_exp {
  _and?: pokemon_v2_pokemonhabitat_bool_exp[] | null;
  _not?: pokemon_v2_pokemonhabitat_bool_exp | null;
  _or?: pokemon_v2_pokemonhabitat_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_pokemonhabitatnames?: pokemon_v2_pokemonhabitatname_bool_exp | null;
  pokemon_v2_pokemonspecies?: pokemon_v2_pokemonspecies_bool_exp | null;
}

/**
 * Ordering options when selecting data from "pokemon_v2_pokemonhabitat".
 */
export interface pokemon_v2_pokemonhabitat_order_by {
  id?: order_by | null;
  name?: order_by | null;
  pokemon_v2_pokemonhabitatnames_aggregate?: pokemon_v2_pokemonhabitatname_aggregate_order_by | null;
  pokemon_v2_pokemonspecies_aggregate?: pokemon_v2_pokemonspecies_aggregate_order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokemonhabitatname"
 */
export interface pokemon_v2_pokemonhabitatname_aggregate_order_by {
  avg?: pokemon_v2_pokemonhabitatname_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokemonhabitatname_max_order_by | null;
  min?: pokemon_v2_pokemonhabitatname_min_order_by | null;
  stddev?: pokemon_v2_pokemonhabitatname_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokemonhabitatname_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokemonhabitatname_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokemonhabitatname_sum_order_by | null;
  var_pop?: pokemon_v2_pokemonhabitatname_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokemonhabitatname_var_samp_order_by | null;
  variance?: pokemon_v2_pokemonhabitatname_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokemonhabitatname"
 */
export interface pokemon_v2_pokemonhabitatname_avg_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_pokemonhabitatname". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_pokemonhabitatname_bool_exp {
  _and?: pokemon_v2_pokemonhabitatname_bool_exp[] | null;
  _not?: pokemon_v2_pokemonhabitatname_bool_exp | null;
  _or?: pokemon_v2_pokemonhabitatname_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_habitat_id?: Int_comparison_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_pokemonhabitat?: pokemon_v2_pokemonhabitat_bool_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokemonhabitatname"
 */
export interface pokemon_v2_pokemonhabitatname_max_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  name?: order_by | null;
  pokemon_habitat_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokemonhabitatname"
 */
export interface pokemon_v2_pokemonhabitatname_min_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  name?: order_by | null;
  pokemon_habitat_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokemonhabitatname"
 */
export interface pokemon_v2_pokemonhabitatname_stddev_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokemonhabitatname"
 */
export interface pokemon_v2_pokemonhabitatname_stddev_pop_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokemonhabitatname"
 */
export interface pokemon_v2_pokemonhabitatname_stddev_samp_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokemonhabitatname"
 */
export interface pokemon_v2_pokemonhabitatname_sum_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokemonhabitatname"
 */
export interface pokemon_v2_pokemonhabitatname_var_pop_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokemonhabitatname"
 */
export interface pokemon_v2_pokemonhabitatname_var_samp_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokemonhabitatname"
 */
export interface pokemon_v2_pokemonhabitatname_variance_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokemonitem"
 */
export interface pokemon_v2_pokemonitem_aggregate_order_by {
  avg?: pokemon_v2_pokemonitem_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokemonitem_max_order_by | null;
  min?: pokemon_v2_pokemonitem_min_order_by | null;
  stddev?: pokemon_v2_pokemonitem_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokemonitem_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokemonitem_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokemonitem_sum_order_by | null;
  var_pop?: pokemon_v2_pokemonitem_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokemonitem_var_samp_order_by | null;
  variance?: pokemon_v2_pokemonitem_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokemonitem"
 */
export interface pokemon_v2_pokemonitem_avg_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  pokemon_id?: order_by | null;
  rarity?: order_by | null;
  version_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_pokemonitem". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_pokemonitem_bool_exp {
  _and?: pokemon_v2_pokemonitem_bool_exp[] | null;
  _not?: pokemon_v2_pokemonitem_bool_exp | null;
  _or?: pokemon_v2_pokemonitem_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  item_id?: Int_comparison_exp | null;
  pokemon_id?: Int_comparison_exp | null;
  pokemon_v2_item?: pokemon_v2_item_bool_exp | null;
  pokemon_v2_pokemon?: pokemon_v2_pokemon_bool_exp | null;
  pokemon_v2_version?: pokemon_v2_version_bool_exp | null;
  rarity?: Int_comparison_exp | null;
  version_id?: Int_comparison_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokemonitem"
 */
export interface pokemon_v2_pokemonitem_max_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  pokemon_id?: order_by | null;
  rarity?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokemonitem"
 */
export interface pokemon_v2_pokemonitem_min_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  pokemon_id?: order_by | null;
  rarity?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokemonitem"
 */
export interface pokemon_v2_pokemonitem_stddev_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  pokemon_id?: order_by | null;
  rarity?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokemonitem"
 */
export interface pokemon_v2_pokemonitem_stddev_pop_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  pokemon_id?: order_by | null;
  rarity?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokemonitem"
 */
export interface pokemon_v2_pokemonitem_stddev_samp_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  pokemon_id?: order_by | null;
  rarity?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokemonitem"
 */
export interface pokemon_v2_pokemonitem_sum_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  pokemon_id?: order_by | null;
  rarity?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokemonitem"
 */
export interface pokemon_v2_pokemonitem_var_pop_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  pokemon_id?: order_by | null;
  rarity?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokemonitem"
 */
export interface pokemon_v2_pokemonitem_var_samp_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  pokemon_id?: order_by | null;
  rarity?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokemonitem"
 */
export interface pokemon_v2_pokemonitem_variance_order_by {
  id?: order_by | null;
  item_id?: order_by | null;
  pokemon_id?: order_by | null;
  rarity?: order_by | null;
  version_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_pokemonmove". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_pokemonmove_bool_exp {
  _and?: pokemon_v2_pokemonmove_bool_exp[] | null;
  _not?: pokemon_v2_pokemonmove_bool_exp | null;
  _or?: pokemon_v2_pokemonmove_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  level?: Int_comparison_exp | null;
  move_id?: Int_comparison_exp | null;
  move_learn_method_id?: Int_comparison_exp | null;
  order?: Int_comparison_exp | null;
  pokemon_id?: Int_comparison_exp | null;
  pokemon_v2_move?: pokemon_v2_move_bool_exp | null;
  pokemon_v2_movelearnmethod?: pokemon_v2_movelearnmethod_bool_exp | null;
  pokemon_v2_pokemon?: pokemon_v2_pokemon_bool_exp | null;
  pokemon_v2_versiongroup?: pokemon_v2_versiongroup_bool_exp | null;
  version_group_id?: Int_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_pokemonshape". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_pokemonshape_bool_exp {
  _and?: pokemon_v2_pokemonshape_bool_exp[] | null;
  _not?: pokemon_v2_pokemonshape_bool_exp | null;
  _or?: pokemon_v2_pokemonshape_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_pokemonshapenames?: pokemon_v2_pokemonshapename_bool_exp | null;
  pokemon_v2_pokemonspecies?: pokemon_v2_pokemonspecies_bool_exp | null;
}

/**
 * Ordering options when selecting data from "pokemon_v2_pokemonshape".
 */
export interface pokemon_v2_pokemonshape_order_by {
  id?: order_by | null;
  name?: order_by | null;
  pokemon_v2_pokemonshapenames_aggregate?: pokemon_v2_pokemonshapename_aggregate_order_by | null;
  pokemon_v2_pokemonspecies_aggregate?: pokemon_v2_pokemonspecies_aggregate_order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokemonshapename"
 */
export interface pokemon_v2_pokemonshapename_aggregate_order_by {
  avg?: pokemon_v2_pokemonshapename_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokemonshapename_max_order_by | null;
  min?: pokemon_v2_pokemonshapename_min_order_by | null;
  stddev?: pokemon_v2_pokemonshapename_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokemonshapename_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokemonshapename_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokemonshapename_sum_order_by | null;
  var_pop?: pokemon_v2_pokemonshapename_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokemonshapename_var_samp_order_by | null;
  variance?: pokemon_v2_pokemonshapename_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokemonshapename"
 */
export interface pokemon_v2_pokemonshapename_avg_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_pokemonshapename". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_pokemonshapename_bool_exp {
  _and?: pokemon_v2_pokemonshapename_bool_exp[] | null;
  _not?: pokemon_v2_pokemonshapename_bool_exp | null;
  _or?: pokemon_v2_pokemonshapename_bool_exp[] | null;
  awesome_name?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_shape_id?: Int_comparison_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_pokemonshape?: pokemon_v2_pokemonshape_bool_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokemonshapename"
 */
export interface pokemon_v2_pokemonshapename_max_order_by {
  awesome_name?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
  name?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokemonshapename"
 */
export interface pokemon_v2_pokemonshapename_min_order_by {
  awesome_name?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
  name?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokemonshapename"
 */
export interface pokemon_v2_pokemonshapename_stddev_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokemonshapename"
 */
export interface pokemon_v2_pokemonshapename_stddev_pop_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokemonshapename"
 */
export interface pokemon_v2_pokemonshapename_stddev_samp_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokemonshapename"
 */
export interface pokemon_v2_pokemonshapename_sum_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokemonshapename"
 */
export interface pokemon_v2_pokemonshapename_var_pop_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokemonshapename"
 */
export interface pokemon_v2_pokemonshapename_var_samp_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokemonshapename"
 */
export interface pokemon_v2_pokemonshapename_variance_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokemonspecies"
 */
export interface pokemon_v2_pokemonspecies_aggregate_order_by {
  avg?: pokemon_v2_pokemonspecies_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokemonspecies_max_order_by | null;
  min?: pokemon_v2_pokemonspecies_min_order_by | null;
  stddev?: pokemon_v2_pokemonspecies_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokemonspecies_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokemonspecies_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokemonspecies_sum_order_by | null;
  var_pop?: pokemon_v2_pokemonspecies_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokemonspecies_var_samp_order_by | null;
  variance?: pokemon_v2_pokemonspecies_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokemonspecies"
 */
export interface pokemon_v2_pokemonspecies_avg_order_by {
  base_happiness?: order_by | null;
  capture_rate?: order_by | null;
  evolution_chain_id?: order_by | null;
  evolves_from_species_id?: order_by | null;
  gender_rate?: order_by | null;
  generation_id?: order_by | null;
  growth_rate_id?: order_by | null;
  hatch_counter?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_color_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_pokemonspecies". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_pokemonspecies_bool_exp {
  _and?: pokemon_v2_pokemonspecies_bool_exp[] | null;
  _not?: pokemon_v2_pokemonspecies_bool_exp | null;
  _or?: pokemon_v2_pokemonspecies_bool_exp[] | null;
  base_happiness?: Int_comparison_exp | null;
  capture_rate?: Int_comparison_exp | null;
  evolution_chain_id?: Int_comparison_exp | null;
  evolves_from_species_id?: Int_comparison_exp | null;
  forms_switchable?: Boolean_comparison_exp | null;
  gender_rate?: Int_comparison_exp | null;
  generation_id?: Int_comparison_exp | null;
  growth_rate_id?: Int_comparison_exp | null;
  has_gender_differences?: Boolean_comparison_exp | null;
  hatch_counter?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  is_baby?: Boolean_comparison_exp | null;
  is_legendary?: Boolean_comparison_exp | null;
  is_mythical?: Boolean_comparison_exp | null;
  name?: String_comparison_exp | null;
  order?: Int_comparison_exp | null;
  pokemonV2PokemonevolutionsByPartySpeciesId?: pokemon_v2_pokemonevolution_bool_exp | null;
  pokemonV2PokemonevolutionsByTradeSpeciesId?: pokemon_v2_pokemonevolution_bool_exp | null;
  pokemon_color_id?: Int_comparison_exp | null;
  pokemon_habitat_id?: Int_comparison_exp | null;
  pokemon_shape_id?: Int_comparison_exp | null;
  pokemon_v2_evolutionchain?: pokemon_v2_evolutionchain_bool_exp | null;
  pokemon_v2_generation?: pokemon_v2_generation_bool_exp | null;
  pokemon_v2_growthrate?: pokemon_v2_growthrate_bool_exp | null;
  pokemon_v2_palparks?: pokemon_v2_palpark_bool_exp | null;
  pokemon_v2_pokemoncolor?: pokemon_v2_pokemoncolor_bool_exp | null;
  pokemon_v2_pokemondexnumbers?: pokemon_v2_pokemondexnumber_bool_exp | null;
  pokemon_v2_pokemonegggroups?: pokemon_v2_pokemonegggroup_bool_exp | null;
  pokemon_v2_pokemonevolutions?: pokemon_v2_pokemonevolution_bool_exp | null;
  pokemon_v2_pokemonhabitat?: pokemon_v2_pokemonhabitat_bool_exp | null;
  pokemon_v2_pokemons?: pokemon_v2_pokemon_bool_exp | null;
  pokemon_v2_pokemonshape?: pokemon_v2_pokemonshape_bool_exp | null;
  pokemon_v2_pokemonspecies?: pokemon_v2_pokemonspecies_bool_exp | null;
  pokemon_v2_pokemonspeciesdescriptions?: pokemon_v2_pokemonspeciesdescription_bool_exp | null;
  pokemon_v2_pokemonspeciesflavortexts?: pokemon_v2_pokemonspeciesflavortext_bool_exp | null;
  pokemon_v2_pokemonspeciesnames?: pokemon_v2_pokemonspeciesname_bool_exp | null;
  pokemon_v2_pokemonspecy?: pokemon_v2_pokemonspecies_bool_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokemonspecies"
 */
export interface pokemon_v2_pokemonspecies_max_order_by {
  base_happiness?: order_by | null;
  capture_rate?: order_by | null;
  evolution_chain_id?: order_by | null;
  evolves_from_species_id?: order_by | null;
  gender_rate?: order_by | null;
  generation_id?: order_by | null;
  growth_rate_id?: order_by | null;
  hatch_counter?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
  order?: order_by | null;
  pokemon_color_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokemonspecies"
 */
export interface pokemon_v2_pokemonspecies_min_order_by {
  base_happiness?: order_by | null;
  capture_rate?: order_by | null;
  evolution_chain_id?: order_by | null;
  evolves_from_species_id?: order_by | null;
  gender_rate?: order_by | null;
  generation_id?: order_by | null;
  growth_rate_id?: order_by | null;
  hatch_counter?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
  order?: order_by | null;
  pokemon_color_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * Ordering options when selecting data from "pokemon_v2_pokemonspecies".
 */
export interface pokemon_v2_pokemonspecies_order_by {
  base_happiness?: order_by | null;
  capture_rate?: order_by | null;
  evolution_chain_id?: order_by | null;
  evolves_from_species_id?: order_by | null;
  forms_switchable?: order_by | null;
  gender_rate?: order_by | null;
  generation_id?: order_by | null;
  growth_rate_id?: order_by | null;
  has_gender_differences?: order_by | null;
  hatch_counter?: order_by | null;
  id?: order_by | null;
  is_baby?: order_by | null;
  is_legendary?: order_by | null;
  is_mythical?: order_by | null;
  name?: order_by | null;
  order?: order_by | null;
  pokemonV2PokemonevolutionsByPartySpeciesId_aggregate?: pokemon_v2_pokemonevolution_aggregate_order_by | null;
  pokemonV2PokemonevolutionsByTradeSpeciesId_aggregate?: pokemon_v2_pokemonevolution_aggregate_order_by | null;
  pokemon_color_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
  pokemon_v2_evolutionchain?: pokemon_v2_evolutionchain_order_by | null;
  pokemon_v2_generation?: pokemon_v2_generation_order_by | null;
  pokemon_v2_growthrate?: pokemon_v2_growthrate_order_by | null;
  pokemon_v2_palparks_aggregate?: pokemon_v2_palpark_aggregate_order_by | null;
  pokemon_v2_pokemoncolor?: pokemon_v2_pokemoncolor_order_by | null;
  pokemon_v2_pokemondexnumbers_aggregate?: pokemon_v2_pokemondexnumber_aggregate_order_by | null;
  pokemon_v2_pokemonegggroups_aggregate?: pokemon_v2_pokemonegggroup_aggregate_order_by | null;
  pokemon_v2_pokemonevolutions_aggregate?: pokemon_v2_pokemonevolution_aggregate_order_by | null;
  pokemon_v2_pokemonhabitat?: pokemon_v2_pokemonhabitat_order_by | null;
  pokemon_v2_pokemons_aggregate?: pokemon_v2_pokemon_aggregate_order_by | null;
  pokemon_v2_pokemonshape?: pokemon_v2_pokemonshape_order_by | null;
  pokemon_v2_pokemonspecies_aggregate?: pokemon_v2_pokemonspecies_aggregate_order_by | null;
  pokemon_v2_pokemonspeciesdescriptions_aggregate?: pokemon_v2_pokemonspeciesdescription_aggregate_order_by | null;
  pokemon_v2_pokemonspeciesflavortexts_aggregate?: pokemon_v2_pokemonspeciesflavortext_aggregate_order_by | null;
  pokemon_v2_pokemonspeciesnames_aggregate?: pokemon_v2_pokemonspeciesname_aggregate_order_by | null;
  pokemon_v2_pokemonspecy?: pokemon_v2_pokemonspecies_order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokemonspecies"
 */
export interface pokemon_v2_pokemonspecies_stddev_order_by {
  base_happiness?: order_by | null;
  capture_rate?: order_by | null;
  evolution_chain_id?: order_by | null;
  evolves_from_species_id?: order_by | null;
  gender_rate?: order_by | null;
  generation_id?: order_by | null;
  growth_rate_id?: order_by | null;
  hatch_counter?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_color_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokemonspecies"
 */
export interface pokemon_v2_pokemonspecies_stddev_pop_order_by {
  base_happiness?: order_by | null;
  capture_rate?: order_by | null;
  evolution_chain_id?: order_by | null;
  evolves_from_species_id?: order_by | null;
  gender_rate?: order_by | null;
  generation_id?: order_by | null;
  growth_rate_id?: order_by | null;
  hatch_counter?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_color_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokemonspecies"
 */
export interface pokemon_v2_pokemonspecies_stddev_samp_order_by {
  base_happiness?: order_by | null;
  capture_rate?: order_by | null;
  evolution_chain_id?: order_by | null;
  evolves_from_species_id?: order_by | null;
  gender_rate?: order_by | null;
  generation_id?: order_by | null;
  growth_rate_id?: order_by | null;
  hatch_counter?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_color_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokemonspecies"
 */
export interface pokemon_v2_pokemonspecies_sum_order_by {
  base_happiness?: order_by | null;
  capture_rate?: order_by | null;
  evolution_chain_id?: order_by | null;
  evolves_from_species_id?: order_by | null;
  gender_rate?: order_by | null;
  generation_id?: order_by | null;
  growth_rate_id?: order_by | null;
  hatch_counter?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_color_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokemonspecies"
 */
export interface pokemon_v2_pokemonspecies_var_pop_order_by {
  base_happiness?: order_by | null;
  capture_rate?: order_by | null;
  evolution_chain_id?: order_by | null;
  evolves_from_species_id?: order_by | null;
  gender_rate?: order_by | null;
  generation_id?: order_by | null;
  growth_rate_id?: order_by | null;
  hatch_counter?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_color_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokemonspecies"
 */
export interface pokemon_v2_pokemonspecies_var_samp_order_by {
  base_happiness?: order_by | null;
  capture_rate?: order_by | null;
  evolution_chain_id?: order_by | null;
  evolves_from_species_id?: order_by | null;
  gender_rate?: order_by | null;
  generation_id?: order_by | null;
  growth_rate_id?: order_by | null;
  hatch_counter?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_color_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokemonspecies"
 */
export interface pokemon_v2_pokemonspecies_variance_order_by {
  base_happiness?: order_by | null;
  capture_rate?: order_by | null;
  evolution_chain_id?: order_by | null;
  evolves_from_species_id?: order_by | null;
  gender_rate?: order_by | null;
  generation_id?: order_by | null;
  growth_rate_id?: order_by | null;
  hatch_counter?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
  pokemon_color_id?: order_by | null;
  pokemon_habitat_id?: order_by | null;
  pokemon_shape_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokemonspeciesdescription"
 */
export interface pokemon_v2_pokemonspeciesdescription_aggregate_order_by {
  avg?: pokemon_v2_pokemonspeciesdescription_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokemonspeciesdescription_max_order_by | null;
  min?: pokemon_v2_pokemonspeciesdescription_min_order_by | null;
  stddev?: pokemon_v2_pokemonspeciesdescription_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokemonspeciesdescription_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokemonspeciesdescription_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokemonspeciesdescription_sum_order_by | null;
  var_pop?: pokemon_v2_pokemonspeciesdescription_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokemonspeciesdescription_var_samp_order_by | null;
  variance?: pokemon_v2_pokemonspeciesdescription_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokemonspeciesdescription"
 */
export interface pokemon_v2_pokemonspeciesdescription_avg_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_pokemonspeciesdescription". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_pokemonspeciesdescription_bool_exp {
  _and?: pokemon_v2_pokemonspeciesdescription_bool_exp[] | null;
  _not?: pokemon_v2_pokemonspeciesdescription_bool_exp | null;
  _or?: pokemon_v2_pokemonspeciesdescription_bool_exp[] | null;
  description?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  pokemon_species_id?: Int_comparison_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_pokemonspecy?: pokemon_v2_pokemonspecies_bool_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokemonspeciesdescription"
 */
export interface pokemon_v2_pokemonspeciesdescription_max_order_by {
  description?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokemonspeciesdescription"
 */
export interface pokemon_v2_pokemonspeciesdescription_min_order_by {
  description?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokemonspeciesdescription"
 */
export interface pokemon_v2_pokemonspeciesdescription_stddev_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokemonspeciesdescription"
 */
export interface pokemon_v2_pokemonspeciesdescription_stddev_pop_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokemonspeciesdescription"
 */
export interface pokemon_v2_pokemonspeciesdescription_stddev_samp_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokemonspeciesdescription"
 */
export interface pokemon_v2_pokemonspeciesdescription_sum_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokemonspeciesdescription"
 */
export interface pokemon_v2_pokemonspeciesdescription_var_pop_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokemonspeciesdescription"
 */
export interface pokemon_v2_pokemonspeciesdescription_var_samp_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokemonspeciesdescription"
 */
export interface pokemon_v2_pokemonspeciesdescription_variance_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokemonspeciesflavortext"
 */
export interface pokemon_v2_pokemonspeciesflavortext_aggregate_order_by {
  avg?: pokemon_v2_pokemonspeciesflavortext_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokemonspeciesflavortext_max_order_by | null;
  min?: pokemon_v2_pokemonspeciesflavortext_min_order_by | null;
  stddev?: pokemon_v2_pokemonspeciesflavortext_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokemonspeciesflavortext_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokemonspeciesflavortext_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokemonspeciesflavortext_sum_order_by | null;
  var_pop?: pokemon_v2_pokemonspeciesflavortext_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokemonspeciesflavortext_var_samp_order_by | null;
  variance?: pokemon_v2_pokemonspeciesflavortext_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokemonspeciesflavortext"
 */
export interface pokemon_v2_pokemonspeciesflavortext_avg_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_pokemonspeciesflavortext". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_pokemonspeciesflavortext_bool_exp {
  _and?: pokemon_v2_pokemonspeciesflavortext_bool_exp[] | null;
  _not?: pokemon_v2_pokemonspeciesflavortext_bool_exp | null;
  _or?: pokemon_v2_pokemonspeciesflavortext_bool_exp[] | null;
  flavor_text?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  pokemon_species_id?: Int_comparison_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_pokemonspecy?: pokemon_v2_pokemonspecies_bool_exp | null;
  pokemon_v2_version?: pokemon_v2_version_bool_exp | null;
  version_id?: Int_comparison_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokemonspeciesflavortext"
 */
export interface pokemon_v2_pokemonspeciesflavortext_max_order_by {
  flavor_text?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokemonspeciesflavortext"
 */
export interface pokemon_v2_pokemonspeciesflavortext_min_order_by {
  flavor_text?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokemonspeciesflavortext"
 */
export interface pokemon_v2_pokemonspeciesflavortext_stddev_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokemonspeciesflavortext"
 */
export interface pokemon_v2_pokemonspeciesflavortext_stddev_pop_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokemonspeciesflavortext"
 */
export interface pokemon_v2_pokemonspeciesflavortext_stddev_samp_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokemonspeciesflavortext"
 */
export interface pokemon_v2_pokemonspeciesflavortext_sum_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokemonspeciesflavortext"
 */
export interface pokemon_v2_pokemonspeciesflavortext_var_pop_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokemonspeciesflavortext"
 */
export interface pokemon_v2_pokemonspeciesflavortext_var_samp_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokemonspeciesflavortext"
 */
export interface pokemon_v2_pokemonspeciesflavortext_variance_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
  version_id?: order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokemonspeciesname"
 */
export interface pokemon_v2_pokemonspeciesname_aggregate_order_by {
  avg?: pokemon_v2_pokemonspeciesname_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokemonspeciesname_max_order_by | null;
  min?: pokemon_v2_pokemonspeciesname_min_order_by | null;
  stddev?: pokemon_v2_pokemonspeciesname_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokemonspeciesname_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokemonspeciesname_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokemonspeciesname_sum_order_by | null;
  var_pop?: pokemon_v2_pokemonspeciesname_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokemonspeciesname_var_samp_order_by | null;
  variance?: pokemon_v2_pokemonspeciesname_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokemonspeciesname"
 */
export interface pokemon_v2_pokemonspeciesname_avg_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_pokemonspeciesname". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_pokemonspeciesname_bool_exp {
  _and?: pokemon_v2_pokemonspeciesname_bool_exp[] | null;
  _not?: pokemon_v2_pokemonspeciesname_bool_exp | null;
  _or?: pokemon_v2_pokemonspeciesname_bool_exp[] | null;
  genus?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_species_id?: Int_comparison_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_pokemonspecy?: pokemon_v2_pokemonspecies_bool_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokemonspeciesname"
 */
export interface pokemon_v2_pokemonspeciesname_max_order_by {
  genus?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
  name?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokemonspeciesname"
 */
export interface pokemon_v2_pokemonspeciesname_min_order_by {
  genus?: order_by | null;
  id?: order_by | null;
  language_id?: order_by | null;
  name?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokemonspeciesname"
 */
export interface pokemon_v2_pokemonspeciesname_stddev_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokemonspeciesname"
 */
export interface pokemon_v2_pokemonspeciesname_stddev_pop_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokemonspeciesname"
 */
export interface pokemon_v2_pokemonspeciesname_stddev_samp_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokemonspeciesname"
 */
export interface pokemon_v2_pokemonspeciesname_sum_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokemonspeciesname"
 */
export interface pokemon_v2_pokemonspeciesname_var_pop_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokemonspeciesname"
 */
export interface pokemon_v2_pokemonspeciesname_var_samp_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokemonspeciesname"
 */
export interface pokemon_v2_pokemonspeciesname_variance_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  pokemon_species_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_pokemonsprites". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_pokemonsprites_bool_exp {
  _and?: pokemon_v2_pokemonsprites_bool_exp[] | null;
  _not?: pokemon_v2_pokemonsprites_bool_exp | null;
  _or?: pokemon_v2_pokemonsprites_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  pokemon_id?: Int_comparison_exp | null;
  pokemon_v2_pokemon?: pokemon_v2_pokemon_bool_exp | null;
  sprites?: String_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_pokemonstat". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_pokemonstat_bool_exp {
  _and?: pokemon_v2_pokemonstat_bool_exp[] | null;
  _not?: pokemon_v2_pokemonstat_bool_exp | null;
  _or?: pokemon_v2_pokemonstat_bool_exp[] | null;
  base_stat?: Int_comparison_exp | null;
  effort?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  pokemon_id?: Int_comparison_exp | null;
  pokemon_v2_pokemon?: pokemon_v2_pokemon_bool_exp | null;
  pokemon_v2_stat?: pokemon_v2_stat_bool_exp | null;
  stat_id?: Int_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_pokemontype". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_pokemontype_bool_exp {
  _and?: pokemon_v2_pokemontype_bool_exp[] | null;
  _not?: pokemon_v2_pokemontype_bool_exp | null;
  _or?: pokemon_v2_pokemontype_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  pokemon_id?: Int_comparison_exp | null;
  pokemon_v2_pokemon?: pokemon_v2_pokemon_bool_exp | null;
  pokemon_v2_type?: pokemon_v2_type_bool_exp | null;
  slot?: Int_comparison_exp | null;
  type_id?: Int_comparison_exp | null;
}

/**
 * order by aggregate values of table "pokemon_v2_pokemontypepast"
 */
export interface pokemon_v2_pokemontypepast_aggregate_order_by {
  avg?: pokemon_v2_pokemontypepast_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_pokemontypepast_max_order_by | null;
  min?: pokemon_v2_pokemontypepast_min_order_by | null;
  stddev?: pokemon_v2_pokemontypepast_stddev_order_by | null;
  stddev_pop?: pokemon_v2_pokemontypepast_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_pokemontypepast_stddev_samp_order_by | null;
  sum?: pokemon_v2_pokemontypepast_sum_order_by | null;
  var_pop?: pokemon_v2_pokemontypepast_var_pop_order_by | null;
  var_samp?: pokemon_v2_pokemontypepast_var_samp_order_by | null;
  variance?: pokemon_v2_pokemontypepast_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_pokemontypepast"
 */
export interface pokemon_v2_pokemontypepast_avg_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
  type_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_pokemontypepast". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_pokemontypepast_bool_exp {
  _and?: pokemon_v2_pokemontypepast_bool_exp[] | null;
  _not?: pokemon_v2_pokemontypepast_bool_exp | null;
  _or?: pokemon_v2_pokemontypepast_bool_exp[] | null;
  generation_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  pokemon_id?: Int_comparison_exp | null;
  pokemon_v2_generation?: pokemon_v2_generation_bool_exp | null;
  pokemon_v2_pokemon?: pokemon_v2_pokemon_bool_exp | null;
  pokemon_v2_type?: pokemon_v2_type_bool_exp | null;
  slot?: Int_comparison_exp | null;
  type_id?: Int_comparison_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_pokemontypepast"
 */
export interface pokemon_v2_pokemontypepast_max_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_pokemontypepast"
 */
export interface pokemon_v2_pokemontypepast_min_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_pokemontypepast"
 */
export interface pokemon_v2_pokemontypepast_stddev_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_pokemontypepast"
 */
export interface pokemon_v2_pokemontypepast_stddev_pop_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_pokemontypepast"
 */
export interface pokemon_v2_pokemontypepast_stddev_samp_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_pokemontypepast"
 */
export interface pokemon_v2_pokemontypepast_sum_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_pokemontypepast"
 */
export interface pokemon_v2_pokemontypepast_var_pop_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_pokemontypepast"
 */
export interface pokemon_v2_pokemontypepast_var_samp_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_pokemontypepast"
 */
export interface pokemon_v2_pokemontypepast_variance_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  pokemon_id?: order_by | null;
  slot?: order_by | null;
  type_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_region". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_region_bool_exp {
  _and?: pokemon_v2_region_bool_exp[] | null;
  _not?: pokemon_v2_region_bool_exp | null;
  _or?: pokemon_v2_region_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_generations?: pokemon_v2_generation_bool_exp | null;
  pokemon_v2_locations?: pokemon_v2_location_bool_exp | null;
  pokemon_v2_pokedexes?: pokemon_v2_pokedex_bool_exp | null;
  pokemon_v2_regionnames?: pokemon_v2_regionname_bool_exp | null;
  pokemon_v2_versiongroupregions?: pokemon_v2_versiongroupregion_bool_exp | null;
}

/**
 * Ordering options when selecting data from "pokemon_v2_region".
 */
export interface pokemon_v2_region_order_by {
  id?: order_by | null;
  name?: order_by | null;
  pokemon_v2_generations_aggregate?: pokemon_v2_generation_aggregate_order_by | null;
  pokemon_v2_locations_aggregate?: pokemon_v2_location_aggregate_order_by | null;
  pokemon_v2_pokedexes_aggregate?: pokemon_v2_pokedex_aggregate_order_by | null;
  pokemon_v2_regionnames_aggregate?: pokemon_v2_regionname_aggregate_order_by | null;
  pokemon_v2_versiongroupregions_aggregate?: pokemon_v2_versiongroupregion_aggregate_order_by | null;
}

/**
 * order by aggregate values of table "pokemon_v2_regionname"
 */
export interface pokemon_v2_regionname_aggregate_order_by {
  avg?: pokemon_v2_regionname_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_regionname_max_order_by | null;
  min?: pokemon_v2_regionname_min_order_by | null;
  stddev?: pokemon_v2_regionname_stddev_order_by | null;
  stddev_pop?: pokemon_v2_regionname_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_regionname_stddev_samp_order_by | null;
  sum?: pokemon_v2_regionname_sum_order_by | null;
  var_pop?: pokemon_v2_regionname_var_pop_order_by | null;
  var_samp?: pokemon_v2_regionname_var_samp_order_by | null;
  variance?: pokemon_v2_regionname_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_regionname"
 */
export interface pokemon_v2_regionname_avg_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_regionname". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_regionname_bool_exp {
  _and?: pokemon_v2_regionname_bool_exp[] | null;
  _not?: pokemon_v2_regionname_bool_exp | null;
  _or?: pokemon_v2_regionname_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_region?: pokemon_v2_region_bool_exp | null;
  region_id?: Int_comparison_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_regionname"
 */
export interface pokemon_v2_regionname_max_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  name?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_regionname"
 */
export interface pokemon_v2_regionname_min_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  name?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_regionname"
 */
export interface pokemon_v2_regionname_stddev_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_regionname"
 */
export interface pokemon_v2_regionname_stddev_pop_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_regionname"
 */
export interface pokemon_v2_regionname_stddev_samp_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_regionname"
 */
export interface pokemon_v2_regionname_sum_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_regionname"
 */
export interface pokemon_v2_regionname_var_pop_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_regionname"
 */
export interface pokemon_v2_regionname_var_samp_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_regionname"
 */
export interface pokemon_v2_regionname_variance_order_by {
  id?: order_by | null;
  language_id?: order_by | null;
  region_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_stat". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_stat_bool_exp {
  _and?: pokemon_v2_stat_bool_exp[] | null;
  _not?: pokemon_v2_stat_bool_exp | null;
  _or?: pokemon_v2_stat_bool_exp[] | null;
  game_index?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  is_battle_only?: Boolean_comparison_exp | null;
  move_damage_class_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemonV2NaturesByIncreasedStatId?: pokemon_v2_nature_bool_exp | null;
  pokemon_v2_characteristics?: pokemon_v2_characteristic_bool_exp | null;
  pokemon_v2_movedamageclass?: pokemon_v2_movedamageclass_bool_exp | null;
  pokemon_v2_movemetastatchanges?: pokemon_v2_movemetastatchange_bool_exp | null;
  pokemon_v2_natures?: pokemon_v2_nature_bool_exp | null;
  pokemon_v2_pokemonstats?: pokemon_v2_pokemonstat_bool_exp | null;
  pokemon_v2_statnames?: pokemon_v2_statname_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_statname". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_statname_bool_exp {
  _and?: pokemon_v2_statname_bool_exp[] | null;
  _not?: pokemon_v2_statname_bool_exp | null;
  _or?: pokemon_v2_statname_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_stat?: pokemon_v2_stat_bool_exp | null;
  stat_id?: Int_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_supercontestcombo". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_supercontestcombo_bool_exp {
  _and?: pokemon_v2_supercontestcombo_bool_exp[] | null;
  _not?: pokemon_v2_supercontestcombo_bool_exp | null;
  _or?: pokemon_v2_supercontestcombo_bool_exp[] | null;
  first_move_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  pokemonV2MoveBySecondMoveId?: pokemon_v2_move_bool_exp | null;
  pokemon_v2_move?: pokemon_v2_move_bool_exp | null;
  second_move_id?: Int_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_supercontesteffect". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_supercontesteffect_bool_exp {
  _and?: pokemon_v2_supercontesteffect_bool_exp[] | null;
  _not?: pokemon_v2_supercontesteffect_bool_exp | null;
  _or?: pokemon_v2_supercontesteffect_bool_exp[] | null;
  appeal?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  pokemon_v2_moves?: pokemon_v2_move_bool_exp | null;
  pokemon_v2_supercontesteffectflavortexts?: pokemon_v2_supercontesteffectflavortext_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_supercontesteffectflavortext". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_supercontesteffectflavortext_bool_exp {
  _and?: pokemon_v2_supercontesteffectflavortext_bool_exp[] | null;
  _not?: pokemon_v2_supercontesteffectflavortext_bool_exp | null;
  _or?: pokemon_v2_supercontesteffectflavortext_bool_exp[] | null;
  flavor_text?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_supercontesteffect?: pokemon_v2_supercontesteffect_bool_exp | null;
  super_contest_effect_id?: Int_comparison_exp | null;
}

/**
 * order by aggregate values of table "pokemon_v2_type"
 */
export interface pokemon_v2_type_aggregate_order_by {
  avg?: pokemon_v2_type_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_type_max_order_by | null;
  min?: pokemon_v2_type_min_order_by | null;
  stddev?: pokemon_v2_type_stddev_order_by | null;
  stddev_pop?: pokemon_v2_type_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_type_stddev_samp_order_by | null;
  sum?: pokemon_v2_type_sum_order_by | null;
  var_pop?: pokemon_v2_type_var_pop_order_by | null;
  var_samp?: pokemon_v2_type_var_samp_order_by | null;
  variance?: pokemon_v2_type_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_type"
 */
export interface pokemon_v2_type_avg_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_type". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_type_bool_exp {
  _and?: pokemon_v2_type_bool_exp[] | null;
  _not?: pokemon_v2_type_bool_exp | null;
  _or?: pokemon_v2_type_bool_exp[] | null;
  generation_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  move_damage_class_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemonV2PokemonevolutionsByPartyTypeId?: pokemon_v2_pokemonevolution_bool_exp | null;
  pokemonV2TypeefficaciesByTargetTypeId?: pokemon_v2_typeefficacy_bool_exp | null;
  pokemon_v2_berries?: pokemon_v2_berry_bool_exp | null;
  pokemon_v2_generation?: pokemon_v2_generation_bool_exp | null;
  pokemon_v2_movechanges?: pokemon_v2_movechange_bool_exp | null;
  pokemon_v2_movedamageclass?: pokemon_v2_movedamageclass_bool_exp | null;
  pokemon_v2_moves?: pokemon_v2_move_bool_exp | null;
  pokemon_v2_pokemonevolutions?: pokemon_v2_pokemonevolution_bool_exp | null;
  pokemon_v2_pokemonformtypes?: pokemon_v2_pokemonformtype_bool_exp | null;
  pokemon_v2_pokemontypepasts?: pokemon_v2_pokemontypepast_bool_exp | null;
  pokemon_v2_pokemontypes?: pokemon_v2_pokemontype_bool_exp | null;
  pokemon_v2_typeefficacies?: pokemon_v2_typeefficacy_bool_exp | null;
  pokemon_v2_typegameindices?: pokemon_v2_typegameindex_bool_exp | null;
  pokemon_v2_typenames?: pokemon_v2_typename_bool_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_type"
 */
export interface pokemon_v2_type_max_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
  name?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_type"
 */
export interface pokemon_v2_type_min_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
  name?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_type"
 */
export interface pokemon_v2_type_stddev_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_type"
 */
export interface pokemon_v2_type_stddev_pop_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_type"
 */
export interface pokemon_v2_type_stddev_samp_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_type"
 */
export interface pokemon_v2_type_sum_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_type"
 */
export interface pokemon_v2_type_var_pop_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_type"
 */
export interface pokemon_v2_type_var_samp_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_type"
 */
export interface pokemon_v2_type_variance_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  move_damage_class_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_typeefficacy". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_typeefficacy_bool_exp {
  _and?: pokemon_v2_typeefficacy_bool_exp[] | null;
  _not?: pokemon_v2_typeefficacy_bool_exp | null;
  _or?: pokemon_v2_typeefficacy_bool_exp[] | null;
  damage_factor?: Int_comparison_exp | null;
  damage_type_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  pokemonV2TypeByTargetTypeId?: pokemon_v2_type_bool_exp | null;
  pokemon_v2_type?: pokemon_v2_type_bool_exp | null;
  target_type_id?: Int_comparison_exp | null;
}

/**
 * order by aggregate values of table "pokemon_v2_typegameindex"
 */
export interface pokemon_v2_typegameindex_aggregate_order_by {
  avg?: pokemon_v2_typegameindex_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_typegameindex_max_order_by | null;
  min?: pokemon_v2_typegameindex_min_order_by | null;
  stddev?: pokemon_v2_typegameindex_stddev_order_by | null;
  stddev_pop?: pokemon_v2_typegameindex_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_typegameindex_stddev_samp_order_by | null;
  sum?: pokemon_v2_typegameindex_sum_order_by | null;
  var_pop?: pokemon_v2_typegameindex_var_pop_order_by | null;
  var_samp?: pokemon_v2_typegameindex_var_samp_order_by | null;
  variance?: pokemon_v2_typegameindex_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_typegameindex"
 */
export interface pokemon_v2_typegameindex_avg_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_typegameindex". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_typegameindex_bool_exp {
  _and?: pokemon_v2_typegameindex_bool_exp[] | null;
  _not?: pokemon_v2_typegameindex_bool_exp | null;
  _or?: pokemon_v2_typegameindex_bool_exp[] | null;
  game_index?: Int_comparison_exp | null;
  generation_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  pokemon_v2_generation?: pokemon_v2_generation_bool_exp | null;
  pokemon_v2_type?: pokemon_v2_type_bool_exp | null;
  type_id?: Int_comparison_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_typegameindex"
 */
export interface pokemon_v2_typegameindex_max_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_typegameindex"
 */
export interface pokemon_v2_typegameindex_min_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_typegameindex"
 */
export interface pokemon_v2_typegameindex_stddev_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_typegameindex"
 */
export interface pokemon_v2_typegameindex_stddev_pop_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_typegameindex"
 */
export interface pokemon_v2_typegameindex_stddev_samp_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_typegameindex"
 */
export interface pokemon_v2_typegameindex_sum_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_typegameindex"
 */
export interface pokemon_v2_typegameindex_var_pop_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_typegameindex"
 */
export interface pokemon_v2_typegameindex_var_samp_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_typegameindex"
 */
export interface pokemon_v2_typegameindex_variance_order_by {
  game_index?: order_by | null;
  generation_id?: order_by | null;
  id?: order_by | null;
  type_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_typename". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_typename_bool_exp {
  _and?: pokemon_v2_typename_bool_exp[] | null;
  _not?: pokemon_v2_typename_bool_exp | null;
  _or?: pokemon_v2_typename_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_type?: pokemon_v2_type_bool_exp | null;
  type_id?: Int_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_version". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_version_bool_exp {
  _and?: pokemon_v2_version_bool_exp[] | null;
  _not?: pokemon_v2_version_bool_exp | null;
  _or?: pokemon_v2_version_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_encounters?: pokemon_v2_encounter_bool_exp | null;
  pokemon_v2_locationareaencounterrates?: pokemon_v2_locationareaencounterrate_bool_exp | null;
  pokemon_v2_pokemongameindices?: pokemon_v2_pokemongameindex_bool_exp | null;
  pokemon_v2_pokemonitems?: pokemon_v2_pokemonitem_bool_exp | null;
  pokemon_v2_pokemonspeciesflavortexts?: pokemon_v2_pokemonspeciesflavortext_bool_exp | null;
  pokemon_v2_versiongroup?: pokemon_v2_versiongroup_bool_exp | null;
  pokemon_v2_versionnames?: pokemon_v2_versionname_bool_exp | null;
  version_group_id?: Int_comparison_exp | null;
}

/**
 * order by aggregate values of table "pokemon_v2_versiongroup"
 */
export interface pokemon_v2_versiongroup_aggregate_order_by {
  avg?: pokemon_v2_versiongroup_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_versiongroup_max_order_by | null;
  min?: pokemon_v2_versiongroup_min_order_by | null;
  stddev?: pokemon_v2_versiongroup_stddev_order_by | null;
  stddev_pop?: pokemon_v2_versiongroup_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_versiongroup_stddev_samp_order_by | null;
  sum?: pokemon_v2_versiongroup_sum_order_by | null;
  var_pop?: pokemon_v2_versiongroup_var_pop_order_by | null;
  var_samp?: pokemon_v2_versiongroup_var_samp_order_by | null;
  variance?: pokemon_v2_versiongroup_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_versiongroup"
 */
export interface pokemon_v2_versiongroup_avg_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_versiongroup". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_versiongroup_bool_exp {
  _and?: pokemon_v2_versiongroup_bool_exp[] | null;
  _not?: pokemon_v2_versiongroup_bool_exp | null;
  _or?: pokemon_v2_versiongroup_bool_exp[] | null;
  generation_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  order?: Int_comparison_exp | null;
  pokemon_v2_abilitychanges?: pokemon_v2_abilitychange_bool_exp | null;
  pokemon_v2_abilityflavortexts?: pokemon_v2_abilityflavortext_bool_exp | null;
  pokemon_v2_encounterslots?: pokemon_v2_encounterslot_bool_exp | null;
  pokemon_v2_generation?: pokemon_v2_generation_bool_exp | null;
  pokemon_v2_itemflavortexts?: pokemon_v2_itemflavortext_bool_exp | null;
  pokemon_v2_machines?: pokemon_v2_machine_bool_exp | null;
  pokemon_v2_movechanges?: pokemon_v2_movechange_bool_exp | null;
  pokemon_v2_moveeffectchanges?: pokemon_v2_moveeffectchange_bool_exp | null;
  pokemon_v2_moveflavortexts?: pokemon_v2_moveflavortext_bool_exp | null;
  pokemon_v2_pokedexversiongroups?: pokemon_v2_pokedexversiongroup_bool_exp | null;
  pokemon_v2_pokemonforms?: pokemon_v2_pokemonform_bool_exp | null;
  pokemon_v2_pokemonmoves?: pokemon_v2_pokemonmove_bool_exp | null;
  pokemon_v2_versiongroupmovelearnmethods?: pokemon_v2_versiongroupmovelearnmethod_bool_exp | null;
  pokemon_v2_versiongroupregions?: pokemon_v2_versiongroupregion_bool_exp | null;
  pokemon_v2_versions?: pokemon_v2_version_bool_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_versiongroup"
 */
export interface pokemon_v2_versiongroup_max_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
  order?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_versiongroup"
 */
export interface pokemon_v2_versiongroup_min_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
  order?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_versiongroup"
 */
export interface pokemon_v2_versiongroup_stddev_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_versiongroup"
 */
export interface pokemon_v2_versiongroup_stddev_pop_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_versiongroup"
 */
export interface pokemon_v2_versiongroup_stddev_samp_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_versiongroup"
 */
export interface pokemon_v2_versiongroup_sum_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_versiongroup"
 */
export interface pokemon_v2_versiongroup_var_pop_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_versiongroup"
 */
export interface pokemon_v2_versiongroup_var_samp_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_versiongroup"
 */
export interface pokemon_v2_versiongroup_variance_order_by {
  generation_id?: order_by | null;
  id?: order_by | null;
  order?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_versiongroupmovelearnmethod". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_versiongroupmovelearnmethod_bool_exp {
  _and?: pokemon_v2_versiongroupmovelearnmethod_bool_exp[] | null;
  _not?: pokemon_v2_versiongroupmovelearnmethod_bool_exp | null;
  _or?: pokemon_v2_versiongroupmovelearnmethod_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  move_learn_method_id?: Int_comparison_exp | null;
  pokemon_v2_movelearnmethod?: pokemon_v2_movelearnmethod_bool_exp | null;
  pokemon_v2_versiongroup?: pokemon_v2_versiongroup_bool_exp | null;
  version_group_id?: Int_comparison_exp | null;
}

/**
 * order by aggregate values of table "pokemon_v2_versiongroupregion"
 */
export interface pokemon_v2_versiongroupregion_aggregate_order_by {
  avg?: pokemon_v2_versiongroupregion_avg_order_by | null;
  count?: order_by | null;
  max?: pokemon_v2_versiongroupregion_max_order_by | null;
  min?: pokemon_v2_versiongroupregion_min_order_by | null;
  stddev?: pokemon_v2_versiongroupregion_stddev_order_by | null;
  stddev_pop?: pokemon_v2_versiongroupregion_stddev_pop_order_by | null;
  stddev_samp?: pokemon_v2_versiongroupregion_stddev_samp_order_by | null;
  sum?: pokemon_v2_versiongroupregion_sum_order_by | null;
  var_pop?: pokemon_v2_versiongroupregion_var_pop_order_by | null;
  var_samp?: pokemon_v2_versiongroupregion_var_samp_order_by | null;
  variance?: pokemon_v2_versiongroupregion_variance_order_by | null;
}

/**
 * order by avg() on columns of table "pokemon_v2_versiongroupregion"
 */
export interface pokemon_v2_versiongroupregion_avg_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_versiongroupregion". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_versiongroupregion_bool_exp {
  _and?: pokemon_v2_versiongroupregion_bool_exp[] | null;
  _not?: pokemon_v2_versiongroupregion_bool_exp | null;
  _or?: pokemon_v2_versiongroupregion_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  pokemon_v2_region?: pokemon_v2_region_bool_exp | null;
  pokemon_v2_versiongroup?: pokemon_v2_versiongroup_bool_exp | null;
  region_id?: Int_comparison_exp | null;
  version_group_id?: Int_comparison_exp | null;
}

/**
 * order by max() on columns of table "pokemon_v2_versiongroupregion"
 */
export interface pokemon_v2_versiongroupregion_max_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by min() on columns of table "pokemon_v2_versiongroupregion"
 */
export interface pokemon_v2_versiongroupregion_min_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by stddev() on columns of table "pokemon_v2_versiongroupregion"
 */
export interface pokemon_v2_versiongroupregion_stddev_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by stddev_pop() on columns of table "pokemon_v2_versiongroupregion"
 */
export interface pokemon_v2_versiongroupregion_stddev_pop_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by stddev_samp() on columns of table "pokemon_v2_versiongroupregion"
 */
export interface pokemon_v2_versiongroupregion_stddev_samp_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by sum() on columns of table "pokemon_v2_versiongroupregion"
 */
export interface pokemon_v2_versiongroupregion_sum_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by var_pop() on columns of table "pokemon_v2_versiongroupregion"
 */
export interface pokemon_v2_versiongroupregion_var_pop_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by var_samp() on columns of table "pokemon_v2_versiongroupregion"
 */
export interface pokemon_v2_versiongroupregion_var_samp_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * order by variance() on columns of table "pokemon_v2_versiongroupregion"
 */
export interface pokemon_v2_versiongroupregion_variance_order_by {
  id?: order_by | null;
  region_id?: order_by | null;
  version_group_id?: order_by | null;
}

/**
 * Boolean expression to filter rows from the table "pokemon_v2_versionname". All fields are combined with a logical 'AND'.
 */
export interface pokemon_v2_versionname_bool_exp {
  _and?: pokemon_v2_versionname_bool_exp[] | null;
  _not?: pokemon_v2_versionname_bool_exp | null;
  _or?: pokemon_v2_versionname_bool_exp[] | null;
  id?: Int_comparison_exp | null;
  language_id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  pokemon_v2_language?: pokemon_v2_language_bool_exp | null;
  pokemon_v2_version?: pokemon_v2_version_bool_exp | null;
  version_id?: Int_comparison_exp | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
