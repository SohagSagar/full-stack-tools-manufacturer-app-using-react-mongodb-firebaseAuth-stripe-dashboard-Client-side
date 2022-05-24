import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../resources/offer-imgs/air-filter.png';
import img2 from '../../../resources/offer-imgs/rim.png';

const Slider = () => {
    return (
        <div>
            <Carousel showArrows={true} autoPlay={true} interval={3000} infiniteLoop={true} stopOnHover={false} showThumbs={false} onClickItem={true} swipeable={true} onSwipeMove={true} >
                <div>
                    <img src={img1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;