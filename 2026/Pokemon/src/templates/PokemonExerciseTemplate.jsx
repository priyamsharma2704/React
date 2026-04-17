import { useState } from "react";

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

export default function PokemonExerciseTemplate() {
    // TODO 1: Replace with data from your custom hook later.
    const [pokemons] = useState(MOCK_POKEMONS);

    // TODO 2: Search by name.
    const [search, setSearch] = useState("");

    // TODO 3: Filter by type ("all", "fire", "water", etc.).
    const [selectedType, setSelectedType] = useState("all");

    // TODO 4: Select a Pokemon and show details.
    const [selectedId, setSelectedId] = useState(null);

    // TODO 5 (optional): Sort by power.
    // options: "none" | "power-asc" | "power-desc"
    const [sortMode, setSortMode] = useState("none");

    // TODO: Create a unique type list from pokemons.
    const availableTypes = ["all"];

    // TODO: Build visiblePokemons by applying search, type filter, and optional sort.
    const visiblePokemons = pokemons;

    // TODO: Find selectedPokemon from selectedId.
    const selectedPokemon = null;

    void search;
    void setSearch;
    void selectedType;
    void setSelectedType;
    void selectedId;
    void setSelectedId;
    void sortMode;
    void setSortMode;

    return (
        <div style={{ padding: 16 }}>
            <h1>Pokemon Practice Template</h1>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {/* TODO: Wire search state + onChange */}
                <input placeholder="Search by name" />

                {/* TODO: Wire selectedType state + onChange */}
                <select>
                    {availableTypes.map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>

                {/* TODO: Wire sortMode state + onChange */}
                <select>
                    <option value="none">No sort</option>
                    <option value="power-asc">Power ascending</option>
                    <option value="power-desc">Power descending</option>
                </select>
            </div>

            <h2 style={{ marginTop: 20 }}>Pokemon List</h2>
            <div style={{ display: "grid", gap: 12 }}>
                {/* TODO: Map visiblePokemons and render name, type, stats. */}
                {visiblePokemons.length === 0 && <p>No Pokemon to show.</p>}
            </div>

            <h2 style={{ marginTop: 20 }}>Selected Pokemon Details</h2>
            {/* TODO: Show selectedPokemon details (or fallback text). */}
            {!selectedPokemon && <p>Select a Pokemon from the list.</p>}
        </div>
    );
}
