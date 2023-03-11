import {
  AiOutlinePlus,
  FiChevronDown,
  MdModeEditOutline,
} from 'react-icons/all'
import { IconType } from 'react-icons'

export type TabConfig = {
  id: number
  ariaLabel?: string
  Icon: IconType
  label: string | null
  isActive: boolean
}
export const tabsConfig: TabConfig[] = [
  {
    id: 0,
    ariaLabel: 'Réduire / Ouvrir',
    Icon: FiChevronDown,
    label: null,
    isActive: false,
  },
  {
    id: 1,
    Icon: AiOutlinePlus,
    label: 'Ajouter un produit',
    isActive: true, // by default
  },
  {
    id: 2,
    Icon: MdModeEditOutline,
    label: 'Modifier un produit',
    isActive: false,
  },
]
