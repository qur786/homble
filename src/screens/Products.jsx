import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { ProductCard } from "../components/ProductCard";
import { useEffect, useState } from "react";
import "../types";
import { getRequest } from "../axios";
import { Container } from "react-bootstrap";
import { ProductModal } from "../components/ProductModal";

export function Products() {
  /**
   * @type {[Product[], import("react").Dispatch<Product[]>]}
   */
  const [products, setProducts] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    getRequest("/products")
      .then((data) => {
        /**
         * @type {Product[]}
         */
        const output = data.data;
        const sortedOutput = output.sort(
          (a, b) => a.selling_price - b.selling_price,
        );
        setProducts(sortedOutput);
      })
      .catch(console.log);
  }, []);

  return (
    <Container>
      <Row>
        <Col sm={8} md={10} />
        <Col sm={4} md={2}>
          <Button onClick={showModal} className="mt-4">
            Add Product
          </Button>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={3} className="g-4 p-4">
        {products.map((ele) => (
          <Col key={ele.id}>
            <ProductCard {...ele} />
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
