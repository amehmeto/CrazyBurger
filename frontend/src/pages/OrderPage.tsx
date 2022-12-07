import { Link, useParams } from 'react-router-dom'
import { AppRoutes } from '../App'

export function OrderPage() {
  const { firstName } = useParams()

  return (
    <>
      <p>Tu es ici chez toi {firstName}</p>
      <Link to={AppRoutes.HOME}>Sortir</Link>
    </>
  )
}
