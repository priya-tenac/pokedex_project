import axios from "axios";
import { useEffect, useState } from "react";
import usePokemonList from "./usePokemonList";
function usePokemonDetails(id) {
  const [pokemon, setPokemon] = useState({});
  const [pokemonListState, SetPokemonListState] = usePokemonList();
  useEffect(() => {
    async function downloadPokemon() {
      try {
        // 1) Use backticks so id interpolates correctly
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const typeName = response.data.types?.[0]?.type?.name ?? "";
        // Only fetch similar if we have a type
        const pokemonOfSameTypes = typeName
          ? await axios.get(`https://pokeapi.co/api/v2/type/${typeName}`)
          : { data: { pokemon: [] } };
        // 2) Image fallback chain (same idea you used in the list)
        const img =
          response.data.sprites?.other?.dream_world?.front_default ??
          response.data.sprites?.front_default ??
          response.data.sprites?.front_shiny ??
          "";
        setPokemon({
          name: response.data.name,
          image: img,
          weight: response.data.weight,
          height: response.data.height,
          types: response.data.types?.map((t) => t.type.name) ?? [],
          // The /type endpoint returns { pokemon: { name, url } }
          similarPokemons: (pokemonOfSameTypes.data?.pokemon ?? []).slice(0, 5),
        });
        SetPokemonListState({
          ...pokemonListState,
          type: typeName,
        });
      } catch (e) {
        console.error("Failed to load pokemon", e);
        setPokemon({});
      }
    }
    downloadPokemon();
  }, [id]); // depend on id so route changes refetch

  return [pokemon];
}

export default usePokemonDetails;
