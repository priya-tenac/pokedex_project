import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from "../../hooks/usePokemonList";
import "./PokemonList.css";

function PokemonList() {
    const [pokemonListState,SetPokemonListState]= usePokemonList(false);
  return (
    <div className="pokemon-list-wrapper">
      <div className="pokemon-wrapper">
        {pokemonListState.isLoading
          ? "loading..."
          : pokemonListState.pokemonList.map((p) => (
              <Pokemon key={p.id} name={p.name} image={p.image} id={p.id} />
            ))}
      </div>
      <div className="controls">
        <button
          disabled={pokemonListState.prevUrl == null}
          onClick={() => {
            const urlToset = pokemonListState.prevUrl;
            SetPokemonListState({ ...pokemonListState, pokedexUrl: urlToset });
          }} >prev </button>
        <button5
          disabled={pokemonListState.nextUrl == null}
          onClick={() => {
            const urlToset = pokemonListState.nextUrl;
            SetPokemonListState({ ...pokemonListState, pokedexUrl: urlToset });
          }} > next </button5>
      </div>
    </div>
  );
}

export default PokemonList;
