import React from 'react';
import OfferCard from './OfferCard';

const SpecialOffer = () => {
    return (
        <div className='lg:px-24 mt-20'>
            <div className=' '>
                <h1 className='text-3xl'>Special Offer</h1>
                <hr className='h-5' />
            </div>

            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-5 justify-items-center'>
                <OfferCard/>
                <OfferCard/>
                <OfferCard/>
            </div>
        </div>
    );
};

export default SpecialOffer;