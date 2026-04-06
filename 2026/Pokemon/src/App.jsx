import { useState, useEffect } from "react";
import "./App.css";
/*
Build a small React app to display Pokémon.
You should be able to:

Display a list of Pokémon (name, type, stats)
Filter Pokémon by type (Fire, Water, etc.)
Search Pokémon by name
Select a Pokémon and show details
(Optional) Sort by power / stats
*/

async function getPokemons() {
    var resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${10}`);
    var pokemons = await resp.json();
    var data = [];
    for (var pokemon of pokemons.results) {
        var pokemonDataResp = await fetch(pokemon.url);
        var pokemonData = await pokemonDataResp.json();

        data.push({
            id: pokemonData.id,
            name: pokemonData.name,
            type: pokemonData.types[0].type.name,
            img: pokemonData.sprites.front_default,
        });
    }
    return data;
}

function App() {
    let [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        var data = getPokemons().then((res) => setPokemons(res));
    }, []);
    return (
        <>
            <input placeholder="search..."></input>
            <div className="grid-container">
                {pokemons.map((pokemon) => (
                    <div key={pokemon.name} className="pokemon-card">
                        <h2>{pokemon.name}</h2>
                        <img src={pokemon.img} alt={pokemon.name} />
                        <p>{pokemon.type}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;
