import React, { MouseEvent, useState } from 'react'
import { TabHead } from './TabHead'
import { TabConfig, tabsConfig } from './tabsConfig'

export function AdminPanel() {
  const [tabs, useTabs] = useState<TabConfig[]>(tabsConfig)

  function selectTab(e: MouseEvent<HTMLButtonElement>, id: number) {
    e.preventDefault()
    useTabs((prevTabs) =>
      prevTabs.map((tab) => ({
        ...tab,
        isActive: tab.id === id,
      })),
    )
  }

  const tabHeadElements = tabs.map((tab) => (
    <TabHead key={tab.id} tab={tab} onClick={(e) => selectTab(e, tab.id)} />
  ))

  return (
    <div className={adminPanel}>
      <div className={tabHeads}>{tabHeadElements}</div>
      <p className={tabBody}>Ajouter un produit</p>
    </div>
  )
}

const adminPanel = 'h-48 w-full absolute bottom-0'
const tabHeads = 'flex flex-row ml-10'
const tabBody =
  'h-full bg-white border border-t-[#E4E5E9] p-4 drop-shadow-admin'
