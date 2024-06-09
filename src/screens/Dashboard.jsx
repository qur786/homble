import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";
import { useFetcher } from "../hooks/useFetcher";
import { useEffect } from "react";

export function Dashboard() {
  const { makeRequest, output: products } = useFetcher("get");

  useEffect(() => {
    makeRequest({ url: "/dashboard" });
  }, [makeRequest]);

  return (
    <Container>
      <h6 className="text-primary text-center font-weight-bold text-lg h4 my-4">
        Dashboard
      </h6>
      <Table responsive striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Selling Price</th>
          </tr>
        </thead>
        <tbody>
          {products?.map(({ id, name, selling_price }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{selling_price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
