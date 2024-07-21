import "./Footer.css";
import { useFilters } from "../hooks/useFilters.js";
import { useCart } from "../hooks/useCart.js";

export function Footer() {
  const { filters } = useFilters();
  const { cart } = useCart();

  return (
    <footer className="footer">
      <h4>Technical Exercise using react</h4>
      <span>Developed by Gerick Vargas Camacho @2024</span>
      <h5>Shopping cart useing useContext and useReducer</h5>
    </footer>
  );
}
