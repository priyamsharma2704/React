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
        //console.log(pokemonData);

        var stats = pokemonData.stats.map((stat) => {
            return { name: stat.stat.name, value: stat.base_stat };
        });

        data.push({
            id: pokemonData.id,
            name: pokemonData.name,
            type: pokemonData.types[0].type.name,
            img: pokemonData.sprites.front_default,
            stats: stats,
        });
    }
    return data;
}

function App() {
    const [pokemons, setPokemons] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        getPokemons().then((res) => {
            setPokemons(res);
        });
    }, []);

    function handleSearch(value) {
        setSearch(value);
    }

    const filteredPokes = pokemons.filter(
        (poke) =>
            poke.name.toLowerCase().includes(search.toLowerCase()) ||
            poke.type.toLowerCase().includes(search.toLowerCase()),
    );

    function handleCardClick(id) {
        setSelectedId((prevId) => (prevId == id ? null : id));
    }

    return (
        <>
            <input
                placeholder="search..."
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
            ></input>
            <div className="grid-container">
                {filteredPokes.map((pokemon) => {
                    const isSelected = pokemon.id === selectedId;
                    return (
                        <div
                            key={pokemon.id}
                            className="pokemon-card"
                            style={{
                                border: isSelected
                                    ? "2px solid green"
                                    : "1px solid #ccc",
                            }}
                            onClick={() => handleCardClick(pokemon.id)}
                        >
                            <h2>{pokemon.name}</h2>
                            <img src={pokemon.img} alt={pokemon.name} />
                            <p>{pokemon.type}</p>
                            <div
                                className={
                                    isSelected ? "statsVisible" : "stats"
                                }
                            >
                                <p>Stats</p>
                                {pokemon.stats.map((stat, idx) => (
                                    <div key={idx}>
                                        {stat.name}:{stat.value}
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default App;
