function Item({ description, packed, quantity, onDeleteItem }) {
  return (
    <>
      <li>
        <span className={packed ? 'line-through' : ''}>
          {quantity}
          {description}
        </span>
        <button onClick={onDeleteItem}>❌</button>
      </li>
     
    </>
  );
}
export default Item;
