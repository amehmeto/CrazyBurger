import { MenuItems } from '../models/MenuItems'

export interface MenuItemsGateway {
  getAll(): Promise<MenuItems[]>
}
