function Item({
  id,
  description,
  packed,
  quantity,
  onDeleteItem,
  onToggleItem,
}) {
  return (
    <>
      <li>
        <input
          type="checkbox"
          value={packed}
          onChange={(e) => onToggleItem(e, id)}
        />
        <span className={packed ? "line-through" : ""}>
          {quantity}
          {description}
        </span>
        <button onClick={() => onDeleteItem(id)}>❌</button>
      </li>
    </>
  );
}
export default Item;
