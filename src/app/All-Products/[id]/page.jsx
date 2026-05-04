import { Button, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { IoMdPricetags } from 'react-icons/io';

const ProductsDetails = async ({params}) => {
    const {id} = await params;
    const res = await fetch("https://suncart-7eim.vercel.app/data.json");
    const productData = await res.json();
    const product = productData.find(p => p.id == id)
    return (
        <div className='p-10 rounded-2xl bg-white shadow my-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
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
                    <h2 className='text-4xl font-semibold py-5'>{product.name}</h2>
                    <p className=' text-muted'>{product.description}</p>
                    
                <div className="flex gap-15 items-center py-10">
                      <div>
                        <p className="flex text-2xl font-bold gap-1 items-center">
                          <IoMdPricetags className="text-green-500"/>$
                          {product.price}
                        </p>
                      </div>
                      <Separator orientation='vertical'/>
                        <div>
                        <p className="flex text-xl font-bold gap-1 items-center">
                          <FaStar className="text-yellow-500" /> {product.rating}
                        </p>
                      </div>
                      </div>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                        <div className='p-5 text-white bg-[#131D4F] text-white rounded-2xl'>
                           <p className='pb-4'>Brand Name</p>
                           <h2 className='text-xl font-bold'>{product.brand}</h2>
                        </div>
                        <div className='p-5 text-white bg-[#131D4F] text-white rounded-2xl'>
                           <p className='pb-4'>In Stocks</p>
                           <h2 className='text-xl font-bold'>{product.stock}</h2>
                        </div>
                      </div>
                      <Button className="btn my-10 w-full bg-white border-[#131D4F] text-sm text-[#131D4F] font-bold rounded-xl">
                      <FaCartShopping /> Buy Now</Button>
                </div>
                      
            </div>
        </div>
    );
};

export default ProductsDetails;