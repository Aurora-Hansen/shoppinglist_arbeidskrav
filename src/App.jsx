import { useState } from 'react'
import AddForm from './components/AddForm'
import ShoppingList from './components/ShoppingList'
import './style/style.scss'

function App() {
  
  const [items, setItems] = useState([
    { id: 1, name: 'Melk', amount: 2, bought: false },
    { id: 2, name: 'Egg', amount: 1, bought: true },
  ])

  
  const addItem = (name, amount) => {
    const newItem = {
      id: Date.now(),
      name: name,
      amount: parseInt(amount),
      bought: false,
    }
    setItems([newItem, ...items])
  }

  const toggleBought = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, bought: !item.bought } : item
      )
    )
  }

  
  const updateAmount = (id, newAmount) => {
    if (newAmount < 1) return
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, amount: newAmount } : item
      )
    )
  }

  return (
    <main>
      <h1>Handleliste</h1>
      
      <AddForm onAdd={addItem} />
      
      <ShoppingList 
        items={items} 
        onToggle={toggleBought} 
        onUpdateAmount={updateAmount} 
      />
    </main>
  )
}

export default App