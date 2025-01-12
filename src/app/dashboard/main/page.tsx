


const getPokemons = async(limit = 20, offset=0) => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}offset=${offset}/`)
  .then(rest => rest.json());

  return data
}

export default async function NamePage() {

  const pokemons = await getPokemons()
  return (
    <div>
      {JSON.stringify(pokemons)}
    </div>
  );
}