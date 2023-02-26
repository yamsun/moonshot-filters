import { useState } from "react";

import "./App.css";

import { filters } from "./filters";
import { items } from "./items";

function App() {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterBtn = (item) => {
    console.log(`${item} clicked`);
    if (selectedFilters?.includes(item) > 0) {
      setSelectedFilters(selectedFilters.filter((i) => i !== item));
    } else {
      setSelectedFilters([...selectedFilters, item]);
    }
  };

  let filteredItems = items?.filter((item) =>
    selectedFilters.includes(item.category)
  );
  if (filteredItems.length === 0) {
    filteredItems = items;
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2 style={{ textAlign: "center" }}>MoonshotX Filters</h2>
      <div>
        {filters.map((thisFilter, index) => {
          return (
            <button
              onClick={() => handleFilterBtn(thisFilter)}
              style={{
                padding: 3,
                margin: 2,
                cursor: "pointer",
                borderRadius: "0.5em",
                backgroundColor: selectedFilters?.includes(thisFilter)
                  ? "black"
                  : "white",
                color: selectedFilters?.includes(thisFilter)
                  ? "white"
                  : "black",
              }}
            >
              {thisFilter}
            </button>
          );
        })}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
        }}
      >
        {filteredItems?.map((filteredItem) => {
          return (
            <div
              style={{
                border: "2px solid black",
                margin: "1em",
                padding: "1em",
                borderRadius: "1em",
              }}
            >
              <h3>{filteredItem?.name}</h3>
              <p>{filteredItem?.category}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
