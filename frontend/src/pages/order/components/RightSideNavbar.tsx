import { Link } from 'react-router-dom'
import { AppRoutes } from '../../../App'
import { BsPersonCircle } from 'react-icons/all'
import styled from 'styled-components'
import { T } from '../../../reusable-ui/design-system'

export function RightSideNavbar(props: { firstName: any }) {
  return (
    <RightSideNavbarStyled className={'rightSide'}>
      <div className={'textContainer'}>
        <p className={'welcomePhrase'}>
          Hey, <span>{props.firstName}</span>
        </p>
        <Link className={'logout'} to={AppRoutes.HOME}>
          Se déconnecter
        </Link>
      </div>
      <BsPersonCircle className={'profilIcon'} />
    </RightSideNavbarStyled>
  )
}

const RightSideNavbarStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  font-family: ${T.fonts.family.OPEN_SANS}, sans-serif;
  color: ${T.colors.greyDark};

  span {
    font-weight: bold;
    color: ${T.colors.primary_burger};
  }

  .textContainer {
    display: flex;
    flex-direction: column;
  }
  .welcomePhrase {
    margin: 0;
    font-size: ${T.fonts.size.P1};
  }

  .logout {
    text-decoration: none;
    font-size: ${T.fonts.size.P0};
    color: ${T.colors.greyDark};
  }

  .profilIcon {
    margin-left: ${T.spacing.xs};
    height: 60px;
    width: 60px;
  }
`
