import { useEffect, useState } from "react";

async function getPokemons() {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${10}`);
    const pokemons = await resp.json();
    const data = [];

    for (const pokemon of pokemons.results) {
        const pokemonDataResp = await fetch(pokemon.url);
        const pokemonData = await pokemonDataResp.json();

        const stats = pokemonData.stats.map((stat) => ({
            name: stat.stat.name,
            value: stat.base_stat,
        }));

        data.push({
            id: pokemonData.id,
            name: pokemonData.name,
            type: pokemonData.types[0].type.name,
            img: pokemonData.sprites.front_default,
            stats,
        });
    }

    return data;
}

export function usePokemons() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getPokemons().then((res) => {
            setPokemons(res);
        });
    }, []);

    return pokemons;
}
