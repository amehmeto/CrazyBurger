import React, { FormEvent } from 'react'
import styled from 'styled-components'
import { T } from '../../../reusable-ui/design-system'
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
  font-family: ${T.fonts.family.AMATIC_SC}, cursive;

  h1 {
    color: ${T.colors.white};
    font-size: ${T.fonts.size.P5};
  }

  h2 {
    color: ${T.colors.white};
    margin: ${T.spacing.md} ${T.spacing.sm} ${T.spacing.sm};
    font-size: ${T.fonts.size.P4};
  }

  hr {
    background-color: ${T.colors.loginLine};
    border: 1.5px solid ${T.gridUnit * 5};
  }
`
