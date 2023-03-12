import { createContext, useState } from 'react'
import {
  ArrowTabModel,
  initialArrowTab,
  initialTabs,
  TabViewModel,
} from './components/InitialTabs'
import { FiChevronDown, FiChevronUp } from 'react-icons/all'

export function useOrderContextValue() {
  const [isModeAdmin, setIsModeAdmin] = useState<boolean>(false)
  const [tabs, setTabs] = useState<TabViewModel[]>(initialTabs)
  const [arrowTab, setArrowTab] = useState<ArrowTabModel>(initialArrowTab)

  function toggleArrowTab() {
    setArrowTab({
      ...arrowTab,
      isOpen: !arrowTab.isOpen,
      Icon: arrowTab.isOpen ? FiChevronUp : FiChevronDown,
    })
  }

  function selectTab(tabId: number) {
    setTabs((prevTabs) =>
      prevTabs.map((tab) => ({
        ...tab,
        isSelected: tab.id === tabId,
      })),
    )
    if (!arrowTab.isOpen) toggleArrowTab()
  }

  function openAdminMode() {
    setIsModeAdmin(!isModeAdmin)
    if (!arrowTab.isOpen) toggleArrowTab()
  }

  return {
    isModeAdmin,
    setIsModeAdmin,
    tabs,
    selectTab,
    arrowTab,
    toggleArrowTab,
    openAdminMode,
  }
}

interface OrderContextShape {
  isModeAdmin: boolean
  openAdminMode: () => void
  tabs: TabViewModel[]
  arrowTab: ArrowTabModel
  toggleArrowTab: () => void
  selectTab: (tabId: number) => void
}

export const OrderContext = createContext<OrderContextShape>({
  isModeAdmin: false,
  openAdminMode: () => {},
  tabs: initialTabs,
  arrowTab: initialArrowTab,
  toggleArrowTab: () => {},
  selectTab: () => {},
})
