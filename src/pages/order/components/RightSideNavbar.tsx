import styled from 'styled-components'
import { THEME } from '../../../reusable-ui/design-system'
import { Profil } from './Profil'
import ToggleButton from '../../../reusable-ui/components/ToggleButton'
import { useState } from 'react'
import { toast, ToastContainer, ToastOptions } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type RightSideNavbarProps = {
  firstName: string | undefined
}

export function RightSideNavbar({ firstName }: RightSideNavbarProps) {
  const [isModeAdmin, setIsModeAdmin] = useState<boolean>(false)

  function notifyEnteredAdminMode() {
    const notificationMessage = 'Mode admin activé'
    const options = {
      theme: 'dark',
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    } as ToastOptions<{}>
    toast.info(notificationMessage, options)
  }

  function activateAdminMode() {
    if (!isModeAdmin) notifyEnteredAdminMode()
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

      <ToastContainer />

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
  }
`
