import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'
import { THEME } from '../../../reusable-ui/design-system'

export function AdminToast() {
  return <AdminToastStyled className="toaster" bodyClassName="body-toast" />
}

const AdminToastStyled = styled(ToastContainer)`
  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${THEME.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
`
