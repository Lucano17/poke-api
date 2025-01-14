import { SimplePokemon } from '@/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonsState {
  [key: string]: SimplePokemon,

}

const initialState: PokemonsState = {
  "1": { id: "1", name: "bulbasaur" },
  "4": { id: "4", name: "bulbasaur" },
  "7": { id: "7", name: "bulbasaur" },
}

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavourite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state[id]) {
        delete state[id]
        return
      }

      state[id] = pokemon
    }
  }
});

export const { toggleFavourite } = pokemonsSlice.actions

export default pokemonsSlice.reducer

