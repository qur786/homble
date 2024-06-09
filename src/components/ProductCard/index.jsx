import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import "../../types";
import { ProductCardSkeleton } from "./ProductCardSkeleton";

/**
 * @param {Product & { fullDetailes: boolean; loading: boolean; }}
 */
export function ProductCard({
  name,
  productImage,
  selling_price,
  id,
  description,
  allergen_info,
  cooking_instruction,
  fullDetailes,
  loading,
}) {
  return loading ? (
    <ProductCardSkeleton fullDetailes={fullDetailes} />
  ) : (
    <Card
      {...(fullDetailes
        ? {}
        : {
            as: "a",
            href: `/products/${id}`,
            className: "text-decoration-none",
          })}
    >
      <Card.Img variant="top" src={productImage} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        {fullDetailes ? (
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
        ) : undefined}
      </Card.Body>
      <Card.Footer>Price: {selling_price} &#8377;</Card.Footer>
    </Card>
  );
}
