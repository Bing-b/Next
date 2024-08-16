"use client";
import Navbar from "../navbar";
import ProductCard from "./product";
import "./bg.css";
export default function HomeBanner() {
  return (
    <section className="jumbotronSection">
      <Navbar />
      <ProductCard />
    </section>
  );
}
