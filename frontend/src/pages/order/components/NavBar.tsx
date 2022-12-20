import styled from 'styled-components'
import { T } from '../../../reusable-ui/design-system'
import { CrazeeBurgerLogo } from '../../login/components/CrazeeBurgerLogo'
import { RightSideNavbar } from './RightSideNavbar'

export function NavBar(props: { firstName: any }) {
  function reloadPage() {
    return () => window.location.reload()
  }

  return (
    <NavbarStyled>
      <CrazeeBurgerLogo onClick={reloadPage()} />

      <RightSideNavbar firstName={props.firstName} />
    </NavbarStyled>
  )
}
const NavbarStyled = styled.nav`
  background-color: ${T.colors.white};
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  height: 10vh;
  padding: ${T.spacing.none} ${T.spacing.md};
  border-radius: ${T.borderRadius.extraRound} ${T.borderRadius.extraRound} 0 0;
`
