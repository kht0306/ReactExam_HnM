import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";

const ProductDetail = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const product = useSelector((state) => state.product);
  const { img, title, price, choice, size } = product;
  useEffect(() => {
    dispatch(productAction.getProductDetail(id));
  }, [id, dispatch]);

  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={img} alt="" />
        </Col>
        <Col>
          <div>{title}</div>
          <div>{price}</div>
          <div>{choice === true ? "Conscious Choice" : ""}</div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {size.map((size, index) => (
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
