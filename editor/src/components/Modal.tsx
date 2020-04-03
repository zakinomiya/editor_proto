import React from 'react'
import Modal from 'react-bootstrap/Modal'

const ModalComponent: React.FC<{message: string, type: boolean}> = ({message, type}) => {
    return (
        <Modal
            show
        >
            <Modal.Header>
                {type ? "正解" : "不正解"}
            </Modal.Header>
            <Modal.Body>
                {message}
            </Modal.Body>
        </Modal>
    )
}

export default ModalComponent
