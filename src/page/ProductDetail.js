import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios({
      url: `https://my-json-server.typicode.com/kht0306/ReactExam_HnM/products/${id}`,
      data: {},
    })
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, [id]);

  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} alt="" />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
          <div>{product?.choice === true ? "Conscious Choice" : ""}</div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {product?.size.map((size, index) => (
                  <Dropdown.Item key={index} href="">
                    {size}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div style={{ paddingTop: "10px" }}>
            <Button style={{ width: "100%" }} variant="dark">
              추가
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
