import React, { FormEvent } from 'react'
import styled from 'styled-components'
import { THEME } from '../../../reusable-ui/design-system'
import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '../../../App'
import { PrimaryButton } from '../../../reusable-ui/components/PrimaryButton'
import { BsPersonCircle, IoChevronForward } from 'react-icons/all'
import { TextInput } from '../../../reusable-ui/components/TextInput'

export function LoginForm() {
  const navigate = useNavigate()

  function accessPrivateSpace(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // @ts-ignore
    const name = e.target[0].value
    navigate(`${AppRoutes.ORDER}${name}`)
  }
  return (
    <LoginFormStyled>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h1>Connectez-vous</h1>

      <form onSubmit={accessPrivateSpace}>
        <TextInput
          name="firstName"
          placeholder="Entrez votre prénom..."
          icon={<BsPersonCircle className="icon" />}
          required
        />
        <br />
        <PrimaryButton
          label="Accédez à mon espace"
          icon={<IoChevronForward />}
        />
      </form>
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.div`
  font-family: ${THEME.fonts.family.AMATIC_SC}, cursive;
  text-align: center;

  h1 {
    color: ${THEME.colors.white};
    font-size: ${THEME.fonts.size.P5};
  }

  h2 {
    color: ${THEME.colors.white};
    margin: ${THEME.spacing.md} ${THEME.spacing.sm} ${THEME.spacing.sm};
    font-size: ${THEME.fonts.size.P4};
  }

  hr {
    border: 1.5px solid ${THEME.colors.loginLine};
    margin-bottom: ${THEME.gridUnit * 5};
  }
`
