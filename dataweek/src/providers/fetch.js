function Fetch() {
    return new Promise((resolve) => {
        function ns() {
            // Fetch init API
            fetch("https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/arrivals[?lang][&station][&uicCode][&dateTime][&maxJourneys]")
                .then(response => response.json())
                .then(data => getPokemonData(data))
        }

        function getPokemonData(data) {
            let dataArray = [];

            const promises = data.results
                .map(result => result.url)
                .map(url => getNSData(url));
console.log(data);
            // Resolve all promises
            Promise.all(promises).then(results => {
                // For each pokemon in results push the pokemon to the array pokemonArray
                results.forEach(e => {
                    dataArray.push();
                });
            });
        }

        function getNSData(url) {
            // return every fetch
            return fetch(url)
                .then(response => response.json())
                .then(data => data);
        }
        ns();

    })
}

export default Fetch;