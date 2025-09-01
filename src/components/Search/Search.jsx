// import './Search.css';
// function Search()
// {
//       return (
//         <div className='search-wrappper'>
//          <input
//               id="pokemon-name-search"
//               type="text"
//               placeholder="pokemon name..."
//          />
//         </div>
//       );
// }
// export default Search;

import './Search.css';

function Search({updateSearchTerm}) {
    return (
        <div className="search-wrapper">
            <input 
                className="pokemon-name-search"
                type="text"
                placeholder="pokemon name..."
                onChange={(e)=>updateSearchTerm(e.target.value)}
            />
          
        </div>
    );
}

export default Search;