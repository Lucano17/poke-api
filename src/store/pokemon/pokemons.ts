import { SimplePokemon } from '@/interfaces';
import { createSlice } from '@reduxjs/toolkit'

interface PokemonsState {
  [key: string] : SimplePokemon,

}

const initialState: PokemonsState = {
  "1": { id: "1", name: "bulbasaur"},
  "4": { id: "4", name: "bulbasaur"},
  "7": { id: "7", name: "bulbasaur"},
}

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {}
});

export const {  } = pokemonsSlice.actions

export default pokemonsSlice.reducer

