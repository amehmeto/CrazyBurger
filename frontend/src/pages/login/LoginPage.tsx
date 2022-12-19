import React from 'react'
import styled from 'styled-components'
import { CrazeeBurgerLogo } from './components/CrazeeBurgerLogo'
import { LoginForm } from './components/LoginForm'

export function LoginPage() {
  return (
    <LoginPageStyled>
      <CrazeeBurgerLogo className={'login-page-logo'} />
      <LoginForm />
    </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ::before {
    content: '';
    background: url('../../../src/assets/burger-background.jpg')
      rgba(0, 0, 0, 0.7) center;
    background-size: cover;
    background-blend-mode: darken;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  .login-page-logo {
    transform: scale(2.5);
  }
`
