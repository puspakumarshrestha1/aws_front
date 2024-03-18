import React, { useState } from "react";
import "./SignUp.css"; // External CSS file for styling
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/Auth/auth";

const Login = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        { email, password }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error("res.data.message");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Layout title="registration">
        <h2 className="register">Login Here</h2>
        <div className="signup-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={6}
                required
              />
            </div>
            <div className="row">
              <div className="col-lg-6">
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={() => {
                    navigate("/forgetpassword");
                  }}
                >
                  Forget Password
                </button>
              </div>
              <div className="col-lg-6">
                <button type="submit">Login</button>
              </div>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Login;
