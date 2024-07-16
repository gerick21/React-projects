import "./App.css";
import { useCatImage } from "./hooks/useCatImage.js";
import { useCatFact } from "./hooks/useCatFact.js";

export function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = async () => {
    refreshFact();
  };

  return (
    <main className="app-container">
      <h1 className="app-title">Cats Random Facts</h1>

      <button className="refresh-button" onClick={handleClick}>
        Get new fact
      </button>

      {fact && <p className="fact-text">{fact}</p>}
      {imageUrl && (
        <img
          className="cat-image"
          src={imageUrl}
          alt={`Image extracted using the first three words for ${fact}`}
        />
      )}
      <footer className="app-footer">
        Developed by Gerick Vargas Camacho 2024
      </footer>
    </main>
  );
}
