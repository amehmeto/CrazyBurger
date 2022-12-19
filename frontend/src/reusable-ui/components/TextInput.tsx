import React from 'react'
import styled from 'styled-components'
import { T } from '../design-system'

type TextInputProps = {
  onChange?: () => void
  icon?: JSX.Element
  name?: string
  placeholder?: string
  required: boolean
}
export function TextInput({
  onChange,
  icon,
  name,
  placeholder,
  required,
}: TextInputProps) {
  return (
    <TextInputStyled>
      {icon}
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </TextInputStyled>
  )
}

const TextInputStyled = styled.div`
  background-color: ${T.colors.white};
  border-radius: ${T.borderRadius.round};
  display: flex;
  align-items: center;

  padding: ${T.spacing.md} ${T.spacing.md};

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${T.fonts.size.P0};
    color: ${T.colors.greySemiDark};
    margin-right: ${T.spacing.xs};
  }

  input {
    font-size: ${T.fonts.size.P0};
    color: ${T.colors.dark};
    border: none;
    width: 100%;

    &::placeholder {
      background: ${T.colors.white};
      color: ${T.colors.greyMedium};
    }
  }
`
