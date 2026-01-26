import React, { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

const App = () => {
  const [items, setItems] = React.useState([]);
  

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  
  }
  function handleDeleteItem(id) {
  setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id){
    setItems((items)=>items.map((item)=>item.id===id?{...item,packed:!item.packed}:item))
  }
  function handleClearList(){
    const confirmed = window.confirm("Are you sure you want to delete all items?")
    if(confirmed){
      setItems([])
    }
      
  }
  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onSetItem = {handleClearList}/>
      <Stats items={items} />
    </div>
  );
};

function Logo() {
  return <h1>Far Away</h1>;
}
function Form({ handleAddItems }) {
  const [description, setDescription] = React.useState("");
  const [quantity, setQuantity] = React.useState(1);
  
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    handleAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What you need for your trip</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items, onDeleteItem, onToggleItem, onSetItem }) {
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
        <select value={sortBY} onChange={(e)=>setSortBY(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by Packed</option>
        </select>
        <button onClick={() => onSetItem([])}>Clear List</button>
      </div>
    </div>
  );
}
function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange= 
      { ()=> onToggleItem(item.id)}/>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={()=>onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
function Stats({items}) {
  if (!items.length)
    return <p className="stats">Start adding some items to your packing list 🚀</p>;
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((numPackedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
      { percentPacked === 100 ? "You got everything! Ready to go ✈️" :`You have ${numItems} items on your list, and you already packed ${numPackedItems} (${percentPacked}%)` }
      </em>
    </footer>
  );
}

export default App;

// State management :- Deciding when to create pieces of state, what types of state are necessary, where to place each piece of state, and how data flows through the app.

// Type of state :-
// local state :- state needed only by one or few components 
// State that is defined in a component and only that component and child components have access to it (by passing via props)

// Global state :- 
// State that many components might need
// Shared state that is acessible to every component is the entire application

// Derived State :- state that is computed from an existing piece of state or from props