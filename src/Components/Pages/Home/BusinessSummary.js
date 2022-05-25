import React from 'react';
import { BsDashLg } from 'react-icons/bs';
import { VscFeedback } from 'react-icons/vsc';
import { BsGraphUp } from 'react-icons/bs';
import { GrDeliver,GrGroup } from 'react-icons/gr';

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

                <div className="stats stats-vertical lg:stats-horizontal shadow grid h-36 items-center justify-items-center my-5">

                    <div className="stat text-center">
                        <div className="stat-title">Delivery</div>
                        <GrDeliver className='text-4xl mx-auto mt-2'/>
                        <div className="stat-value">34k+</div>
                    </div>

                    <div className="stat text-center">
                        <div className="stat-title">Yearly Revenue</div>
                        <BsGraphUp className='text-4xl mx-auto mt-2'/>
                        <div className="stat-value">4,200k+</div>
                    </div>

                    <div className="stat text-center">
                        <div className="stat-title">Happy Customer</div>
                        <GrGroup className='text-4xl mx-auto mt-2'/>
                        <div className="stat-value">4800k+</div>

                    </div>

                    <div className="stat text-center">
                        <div className="stat-title">Feedback</div>
                        <VscFeedback className='text-4xl mx-auto mt-2'/>
                        <div className="stat-value">3.6k+</div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;