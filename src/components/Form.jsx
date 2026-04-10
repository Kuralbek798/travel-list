import { useState } from "react";

function Form({ handleAddItem }) {
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState("");

  function handleItemSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const item = { id: Date.now(), quantity, description, packed: false };
    handleAddItem(item);
  }
  function handleQuantity(e) {
    setQuantity(e.target.value);
  }
  function handleDescription(e) {
    setDescription(e.target.value);
  }

  return (
    <>
      <form name="form" className="add-form" onSubmit={handleItemSubmit}>
        <h3>What do you need for your 😍 trip?</h3>
        <select value={quantity} onChange={handleQuantity}>
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
          value={description}
          onChange={handleDescription}
        ></input>
        <button>Add</button>
      </form>
    </>
  );
}

export default Form;
