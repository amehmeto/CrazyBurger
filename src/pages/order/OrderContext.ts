import { createContext, Dispatch, SetStateAction, useState } from 'react'
import { TabConfig, tabsConfig } from './components/TabsConfig'

export function useOrderContextValue() {
  const [isModeAdmin, setIsModeAdmin] = useState<boolean>(false)
  const [tabs, setTabs] = useState<TabConfig[]>(tabsConfig)

  return { isModeAdmin, setIsModeAdmin, tabs, setTabs }
}
interface OrderContextShape {
  isModeAdmin: boolean
  setIsModeAdmin: (lol: any) => void
  tabs: TabConfig[]
  setTabs: Dispatch<SetStateAction<TabConfig[]>>
}

export const OrderContext = createContext<OrderContextShape>({
  isModeAdmin: false,
  setIsModeAdmin: (lol: any) => {},
  tabs: tabsConfig,
  setTabs: () => {},
})
