import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";

export const localStorageMiddleware = (state: MiddlewareAPI) => {
  return (next: Dispatch) => (action: Action) => {
    next(action);

    if (typeof window !== "undefined" && action.type === "pokemons/toggleFavourite") {
      const { pokemons } = state.getState() as RootState;
      localStorage.setItem("favourite-pokemons", JSON.stringify(pokemons.favourites));
    }
  };
};
