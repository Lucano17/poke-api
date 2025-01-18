// FavouritePokemons.tsx

"use client"

import { PokemonsGrid } from '@/components'
import { useAppSelector, useAppDispatch } from '@/store'
import { setFavouritePokemons } from '@/store/pokemon/pokemons'
import { useEffect, useState, useMemo } from 'react'
import { IoHeartOutline } from 'react-icons/io5'

export const FavouritePokemons = () => {
  const dispatch = useAppDispatch();

  // Se llama a useAppSelector en el nivel superior del componente
  const favourites = useAppSelector((state) => state.pokemons.favourites);

  // Se usa useMemo solo para evitar recalcular los valores si no cambian
  const favouritePokemons = useMemo(() => Object.values(favourites), [favourites]);

  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Hidratar el estado desde localStorage solo en el cliente
    const storedFavourites = JSON.parse(localStorage.getItem("favourite-pokemons") ?? "{}");
    dispatch(setFavouritePokemons(storedFavourites));
    setIsHydrated(true);
  }, [dispatch]);

  if (!isHydrated) {
    return <div>Loading...</div>;
  }
    
  return (
    <>
      {favouritePokemons.length === 0 ? <NoFavourites/> : <PokemonsGrid pokemons={favouritePokemons} />}
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
