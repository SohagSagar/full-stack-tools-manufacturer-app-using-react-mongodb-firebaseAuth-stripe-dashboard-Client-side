import React from 'react';
import PartsCard from './PartsCard';

const ManufacturedParts = () => {
    return (
        <div className='lg:px-24'>
            <div className=' '>
                <h1 className='text-3xl'>Our Manufactured Parts</h1>
                <hr className='h-5  ' />
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 justify-items-center'>
                <PartsCard />
                <PartsCard />
                <PartsCard />
                <PartsCard />
                <PartsCard />

            </div>
        </div>
    );
};

export default ManufacturedParts;