import React from 'react';
import tire from '../../../resources/banner-img/tire_img.png'

const Banner = () => {
    return (
        <div className='px-24'>
            <div className='flex items-center'>
                <div className='flex-1'>
                    <h1 className='uppercase text-5xl'>Find Wheels & Tires</h1>
                    <h2 className='uppercase text-2xl'>For All Vehicles Types</h2>
                    <button className="btn drop-shadow-xl hover:bg-primary hover:text-secondary btn-sm bg-secondary border-0 mt-5 text-primary rounded-full px-5 h-10">Purchase Now</button>
                </div>
                <div className='flex-1'>
                    <img  src={tire} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;