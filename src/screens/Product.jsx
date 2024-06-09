import { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { ProductDetails } from "../components/ProductDetails";
import { Spinner } from "react-bootstrap";
import { useFetcher } from "../hooks/useFetcher";

export function Product() {
  const { id } = useParams();

  const { makeRequest, loading, output: product } = useFetcher("get");

  useEffect(() => {
    makeRequest({ url: `/products/${id}` });
  }, [makeRequest, id]);

  return (
    <Container>
      <h6 className="text-primary text-center font-weight-bold text-lg h4 mt-4">
        Product {id}
      </h6>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
          {/* Use skeleton insteads */}
        </Spinner>
      ) : (
        <Row>
          <Col className="mt-4">
            {product === null ? (
              "Loading..."
            ) : (
              <ProductDetails {...(product ?? {})} />
            )}
          </Col>
        </Row>
      )}
    </Container>
  );
}
