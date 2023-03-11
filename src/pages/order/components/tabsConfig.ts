import {
  AiOutlinePlus,
  FiChevronDown,
  MdModeEditOutline,
} from 'react-icons/all'
import { IconType } from 'react-icons'
import { toast } from 'react-toastify'
import isActive = toast.isActive

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
    ariaLabel: 'ChevronDown',
    Icon: FiChevronDown,
    label: null,
    isActive: false,
  },
  {
    id: 1,
    Icon: AiOutlinePlus,
    label: 'Ajouter un produit',
    isActive: true,
  },
  {
    id: 2,
    Icon: MdModeEditOutline,
    label: 'Modifier un produit',
    isActive: false,
  },
]
