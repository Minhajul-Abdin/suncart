import React from "react";
import Image from "next/image";
import { Card, Chip, Button } from "@heroui/react";
import { FaStar } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";
import Link from "next/link";


const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <Card className="rounded-2xl">
      <div className="relative w-full aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="rounded-2xl object-cover"
        />
        <Chip className="absolute right-2 top-2 text-sm">{product.category}</Chip>
      </div>
      <div>
        <h2 className="text-2xl font-semibold">{product.name}</h2>
      </div>
      <div className="flex justify-between gap-5 items-center py-3">
      <div>
        <p className="flex text-2xl font-bold gap-1 items-center">
          <IoMdPricetags className="text-green-500"/>$
          {product.price}
        </p>
      </div>
        <div>
        <p className="flex text-xl font-bold gap-1 items-center">
          <FaStar className="text-yellow-500" /> {product.rating}
        </p>
      </div>
      </div>

      <Link href={`/All-Products/${product.id}`}><Button className="w-full">Details</Button></Link>
    </Card>
  );
};

export default ProductCard;
