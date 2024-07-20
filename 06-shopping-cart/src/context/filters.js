import { useContext } from "react";

//Create the context
export const FiltersContext = createContext();

//Create the provider, to provide the context to the children
export function FiltersProvider({ children }) {
  return (
    <FiltersContext.Provider
      value={{
        category: "all",
        minPrice: 0,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
