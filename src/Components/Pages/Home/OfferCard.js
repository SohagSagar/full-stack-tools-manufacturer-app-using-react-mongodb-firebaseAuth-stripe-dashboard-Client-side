import React from 'react';
import airfilter from '../../../resources/offer-imgs/air-filter.png'

const OfferCard = () => {
    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl my-5">
            <span class="badge text-right bg-secondary text-primary ml-4 py-3 border-0 font-bold">-20%</span>
            <figure><img src={airfilter} alt="Shoes" /></figure>
            <div class="card-body ">
                <h2 class="text-[16px] font-bold uppercase text-center">Honda OEM Air Filter Z01</h2>

                    <table class="table table-compact ">

                        <thead>
                            <tr>
                                <th className='text-[12px]'>Brand</th>
                                <td className='text-[12px] '>Apollo</td>
                            </tr>

                            <tr>
                                <th className='text-[12px]'>Available</th>
                                <td className='text-[12px] '>500 Pics</td>
                            </tr>
                            <tr>
                                <th className='text-[12px]'>Minimum Order</th>
                                <td className='text-[12px] '>100 Pics</td>
                            </tr>
                            <tr>
                                <th className='text-[12px]'>Price</th>
                                <td className='text-[12px] '><span className='text-primary'><s className='text-red-500'>100$</s>  $80/pics</span></td>
                            </tr>

                        </thead>

                    </table>

                <button class="btn drop-shadow-xl hover:bg-primary hover:text-secondary btn-sm bg-secondary border-0 mt-2 text-primary rounded-full px-5 h-10">Purchase Now</button>

                {/* <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div> */}
            </div>
        </div>
    );
};

export default OfferCard;