import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const submitdata = async () => {
    let result = await fetch("http://localhost:4500/login", {
      method: "post",
      body: JSON.stringify({ name, password }),
      headers: { "Content-Type": "application/json" },
    });
    result = await result.json();
    localStorage.setItem("user", JSON.stringify(result));
    if (result) {
      navigate("/product");
    }
  };
  return (
    <div className="signin">
      <h1>Signin</h1>
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

      <button type="button" onClick={submitdata}>
        {" "}
        signin
      </button>
    </div>
  );
}

export default Signin;
