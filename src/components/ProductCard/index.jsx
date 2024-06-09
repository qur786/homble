import Card from "react-bootstrap/Card";
import "../../types";

/**
 * @param {Product}
 */
export function ProductCard({ name, productImage, selling_price, id }) {
  return (
    <Card as="a" href={`/products/${id}`} className="text-decoration-none">
      <Card.Img variant="top" src={productImage} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{selling_price} &#8377;</Card.Text>
      </Card.Body>
    </Card>
  );
}
