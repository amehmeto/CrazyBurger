import { Link } from 'react-router-dom'
import { AppRoutes } from '../App'

export function ErrorPage() {
  return (
    <>
      <p>Tu as fait une erreur maggle</p>
      <Link to={AppRoutes.HOME}>
        <button>Retourner à la page d'accueil</button>
      </Link>
    </>
  )
}
