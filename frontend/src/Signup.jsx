import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./App.css";
function Signup() {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const submitdata = async () => {
    let result = await fetch("http://localhost:4500/register", {
      method: "post",
      body: JSON.stringify({ name, password, email }),
      headers: { "Content-Type": "application/json" },
    });
    result = await result.json();
    localStorage.setItem("user", JSON.stringify(result));
    if (result) {
      navigate("/product");
    }
  };
  return (
    <div className="signup">
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(event) => setname(event.target.value)}
      />
      <input
        type="text"
        placeholder="Enter password"
        value={password}
        onChange={(event) => setpassword(event.target.value)}
      />
      <input
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={(event) => setemail(event.target.value)}
      />
      <button type="button" onClick={submitdata}>
        sign up
      </button>
    </div>
  );
}

export default Signup;
