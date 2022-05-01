import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../component/ProductCard";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  useEffect(() => {
    getProduct();
  }, [query]);

  const getProduct = () => {
    let searchQuery = query.get("q") || "";
    let orgUrl = `http://localhost:5000/products?q=${searchQuery}`;
    axios({
      url: orgUrl,
      data: {},
    })
      .then((res) => {
        setProductList(res.data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
