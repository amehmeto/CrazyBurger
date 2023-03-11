import { MenuItemsGateway } from '../gateways/MenuItemsGateway'
import { FakeMenuItemsGateway } from '../gateways/FakeMenuItemsGateway'
import { useEffect, useState } from 'react'
import { MenuItems } from '../models/MenuItems'
import { MenuItemCard } from './MenuItemCard'
import { AdminPanel } from './AdminPanel'

const menuItemsGateway: MenuItemsGateway = new FakeMenuItemsGateway()

export function Main() {
  const [menuItems, setMenuItems] = useState<MenuItems[]>([])

  useEffect(() => {
    menuItemsGateway.getAll().then((_menuItems) => setMenuItems(_menuItems))
  }, [])

  const menuItemsCards = menuItems.map((item) => (
    <MenuItemCard key={item.id} item={item} />
  ))

  return (
    <div className={container}>
      <div className={itemListGrid}>{menuItemsCards}</div>
      <AdminPanel />
    </div>
  )
}

const container =
  'main h-5/6 w-full relative flex flex-col justify-between border border-red-500'
const itemListGrid =
  'w-full h-full bg-white flex shadow pt-8 px-8 grid grid-cols-4 gap-y-2 justify-center overflow-y-scroll'
