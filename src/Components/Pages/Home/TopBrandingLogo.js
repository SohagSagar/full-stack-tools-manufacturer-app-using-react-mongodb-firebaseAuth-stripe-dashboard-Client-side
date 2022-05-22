import React from 'react';
import { AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai';
import { RiFacebookFill } from 'react-icons/ri';
import { TiSocialGooglePlus } from 'react-icons/ti';

const TopBrandingLogo = () => {
    return (
        <div className='px-24 mx-auto bg-secondary'>
            {/* social-links */}
            <div className='flex justify-between content-center py-3 '>
                <div>
                    <p className='inline text-primary'>Follow Us:</p>
                    <div className='inline text-xl'>
                        <RiFacebookFill className='inline ml-4' />
                        <AiOutlineTwitter className='inline ml-4' />
                        <AiFillYoutube className='inline ml-4' />
                        <TiSocialGooglePlus className='inline ml-4' />
                    </div>
                </div>
                <div>
                    <button class="btn btn-sm text-secondary rounded-full px-5">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default TopBrandingLogo;