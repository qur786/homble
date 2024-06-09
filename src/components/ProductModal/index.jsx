import Modal from "react-bootstrap/Modal";
import "../../types";
import { NewProductForm } from "../NewProductForm";

/**
 * @param {ProductModalProps} props
 */
export function ProductModal({ open, closeModal }) {
  return (
    <Modal show={open} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>New Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <NewProductForm />
      </Modal.Body>
    </Modal>
  );
}
