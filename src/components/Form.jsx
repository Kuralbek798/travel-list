import { useState } from "react";

function Form({ handleAddItem }) {
  const [item, setItem] = useState({description: "", quantity: 0});    

  function handleItemSubmit(e) {
    e.preventDefault();
    if(!item.description)return;
    handleAddItem({...item, id: Date.now()});
  }
  function handleItemChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    if(name === "select"){
      setItem((i) => ({...i, quantity: Number(value)}))
    }
    if (name === "input") {
      setItem((i) => ({ ...i, description: value }));
    }
  }

  return (
    <>
      <form name="form" className="add-form" onSubmit={handleItemSubmit}>
        <h3>What do you need for your 😍 trip?</h3>
        <select name="select" value={item.quantity} onChange={handleItemChange}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          name="input"
          type="text"
          placeholder="Item..."
          value={item.description}
          onChange={handleItemChange}
        ></input>
        <button>Add</button>
      </form>      
    </>
  );
}

export default Form;
