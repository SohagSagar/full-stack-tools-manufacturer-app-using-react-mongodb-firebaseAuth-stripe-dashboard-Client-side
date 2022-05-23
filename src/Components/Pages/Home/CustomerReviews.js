import React from 'react';
import SectionHeading from '../../Shared/SectionHeading';
import Review from './Review';

const CustomerReviews = () => {
    return (
        <div className='lg:px-24 my-10'>
            <SectionHeading>What clients says</SectionHeading>

            <div className='grid lg:grid-cols-3 sm:grid-cols-1 justify-items-center gap-5 my-8'>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
            </div>
        </div>
    );
};

export default CustomerReviews;