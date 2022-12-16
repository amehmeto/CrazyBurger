import React from 'react'
import styled from 'styled-components'
import { THEME } from '../design-system'

type TextInputProps = {
  onChange?: () => void,
  icon?: JSX.Element,
  name?: string,
  placeholder?: string,
  required: boolean,
}
export function TextInput({ onChange, icon, name , placeholder, required}: TextInputProps
) {
  return <TextInputStyled>
    {icon}
    <input
      type='text'
      name={name}
      placeholder={placeholder}
      required={required}
    />
  </TextInputStyled>
}

const TextInputStyled = styled.div`
  background-color: ${THEME.colors.white};
  border-radius: ${THEME.borderRadius.round};
  display: flex;
  align-items: center;
  
  padding: ${THEME.spacing.md} ${THEME.spacing.md};
  

  
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${THEME.fonts.size.P0};
    color: ${THEME.colors.greySemiDark};
    margin-right: ${THEME.spacing.xs};
  }

  input {
    font-size: ${THEME.fonts.size.P0};
    color: ${THEME.colors.dark};
    border: none;
    width: 100%;
    
    &::placeholder {
      background: ${THEME.colors.white};
      color: ${THEME.colors.greyMedium};
    }
  }
`
