import { useState } from "react";
import "./App.css";
import Analytics from "./assets/components/Analytics";
import Cards from "./assets/components/Cards";
import Footer from "./assets/components/Footer";
import Hero from "./assets/components/Hero";
import Navbar from "./assets/components/Navbar";
import Newsletter from "./assets/components/Newsletter";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
