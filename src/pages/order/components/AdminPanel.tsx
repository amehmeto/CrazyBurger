import React from 'react'
import { TabHead } from './TabHead'
import { tabsConfig } from './tabsConfig'

export function AdminPanel() {
  const tabHeadElements = tabsConfig.map((tab) => (
    <TabHead key={tab.id} tab={tab} />
  ))

  return (
    <div className={adminPanel}>
      <div className={tabs}>{tabHeadElements}</div>
      <p className={tabBody}>Ajouter un produit</p>
    </div>
  )
}

const adminPanel = 'h-48 w-full absolute bottom-0'
const tabs = 'flex flex-row ml-10'
const tabBody =
  'h-full bg-white border border-t-[#E4E5E9] p-4 drop-shadow-admin'
