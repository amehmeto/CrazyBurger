import styled from 'styled-components'
import { T } from '../../../reusable-ui/design-system'

type CrazyBurgerLogoProps = {
  className?: string
  onClick?: () => void
}
export function CrazeeBurgerLogo({ className, onClick }: CrazyBurgerLogoProps) {
  return (
    <LogoStyled className={className} onClick={onClick}>
      <h1>Crazee</h1>
      <img src="../../../../src/assets/logo-orange.png" alt="logo burger" />
      <h1>Burger</h1>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;

  h1 {
    display: inline;
    text-align: center;
    color: ${T.colors.primary};
    font-size: ${T.fonts.size.P4};
    line-height: 1em;
    font-weight: ${T.fonts.weights.bold};
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: 'Amatic SC', cursive;
  }

  img {
    object-fit: contain;
    object-position: center;
    height: 80px;
    width: 80px;
    margin: 0 ${T.gridUnit / 2}px;
  }
`
