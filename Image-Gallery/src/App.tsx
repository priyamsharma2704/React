// import MemoryGame from "./components/MemoryGame";
import MemoryGame2 from "./components/MemoryGame2";
import "./App.css";

function App() {
    return (
        <MemoryGame2
            images={[
                "https://images.unsplash.com/photo-1626808642875-0aa545482dfb",
                "https://images.unsplash.com/photo-1546842931-886c185b4c8c",
                "https://images.unsplash.com/photo-1520763185298-1b434c919102",
                "https://images.unsplash.com/photo-1442458017215-285b83f65851",
                "https://images.unsplash.com/photo-1496483648148-47c686dc86a8",
                // "https://images.unsplash.com/photo-1591181520189-abcb0735c65d",
            ]}
        />
    );
}

export default App;
