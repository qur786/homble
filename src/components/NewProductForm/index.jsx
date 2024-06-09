import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import "../../types";
import { useFetcher } from "../../hooks/useFetcher";

/**
 * @param {NewProductFormProps} props
 */
export function NewProductForm({ onSubmit }) {
  const { loading: isSubmitting, makeRequest } = useFetcher("post", onSubmit);
  /**
   * @type import("react").FormEventHandler<HTMLFormElement>
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    makeRequest({ url: "/products", data: form });
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
        {isSubmitting ? (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        ) : undefined}
        Add
      </Button>
    </Form>
  );
}
