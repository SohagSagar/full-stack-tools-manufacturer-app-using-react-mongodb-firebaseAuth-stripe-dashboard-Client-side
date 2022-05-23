import React from 'react';
import Banner from './Banner';
import ManufacturedParts from './ManufacturedParts';
import ShippingBannerInfo from './ShippingBannerInfo';
import SpecialOffer from './SpecialOffer';
import TopBrandingLogo from './TopBrandingLogo';

const Home = () => {
    return (
        <div>
            <Banner/>
            <ShippingBannerInfo/>
            <ManufacturedParts/>
            <SpecialOffer/>
        </div>
    );
};

export default Home;