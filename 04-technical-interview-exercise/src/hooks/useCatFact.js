import { useState, useEffect } from "react";
import { getRandomFact } from "../services/facts.js";

export function useCatFact() {
  const [fact, setFact] = useState();

  const refreshFact = () => {
    getRandomFact().then((newFact) => setFact(newFact));
  };

  // recover a new fact when the component mounts
  useEffect(refreshFact, []);

  return { fact, refreshFact };
}
