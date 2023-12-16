import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Updatedata() {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [company, setcompany] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    //console.log(params);
    getdata();
  }, []);

  const getdata = async () => {
    let result = await fetch(`http://localhost:4500/products/${params.id}`);
    result = await result.json();
    setname(result.name);
    setprice(result.price);
    setcategory(result.category);
    setcompany(result.company);
  };

  useEffect(() => {
    getdata();
  }, []);

  const submitdata = async () => {
    let result = await fetch(`http://localhost:4500/products/${params.id}`, {
      method: "Put",
      body: JSON.stringify({ name, price, category, company }),
      headers: { "Content-type": "application/json" },
    });
    result = await (await result).json;
    if (result) {
      navigate("/");
    }
  };

  return (
    <div className="signup">
      <h1>Update data</h1>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(event) => setname(event.target.value)}
      />

      <input
        type="text"
        placeholder="Enter price"
        value={price}
        onChange={(event) => setprice(event.target.value)}
      />

      <input
        type="text"
        placeholder="Enter category"
        value={category}
        onChange={(event) => setcategory(event.target.value)}
      />

      <input
        type="text"
        placeholder="Enter company"
        value={company}
        onChange={(event) => setcompany(event.target.value)}
      />

      <button type="button" onClick={submitdata}>
        Update
      </button>
    </div>
  );
}

export default Updatedata;
