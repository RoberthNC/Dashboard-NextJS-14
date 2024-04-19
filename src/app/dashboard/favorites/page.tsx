import { Metadata } from "next";
import { FavoritePokemons } from "../../../pokemons/pokemons/FavoritePokemons";

export const metadata: Metadata = {
  title: "Favoritos",
  description: "Todos mis pokémons favoritos",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokémons Favoritos{" "}
        <small className="text-blue-500 font-bold">Global State</small>
      </span>
      <FavoritePokemons />
    </div>
  );
}
