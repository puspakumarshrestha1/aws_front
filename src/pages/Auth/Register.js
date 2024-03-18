import React, { useState } from "react";
import "./SignUp.css"; // External CSS file for styling
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Layout from "../../components/Layout/Layout";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [answer, setAnswer] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        { name, email, password, phone, address, answer }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
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
        <h2 className="register">Register Here</h2>
        <div className="signup-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                pattern="[A-Za-z ]*"
                type="text"
                id="fullName"
                name="fullName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
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
              <label htmlFor="Phone Number">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                minLength={6}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="Address">Address</label>
              <input
                type="text"
                pattern="[A-Za-z ]*"
                id="address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                minLength={6}
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
            <div className="form-group">
              <label htmlFor="Address">
                Your Secret Answer to Reset Password
              </label>
              <input
                type="text"
                id="YourAnswer"
                name="Your Answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                minLength={6}
                placeholder="Your HomeTown Name"
                required
              />
            </div>

            <button type="submit">Sign Up</button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Register;
