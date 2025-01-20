import { SimplePokemon } from "@/interfaces";
import { notFound } from "next/navigation";

export const getPokemon = async (name: string): Promise<SimplePokemon> => {
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