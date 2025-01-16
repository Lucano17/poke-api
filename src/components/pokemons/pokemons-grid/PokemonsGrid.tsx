import React from "react";
import { PokemonsResponse, SimplePokemon } from "@/interfaces";
import Image from "next/image";
import { PokemonCard } from "@/components";
import { Search } from "@/components/ui/Search";

interface Props {
  pokemons: SimplePokemon[];
}

const totalPokemons = 1025;

export const PokemonsGrid = ({ pokemons }: Props) => {
  return (
    <div>
      <Search />
      <div className="flex flex-wrap gap-10 items-center justify-center mt-5">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemonA={pokemon} />
        ))}
      </div>
    </div>
  );
};
