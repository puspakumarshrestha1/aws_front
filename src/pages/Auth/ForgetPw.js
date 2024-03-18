import React, { useState } from "react";
import "./SignUp.css"; // External CSS file for styling
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Layout from "../../components/Layout/Layout";

const ForgetPw = () => {
  const [email, setEmail] = useState("");
  const [answer, setAnswer] = useState();
  const [newpassword, setNewPassword] = useState("");

  const navigate = useNavigate();
  const handleChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/forget-password`,
        { email, newpassword, answer }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message); // <- Corrected: Remove quotes around res.data.message
      }
    } catch (error) {
      console.log("Axios error:", error); // Log the error to the console for debugging
      toast.error("Something went wrong with the request");
    }
  };

  return (
    <>
      <Layout title="forget-pw">
        <h2 className="register">Reset Password</h2>
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
              <label htmlFor="answer">Your Answer</label>{" "}
              {/* <- Corrected: Use "answer" as id */}
              <input
                type="password"
                id="answer"
                name="answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                minLength={6}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="newpassword">New Password</label>{" "}
              {/* <- Corrected: Use "newpassword" as id */}
              <input
                type="password"
                id="newpassword"
                name="newpassword"
                value={newpassword} // Ensure this value is bound to the newpassword state
                onChange={handleChange} // Ensure that the handleChange function is called on change
                minLength={6}
                required
              />
            </div>

            <div className="row">
              <div className="col-lg-6">
                <button type="submit">Reset Password</button>{" "}
                {/* <- Corrected: Use "Reset Password" as button label */}
              </div>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default ForgetPw;
