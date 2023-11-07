import Image from "next/image";
import { Hero } from "@/views/Hero";
import ProductList from "@/views/ProductList";
import { Image as IImage } from "sanity";
import {client} from "@/lib/sanityClient";

 const getProductData = async()=>{
 const res = await client.fetch('*');
 return res;
 }


// interface IProduct{
//   title:string;
//   _id:string;
//   description:string;
//   image:IImage;
//   price: number;
//   category:{
//     name:string;
//   }
// }

export default function Home() {
  return (
    <div>
      
      <Hero />
      <ProductList />
    </div>
  );
}
