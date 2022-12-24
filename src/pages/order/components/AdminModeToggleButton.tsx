import styled from 'styled-components'
import { THEME } from '../../../reusable-ui/design-system'

export function AdminModeToggleButton() {
  return (
    <AdminModeToggleButtonStyled>
      <input type="checkbox" defaultChecked={false} />
      <span className="slider"></span>
      {/*<strong>{'Accéder au mode admin'}</strong>*/}
    </AdminModeToggleButtonStyled>
  )
}

const AdminModeToggleButtonStyled = styled.label`
  display: inline-block;
  position: relative;
  width: 70px;
  height: 40px;
  cursor: pointer;
  overflow: hidden;

  border: red 1px solid;
  color: ${THEME.colors.primary};
  padding: 15px;

  input {
    position: absolute;
    top: -30px;
    left: -30px;
    width: 0;
    height: 0;
  }

  input + span {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${THEME.colors.background_dark};
    border-radius: ${THEME.borderRadius.extraRound};
  }

  input:checked + span {
    background: ${THEME.colors.primary};
  }

  /*  input + span:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 4px;
    width: 32px;
    height: 32px;
    background: #61dafb;
    border-radius: 50%;
    transform: translateY(-50%);
    transition: all 0.5s;
  }*/
`
