import Image from "next/image";
import logo from "/public/logo.png";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";

export const Header = () => {
  return (
    <div className=" flex justify-between items-center py-10 px-20">
      <Link href="/">
        <Image src={"/logo.png"} width={140} height={65} alt={"Dino Market"} />
      </Link>
      <ul className="flex gap-x-6 font-bold">
        <li className="text-lg">
          <Link href="/category/Female">Female</Link>
        </li>
        <li className="text-lg">
          <Link href="/category/Male">Male</Link>
        </li>
        <li className="text-lg">
          <Link href="/category/Kids">Kids</Link>
        </li>
        <li className="text-lg">
          <Link href="/category/sports">Sports</Link>
        </li>
        <li className="text-lg">
          <Link href="/products">All Products</Link>
        </li>
      </ul>
      <div>
        <Input type="email" placeholder="Search" />
      </div>
      <div className="h-10 w-10 bg-slate-300 rounded-full flex justify-center items-center">
        <ShoppingCart className="h-6 w-6" />
      </div>
    </div>
  );
};
