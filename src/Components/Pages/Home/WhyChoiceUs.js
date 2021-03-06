import React from 'react';
import carRim from '../../../resources/offer-imgs/rim.png'
import SectionHeading from '../../Shared/SectionHeading';

const WhyChoiceUs = () => {
    return (
        <div className='lg:px-24 mt-20'>
            <SectionHeading>Why Choice Us</SectionHeading>

            <div className='flex justify-between sm:justify-center items-center my-12 flex-col sm:flex-row'>

                <div className='flex-1'>
                    <div className='flex items-start mb-24'>
                        <div>
                            <h1 className='text-5xl text-secondary'>01</h1>
                        </div>
                        <div className='text-primary ml-5'>
                            <h3 className=' font-bold text-md'>We Are Professional</h3>
                            <p className='text-accent text-sm'>With over one decade of experience, Wheel Max is one of the renowned alloy Rim & Tyre shops in USA and also supply product in all over the world </p>
                        </div>
                    </div>

                    <div className='flex items-start '>
                        <div>
                            <h1 className='text-5xl text-secondary'>02</h1>
                        </div>
                        <div className='text-primary ml-5'>
                            <h3 className=' font-bold text-md'>The Manufacturer Company </h3>
                            <p className='text-accent text-sm'> Wheel Max is a shop that was established in 2005 in the Kuril Bishaw Road, Dhaka & has been providing an unrivalled product quality </p>
                        </div>
                    </div>
                </div>

                <div className='flex-1 lg:py-1 sm:py-20 hover:drop-shadow-2xl ease-in-out'>
                    <img className='w-[400px] sm:w-[600px] ' src={carRim} alt="" />
                </div>

                <div className='flex-1'>
                    <div className='flex items-start mb-24'>
                        <div>
                            <h1 className='text-5xl text-secondary'>03</h1>
                        </div>
                        <div className='text-primary ml-5'>
                            <h3 className=' font-bold text-md'>Good customer service</h3>
                            <p className='text-accent text-sm'> We ensure our customers are 100% satisfaction every single time. We take customers to feedback very seriously </p>
                        </div>
                    </div>

                    <div className='flex items-start'>
                        <div>
                            <h1 className='text-5xl text-secondary'>04</h1>
                        </div>
                        <div className='text-primary ml-5'>
                            <h3 className=' font-bold text-md'>Best quality product</h3>
                            <p className='text-accent text-sm'> Wheel Max sell a diverse range of high-quality alloys from across the Country. Not only do we sell outstanding </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default WhyChoiceUs;