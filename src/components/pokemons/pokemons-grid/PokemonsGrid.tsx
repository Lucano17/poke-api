import React from 'react'
import { PokemonsResponse, SimplePokemon } from "@/interfaces";
import Image from 'next/image';
import { PokemonCard } from '@/components';

const totalPokemons = 1025

const getPokemons = async (
  limit = 151,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}offset=${offset}/`
  ).then((rest) => rest.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export const PokemonsGrid = async() => {
    const pokemons = await getPokemons();
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon}/>
        ))}
      </div>
  )
}
