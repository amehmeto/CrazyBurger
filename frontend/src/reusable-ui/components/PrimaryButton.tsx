import React from 'react'
import styled from 'styled-components'
import { THEME } from '../design-system'

type PrimaryButtonProps = {
  label: string,
  icon?: JSX.Element,
}
export function PrimaryButton({ label, icon}: PrimaryButtonProps) {
  return <PrimaryButtonStyled>
    {label} {icon}
  </PrimaryButtonStyled>
}

const PrimaryButtonStyled = styled.button`
  background-color: ${THEME.colors.primary};
  width: 100%;
  
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  line-height: 1;
  
  padding: ${THEME.spacing.md} ${THEME.spacing.md};
  border-radius: 5px;
  font-size: ${THEME.fonts.size.P0};
  font-weight: ${THEME.fonts.weights.heavy};
  color: ${THEME.colors.white};
  background-color: ${THEME.colors.primary};
  border: 1px solid ${THEME.colors.primary};
  
  &:hover:not(:disabled) {
    background-color: ${THEME.colors.white};
    color: ${THEME.colors.primary};
    border: 1px solid ${THEME.colors.primary};
    transition: all 200ms ease-out;
  }
  
  &:active {
    color: ${THEME.colors.white};
    background-color: ${THEME.colors.primary};
    border: 1px solid ${THEME.colors.primary};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`