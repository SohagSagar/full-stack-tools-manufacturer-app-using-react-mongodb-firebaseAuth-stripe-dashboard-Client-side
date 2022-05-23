import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import CustomerReviews from './CustomerReviews';
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
            <BusinessSummary/>
            <CustomerReviews/>
        </div>
    );
};

export default Home;