import React from "react";
import Image from "next/image";
import Pic1 from "/public/Pic1.png";
import ProductCard from "@/components/ProductCard";
import Pic2 from "/public/Pic2.png";
import Pic3 from "/public/Pic3.png";
import { products } from "@/utils/mock";
import { Product } from "@/utils/types";

const ProductList = () => {
  const productChecks = products.slice(0, 3);
  return (
    <div className="flex justify-evenly mt-16 py-4">
      {productChecks.map(
        (Product) => (
          <ProductCard
            key={Product.id}
            Title={Product.Name}
            Price={Product.Price}
            Category={Product.Category}
            img={Pic1}
          />
        )
        /* <ProductCard Title="Sweater" Price={122} img={Pic1} />
      <ProductCard Title="Trouser" Price={140} img={Pic2} />
      <ProductCard Title="Skert" Price={192} img={Pic3} /> */
      )}
    </div>
  );
};

export default ProductList;
