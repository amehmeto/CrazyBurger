import { Link } from 'react-router-dom'
import { AppRoutes } from '../../../App'
import { BsPersonCircle } from 'react-icons/all'
import styled from 'styled-components'
import { THEME } from '../../../reusable-ui/design-system'

type RightSideNavbarProps = {
  firstName: string
}

export function RightSideNavbar({ firstName }: RightSideNavbarProps) {
  return (
    <RightSideNavbarStyled className="rightSide">
      <div className="textContainer">
        <p className="welcomePhrase">
          Hey, <span>{firstName}</span>
        </p>
        <Link className="logout" to={AppRoutes.HOME}>
          Se déconnecter
        </Link>
      </div>
      <BsPersonCircle className="profilIcon" />
    </RightSideNavbarStyled>
  )
}

const RightSideNavbarStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  color: ${THEME.colors.greyDark};
  padding-right: ${THEME.spacing.xl};

  span {
    font-weight: bold;
    color: ${THEME.colors.primary_burger};
  }

  .textContainer {
    display: flex;
    flex-direction: column;
  }
  .welcomePhrase {
    margin: 0;
    font-size: ${THEME.fonts.size.P1};
  }

  .logout {
    text-decoration: none;
    font-size: ${THEME.fonts.size.P0};
    color: ${THEME.colors.greyDark};

    &:hover {
      text-decoration: underline;
    }
  }

  .profilIcon {
    margin-left: ${THEME.spacing.xs};
    height: 36px;
    width: 36px;
  }
`
