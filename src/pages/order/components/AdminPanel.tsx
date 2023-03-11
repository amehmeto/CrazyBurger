import React, { MouseEvent, useState } from 'react'
import { TabHead } from './TabHead'
import { TabConfig, tabsConfig } from './tabsConfig'
import { FiChevronDown, FiChevronUp } from 'react-icons/all'

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

  function getChevronIcon(isActive: boolean) {
    return isActive ? FiChevronUp : FiChevronDown
  }

  const tabHeadElements = tabs.map((tab) => {
    if (tab.id === 0) tab.Icon = getChevronIcon(tab.isActive)
    return (
      <TabHead key={tab.id} tab={tab} onClick={(e) => selectTab(e, tab.id)} />
    )
  })

  const [selectedTabDescription] = tabs.filter((tab) => tab.isActive)

  return (
    <div className={adminPanel}>
      <div className={tabHeads}>{tabHeadElements}</div>
      {selectedTabDescription.label && (
        <p className={tabBody}>{selectedTabDescription.label}</p>
      )}
    </div>
  )
}

const adminPanel = 'w-full absolute bottom-0'
const tabHeads = 'flex flex-row ml-10'
const tabBody =
  'h-48 bg-white border border-t-[#E4E5E9] p-4 drop-shadow-admin  rounded-b-2xl'
