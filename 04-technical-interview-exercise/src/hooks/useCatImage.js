import { useEffect, useState } from "react";

const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  // recover the first three words of the fact and use them to generate a cat image
  useEffect(() => {
    if (!fact) return;

    const fetchCatImage = async () => {
      const threeFirstWords = fact.split(" ", 3).join(" ");
      try {
        const res = await fetch(
          `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
        );
        const response = await res.json();
        const { _id } = response;
        const url = `/cat/${_id}/says/${threeFirstWords}`;
        setImageUrl(url);
      } catch (error) {
        console.error("Error fetching cat image:", error);
      }
    };

    fetchCatImage();
  }, [fact]);

  return { imageUrl: imageUrl ? `${CAT_PREFIX_IMAGE_URL}${imageUrl}` : null };
}
