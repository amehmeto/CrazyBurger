import React from 'react'
import styled from 'styled-components'
import { T } from '../design-system'

type PrimaryButtonProps = {
  label: string
  icon?: JSX.Element
}
export function PrimaryButton({ label, icon }: PrimaryButtonProps) {
  return (
    <PrimaryButtonStyled>
      {label} {icon}
    </PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled.button`
  background-color: ${T.colors.primary};
  width: 100%;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  line-height: 1;

  padding: ${T.spacing.md} ${T.spacing.md};
  border-radius: 5px;
  font-size: ${T.fonts.size.P0};
  font-weight: ${T.fonts.weights.heavy};
  color: ${T.colors.white};
  background-color: ${T.colors.primary};
  border: 1px solid ${T.colors.primary};

  &:hover:not(:disabled) {
    background-color: ${T.colors.white};
    color: ${T.colors.primary};
    border: 1px solid ${T.colors.primary};
    transition: all 200ms ease-out;
  }

  &:active {
    color: ${T.colors.white};
    background-color: ${T.colors.primary};
    border: 1px solid ${T.colors.primary};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
