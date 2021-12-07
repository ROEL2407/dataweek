import CalculateStatTotal from "../components/CalculateStatTotal";

function Fetch() {
    return new Promise((resolve) => {
        function starters() {
            // Fetch init API
            fetch("https://pokeapi.co/api/v2/pokemon?limit=9&offset=0")
                .then(response => response.json())
                .then(data => getPokemonData(data))
        }

        function getPokemonData(data) {
            let pokemonArray = [];

            const promises = data.results
                .map(result => result.url)
                .map(url => getPokemon(url));

            // Resolve all promises
            Promise.all(promises).then(results => {
                // For each pokemon in results push the pokemon to the array pokemonArray
                results.forEach(pokemon => {
                    pokemonArray.push({
                        naam: pokemon.name,
                        stats: pokemon.stats,
                        type: pokemon.types[0].type.name
                    });
                });

                CalculateStatTotal(pokemonArray)
                    .then(resolve)
            });
        }

        function getPokemon(url) {
            // return every fetch
            return fetch(url)
                .then(response => response.json())
                .then(data => data);
        }
        starters();

    })
}

export default Fetch;