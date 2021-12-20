import React from "react";
import css from "./PokeballLoader.scss";

export function PokeballLoader() {
  return (
    <div className={css.pokeball}>
      <div className={css.pokeballButton}></div>
    </div>
  );
}
