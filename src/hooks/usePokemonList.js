import axios from "axios";
import { useEffect, useState } from "react";
function usePokemonList(){
   const [pokemonListState, SetPokemonListState] = useState({
      pokemonList: [],
      isLoading: true,
      pokedexUrl: "https://pokeapi.co/api/v2/pokemon?limit=20",
      nextUrl: '',
      prevUrl: '',
     
    });
     async function downloadPokemon() {
      try {
           SetPokemonListState((state) => ({ ...state, isLoading: true }));
        const response = await axios.get(pokemonListState.pokedexUrl);
        const results = response.data.results;
        console.log(response.data.pokemon);
        console.log(pokemonListState)
        SetPokemonListState((state) => ({
          ...state,
          nextUrl: response.data.next,
          prevUrl: response.data.previous
        }));
        const detailPromises = results.map((p) => axios.get(p.url));
        const detailResponses = await axios.all(detailPromises);
        const list = detailResponses.map((res) => {
          const pokemon = res.data;
          return {
            id: pokemon.id,
            name: pokemon.name,
            image:
              pokemon.sprites.other?.dream_world?.front_default ??
              pokemon.sprites.front_default ??
              pokemon.sprites.front_shiny,
            types: pokemon.types,
          };
        });
        SetPokemonListState((state) => ({
          ...state,
          pokemonList: list,
          isLoading: false
        }));
      } catch (e) {
        console.error("Failed to load pokemon", e);
      }
    }
    useEffect(()=>{
        downloadPokemon();
    },[pokemonListState.pokedexUrl])
    return [pokemonListState,SetPokemonListState]
}
export default usePokemonList;