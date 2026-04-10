import { useState } from "react";
import Item from "./Item";

function PackingList({ items, handleDeleteItem, handleToggleItem }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description") {
    sortedItems = structuredClone(items);
    sortedItems.sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedItems = structuredClone(items);
    sortedItems.sort((a, b) => b.packed - a.packed);
  }


  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            {...item}
            onDeleteItem={handleDeleteItem}
            onToggleItem={handleToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">{"Sort by input order"}</option>
          <option value="description">{"Sort by description"}</option>
          <option value="packed">{"Sort by packed status"}</option>
        </select>
      </div>
    </div>
  );
}

export default PackingList;
