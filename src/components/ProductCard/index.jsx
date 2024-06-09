import Card from "react-bootstrap/Card";
import "../../types";

/**
 * @param {Product}
 */
export function ProductCard({ name, productImage }) {
  return (
    <Card>
      <Card.Img variant="top" src={productImage} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
}
