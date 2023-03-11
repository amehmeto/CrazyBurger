import { MenuItems } from '../models/MenuItems'
import { PrimaryButton } from '../../../reusable-ui/components/PrimaryButton'
import styled from 'styled-components'
import { THEME } from '../../../reusable-ui/design-system'

type MenuItemsCardProps = {
  item: MenuItems
}

export function MenuItemCard({ item }: MenuItemsCardProps) {
  const { title, price, imageSource } = item

  function formatPrice(price: number): string {
    const roundedPrice = Math.round(price * 10) / 10
    return roundedPrice.toLocaleString('tr-TR', {
      style: 'currency',
      currency: 'TRY',
      maximumFractionDigits: 2,
    })
  }

  const formattedPrice = formatPrice(price)

  return (
    <MenuItemCardStyled>
      <img src={imageSource} alt={title + ' image'} />
      <p className="title">{title}</p>
      <div className="priceLine">
        <p className="price">{formattedPrice}</p>
        <PrimaryButton className="addItem" label="Ajouter" />
      </div>
    </MenuItemCardStyled>
  )
}

const MenuItemCardStyled = styled.div`
  margin: 0 auto;
  height: 300px;
  width: 200px;
  background-color: ${THEME.colors.white};
  border-radius: ${THEME.borderRadius.extraRound};
  padding: ${THEME.spacing.md};
  box-shadow: -8px 8px 20px 0 rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  justify-content: end;

  img {
    margin: 0 auto 30px;
    width: 100%;
    max-height: 145px;
    object-fit: contain;
    flex-grow: 1;
    justify-self: center;
  }

  p {
    margin: 0;
  }

  .title {
    font-family: ${THEME.fonts.family.AMATIC_SC};
    font-size: ${THEME.fonts.size.P4};
    font-weight: ${THEME.fonts.weights.bold};
  }

  .price {
    color: ${THEME.colors.primary};
    font-size: ${THEME.fonts.size.P1};
  }

  .priceLine {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${THEME.spacing.sm} 0 0 0;
  }

  .addItem {
    font-size: ${THEME.fonts.size.XS};
    cursor: pointer;
    padding: 12px;
    width: 50%;
  }
`
