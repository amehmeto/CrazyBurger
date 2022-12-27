import styled from 'styled-components'
import { THEME } from '../../../reusable-ui/design-system'
import { MenuItemsGateway } from '../gateways/MenuItemsGateway'
import { FakeMenuItemsGateway } from '../gateways/FakeMenuItemsGateway'
import { useEffect, useState } from 'react'
import { MenuItems } from '../models/MenuItems'
import { MenuItemCard } from './MenuItemCard'

const menuItemsGateway: MenuItemsGateway = new FakeMenuItemsGateway()

export function Main() {
  const [menuItems, setMenuItems] = useState<MenuItems[]>([])

  useEffect(() => {
    menuItemsGateway.getAll().then((_menuItems) => setMenuItems(_menuItems))
  }, [])

  const menuItemsCards = menuItems.map((item) => (
    <MenuItemCard key={item.id} item={item} />
  ))

  return <MainStyled className="main">{menuItemsCards}</MainStyled>
}

const MainStyled = styled.div`
  background-color: ${THEME.colors.background_white};
  flex: 1;
  box-shadow: 0 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0 0 ${THEME.borderRadius.extraRound}
    ${THEME.borderRadius.extraRound};
  padding: 50px 50px 150px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  justify-items: center;
  overflow-y: scroll;
`
