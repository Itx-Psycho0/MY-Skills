import React, { useState } from "react";
import { Item } from "./Item";

export function PackingList({ items, onDeleteItem, onToggleItem, onSetItem }) {
  const [sortBY, setSortBY] = useState("input");
  let itemsSorted;
  if (sortBY === "input") itemsSorted = items;
  if (sortBY === "description")
    itemsSorted = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  else itemsSorted = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {itemsSorted.map((items) => (
          <Item item={items} onDeleteItem={onDeleteItem} key={items.id} onToggleItem={onToggleItem} />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBY} onChange={(e) => setSortBY(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by Packed</option>
        </select>
        <button onClick={() => onSetItem([])}>Clear List</button>
      </div>
    </div>
  );
}
