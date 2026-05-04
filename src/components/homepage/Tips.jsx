import React from 'react';

const Tips = () => {
    return (
        <div className=''>
            <h2 className='text-3xl font-bold pb-10'>Summer Tips</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                
                <div className='p-10 bg-white rounded-2xl shadow'>
                    <h2 className='text-xl text-[#131D4F] py-3'>Stay Hydrated Consistently</h2>
                    <p className=' text-[#333333] py-1'>Drink water regularly to prevent dehydration and fatigue.</p>
                    <p className=' text-muted'>-World Health Organization</p>
                </div>
        
                <div className='p-10 bg-white rounded-2xl shadow'>
                    <h2 className='text-xl text-[#131D4F]  py-3'>Protect Your Skin</h2>
                    <p className=' text-[#333333] py-1'>Use sunscreen (SPF 30 or higher) and reapply every few hours.</p>
                    <p className=' text-muted'>-American Academy of Dermatology</p>
                </div>
        
                <div className='p-10 bg-white rounded-2xl shadow '>
                    <h2 className='text-xl text-[#131D4F] py-3'>Avoid Peak Heat Hours</h2>
                    <p className=' text-[#333333] py-1'>Limit outdoor activities between 11 AM and 4 PM to reduce heat-related risks</p>
                    <p className=' text-muted'>-Centers for Disease Control and Prevention</p>
                </div>
            
            </div>
        </div>
    );
};

export default Tips;