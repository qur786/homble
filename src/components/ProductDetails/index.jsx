import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import "../../types";

/**
 * @param {Product} props
 */
export function ProductDetails({
  name,
  description,
  productImage,
  selling_price,
  cooking_instruction,
  allergen_info,
}) {
  return (
    <Card>
      <Card.Img variant="top" src={productImage} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Accordion alwaysOpen>
          <Accordion.Item eventKey="product-description">
            <Accordion.Header>Product Description</Accordion.Header>
            <Accordion.Body>{description}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="product-allergen">
            <Accordion.Header>Product Allergen Info</Accordion.Header>
            <Accordion.Body>{allergen_info}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="product-usage">
            <Accordion.Header>Product Usage</Accordion.Header>
            <Accordion.Body>{cooking_instruction}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
      <Card.Footer>Price: {selling_price} &#8377;</Card.Footer>
    </Card>
  );
}
