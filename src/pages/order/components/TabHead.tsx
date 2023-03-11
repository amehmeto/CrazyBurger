import React, { MouseEvent } from 'react'
import { TabConfig } from './tabsConfig'

type TabHeadProps = {
  tab: TabConfig
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

export function TabHead({
  tab: { Icon, label, ariaLabel, isActive },
  onClick,
}: TabHeadProps) {
  const style = isActive ? activeStyle : inactiveStyle

  return (
    <button
      className={tabHead + style}
      aria-label={ariaLabel}
      onClick={(e) => onClick(e)}
    >
      <Icon className={tabIcon} />
      {label && <span>{label}</span>}
    </button>
  )
}

const inactiveStyle = 'border-[#E4E5E9] bg-white text-[#93A2B1]'
const activeStyle = 'border-[#292729] bg-[#292729] text-white'

const tabHead =
  'flex gap-5 items-center justify-between px-6 py-3 mr-1 border  rounded-t-md '

const tabIcon = 'text-base'
