import React from "react";
import ProductCard from "../ProductCard";

const TopProducts = async () => {
  const res = await fetch("https://suncart-7eim.vercel.app/data.json");
  const productData = await res.json();
  const showCaseProducts = productData.slice(0, 3);

  console.log(productData);
  console.log(showCaseProducts);

  return (
    <div className="container mx-auto">
      <h1 className="py-10 text-3xl font-bold">Products</h1>

      <div className="grid grid-cols-3 gap-3">
        {showCaseProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
