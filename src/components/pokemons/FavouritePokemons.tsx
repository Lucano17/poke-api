"use client"
import React, { useState } from 'react'
import { PokemonsGrid } from '@/components'
import { useAppSelector } from '@/store'
import { IoHeartOutline } from 'react-icons/io5'

export const FavouritePokemons = () => {
    const favouritePokemons = useAppSelector( state =>Object.values(state.pokemons))
    const [pokemons, setPokemons] = useState(favouritePokemons)
  return (
    <>
    {
    pokemons.length === 0
    ? <NoFavourites/>
    : <PokemonsGrid pokemons={favouritePokemons} />
    }
    </>
  )
}



export const NoFavourites = () => {
    return (
      <div className='flex flex-col h-[50vh] items-center justify-center'>
        <IoHeartOutline size={100} className='text-red-500'/>
        <span>No hay favoritos</span>
  
      </div>
    )
  }