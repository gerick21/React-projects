import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./icons.jsx";

export function Cart() {
  const cardCheckboxId = useId();

  return (
    <>
      <label className="cart-button" htmlFor={cardCheckboxId}>
        <CartIcon />
      </label>

      <input type="checkbox" id={cardCheckboxId} hidden />

      <aside className="cart">
        <ul>
          <li>
            <img src="https://via.placeholder.com/150" alt="Iphone" />
            <div>
              <strong>Iphone</strong>
            </div>
            <footer>
              <small>Qty:1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>

        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
