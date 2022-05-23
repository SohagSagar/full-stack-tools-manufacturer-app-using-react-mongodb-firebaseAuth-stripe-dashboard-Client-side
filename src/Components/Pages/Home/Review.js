import React from 'react';
import review from '../../../resources/review1.jpg';
import { BsChatSquareQuote } from 'react-icons/bs';

const Review = () => {
    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
                <div class="avatar">
                    <div class="w-24 mask mask-hexagon">
                        <img src={review} alt="" />
                    </div>
                </div>
            </figure>
            <div class="card-body">
                <h2 class="font-semibold uppercase text-center leading-3">John Kabir</h2>
                <p className=' text-[12px] leading-3 text-center font-semibold'>Manager | XYZ Company</p>
                <p className=' text-[12px] leading-3 text-center font-semibold'>Rating: 4/5</p>

                <div className='text-center mx-auto text-xl mt-4 text-secondary'>
                    <BsChatSquareQuote />
                </div>
                <p className='text-[14px] text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere iste illo eligendi hic sapiente molestias voluptas ullam repellat provident esse.</p>

            </div>
        </div>
    );
};

export default Review;