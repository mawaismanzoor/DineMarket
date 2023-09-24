import React from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/utils/types";
import ProductList from "@/views/ProductList";
import { StaticImageData } from "next/image";
import { products } from "@/utils/mock";
import Pic1 from "/public/Pic1.png";

const AllProducts = () => {
  return (
    <div className="flex justify-evenly py-8 mt-6 flex-wrap">
      {products.map((Product) => (
        <ProductCard
          key={Product.id}
          Title={Product.Name}
          Price={Product.Price}
          Category={Product.Category}
          img={Pic1}
        />
      ))}
    </div>
  );
};

export default AllProducts;
