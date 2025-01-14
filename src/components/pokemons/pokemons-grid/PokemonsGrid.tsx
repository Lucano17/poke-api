import React from 'react'
import { PokemonsResponse, SimplePokemon } from "@/interfaces";
import Image from 'next/image';
import { PokemonCard } from '@/components';


interface Props {
  pokemons: SimplePokemon[];
}

const totalPokemons = 1025

export const PokemonsGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">

        {
          pokemons.map( pokemon => (
            <PokemonCard key={ pokemon.id } pokemon={pokemon} />            
          ))
        }
        
    </div>
  )
}