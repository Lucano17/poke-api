
import { PokemonsGrid } from "@/components";
import Image from "next/image";



export default async function PokemonPage() {
  
  return (
    <div className="flex flex-col">
      <PokemonsGrid/>
    </div>
  );
}
