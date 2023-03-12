import { useParams } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import styled from 'styled-components'
import { Main } from './components/Main'
import { THEME } from '../../reusable-ui/design-system'
import { OrderContext, useOrderContextValue } from './OrderContext'

export function OrderPage() {
  const { firstName } = useParams()

  return (
    <OrderContext.Provider value={useOrderContextValue()}>
      <OrderPageStyled>
        <div className={'container'}>
          <NavBar firstName={firstName} />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  )
}

const OrderPageStyled = styled.div`
  background-color: ${THEME.colors.primary};
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    flex-direction: column;

    height: 95vh;
    width: 1300px;
    padding: 0;
    margin: 0;
  }
`
