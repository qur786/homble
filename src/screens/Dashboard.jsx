import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { useFetcher } from "../hooks/useFetcher";
import { useEffect, useState } from "react";

export function Dashboard() {
  const [searchText, setSearchText] = useState("");
  const [fileteredProducts, setFileteredProducts] = useState([]);
  const { makeRequest, output: products } = useFetcher("get");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    makeRequest({ url: "/dashboard" });
  }, [makeRequest]);

  useEffect(() => {
    const timeID = setTimeout(() => {
      const regex = new RegExp(searchText, "i");
      const filetered = [...(products ?? [])].filter(
        (ele) => ele.id.search(regex) !== -1 || ele.name.search(regex) !== -1,
      );
      setFileteredProducts(filetered);
    }, 500); // Debouncing

    return () => {
      clearTimeout(timeID);
    };
  }, [products, searchText]);

  return (
    <Container>
      <h6 className="text-primary text-center font-weight-bold text-lg h4 my-4">
        Dashboard
      </h6>
      <Form.Group className="mb-3" controlId="product-search">
        <Form.Control
          type="text"
          placeholder="Search products by ID or name..."
          value={searchText}
          onChange={handleSearchChange}
        />
      </Form.Group>
      <Table responsive striped bordered hover size="sm">
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Product Name</th>
            <th>Selling Price</th>
          </tr>
        </thead>
        <tbody>
          {fileteredProducts?.map(({ id, name, selling_price }) => (
            <tr key={id}>
              <td className="text-center">
                <Form.Check type="checkbox" id={`check-${id}`} />
              </td>
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
