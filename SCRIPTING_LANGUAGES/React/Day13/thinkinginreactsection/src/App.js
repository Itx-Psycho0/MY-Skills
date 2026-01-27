import React from "react";
import Form from "./form";
import Logo from "./logo";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";


// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
// ];

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



export default App;

// State management :- Deciding when to create pieces of state, what types of state are necessary, where to place each piece of state, and how data flows through the app.

// Type of state :-
// local state :- state needed only by one or few components 
// State that is defined in a component and only that component and child components have access to it (by passing via props)

// Global state :- 
// State that many components might need
// Shared state that is acessible to every component is the entire application

// Derived State :- state that is computed from an existing piece of state or from props