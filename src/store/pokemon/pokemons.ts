import { SimplePokemon } from '@/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonsState { 
  favourites: { [key: string]: SimplePokemon },
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

const initialState:  PokemonsState = getInitialState();
  // favourites: {},
  // ...getInitialState(),
  // '1': { id: '1', name: 'bulbasaur' },
  // '3': { id: '3', name: 'venusaur' },
  // '5': { id: '5', name: 'Charmeleon' },
// }

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

    setFavouritePokemons( state, action: PayloadAction<{ [key: string]: SimplePokemon }> ) {
      state.favourites = action.payload;
    },

    toggleFavourite( state, action: PayloadAction<SimplePokemon> ) {

      const pokemon = action.payload;
      const { id } = pokemon;

      if ( !!state.favourites[id] ) {
        delete state.favourites[id];
        // return;
      } else {
        state.favourites[id] = pokemon;
      }

      // //TODO: No se debe de hacer en Redux
      // localStorage.setItem('favorite-pokemons', JSON.stringify( state.favourites ) );

    }

  }
});

export const { toggleFavourite, setFavouritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;