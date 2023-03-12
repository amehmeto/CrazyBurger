import React, { useContext } from 'react'
import { OrderContext } from '../OrderContext'

export function ArrowTab() {
  const { arrowTab, toggleArrowTab } = useContext(OrderContext)
  const { Icon, ariaLabel, isOpen } = arrowTab

  const style = isOpen ? activeStyle : inactiveStyle

  return (
    <button
      className={tabHead + ' ' + style}
      aria-label={ariaLabel}
      onClick={() => toggleArrowTab()}
    >
      <Icon className={tabIcon} />
    </button>
  )
}

const inactiveStyle = 'border-[#E4E5E9] bg-white text-[#93A2B1]'
const activeStyle = 'border-[#292729] bg-[#292729] text-white'

const tabHead =
  'flex gap-5 items-center justify-between px-6 py-3 mr-1 border  rounded-t-md'

const tabIcon = 'text-base'
