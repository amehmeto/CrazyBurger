import { MenuItemsGateway } from '../gateways/MenuItemsGateway'
import { FakeMenuItemsGateway } from '../gateways/FakeMenuItemsGateway'
import { useContext, useEffect, useState } from 'react'
import { MenuItems } from '../models/MenuItems'
import { MenuItemCard } from './MenuItemCard'
import { AdminPanel } from './AdminPanel'
import { OrderContext } from '../OrderContext'

const menuItemsGateway: MenuItemsGateway = new FakeMenuItemsGateway()

export function Main() {
  const [menuItems, setMenuItems] = useState<MenuItems[]>([])
  const { isModeAdmin } = useContext(OrderContext)

  useEffect(() => {
    menuItemsGateway.getAll().then((_menuItems) => setMenuItems(_menuItems))
  }, [])

  const menuItemsCards = menuItems.map((item) => (
    <MenuItemCard key={item.id} item={item} />
  ))

  return (
    <div className={container}>
      <div className={itemListGrid}>{menuItemsCards}</div>
      {isModeAdmin && <AdminPanel />}
    </div>
  )
}

const container =
  'h-[85vh] w-full relative flex flex-col justify-between rounded-b-2xl' +
  ' shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]'

const itemListGrid =
  'w-full h-full bg-[#F5F5F7] pb-12 shadow pt-8 px-8 grid grid-cols-4 gap-x-18 gap-y-14 justify-center overflow-y-scroll rounded-b-2xl'
