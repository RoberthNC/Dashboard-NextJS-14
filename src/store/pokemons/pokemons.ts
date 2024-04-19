import { SimplePokemon } from "@/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoritePokemons {
  [key: string]: SimplePokemon;
}

const initialState: FavoritePokemons = {};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite(state, actions: PayloadAction<SimplePokemon>) {
      const { id } = actions.payload;
      if (Object.keys(state).includes(id)) {
        delete state[id];
        return;
      }
      state[id] = actions.payload;
    },
  },
});

export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
