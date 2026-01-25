import React from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
// ];

const App = () => {
  const [items, setItems] = React.useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
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

function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((items) => (
          <Item item={items} key={items.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      You have X items on your list, and you already packed X (X%) of them.
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