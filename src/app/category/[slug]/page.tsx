import { products } from "@/utils/mock";
import ProductCard from "@/components/ProductCard";
import AllProducts from "@/app/products/page";
import Pic1 from "/public/Pic1.png";
import { Product } from "@/utils/types";

const getProductByCategaory = (Category: string) => {
  return products.filter((Product) => Product.Category === Category);
};

export default function Page({ params }: { params: { slug: string } }) {
  const result = getProductByCategaory(params.slug);

  return (
    <div className="flex justify-evenly py-8 mt-6 flex-wrap">
      {result.length > 0 ? (
        result.map((Product) => (
          <ProductCard
            Title={Product.Name}
            key={Product.id}
            Price={Product.Price}
            Category={Product.Category}
            img={Pic1}
          />
        ))
      ) : (
        <p> No Product Found</p>
      )}
    </div>
  );
}
