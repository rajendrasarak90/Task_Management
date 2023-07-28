import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (name.length > 0 && email.length > 0 && password.length > 0) {
        const response = await axios.post("/user/register", {
          name,
          email,
          password,
        });
        if (response.data.user) {
          setName("");
          setEmail("");
          setPassword("");
          alert("user registered successfully");
          return navigate("/login");
        } else {
          alert(response.data);
        }
      } else {
        return alert("Fill empty details..!");
      }
    } catch (err) {
      alert("Error while registering");
      console.log("Error while registering", err);
    }
  };

  return (
    <div className="w-100 mt-5">
      <h1 className="text-secondary fs-3">Register</h1>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column align-items-center gap-3 m-auto"
        style={{ maxWidth: "500px" }}
      >
        <input
          className="form-control"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
