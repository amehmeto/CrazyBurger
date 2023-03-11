import React from 'react'
import { TabConfig } from './tabsConfig'

type TabHeadProps = { tab: TabConfig }

export function TabHead({ tab: { Icon, label } }: TabHeadProps) {
  return (
    <div className={tabHead}>
      <Icon className={tabIcon} />
      {label && <p>{label}</p>}
    </div>
  )
}

const tabHead =
  'flex gap-5 items-center justify-between px-6 py-3 mr-1 bg-white border border-[#E4E5E9] rounded-t-md  text-[#93A2B1]'

const tabIcon = 'text-base'
