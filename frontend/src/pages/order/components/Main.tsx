import styled from 'styled-components'
import { T } from '../../../reusable-ui/design-system'

export function Main() {
  return <MainStyled className={'main'}>MAIN</MainStyled>
}

const MainStyled = styled.div`
  background-color: ${T.colors.background_white};
  flex: 1;
  box-shadow: 0 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0 0 ${T.borderRadius.extraRound} ${T.borderRadius.extraRound};
`
