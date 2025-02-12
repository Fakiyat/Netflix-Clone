import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import ImageGallery from "./components/ImageGallery";
import "./index.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Banner />
      <ImageGallery />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
