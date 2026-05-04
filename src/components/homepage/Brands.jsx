import React from 'react';

const Brands = () => {
    return (
        <div className=''>
            <h2 className='text-3xl font-bold pb-10 pt-25'>Top Brands</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center'>
                
                <div className='p-10 bg-[#131D4F] rounded-2xl shadow'>
                    <h2 className="text-xl text-white p-5">SummerGlow Co.</h2>
                </div>
                <div className='p-10 bg-[#131D4F] rounded-2xl shadow'>
                    <h2 className="text-xl text-white p-5">TropicNest</h2>
                </div>
                <div className='p-10 bg-[#131D4F] rounded-2xl shadow'>
                    <h2 className="text-xl text-white p-5">Solara Living</h2>
                </div>
                <div className='p-10 bg-[#131D4F] rounded-2xl shadow'>
                    <h2 className="text-xl text-white p-5">SunVibe Essentials</h2>
                </div>
            </div>
        </div>
    );
};

export default Brands;