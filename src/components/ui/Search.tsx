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
    <div className="flex justify-center">
      <form>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={"Pokémon o ID"}
          className="w-60 p-2 border border-blue-300 hover:border-blue-500 rounded-l-md"
        />
        <button
          className="border border-slate-400 rounded-r-md p-2 bg-slate-300 active:bg-slate-400 hover:border-slate-500"
          onClick={handleSearch}
          disabled={loading}
        >
          {loading ? "Buscando..." : "Buscar"}
        </button>
      </form>
    </div>
  );
};
