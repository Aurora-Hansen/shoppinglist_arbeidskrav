import { useState } from 'react'

function AddForm({ onAdd }) {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !amount) {
      setError('Vennligst fyll ut begge felt')
      return
    }
    onAdd(name, amount)
    setName(''); setAmount(''); setError('')
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>Vare
          <input type="text" placeholder="Egg.." value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>Antall
          <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
        </label>
        <button type="submit">Legg til vare</button>
      </form>
      {error && <p className="error-msg">{error}</p>}
    </section>
  )
}
export default AddForm