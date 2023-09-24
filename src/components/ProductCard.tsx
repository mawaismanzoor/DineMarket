import React from "react";
import Image, { StaticImageData } from "next/image";
import Pic1 from "/public/Pic1.png";
import Pic2 from "/public/Pic2.png";
import Pic3 from "/public/Pic3.png";

const ProductCard = (props: {
  Title: string;
  Price: number;
  Category: string;
  img: StaticImageData;
}) => {
  return (
    <div>
      <Image src={props.img} alt="Cat" />
      <div className=" text-lg font-bold">{props.Title}</div>
      <div className="text-lg font-bold">{props.Price} $</div>
      <div className="text-lg font-bold">Category {props.Category} </div>
    </div>
  );
};

export default ProductCard;
