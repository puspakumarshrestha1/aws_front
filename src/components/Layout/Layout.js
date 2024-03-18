import React from "react";
import Header from "./Header";
import toast, { Toaster } from "react-hot-toast";
import Wrapper from "../../pages/Footer/Wrapper";
import Footer from "../MainFooter/Footer";
import "../../style/Homepage.css";
import "../../style/CategoryProductStyles.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <Toaster />
        {children}
      </main>
      {/* <Footer /> */}
      {/* <Wrapper />
      <Footer /> */}

      <Footer />
    </div>
  );
};

export default Layout;
