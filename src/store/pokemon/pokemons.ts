import { SimplePokemon } from '@/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonsState {
  favourites: {[key: string]: SimplePokemon},

}

// const getInitialState = (): PokemonsState => {
//   // if (typeof localStorage === "undefined") return {};

//   const favourites = JSON.parse(localStorage.getItem("favourite-pokemons") ?? "{}")

//   return favourites
// }

const getInitialState = (): PokemonsState => {
  if (typeof window === "undefined") {
    // Estamos en el servidor, retorna el estado vacío
    return { favourites: {} };
  }

  const favourites = JSON.parse(localStorage.getItem("favourite-pokemons") ?? "{}");
  return { favourites };
};

const initialState: PokemonsState = getInitialState();

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavourite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favourites[id]) {
        delete state.favourites[id]
        return
      } else {
        state.favourites[id] = pokemon
      }

      // localStorage.setItem("favourite-pokemons", JSON.stringify(state.favourites))

    },

    setFavouritePokemons(state, action: PayloadAction<{[key: string]: SimplePokemon}>) {
      state.favourites = action.payload
    }
  }
});

export const { toggleFavourite, setFavouritePokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer

