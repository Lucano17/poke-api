import { PokemonsResponse, SimplePokemon } from "@/interfaces";
import Image from "next/image";

const getPokemons = async (
  limit = 20,
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

export default async function PokemonPage() {
  const pokemons = await getPokemons();
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {pokemons.map((pokemon) => (
          <div key={pokemon.id}>
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              width={70}
              height={70}
              alt={pokemon.name}
            />
            <span>#{pokemon.id} {pokemon.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
