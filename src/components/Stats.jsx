function Stats({items}) {
  if(!items.length)return(
    <p className="stats">
      <em>{'Start adding some items to your packing list 🚀'}</em>
    </p>
  )
  const numItems = items.length;
  const numPackedItems = items.reduce((acc,curr) =>(acc += curr.packed === true? 1: 0),0)
  const persentPackedItems = Math.round((numPackedItems / numItems) * 100);
  return (
    <>
      <footer className="stats">
        <em>{`💼 You have ${numItems} items on your list,and you already packed ${numPackedItems} (${persentPackedItems}%)`}</em>
      </footer>
    </>
  );
}

export default Stats;
