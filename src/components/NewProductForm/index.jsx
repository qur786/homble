import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function NewProductForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="new-product-name">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="new-product-description">
        <Form.Label>Product Description</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter description" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="new-product-allergen">
        <Form.Label>Product Allergen Info</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter allergen" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
