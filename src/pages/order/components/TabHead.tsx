import React, { useContext } from 'react'
import { TabViewModel } from './InitialTabs'
import { OrderContext } from '../OrderContext'

type TabHeadProps = {
  tab: TabViewModel
}

export function TabHead({
  tab: { id, Icon, label, isSelected },
}: TabHeadProps) {
  const { selectTab, arrowTab } = useContext(OrderContext)

  const isSelectedStyle =
    isSelected && arrowTab.isOpen ? activeStyle : inactiveStyle

  return (
    <button className={tabHead + isSelectedStyle} onClick={() => selectTab(id)}>
      <Icon className={tabIcon} />
      <span className={labelStyle}>{label}</span>
    </button>
  )
}

const inactiveStyle = ' border-[#E4E5E9] bg-white text-[#93A2B1]'
const activeStyle = ' border-[#292729] bg-[#292729] text-white'

const tabHead =
  'flex gap-5 items-center justify-between px-6 py-3 mr-1 border  rounded-t-md'

const tabIcon = 'text-base'
const labelStyle = ' hover:underline'
