function Item({ description, packed, quantity }) {
  return (
    <>
      <li>
        <span className={packed ? 'line-through' : ''}>
          {quantity}
          {description}
        </span>
        <button>❌</button>
      </li>
    </>
  );
}
export default Item;
