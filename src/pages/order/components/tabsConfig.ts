import {
  AiOutlinePlus,
  FiChevronDown,
  MdModeEditOutline,
} from 'react-icons/all'
import { IconType } from 'react-icons'

export type TabConfig = {
  id: number
  Icon: IconType
  label: string | null
}
export const tabsConfig: TabConfig[] = [
  {
    id: 0,
    Icon: FiChevronDown,
    label: null,
  },
  {
    id: 1,
    Icon: AiOutlinePlus,
    label: 'Ajouter un produit',
  },
  {
    id: 2,
    Icon: MdModeEditOutline,
    label: 'Modifier un produit',
  },
]
