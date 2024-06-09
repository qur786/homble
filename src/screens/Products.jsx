import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { ProductCard } from "../components/ProductCard";
import { useCallback, useEffect, useState } from "react";
import "../types";
import { Container } from "react-bootstrap";
import { ProductModal } from "../components/ProductModal";
import { useFetcher } from "../hooks/useFetcher";
import { DemoProduct } from "./utils";

export function Products() {
  const [openModal, setOpenModal] = useState(false);
  const [sortedProducts, setSortedProducts] = useState(
    new Array(10).fill(DemoProduct),
  );

  const { makeRequest, output: products, loading } = useFetcher("get");

  const showModal = useCallback(() => {
    setOpenModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  useEffect(() => {
    makeRequest({ url: "/products" });
  }, [makeRequest]);

  useEffect(() => {
    const sorted = [...(products ?? [])]?.toSorted(
      (a, b) => a.selling_price - b.selling_price,
    );
    setSortedProducts(sorted);
  }, [products]);

  return (
    <Container>
      <Row>
        <Col xs={8} md={10} />
        <Col xs={4} md={2}>
          <Button onClick={showModal} className="mt-4">
            Add Product
          </Button>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={3} className="g-4 p-4">
        {sortedProducts.map((ele) => (
          <Col key={ele.id}>
            <ProductCard {...ele} fullDetailes={false} loading={loading} />
          </Col>
        ))}
      </Row>
      <ProductModal
        open={openModal}
        showModal={showModal}
        closeModal={closeModal}
      />
    </Container>
  );
}
