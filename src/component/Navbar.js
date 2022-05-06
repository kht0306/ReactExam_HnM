import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const authenticate = useSelector((state) => state.auth.authenticate);
  const dispatch = useDispatch();
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  const navigate = useNavigate();
  const goToLogin = (authenticate) => {
    if (authenticate === true) {
      //setAuthenticate(false);
      dispatch({ type: "LOGIN_OUT" });
      navigate("/login");
    } else {
      navigate("/login");
    }
  };

  const goToHome = () => {
    navigate("/");
  };

  const search = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div>
      <div>
        <div className="login-button" onClick={() => goToLogin(authenticate)}>
          <FontAwesomeIcon icon={faUser} />
          <div>{authenticate === true ? "로그아웃" : "로그인"}</div>
        </div>
      </div>
      <div className="nav-section" onClick={goToHome}>
        <img
          width={"100px"}
          src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg"
          alt=""
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
        <div className="upper-search">
          <FontAwesomeIcon icon={faSearch} />
          <input
            className="search-box"
            type="text"
            onKeyPress={(e) => search(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
