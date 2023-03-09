import { Link } from 'react-router-dom'
import { AppRoutes } from '../../../App'
import { BsPersonCircle } from 'react-icons/all'
import styled from 'styled-components'
import { THEME } from '../../../reusable-ui/design-system'

type ProfilProps = {
  firstName: string | undefined
}

export function Profil({ firstName }: ProfilProps) {
  return (
    <ProfilStyled>
      <div className="textContainer">
        <p className="welcomePhrase">
          Hey, <span>{firstName ?? 'Anonymous'}</span>
        </p>
        <Link className="logout" to={AppRoutes.HOME}>
          <small>Se déconnecter</small>
        </Link>
      </div>
      <BsPersonCircle className="profilIcon" />
    </ProfilStyled>
  )
}

const ProfilStyled = styled.div`
  display: flex;

  margin-left: ${THEME.spacing.xl};

  span {
    font-weight: bold;
    color: ${THEME.colors.primary_burger};
  }

  .textContainer {
    display: flex;
    flex-direction: column;

    & > p {
      text-align: right;
    }
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
    height: 40px;
    width: 40px;
  }
`
