const [page, setPage] = useState(1);
const pokemonPerPage = 20;

const paginatedPokemon = pokemonList.slice(
  (page - 1) * pokemonPerPage, 
  page * pokemonPerPage
);
