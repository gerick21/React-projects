import { products as initialProducts } from "./mocks/products.json";
import { useState } from "react";
import { Products } from "./components/products";
import { Header } from "./components/Header";

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [filter, setFilter] = useState({
    category: "all",
    minPrice: 0,
  });

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filter.minPrice &&
        (filter.category === "all" || product.category === filter.category)
      );
    });
  };

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header changeFilters={setFilter} />
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
