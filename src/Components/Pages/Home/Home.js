import React from 'react';
import Banner from './Banner';
import ManufacturedParts from './ManufacturedParts';
import ShippingBannerInfo from './ShippingBannerInfo';
import SpecialOffer from './SpecialOffer';
import TopBrandingLogo from './TopBrandingLogo';
import WhyChoiceUs from './WhyChoiceUs';

const Home = () => {
    return (
        <div>
            <Banner/>
            <ShippingBannerInfo/>
            <ManufacturedParts/>
            <SpecialOffer/>
            <WhyChoiceUs/>
        </div>
    );
};

export default Home;