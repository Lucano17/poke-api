"use client";

import Link from "next/link";
import Image from "next/image";
import { SimplePokemon } from "@/interfaces";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavourite } from "@/store/pokemon/pokemons";
import { getPokemon } from "@/actions/getSimplePokemon";
import { useEffect, useState } from "react";
import { pokemonTypes, Type } from "@/interfaces/pokemon";

interface Props {
  pokemonA: SimplePokemon;
}

export const PokemonCard = ({ pokemonA }: Props) => {
  const [pokemon, setPokemon] = useState<SimplePokemon>();

  const { id, name, types } = pokemonA || {};
  // const typeClass = pokemon?.types[0].type.name as keyof typeof pokemonTypes;
  // // const typeClass = pokemonTypes[type.type.name as keyof typeof pokemonTypes]?.class;

  const isFavourite = useAppSelector(
    (state) => !!state.pokemons.favourites[id]
  );

  const spriteUrl = id
    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
    : "/path/to/default/image.svg";

  const dispatch = useAppDispatch();

  const onToggle = () => {
    dispatch(toggleFavourite(pokemonA));
  };

  useEffect(() => {
    const fetchSimplePokemon = async () => {
      if (!pokemonA) {
        return <div>Loading...</div>; // O alguna imagen de carga
      }
      try {
        const pokemonFetched = await getPokemon(name);
        setPokemon(pokemonFetched);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSimplePokemon();
  }, [name]);

  return (
    <div className="mx-auto right-0 mt-2 w-55 ">
      <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          
          {/* Poke types */}
          <div className="flex mb-4 gap-6">
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

          <Image
            key={pokemon?.id}
            src={spriteUrl}
            width={70}
            height={70}
            alt={pokemonA.name}
            priority={false}
          />

          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            #{id} | {name}
          </p>
          <div className="mt-5">
            <Link
              href={`/pokemons/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Más información
            </Link>
          </div>
        </div>
        <div className="border-b">
          <div
            onClick={onToggle}
            className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer"
          >
            <div className="text-red-600">
              {isFavourite ? <IoHeart /> : <IoHeartOutline />}
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {isFavourite ? "En tus favoritos" : "No es favorito"}
              </p>
              <p className="text-xs text-gray-500">Click para cambiar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
