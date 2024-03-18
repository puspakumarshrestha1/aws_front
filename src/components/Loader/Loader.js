import React, { useEffect, useState } from "react";
import "./loader.css";
import { useNavigate, useLocation } from "react-router-dom";
import Layout from "../Layout/Layout";

const Loader = ({ path = "login" }) => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount((preValue) => --preValue);
  //     count === 0 && navigate("/login");
  //     return () => clearInterval(interval);
  //   }, 1000);
  // }, [count, navigate]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((preValue) => --preValue);
    }, 1000);
    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });

    return () => clearInterval(interval);
  }, [count, navigate, location, path]);

  return (
    <>
      <Layout>
        <div className="namin-loader">
          <div className="loader">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <h1 className="count-text text-center">
            Redirecting you in {count} second
          </h1>
        </div>
      </Layout>
    </>
  );
};

export default Loader;
