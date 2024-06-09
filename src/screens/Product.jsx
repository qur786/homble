import { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { useFetcher } from "../hooks/useFetcher";
import { ProductCard } from "../components/ProductCard";
import { DemoProduct } from "./utils";
import { UnavailableData } from "../components/UnavailableData";

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
      {loading || product ? (
        <Row>
          <Col className="mt-4">
            <ProductCard
              loading={loading}
              {...(product ?? DemoProduct)}
              fullDetailes
            />
          </Col>
        </Row>
      ) : (
        <UnavailableData />
      )}
    </Container>
  );
}
