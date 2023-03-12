import {
  AiOutlinePlus,
  FiChevronDown,
  MdModeEditOutline,
} from 'react-icons/all'
import { IconType } from 'react-icons'

export type ArrowTabModel = {
  id: 0
  ariaLabel: 'Réduire / Ouvrir'
  Icon: IconType
  isOpen: boolean
}

export type TabViewModel = {
  id: number
  Icon: IconType
  label: string | null
  isSelected: boolean
}

export const initialArrowTab: ArrowTabModel = {
  id: 0,
  ariaLabel: 'Réduire / Ouvrir',
  Icon: FiChevronDown,
  isOpen: false,
}

export const initialTabs: TabViewModel[] = [
  {
    id: 1,
    Icon: AiOutlinePlus,
    label: 'Ajouter un produit',
    isSelected: true, // by default
  },
  {
    id: 2,
    Icon: MdModeEditOutline,
    label: 'Modifier un produit',
    isSelected: false,
  },
]
