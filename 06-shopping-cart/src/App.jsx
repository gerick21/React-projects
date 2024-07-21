import { products as initialProducts } from "./mocks/products.json";
import { useState } from "react";
import { Products } from "./components/products";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { IS_DEVELOPMENT } from "./config";
import { useFilters } from "./hooks/useFilters.js";
import { Cart } from "./components/Cart.jsx";

function App() {
  const [products, setProducts] = useState(initialProducts);
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);

  return (
    <>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </>
  );
}

export default App;
