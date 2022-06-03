import React from 'react';
import review from '../../../resources/review1.jpg';
import { BsChatSquareQuote } from 'react-icons/bs';
import demoUserImg from '../../../resources/demo-user.jpg'

const Review = ({review}) => {
    const {companyName,designation,rating,reviewDescription,customerName,image}= review;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl pt-4">
            <figure>

                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        {
                            image ? <img src={image} alt="" /> :
                            <img src={demoUserImg} alt="" />
                        }
                        
                    </div>
                </div>
            </figure>
            <div className="card-body">
                <h2 className="font-semibold uppercase text-center leading-3">{customerName}</h2>
                <p className=' text-[12px] leading-3 text-center font-semibold'>{designation} | {companyName}</p>
                <p className=' text-[12px] leading-3 text-center font-semibold'>Rating: {rating}/5</p>

                <div className='text-center mx-auto text-xl mt-4 text-secondary'>
                    <BsChatSquareQuote />
                </div>
                <p className='text-[14px] text-center'>{reviewDescription}</p>

            </div>
        </div>
    );
};

export default Review;