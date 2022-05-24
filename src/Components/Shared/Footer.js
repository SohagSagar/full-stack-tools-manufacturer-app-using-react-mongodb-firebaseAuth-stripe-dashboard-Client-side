import React from 'react';
import googlePlayStore from '../../resources/googlePlayStore.png';
import applePlayStore from '../../resources/applePlayStore.png';
import visaCard from '../../resources/paymentSupport/visacard.png';
import paypal from '../../resources/paymentSupport/paypal.png';
import masterCard from '../../resources/paymentSupport/masterCard.png';
import americanExpress from '../../resources/paymentSupport/americanExpress.png';

const Footer = () => {
    return (
        <section className='lg:px-24 lg:py-6'>
            <footer className="footer text-base-content flex justify-between flex-wrap">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Download Our App</span>
                    <div className="grid grid-flow-row gap-4">
                        <a href="http://" target="_blank" rel="noopener noreferrer"><img className='w-36 h-11' src={googlePlayStore} alt="" /></a>
                        <a href="http://" target="_blank" rel="noopener noreferrer"><img className='w-36 h-11' src={applePlayStore} alt="" /></a>
                    </div>
                </div>
            </footer><hr className='my-4'/>
            <div className='uppercase font-semibold text-accent lg:text-[12px] text-[10px] flex items-center lg:justify-between sm:justify-center flex-col-reverse sm:flex-row-reverse '>
                <p className='py-2'>Copyright © 2022 - All right reserved by American Axle Limited</p>
                <div className='grid grid-cols-3 gap-3 items-center'>
                    <img className='w-12 h-7 pl-1' src={visaCard} alt="" />
                    <img className='w-12 h-7' src={masterCard} alt="" />
                    <img className='w-12 h-7' src={americanExpress} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Footer;