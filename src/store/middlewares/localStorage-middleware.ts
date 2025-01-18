import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";

export const localStorageMiddleware = (state: MiddlewareAPI) => {
  return (next: Dispatch) => (action: Action) => {
    next(action);

    if (action.type === "pokemons/toggleFavourite") {
      const { favourites } = (state.getState() as RootState).pokemons;
      localStorage.setItem("favourite-pokemons", JSON.stringify(favourites));
    }
  };
};
