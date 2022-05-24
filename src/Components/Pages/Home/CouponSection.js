import React from 'react';
import { AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai';
import { RiFacebookFill } from 'react-icons/ri';
import { TiSocialGooglePlus } from 'react-icons/ti';

const CouponSection = () => {
    return (
        <div className='bg-secondary'>
            <div className='lg:px-24 lg:py-12 flex lg:justify-between items-center sm:flex-row flex-col sm:justify-center'>
                <div className='uppercase'>
                    <h1 className='uppercase text-2xl'>We Have <span className='font-bold'>Recommendations</span> for You</h1>
                    <p className='text-[12px] font-semibold'>Take 5% off when you spend $500 or more with code <span className='font-bold'>americanAxle</span></p>
                </div>

                <div>
                    <button className="btn drop-shadow-xl bg-primary hover:text-secondary btn-sm border-0 mt-2 text-white rounded-full px-5 h-10">Discover Now</button>
                </div>

                <div className='inline text-5xl'>
                    <RiFacebookFill className='inline rounded-[50%] border border-accent p-1 hover:text-secondary hover:bg-primary transition cursor-pointer' />
                    <AiOutlineTwitter className='inline ml-4 rounded-[50%] border border-accent p-1 hover:text-secondary hover:bg-primary transition cursor-pointer' />
                    <AiFillYoutube className='inline ml-4 rounded-[50%] border border-accent p-1 hover:text-secondary hover:bg-primary transition cursor-pointer' />
                    <TiSocialGooglePlus className='inline ml-4 rounded-[50%] border border-accent p-1 hover:text-secondary hover:bg-primary transition cursor-pointer' />
                </div>
            </div>
        </div>
    );
};

export default CouponSection;