import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (email.length > 0 && password.length > 0) {
        const response = await axios.post("/user/login", {
          email,
          password,
        });
        if (response.data.user) {
          localStorage.setItem("user", JSON.stringify(response.data.user));
          alert("user logged successfully");
          return navigate("/");
        } else {
          return alert(response.data);
        }
      } else {
        return alert("Fill Empty Detail..!");
      }
    } catch (err) {
      alert("Error while logging");
      console.log("Error while logging", err);
    }
  };

  return (
    <div className="w-100 mt-4">
      <h1 className="text-secondary fs-3">Login</h1>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column align-items-center gap-3 m-auto"
        style={{ maxWidth: "500px" }}
      >
        <input
          className="form-control"
          type="text"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="form-control"
          type="text"
          placeholder="Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-success" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
