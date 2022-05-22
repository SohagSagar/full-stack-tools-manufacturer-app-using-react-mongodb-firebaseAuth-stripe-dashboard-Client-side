import React from 'react';
import { FaShippingFast } from 'react-icons/fa';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { RiSecurePaymentLine } from 'react-icons/ri';

const ShippingBannerInfo = () => {
    return (
        <div className='sm:px-6 lg:px-24 mt-24 mb-24'>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 py-8 border rounded-md'>

                {/* free shipping */}
                <div className='flex items-center w-[300px] justify-around lg:py-4 lg:border-r-[1px]'>
                    <FaShippingFast className='text-4xl text-secondary'/>
                    <div>
                        <h1 className='font-bold text-lg'>Free Shipping</h1>
                        <p className='leading-4'>Free shipping on all US order</p>
                    </div>
                </div>

                <div className='flex flex-row items-center w-[300px] justify-around lg:py-4 lg:border-r-[1px]'>
                    <MdOutlineSupportAgent className='text-4xl text-secondary'/>
                    <div>
                        <h1 className='font-bold text-lg'>Support 24/7</h1>
                        <p className='leading-4'>Contact us 24 hours a day</p>
                    </div>
                </div>

                <div className='flex items-center w-[300px] justify-around lg:py-4 lg:border-r-[1px]'>
                    <HiOutlineCurrencyDollar className='text-4xl text-secondary'/>
                    <div>
                        <h1 className='font-bold text-lg'>100% Money Back</h1>
                        <p className='leading-4'>You have 30 days to Return</p>
                    </div>
                </div>

                <div className='flex items-center w-[300px] justify-around '>
                    <RiSecurePaymentLine className='text-4xl text-secondary'/>
                    <div>
                        <h1 className='font-bold text-lg'>Payment Secure</h1>
                        <p className='leading-4'>We ensure secure payment</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShippingBannerInfo;