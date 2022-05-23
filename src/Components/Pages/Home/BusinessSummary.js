import React from 'react';
import SectionHeading from '../../Shared/SectionHeading';
import { BsDashLg } from 'react-icons/bs';

const BusinessSummary = () => {

    return (
        <div className='bg-secondary py-10'>
            <div className='lg:px-24'>

                <div className='uppercase text-center text-primary text-3xl font-semibold'>
                    <div className=' flex items-center justify-center'>
                        <BsDashLg />
                        <h1 className=''>Millions Business Trust Us</h1>
                        <BsDashLg />
                    </div>
                </div>
                <p className='text-center text-xl text-accent'>No Compromize with Product Quality</p>

                <div class="stats stats-vertical lg:stats-horizontal shadow grid h-36 items-center justify-items-center my-5">

                    <div class="stat text-center">
                        <div class="stat-title">Companies</div>
                        <div class="stat-value">34+</div>
                    </div>

                    <div class="stat text-center">
                        <div class="stat-title">Delivery</div>
                        <div class="stat-value">4,200k+</div>
                    </div>

                    <div class="stat text-center">
                        <div class="stat-title">Happy Customer</div>
                        <div class="stat-value">4800k+</div>

                    </div>

                    <div class="stat text-center">
                        <div class="stat-title">Feedback</div>
                        <div class="stat-value">3600k+</div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;