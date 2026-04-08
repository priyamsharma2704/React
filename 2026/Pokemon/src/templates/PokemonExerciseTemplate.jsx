import { useMemo, useState } from "react";

/*
Practice goals:
1) Display a list of Pokemon (name, type, stats)
2) Filter Pokemon by type (Fire, Water, etc.)
3) Search Pokemon by name
4) Select a Pokemon and show details
5) (Optional) Sort by power / stats

How to use this template:
- Replace MOCK_POKEMONS with API data or hook data.
- Complete each TODO block.
- Keep this file independent so you can practice safely.
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

function getTotalPower(stats) {
    return stats.reduce((sum, stat) => sum + stat.value, 0);
}

export default function PokemonExerciseTemplate() {
    // TODO 1: Replace with data from your custom hook later.
    const [pokemons] = useState(MOCK_POKEMONS);

    // TODO 2: Search by name.
    const [search, setSearch] = useState("");

    // TODO 3: Filter by type ("all", "fire", "water", etc.).
    const [selectedType, setSelectedType] = useState("all");

    // TODO 4: Select a Pokemon to show details.
    const [selectedId, setSelectedId] = useState(null);

    // TODO 5 (optional): Sort by power.
    // options: "none" | "power-asc" | "power-desc"
    const [sortMode, setSortMode] = useState("none");

    const availableTypes = useMemo(() => {
        const unique = new Set(pokemons.map((pokemon) => pokemon.type));
        return ["all", ...Array.from(unique)];
    }, [pokemons]);

    const visiblePokemons = useMemo(() => {
        let result = pokemons;

        // TODO: Search logic
        result = result.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(search.toLowerCase()),
        );

        // TODO: Type filter logic
        if (selectedType !== "all") {
            result = result.filter((pokemon) => pokemon.type === selectedType);
        }

        // TODO: Optional sorting logic
        if (sortMode === "power-asc") {
            result = [...result].sort(
                (a, b) => getTotalPower(a.stats) - getTotalPower(b.stats),
            );
        }

        if (sortMode === "power-desc") {
            result = [...result].sort(
                (a, b) => getTotalPower(b.stats) - getTotalPower(a.stats),
            );
        }

        return result;
    }, [pokemons, search, selectedType, sortMode]);

    const selectedPokemon =
        pokemons.find((pokemon) => pokemon.id === selectedId) || null;

    return (
        <div style={{ padding: 16 }}>
            <h1>Pokemon Practice Template</h1>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by name"
                />

                <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                >
                    {availableTypes.map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>

                <select
                    value={sortMode}
                    onChange={(e) => setSortMode(e.target.value)}
                >
                    <option value="none">No sort</option>
                    <option value="power-asc">Power ascending</option>
                    <option value="power-desc">Power descending</option>
                </select>
            </div>

            <h2 style={{ marginTop: 20 }}>Pokemon List</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 }}>
                {visiblePokemons.map((pokemon) => (
                    <button
                        key={pokemon.id}
                        type="button"
                        onClick={() => setSelectedId(pokemon.id)}
                        style={{
                            textAlign: "left",
                            border:
                                selectedId === pokemon.id
                                    ? "2px solid #2e7d32"
                                    : "1px solid #cccccc",
                            background: "#ffffff",
                            padding: 10,
                            borderRadius: 8,
                            cursor: "pointer",
                        }}
                    >
                        <img src={pokemon.img} alt={pokemon.name} width="72" height="72" />
                        <div><strong>{pokemon.name}</strong></div>
                        <div>Type: {pokemon.type}</div>
                        <div>Power: {getTotalPower(pokemon.stats)}</div>
                    </button>
                ))}
            </div>

            <h2 style={{ marginTop: 20 }}>Selected Pokemon Details</h2>
            {!selectedPokemon && <p>Select a Pokemon from the list.</p>}
            {selectedPokemon && (
                <div style={{ border: "1px solid #ddd", borderRadius: 8, padding: 12, maxWidth: 320 }}>
                    <h3>{selectedPokemon.name}</h3>
                    <p>Type: {selectedPokemon.type}</p>
                    <p>Stats:</p>
                    {selectedPokemon.stats.map((stat) => (
                        <div key={stat.name}>
                            {stat.name}: {stat.value}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
