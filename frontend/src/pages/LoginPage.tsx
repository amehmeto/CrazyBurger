import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '../App'

export function LoginPage() {
  const navigate = useNavigate()

  function accessPrivateSpace(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // @ts-ignore
    const name = e.target[0].value
    navigate(`${AppRoutes.ORDER}${name}`)
  }

  return (
    <>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>

      <form onSubmit={accessPrivateSpace}>
        <input
          type="text"
          name="firstName"
          placeholder="Entrez votre prénom..."
          required
        />
        <button>Accédez à votre espace</button>
      </form>
    </>
  )
}
