// import Pokemon from "../Pokemon/Pokemon";
// import usePokemonList from "../../hooks/usePokemonList";
// import "./PokemonList.css";

// function PokemonList() {
//     const [pokemonListState,SetPokemonListState]= usePokemonList(false);
//   return (
//     <div className="pokemon-list-wrapper">
//       <div className="pokemon-wrapper">
//         {pokemonListState.isLoading
//           ? "loading..."
//           : pokemonListState.pokemonList.map((p) => (
//               <Pokemon key={p.id} name={p.name} image={p.image} id={p.id} />
//             ))}
//       </div>
//       <div className="controls">
//         <button
//           disabled={pokemonListState.prevUrl == null}
//           onClick={() => {
//             const urlToset = pokemonListState.prevUrl;
//             SetPokemonListState({ ...pokemonListState, pokedexUrl: urlToset });
//           }} >prev </button>
//         <button
//           disabled={pokemonListState.nextUrl == null}
//           onClick={() => {
//             const urlToset = pokemonListState.nextUrl;
//             SetPokemonListState({ ...pokemonListState, pokedexUrl: urlToset });
//           }} > next </button>
//       </div>
//     </div>
//   );
// }

// export default PokemonList;


// CSS imports 
import './PokemonList.css';

import Pokemon from '../Pokemon/Pokemon';
import usePokemonList from '../../hooks/usePokemonList';

function PokemonList() {
    const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon";
    
    const [pokemonListState, setPokemonListState] = usePokemonList(DEFAULT_URL);

    return (
        <div className='pokemon-list-wrapper'>
            <div>
                <h1>Pokemon list</h1>
            </div>
            <div className='page-controls'>
                <button onClick={() => setPokemonListState({...pokemonListState, pokedexUrl: pokemonListState.prevUrl})}>Prev</button>
                <button onClick={() => setPokemonListState({...pokemonListState, pokedexUrl: pokemonListState.nextUrl})}>Next</button>
            </div>
            <div className='pokemon-list'>
                {pokemonListState.pokemonList.map(pokemon => <Pokemon name={pokemon.name} key={pokemon.id} url={pokemon.image} id={pokemon.id} />)}
            </div>
        </div>
    );

}

export default PokemonList;