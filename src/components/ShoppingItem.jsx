function ShoppingItem({ item, onToggle, onUpdateAmount }) {
  return (
    <li>
      <article>
        <section className="item-left">
          <input type="checkbox" checked={item.bought} onChange={() => onToggle(item.id)} />
          <span className={item.bought ? 'bought' : ''}>{item.name}</span>
        </section>
        <input 
          type="number" 
          className="amount-list" 
          value={item.amount} 
          onChange={(e) => onUpdateAmount(item.id, parseInt(e.target.value))} 
        />
      </article>
    </li>
  )
}
export default ShoppingItem