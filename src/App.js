import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Login from "./page/Login";
import ProductAll from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";

//1. 전체 상품, 로그인, 상품상세페이지 작성
//1-1 네비게이션 바 만들기
//2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다
//4. 상품디테일을 눌렀으나, 로그인이 안됬을 경우 로그인페이지가 먼저 나온다
//5. 로그인이 되어 있을경우 상품 디테일 페이지를 볼 수 있다.,
//6. 로그아웃 버튼을 누를경우 로그아웃 후 상품디테일페이지를 볼수 없다.
//7. 로그인을 하면 로그인이 보이고, 로그아웃  하면 로그아웃이 보인다.
//8. 상품을 검색할 수 있다.
function App() {
  const authenticate = useSelector((state) => state.auth.authenticate);
  return (
    <>
      <Navbar authenticate={authenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login authenticate={authenticate} />} />
        <Route path="/product/:id" element={<PrivateRoute />} />
      </Routes>
    </>
  );
}

export default App;
