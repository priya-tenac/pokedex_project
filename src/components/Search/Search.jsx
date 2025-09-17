

// import './Search.css';

// function Search({updateSearchTerm}) {
//     return (
//         <div className="search-wrapper">
//             <input 
//                 className="pokemon-name-search"
//                 type="text"
//                 placeholder="pokemon name..."
//                 onChange={(e)=>updateSearchTerm(e.target.value)}
//             /> 
//         </div>
//     );
// }

// export default Search;




// CSS imports
import useDebounce from '../../hooks/useDebounce';
import './Search.css';

function Search({ updateSearchTerm }) {
    const debounceUpdateSearch = useDebounce((e) => updateSearchTerm(e.target.value));
    return (
        <input 
            id='search-pokemon'
            type="text" 
            placeholder="which pokemon you're loooking for ? " 
            onChange={debounceUpdateSearch}
        />
    )
}

export default Search;