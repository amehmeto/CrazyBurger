import styled from 'styled-components'
import { THEME } from '../../../reusable-ui/design-system'

export function Main() {
  return <MainStyled className="main"></MainStyled>
}

const MainStyled = styled.div`
  background-color: ${THEME.colors.background_white};
  flex: 1;
  box-shadow: 0 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0 0 ${THEME.borderRadius.extraRound}
    ${THEME.borderRadius.extraRound};
`
