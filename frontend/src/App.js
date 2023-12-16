import "./App.css";
import Nav from "./Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Footer from "./Footer";
import PrivateComponent from "./PrivateComponent";
import Signin from "./Signin";
import Addproduct from "./Addproduct";
import Product from "./Product";
import Productlist from "./Productlist";
import "./Card.css";
import Updatedata from "./Updatedata";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            {/* <Route path="/" element={<Product />} /> */}
            <Route path="/addproduct" element={<Addproduct />} />
            <Route path="/ewq2" element={<Productlist />} />
            <Route path="/updateproduct/:id" element={<Updatedata />} />
            <Route path="/profile" element={<h1>profile </h1>} />
            <Route path="/logout" element={<h1>logout </h1>} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
