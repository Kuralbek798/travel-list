import Item from "./Item";

function PackingList({items }) {
  return (
    <div className="list">
      <ul>
        {items.map(({ id, ...item }) => (
          <Item key={id} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
