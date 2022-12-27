import styled from 'styled-components'
import { THEME } from '../../../reusable-ui/design-system'
import { CrazeeBurgerLogo } from '../../login/components/CrazeeBurgerLogo'
import { RightSideNavbar } from './RightSideNavbar'

type NavBarProps = {
  firstName: string | undefined
}
export function NavBar({ firstName }: NavBarProps) {
  function reloadPage() {
    return () => window.location.reload()
  }

  return (
    <NavbarStyled>
      <CrazeeBurgerLogo onClick={reloadPage()} />

      <RightSideNavbar firstName={firstName} />
    </NavbarStyled>
  )
}
const NavbarStyled = styled.nav`
  background-color: ${THEME.colors.white};
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  height: 10vh;
  padding: ${THEME.spacing.none} ${THEME.spacing.md};
  border-radius: ${THEME.borderRadius.extraRound}
    ${THEME.borderRadius.extraRound} 0 0;
`
