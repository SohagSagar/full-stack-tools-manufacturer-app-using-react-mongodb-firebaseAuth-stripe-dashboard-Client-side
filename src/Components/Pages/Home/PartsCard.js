import React from 'react';
import tire from '../../../resources/tire/tire1.png';
import './PartsCard.css';

const PartsCard = () => {

    return (

        <div class="card card-compact shadow-xl mt-2 mb-2 w-[320px]">
            <figure><img className='w-[200px] rounded mt-3' src={tire} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 className='text-[14px] font-bold text-center'>APOLLO (INDIA)-145/70R12 69T</h2>
                <div class="overflow-x-auto">
                    <table class="table table-compact ">

                        <thead>
                            <tr>
                                <th className='text-[12px]'>Brand</th>
                                <td className='text-[12px] '>Apollo</td>
                            </tr>
                            <tr>
                                <th className='text-[12px]'>Status</th>
                                <th className='text-[12px] text-green-500'>In Stock</th>
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
                                <td className='text-[12px] '>100$/Pics</td>
                            </tr>
                            <tr>
                                <th className='text-[12px]'>Description</th>
                                <td className='text-[12px] break-normal w-[290px] pb-5'>Apollo Tyres Ltd. came into spotlight in around 1972 and has...</td>
                            </tr>
                        </thead>

                    </table>
                </div>

                <button class="btn drop-shadow-xl hover:bg-primary hover:text-secondary btn-sm bg-secondary border-0 mt-2 text-primary rounded-full px-5 h-10">Purchase Now</button>
            </div>
        </div>



    );
};

export default PartsCard;