import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useFetcher } from "../hooks/useFetcher";
import { useEffect, useState } from "react";
import { sortProducts } from "./utils";

export function Dashboard() {
  const [searchText, setSearchText] = useState("");
  const [fileteredProducts, setFileteredProducts] = useState([]);
  const [tableProducts, setTableProducts] = useState([]);
  const [sortDirections, setSortDirections] = useState({
    id: "asc",
    name: "asc",
    selling_price: "asc",
  });
  const { makeRequest, output: products } = useFetcher("get");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const id = event.target.getAttribute("data-id") ?? "";
    setTableProducts((prev) => prev.filter((ele) => ele.id !== id));
  };

  const handleSortClick = (event) => {
    const key = event.target.getAttribute("data-id") ?? "";
    if (key in sortDirections) {
      setSortDirections((prev) => ({
        ...prev,
        [key]: prev[key] === "asc" ? "desc" : "asc",
      }));
    }
  };

  useEffect(() => {
    makeRequest({ url: "/dashboard" });
  }, [makeRequest]);

  useEffect(() => {
    setTableProducts(products ?? []);
  }, [products]);

  useEffect(() => {
    const timeID = setTimeout(() => {
      const regex = new RegExp(searchText, "i");
      const filetered = [...(tableProducts ?? [])].filter(
        (ele) => ele.id.search(regex) !== -1 || ele.name.search(regex) !== -1,
      );
      setFileteredProducts(filetered);
    }, 500); // Debouncing

    return () => {
      clearTimeout(timeID);
    };
  }, [tableProducts, searchText]);

  useEffect(() => {
    const timeID = setTimeout(() => {
      setFileteredProducts((prev) =>
        sortProducts(prev, "id", sortDirections.id),
      );
    }, 500); // Debouncing

    return () => {
      clearTimeout(timeID);
    };
  }, [sortDirections.id]);

  useEffect(() => {
    const timeID = setTimeout(() => {
      setFileteredProducts((prev) =>
        sortProducts(prev, "name", sortDirections.name),
      );
    }, 500); // Debouncing

    return () => {
      clearTimeout(timeID);
    };
  }, [sortDirections.name]);

  useEffect(() => {
    const timeID = setTimeout(() => {
      setFileteredProducts((prev) =>
        sortProducts(prev, "selling_price", sortDirections.selling_price),
      );
    }, 500); // Debouncing

    return () => {
      clearTimeout(timeID);
    };
  }, [sortDirections.selling_price]);

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
            <th>
              <div className="d-flex justify-content-between align-items-center">
                ID{" "}
                <Button variant="light" data-id="id" onClick={handleSortClick}>
                  {sortDirections.id === "desc" ? "↓" : "↑"}
                </Button>
              </div>
            </th>
            <th>
              <div className="d-flex justify-content-between align-items-center">
                Product Name{" "}
                <Button
                  variant="light"
                  data-id="name"
                  onClick={handleSortClick}
                >
                  {sortDirections.name === "desc" ? "↓" : "↑"}
                </Button>
              </div>
            </th>
            <th>
              <div className="d-flex justify-content-between align-items-center">
                Selling Price{" "}
                <Button
                  variant="light"
                  data-id="selling_price"
                  onClick={handleSortClick}
                >
                  {sortDirections.selling_price === "desc" ? "↓" : "↑"}
                </Button>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {fileteredProducts?.map(({ id, name, selling_price }) => (
            <tr key={id}>
              <td className="text-center">
                <Form.Check
                  type="checkbox"
                  data-id={id}
                  onChange={handleCheckboxChange}
                />
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
