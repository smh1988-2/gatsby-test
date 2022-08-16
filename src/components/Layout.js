import React from "react";
import Footer from "./global/Footer";
import Header from "./global/Header";
import "../styles/global.css";

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
