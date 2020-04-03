import React from 'react'
import Toast from 'react-bootstrap/Toast'

type Props = {
  title: string
  message: string
  type: string
  closeFunc?: () => void
}

const ToastComponent: React.FC<Props> = ({
  title,
  message,
  type,
  closeFunc = () => {}
}) => {
  return (
    <div
      className="d-flex justify-content-end"
      style={{ position: 'absolute', top: 10, right: 20 }}
    >
      <Toast
        show
        onClose={closeFunc}
        delay={3000}
        autohide
        className={`border-${type === 'success' ? 'success' : 'danger'}`}
        style={{ minWidth: '250px' }}
      >
        <Toast.Header
          closeButton={false}
          className={`text-${type === 'success' ? 'success' : 'danger'} `}
        >
          {title}
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </div>
  )
}

export default ToastComponent
