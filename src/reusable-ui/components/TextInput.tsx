import React from 'react'
import styled from 'styled-components'
import { THEME } from '../design-system'

type TextInputProps = {
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void
  Icon?: JSX.Element
  name?: string
  placeholder?: string
  required: boolean
}
export function TextInput({
  onChange,
  Icon,
  name,
  placeholder,
  required,
}: TextInputProps) {
  return (
    <TextInputStyled>
      {Icon}
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
  background-color: ${THEME.colors.white};
  border-radius: ${THEME.borderRadius.round};
  display: flex;
  align-items: center;

  padding: ${THEME.spacing.md} ${THEME.spacing.lg};

  input {
    color: ${THEME.colors.dark};
    width: 100%;

    &::placeholder {
      background: ${THEME.colors.white};
      color: ${THEME.colors.greyMedium};
    }
  }
`
