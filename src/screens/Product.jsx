import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { ProductDetails } from "../components/ProductDetails";
import { getRequest } from "../axios";

export function Product() {
  const { id } = useParams();
  /**
   * @type {[Product|null, import("react").Dispatch<Product|null>]}
   */
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getRequest(`/products/${id}`)
      .then((data) => {
        setProduct(data.data);
      })
      .catch(console.log);
  }, [id]);

  return (
    <Container>
      <h6 className="text-primary text-center font-weight-bold text-lg h4 mt-4">
        Product {id}
      </h6>
      <Row>
        <Col className="mt-4">
          {product === null ? "Loading..." : <ProductDetails {...product} />}
        </Col>
      </Row>
    </Container>
  );
}
