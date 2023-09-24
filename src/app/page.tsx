import Image from "next/image";
import { Hero } from "@/views/Hero";
import ProductList from "@/views/ProductList";
import ProductCard from "@/components/ProductCard";
import Pic1 from "/public/Pic1.png";

export default function Home() {
  return (
    <div>
      {" "}
      <Hero />
      <ProductList />
    </div>
  );
}
