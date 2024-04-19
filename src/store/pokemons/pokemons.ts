import { SimplePokemon } from "@/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoritePokemons {
  favorites: { [key: string]: SimplePokemon };
}

// const getFavoritePokemonsLS = (): FavoritePokemons => {
//   // if (typeof localStorage === "undefined") return {};
//   const favorites = JSON.parse(
//     localStorage.getItem("favorite-pokemons") ?? "{}"
//   );
//   return favorites;
// };

const initialState: FavoritePokemons = {
  favorites: {},
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritePokemons(
      state,
      actions: PayloadAction<{ [key: string]: SimplePokemon }>
    ) {
      state.favorites = actions.payload;
    },
    toggleFavorite(state, actions: PayloadAction<SimplePokemon>) {
      const { id } = actions.payload;
      if (Object.keys(state.favorites).includes(id)) {
        delete state.favorites[id];
      } else {
        state.favorites[id] = actions.payload;
      }
      localStorage.setItem("favorite-pokemons", JSON.stringify(state));
    },
  },
});

export const { setFavoritePokemons, toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
