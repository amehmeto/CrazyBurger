import React, { useContext } from 'react'
import { TabHead } from './TabHead'
import { OrderContext } from '../OrderContext'
import { ArrowTab } from './ArrowTab'

export function AdminPanel() {
  const { tabs, arrowTab } = useContext(OrderContext)

  const tabHeadElements = tabs.map((tab) => {
    return <TabHead key={tab.id} tab={tab} />
  })

  return (
    <div className={adminPanel}>
      <div className={tabHeads}>
        <ArrowTab />
        {tabHeadElements}
      </div>
      {arrowTab.isOpen && (
        <div className={tabBody}>
          <div className={noImage}>Aucune image</div>
          <form className={form}>
            <input
              className={inputText}
              type="text"
              placeholder={'Nom du produit (ex: Super Burger)'}
            />
            <input
              className={inputText}
              type="text"
              placeholder={
                "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
              }
            />
            <input
              className={inputText}
              type="text"
              placeholder={'Nom du produit (ex: Super Burger)'}
            />
          </form>
        </div>
      )}
    </div>
  )
}

const adminPanel = 'w-full absolute bottom-0'
const tabHeads = 'flex flex-row ml-16'
const tabBody =
  'flex h-56 pt-6 pl-16 bg-white border border-t-[#E4E5E9] drop-shadow-admin  rounded-b-2xl'
const noImage = 'w-56 h-32 flex justify-center border border-grey-500 rounded'
const form = 'flex flex-col mx-5 border border-red-500'
const inputText = 'bg-[#F5F5F7] w-[650px] h-9 rounded-md mb-2 py-2.5 px-6'
