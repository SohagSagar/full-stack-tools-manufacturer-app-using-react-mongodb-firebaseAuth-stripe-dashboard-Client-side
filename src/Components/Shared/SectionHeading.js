import React from 'react';
import { BsDashLg } from 'react-icons/bs';

const SectionHeading = ({ children }) => {
    return (
        <div className='uppercase text-center text-primary text-3xl font-semibold'>
            <div className=' flex items-center justify-center'>
                <BsDashLg />
                <h1 className=''> {children}  </h1>
                <BsDashLg />
            </div>
            <BsDashLg className='mx-auto text-secondary' />
        </div>
    );
};

export default SectionHeading;