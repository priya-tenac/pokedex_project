
import { useParams } from "react-router-dom";
import "./PokemonDetails.css";
import usePokemonDetails from "../../hooks/usePokemonDetails";

function PokemonDetails() {
  const { id } = useParams();
  const [pokemon] = usePokemonDetails(id);

  return (
    <div className="pokemon-details-wrapper">
      {pokemon.image && (
        <img className="pokemon-details-image" src={pokemon.image} alt={pokemon.name} />
      )}
      <div className="pokemon-details-name"><span>{pokemon.name}</span></div>

      <div className="pokemon-details-name">Height: {pokemon.height}</div>
      <div className="pokemon-details-name">Width: {pokemon.weight}</div>

      <div className="pokemon-details-types">
        {pokemon.types && pokemon.types.map((p) => <div key={p}>{p}</div>)}
      </div>

      {pokemon.types && pokemon.similarPokemons && (
        <div>
          more {pokemon.types[0]} type pokemons
          <ul>
            {pokemon.similarPokemons.map((p) => (
              // /type returns objects like { pokemon: { name, url }, slot }
              <li key={p.pokemon.name}>{p.pokemon.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PokemonDetails;
