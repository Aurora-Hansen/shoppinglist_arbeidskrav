import ShoppingItem from './ShoppingItem'

function ShoppingList({ items, onToggle, onUpdateAmount }) {
  return (
    <section className="list-section">
      <ul>
        {items.map(item => (
          <ShoppingItem 
            key={item.id} 
            item={item} 
            onToggle={onToggle} 
            onUpdateAmount={onUpdateAmount} 
          />
        ))}
      </ul>
    </section>
  )
}

export default ShoppingList