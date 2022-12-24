import styled from 'styled-components'
import { THEME } from '../../../reusable-ui/design-system'
import { Profil } from './Profil'
import ToggleButton from '../../../reusable-ui/components/ToggleButton'
import { useState } from 'react'

type RightSideNavbarProps = {
  firstName: string | undefined
}

export function RightSideNavbar({ firstName }: RightSideNavbarProps) {
  const [isModeAdmin, setIsModeAdmin] = useState<boolean>(false)

  function activateAdminMode() {
    setIsModeAdmin(!isModeAdmin)
  }

  return (
    <RightSideNavbarStyled className="rightSide">
      <ToggleButton
        isChecked={isModeAdmin}
        onToggle={activateAdminMode}
        checkedLabel="Désactiver le mode admin"
        uncheckedLabel="Activer le mode admin"
      />

      <Profil firstName={firstName} />
    </RightSideNavbarStyled>
  )
}

const RightSideNavbarStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  color: ${THEME.colors.greyDark};
  padding-right: ${THEME.spacing.xl};
`
