import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useMemo } from "react";
import { DemoProduct } from "../../screens/utils";
import Placeholder from "react-bootstrap/Placeholder";

export function ProductTableSkeleton() {
  const demoProducts = useMemo(() => {
    return new Array(10).fill().map((_, idx) => {
      return { ...DemoProduct, id: idx };
    });
  }, []);
  return (
    <Table responsive striped bordered hover size="sm">
      <thead>
        <tr>
          <th></th>
          <th>
            <div className="d-flex justify-content-between align-items-center">
              ID <Button variant="light">"↑"</Button>
            </div>
          </th>
          <th>
            <div className="d-flex justify-content-between align-items-center">
              Product Name <Button variant="light">"↑"</Button>
            </div>
          </th>
          <th>
            <div className="d-flex justify-content-between align-items-center">
              Selling Price <Button variant="light">"↑"</Button>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {demoProducts.map(({ id }) => (
          <tr key={id}>
            <td className="text-center">
              <Form.Check type="checkbox" data-id={id} />
            </td>
            <Placeholder as="td" animation="wave">
              <Placeholder xs={2} />
            </Placeholder>
            <Placeholder as="td" animation="wave">
              <Placeholder xs={4} />
            </Placeholder>
            <Placeholder as="td" animation="wave">
              <Placeholder xs={2} />
            </Placeholder>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
