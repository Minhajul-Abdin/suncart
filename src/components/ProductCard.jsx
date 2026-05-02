import React from "react";
import Image from "next/image";
import { Card } from "@heroui/react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <Card className="rounded-2xl">
      <div>
        <Image
          src={product.imageUrl}
          height={200}
          width={200}
          alt={product.title}
        />
      </div>
      <div>
        <h2>{product.title}</h2>
      </div>
      <div>
        <p>
          <FaStar /> {product.likes}
        </p>
      </div>
    </Card>
  );
};

export default ProductCard;
