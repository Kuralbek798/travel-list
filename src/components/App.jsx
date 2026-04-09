import { useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";
import "../styles/index.css";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];
function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    console.log("id " + id);
    setItems((items) => items.filter((i) => i.id != id));
  }
  function handleToggleItem(e, id) {
     console.log(e.target.value +' ' + id)
       setItems((items) =>
      items.map((item) =>
        item.id == id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }
  return (
    <>
      <div className="app">
        <Logo />
        <Form handleAddItem={handleAddItem} />
        <PackingList
          items={items}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
        <Stats />
      </div>
    </>
  );
}

export default App;
