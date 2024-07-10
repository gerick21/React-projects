import { useState, useEffect } from "react";
import "./App.css";

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}
//?size=50&color=red&json=true`;

const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

export function App() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);
      });
  }, []);

  useEffect(() => {
    if (!fact) return;

    const threeWords = fact.split("", 3).join("");
    console.log("threeWords", threeWords);

    fetch(
      `https://cataas.com/cat/says/${threeWords}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        const { url } = response;
        setImageUrl(url);
      });
  });

  return (
    <main>
      <h1>Random Cat Facts</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt="Random cat" />}
    </main>
  );
}
