import React from "react";
import Cards from "../Components/Cards";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Root() {
  const {
    data: pokemon,
    error,
    isValidating,
  } = useSWR("https://pokeapi.co/api/v2/pokemon", fetcher);

  if (error) return <div className="failed">Failed to load</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;

  return (
    <>
      {pokemon &&
        pokemon.results.map((pokemon) => (
          <Cards key={pokemon.name} pokemon={pokemon} />
        ))}
    </>
  );
}
