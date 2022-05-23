import React from 'react';
import SectionHeading from '../../Shared/SectionHeading';
import OfferCard from './OfferCard';

const SpecialOffer = () => {
    return (
        <div className='lg:px-24 mt-20'>
            <SectionHeading className="text-secondary">Special Offer</SectionHeading><hr />

            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-5 justify-items-center'>
                <OfferCard/>
                <OfferCard/>
                <OfferCard/>
            </div>
        </div>
    );
};

export default SpecialOffer;