import Item from "./Item";

function PackingList({items, handleDeleteItem}) {
  return (
    <div className="list">
      <ul>
        {items.map(({ id, ...item }) => (
          <Item key={id} {...item } onDeleteItem={() => handleDeleteItem(id)}  />
         
        ))}
      </ul>      
    </div>    
  );
}

export default PackingList;
