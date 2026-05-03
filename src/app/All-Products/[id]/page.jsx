import Image from 'next/image';
import React from 'react';

const ProductsDetails = async ({params}) => {
    const {id} = await params;
    const res = await fetch("https://suncart-7eim.vercel.app/data.json");
    const productData = await res.json();
    const product = productData.find(p => p.id == id)
    return (
        <div className='p-10 rounded-2xl shadow my-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className="relative w-full aspect-square">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="rounded-2xl object-cover"
                            />
                </div>
                <div>
                    <h2 className='text-3xl font-semibold'>{product.name}</h2>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;