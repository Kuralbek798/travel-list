import Item from "./Item";

function PackingList({ items, handleDeleteItem, handleToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            {...item}
            onDeleteItem={handleDeleteItem}
            onToggleItem={handleToggleItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
