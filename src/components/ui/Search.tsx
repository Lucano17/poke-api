"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";


export const Search = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };



  // # Search to URL Params function
  const handleSearch = async () => {
    if (!query) return;

    setLoading(true);
    try {
      router.push(`/pokemons/${query.toLowerCase()}`);
    } catch (error) {
      console.error("Error al buscar el pokémon:", error);
    } finally {
      setLoading(false);
    }
  };


  return (

    <div className="flex justify-center ">
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder={"Buscar pokémon... Nombre o ID"}
      className="w-60 p-2"
      />
      <button
      className=""
      onClick={handleSearch}
      disabled={loading}>
        {loading ? "Buscando..." : "Buscar"}
      </button>
  </div>

)};
