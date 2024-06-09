import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { postRequest } from "../../axios";
import "../../types";

/**
 * @param {NewProductFormProps} props
 */
export function NewProductForm({ onSubmit }) {
  /**
   * @type import("react").FormEventHandler<HTMLFormElement>
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    postRequest("/products", form)
      .then(console.log)
      .catch(console.log)
      .finally(() => {
        onSubmit?.();
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="new-product-name">
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          type="text"
          name="product-name"
          placeholder="Enter name"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="new-product-description">
        <Form.Label>Product Description</Form.Label>
        <Form.Control
          as="textarea"
          name="product-description"
          rows={3}
          placeholder="Enter description"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="new-product-allergen">
        <Form.Label>Product Allergen Info</Form.Label>
        <Form.Control
          as="textarea"
          name="product-allergen"
          rows={3}
          placeholder="Enter allergen"
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
