import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ProductCard } from "../components/ProductCard";
import { useEffect, useState } from "react";
import "../types";
import { getRequest } from "../axios";

export function Products() {
  /**
   * @type {[Product[], import("react").Dispatch<Product[]>]}
   */
  const [products, setProducts] = useState([]);

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
        console.log(sortedOutput);
        setProducts(sortedOutput);
      })
      .catch(console.log);
  }, []);

  return (
    <Row xs={1} md={2} lg={3} className="g-4 p-4">
      {products.map((ele) => (
        <Col key={ele.id}>
          <ProductCard {...ele} />
        </Col>
      ))}
    </Row>
  );
}
