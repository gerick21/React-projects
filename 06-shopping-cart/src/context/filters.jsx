import { createContext, useState } from "react";

//Create the context
//This is what we have to consume in the components
export const FiltersContext = createContext();

//Create the provider, to provide the context to the children
//This provides the context to the children
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
