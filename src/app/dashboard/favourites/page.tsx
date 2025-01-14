import { Metadata } from 'next';
import { PokemonsGrid } from '@/components';


export const metadata: Metadata = {
    title: "Favoritos",
    description: "Tus pokémons favoritos!"
}
export default async function FavouritesPokemonPage() {
  
  return (
    <div className="flex flex-col">

      <span className="text-5xl my-2">Listado de tus pokémons favoritos <small className="text-blue-500">global state</small></span>
      
      <PokemonsGrid pokemons={[]} />

    </div>
  );
}