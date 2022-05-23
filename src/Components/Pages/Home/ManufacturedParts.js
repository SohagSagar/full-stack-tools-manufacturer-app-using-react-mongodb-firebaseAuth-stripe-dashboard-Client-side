import React from 'react';
import SectionHeading from '../../Shared/SectionHeading';
import PartsCard from './PartsCard';

const ManufacturedParts = () => {
    return (
        <div className='lg:px-24'>
            <SectionHeading>Manufactured Items</SectionHeading>
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