import './App.css'
import { FormEvent } from 'react'

function App() {
  function sayHello(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // @ts-ignore
    const name = e.target[0].value
    console.log(name)
    alert('Wesh ' + name)
  }

  return (
    <div className="App">
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>

      <form onSubmit={sayHello}>
        <input
          type="text"
          name="firstName"
          placeholder="Entrez votre prénom..."
          required
        />
        <button>Accédez à votre espace</button>
      </form>
    </div>
  )
}

export default App
