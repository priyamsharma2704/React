import { useState } from "react";
import { usePokemons } from "../hooks/usePokemons";
/*
Practice goals:
1) Display a list of Pokemon (name, type, stats)
2) Filter Pokemon by type (Fire, Water, etc.)
3) Search Pokemon by name
4) Select a Pokemon and show details
5) (Optional) Sort by power / stats

Barebones rules:
- No solutions included.
- No handlers wired.
- No controlled inputs/selects.
- Fill all TODOs yourself.
*/

const MOCK_POKEMONS = [
    {
        id: 25,
        name: "pikachu",
        type: "electric",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        stats: [
            { name: "hp", value: 35 },
            { name: "attack", value: 55 },
            { name: "defense", value: 40 },
        ],
    },
    {
        id: 4,
        name: "charmander",
        type: "fire",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        stats: [
            { name: "hp", value: 39 },
            { name: "attack", value: 52 },
            { name: "defense", value: 43 },
        ],
    },
    {
        id: 7,
        name: "squirtle",
        type: "water",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        stats: [
            { name: "hp", value: 44 },
            { name: "attack", value: 48 },
            { name: "defense", value: 65 },
        ],
    },
];

export default function Pokemon1() {
    // TODO 1: Replace with data from your custom hook later.
    const pokemons = usePokemons();

    var typesSet = new Set();
    typesSet.add("all");
    for (var poke of pokemons) {
        typesSet.add(poke.type);
    }

    // TODO 2: Search by name.
    const [search, setSearch] = useState("");

    // TODO 3: Filter by type ("all", "fire", "water", etc.).
    const [selectedType, setSelectedType] = useState("");

    // TODO 4: Select a Pokemon and show details.
    const [selectedId, setSelectedId] = useState(null);

    // TODO 5 (optional): Sort by power.
    // options: "none" | "power-asc" | "power-desc"
    const [sortMode, setSortMode] = useState("none");

    // TODO: Create a unique type list from pokemons.
    const availableTypes = Array.from(typesSet);

    // TODO: Build visiblePokemons by applying search, type filter, and optional sort.
    const filteredPokemons = pokemons.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(search.toLowerCase()) && pokemon.type.includes(selectedType);
    }).sort((a, b) => getTotalPower(a.stats) - getTotalPower(b.stats));

    const visiblePokemons = [...filteredPokemons];
    if (sortMode == "power-asc")
        visiblePokemons.sort((a, b) => getTotalPower(a.stats) - getTotalPower(b.stats));
    else if (sortMode == "power-desc")
        visiblePokemons.sort((a, b) => getTotalPower(b.stats) - getTotalPower(a.stats));

    // TODO: Find selectedPokemon from selectedId.
    const selectedPokemon = pokemons.find((poke) => poke.id == selectedId) || null;

    void search;
    void setSearch;
    void selectedType;
    void setSelectedType;
    void selectedId;
    void setSelectedId;
    void sortMode;
    void setSortMode;

    function handleSearchOnChange(value) {
        setSearch(value);
    }

    function getTotalPower(stats) {
        return stats.reduce((sum, stat) => {
            return sum + stat.value;
        }, 0)
    }

    function handleSelectOnChange(value) {
        value == "all" ? setSelectedType("") : setSelectedType(value)
    }

    function handleSortOnChange(value) {
        setSortMode(value)
    }

    function handlePokemonClick(id) {
        setSelectedId(id);
    }


    return (
        <div style={{ padding: 16 }}>
            <h1>Pokemon Practice Template</h1>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {/* TODO: Wire search state + onChange */}
                <input placeholder="Search by name" onChange={(e) => { handleSearchOnChange(e.target.value) }} />

                {/* TODO: Wire selectedType state + onChange */}
                <select onChange={(e) => { handleSelectOnChange(e.target.value) }}>
                    {availableTypes.map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>

                {/* TODO: Wire sortMode state + onChange */}
                <select onChange={(e) => { handleSortOnChange(e.target.value) }}>
                    <option value="none">No sort</option>
                    <option value="power-asc">Power ascending</option>
                    <option value="power-desc">Power descending</option>
                </select>
            </div>

            <h2 style={{ marginTop: 20 }}>Pokemon List</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 }}>
                {/* TODO: Map visiblePokemons and render name, type, stats. */}
                {visiblePokemons.length === 0 && <p>No Pokemon to show.</p>}
                {visiblePokemons.map((poke, id) => (
                    <div onClick={() => handlePokemonClick(poke.id)} key={poke.id} style={{
                        textAlign: "left",
                        border:
                            selectedId === poke.id
                                ? "2px solid #2e7d32"
                                : "1px solid #cccccc",
                        background: "#715454",
                        padding: 10,
                        borderRadius: 8,
                        cursor: "pointer",
                    }}>
                        <img src={poke.img} width="72" height="72" ></img>
                        <div><strong>{poke.name}</strong></div>
                        <div>Type: {poke.type}</div>
                        <div>Power: {getTotalPower(poke.stats)}</div>
                    </div>
                ))}
            </div>

            <h2 style={{ marginTop: 20 }}>Selected Pokemon Details</h2>
            {/* TODO: Show selectedPokemon details (or fallback text). */}
            {!selectedPokemon && <p>Select a Pokemon from the list.</p>}
            {selectedPokemon?.stats.map((stat, id) => (
                <div key={id}>{stat.name} : {stat.value}</div>
            ))}
        </div>
    );
}
