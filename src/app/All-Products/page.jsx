import ProductCard from '@/components/ProductCard';
import React from 'react';

const AllProductsPage = async () => {
     const res = await fetch("https://suncart-7eim.vercel.app/data.json");
     const productData = await res.json();
    return (
        <div>
            <h1 className='text-2xl font-bold py-10'>All Available Products</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
                {
                    productData.map((product,index) => <ProductCard key={index} product={product} />)
                }
            </div>
        </div>
    );
};

export default AllProductsPage;