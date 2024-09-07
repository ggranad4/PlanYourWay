import React from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";


const ModalComponent = ({ show, title, children, setShowPlanner }) => {
    return <>
        <Modal show={show} onHide={() => { setShowPlanner(false) }}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
            <Modal.Footer>
                <Button onClick={() => setShowPlanner(false)}>Close</Button>
            </Modal.Footer>
        </Modal>
    </>
}
export default ModalComponent