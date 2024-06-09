import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Placeholder from "react-bootstrap/Placeholder";
import "../../types";

/**
 * @param {{ fullDetailes: boolean; }}
 */
export function ProductCardSkeleton({ fullDetailes }) {
  return (
    <Card>
      <Card.Img variant="top" src="/placeholder.jpg" />
      <Card.Body>
        <Placeholder as={Card.Title} animation="wave">
          <Placeholder xs={4} />
        </Placeholder>
        {fullDetailes ? (
          <Accordion alwaysOpen>
            <Accordion.Item eventKey="product-description">
              <Placeholder as={Accordion.Header} animation="wave">
                <Placeholder xs={2} />
              </Placeholder>
              <Placeholder as={Accordion.Body} animation="wave">
                <Placeholder xs={8} />
              </Placeholder>
            </Accordion.Item>
            <Accordion.Item eventKey="product-allergen">
              <Placeholder as={Accordion.Header} animation="wave">
                <Placeholder xs={2} />
              </Placeholder>
              <Placeholder as={Accordion.Body} animation="wave">
                <Placeholder xs={8} />
              </Placeholder>
            </Accordion.Item>
            <Accordion.Item eventKey="product-usage">
              <Placeholder as={Accordion.Header} animation="wave">
                <Placeholder xs={2} />
              </Placeholder>
              <Placeholder as={Accordion.Body} animation="wave">
                <Placeholder xs={8} />
              </Placeholder>
            </Accordion.Item>
          </Accordion>
        ) : undefined}
      </Card.Body>
      <Placeholder as={Card.Footer} animation="wave">
        <Placeholder xs={2} />
      </Placeholder>
    </Card>
  );
}
