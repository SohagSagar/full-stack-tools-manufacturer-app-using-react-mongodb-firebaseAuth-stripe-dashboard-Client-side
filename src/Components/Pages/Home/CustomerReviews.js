import React, { useState } from 'react';
import SectionHeading from '../../Shared/SectionHeading';
import Review from './Review';

const CustomerReviews = () => {
    const [reviews,setReviews]=useState([]);
    fetch('https://vast-forest-24784.herokuapp.com/customer-reviews',{
        method:'GET',
        headers:{
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res=>res.json())
    .then(data=>setReviews(data.reverse()));

    return (
        <div className='lg:px-24 my-10'>
            <SectionHeading>What clients says </SectionHeading>

            <div className='grid lg:grid-cols-3 sm:grid-cols-1 justify-items-center gap-5 my-8'>
                {
                    reviews.slice(0,3).map(review=><Review key={review._id} review={review} />)
                }
            </div>
        </div>
    );
};

export default CustomerReviews;