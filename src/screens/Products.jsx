import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ProductCard } from "../components/ProductCard";
import { DemoData } from "../demo-data";

export function Products() {
  return (
    <Row xs={1} md={2} lg={3} className="g-4 p-4">
      {DemoData.map((ele) => (
        <Col key={ele.id}>
          <ProductCard {...ele} />
        </Col>
      ))}
    </Row>
  );
}
