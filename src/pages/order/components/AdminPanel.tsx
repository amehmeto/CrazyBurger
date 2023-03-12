import React, { useContext } from 'react'
import { TabHead } from './TabHead'
import { OrderContext } from '../OrderContext'
import { ArrowTab } from './ArrowTab'

export function AdminPanel() {
  const { tabs, arrowTab } = useContext(OrderContext)

  const tabHeadElements = tabs.map((tab) => {
    return <TabHead key={tab.id} tab={tab} />
  })

  const [selectedTab] = tabs.filter((tab) => tab.isSelected)

  return (
    <div className={adminPanel}>
      <div className={tabHeads}>
        <ArrowTab />
        {tabHeadElements}
      </div>
      {arrowTab.isOpen && <p className={tabBody}>{selectedTab.label}</p>}
    </div>
  )
}

const adminPanel = 'w-full absolute bottom-0'
const tabHeads = 'flex flex-row ml-10'
const tabBody =
  'h-56 bg-white border border-t-[#E4E5E9] p-4 drop-shadow-admin  rounded-b-2xl'
