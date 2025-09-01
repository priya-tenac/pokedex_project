// // import Search from "../Search/Search";

// // import './Pokedex.css'

// // function Pokedex()
// // {
// //      return (
// //         <div className="pokedex-wrapper">
// //         <h1 id="pokedex-heading">Pokedex </h1>
// //            <Search/>
// //         </div>
// //      )
// // }
// // export default Pokedex;
// import PokemonList from '../PokemonList/PokemonList';
// import Search from '../Search/Search';
// import './Pokedex.css';

// function Pokedex() {
//     return (
//         <div className="pokedex-wrapper">
//             <h1 className="pokedex-header">Pokedex</h1>
//             <Search />
//             <PokemonList/>
//         </div>
//     );
// }

// export default Pokedex;


import { useState } from "react";
import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";
import "./Pokedex.css";

 function Pokedex() {
  const [searchTerm,setSearchTerm]=useState('');
  return (
    <div className="pokedex-wrapper">
      <Search updateSearchTerm={setSearchTerm}/>
      {searchTerm}
      {(searchTerm.length==0)?<PokemonList />: ''}
    </div>
  );
}
export default Pokedex;
