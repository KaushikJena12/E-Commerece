require("./db/config");
const cors = require("cors");
const User = require("./db/User");
const express = require("express");
const mongoose = require("mongoose");
const product = require("./db/product");
const app = express();
app.use(express.json());
app.use(cors());
app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  res.send(result);
});

app.post("/addproduct", async (req, res) => {
  let productadd = new product(req.body);
  let result = await productadd.save();
  res.send(result);
});

app.delete("/products/:id", async (req, res) => {
  const result = await product.deleteOne({ _id: req.params.id });
  console.log(result);
  if (result) res.send(result);
  else res.send({ result: "user not found" });
});

app.post("/addproduct", async (req, res) => {
  let productadd = await product.find();
  if (product.length > 0) {
    res.send(product);
  } else {
    res.send({ result: "user not found" });
  }
});

app.get("/products", async (req, res) => {
  let products = await product.find();
  if (products.length > 0) {
    res.send(products);
  } else {
    res.send({ result: "no product found" });
  }
});

app.get("/products/:id", async (req, res) => {
  let result = await product.findOne({ _id: req.params.id });
  console.log(result);
  if (result) res.send(result);
  else res.send({ result: "user not found" });
});

app.post("/login", async (req, res) => {
  if (req.body.name && req.body.password) {
    let user = await User.findOne(req.body).select("-password");
    if (user) res.send(user);
    else res.send("user not found");
  } else res.send("user not found");
});

app.put("/products/:id", async (req, res) => {
  let result = await product.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(result);
});

app.get("/search/:key", async (req, res) => {
  let result = await product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { companyname: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
      { price: { $regex: req.params.key } },
    ],
  });
  res.send(result);
});
app.listen(4500);
