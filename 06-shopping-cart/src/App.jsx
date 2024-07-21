import { products as initialProducts } from "./mocks/products.json";
import { useState } from "react";
import { Products } from "./components/products";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { IS_DEVELOPMENT } from "./config";
import { useFilters } from "./hooks/useFilters.js";

function App() {
  const [products, setProducts] = useState(initialProducts);
  const { filters, filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </>
  );
}

export default App;
