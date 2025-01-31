import { Pokemon, PokemonsResponse } from "@/interfaces";
import { pokemonTypes } from "@/interfaces/pokemon";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { TiMediaPlay } from "react-icons/ti";

interface Props {
  params: Promise<{ name: string }>;
}


export async function generateStaticParams() {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=151`
  ).then((rest) => rest.json());

  const staticPokemonPages = data.results.map((pokemon) => ({
    name: pokemon.name,
  }));

  return staticPokemonPages.map(({ name }) => ({
    name: name,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await Promise.resolve(params); // Resolviendo params de manera explícita

  if (!name) {
    return {
      title: "Poke Api | Not found",
      description: "Página del pokémon no encontrada",
    };
  }

  try {
    const pokemon = await getPokemon(name);
    if (!pokemon) throw new Error("Pokemon not found");

    const capitalizedPokeName =
      pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    return {
      title: `Poke Api | ${capitalizedPokeName}`,
      description: `Página del pokémon ${capitalizedPokeName}`,
    };
  } catch (error) {
    console.log(error)
    return {
      title: "Poke Api | Not found",
      description: "Página del pokémon no encontrada",
    };
  }
}




const getPokemon = async (name: string): Promise<Pokemon> => {
  try {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
      next: {
        revalidate: 60 * 60 * 30 * 6,
      },
    }).then((resp) => resp.json());

    return pokemon;
  } catch (error) {
    console.log(error)
    notFound();
  }
};

export default async function PokemonPage({ params }: Props) {
  const { name } = await Promise.resolve(params)
  const pokemon = await getPokemon(name) ;
  return (
    <div className="flex mt-5 flex-col items-center text-slate-800">
      <div className="relative flex flex-col items-center rounded-[20px] sm:w-[700px] sm2:w-[90%]
      mx-auto bg-white bg-clip-border  shadow-lg  p-3">
        <div className="mt-2 mb-8 w-full">
          <h1 className="px-2 text-2xl font-bold text-slate-700 capitalize">
            #{pokemon.id} {pokemon.name}
          </h1>
          <div className="flex flex-col justify-center items-center">
            <Image
              src={pokemon.sprites.other?.dream_world.front_default ?? ""}
              width={150}
              height={150}
              alt={`Imagen del pokemon ${pokemon.name}`}
              className="mb-5 max-w-[150] max-h-[150]"
            />
            
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 gap-4 px-2 sm2:flex sm2:flex-col sm2:w-[70%] md:w-full">
          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg gap-5 ">
            <p className="flex text-sm text-gray-600">Tipos</p>
            <div className="text-base font-medium text-navy-700 flex">
              <div className="flex gap-3">
                {pokemon?.types?.map((type) => {
                  const typeBg =
                    pokemonTypes[type.type.name as keyof typeof pokemonTypes]
                      ?.bgColor;
                  const typeText =
                    pokemonTypes[type.type.name as keyof typeof pokemonTypes]
                      ?.textColor;
                  return (
                    <p
                      key={type.slot}
                      className={`${typeBg} ${typeText} rounded p-1 pt-0 capitalize  -mt-4 `}
                    >
                      {type.type.name}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-600">Peso</p>
            <span className="text-base font-medium text-navy-700 flex">
              {pokemon.weight}kg
            </span>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-gray-600">Sprites regulares</p>
            <div className="flex justify-center">
              <Image
                src={pokemon.sprites.front_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-gray-600">Sprites shiny</p>
            <div className="flex justify-center">
              <Image
                src={pokemon.sprites.front_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm2:w-[90%] lg:w-[70%]  mt-10">
              <h2 className="font-bold text-xl m-auto">Movimientos</h2>
              <div className="flex flex-wrap">
                <ul className="flex flex-wrap">

                {pokemon.moves.map((move) => (
                  <li key={move.move.name} className="flex mr-2 capitalize">
                   <TiMediaPlay size={10} className="mt-2"/> {move.move.name}
                  </li>
                ))}
                </ul>
              </div>
            </div>
    </div>
  );
}
