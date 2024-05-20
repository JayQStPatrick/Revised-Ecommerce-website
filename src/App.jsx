import React from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
    </div>
  );
};

export default App;
