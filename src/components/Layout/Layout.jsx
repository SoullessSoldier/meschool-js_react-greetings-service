import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const wrapper = {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
};

const button = {
    display: 'block',
    margin: '20px auto',
}

const Layout = () => {
    const {text: {idText}, image: {idImage}} = useSelector(state => state)
  return (
    <div style={wrapper}>
      <Header />
      <Outlet />
      {idText && idImage && (
        <Link style={button} to={`singleCard/${idText}/${idImage}`}>
            Поделиться открыткой
        </Link>
      )}
      <Footer />
    </div>
  );
};

export default Layout;
