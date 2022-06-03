import React from 'react';
import './PartsCard.css';
import { Link} from 'react-router-dom';

const PartsCard = ({product}) => {
    const {_id,productName,brand,available,minimumOrder,price,imageURL,description}=product

    return (

        <div className="card card-compact shadow-xl mt-2 mb-2 w-[350px]">
            <figure><img className='w-[300px] h-[270px] rounded mt-3' src={imageURL} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className='text-[14px] font-bold text-center'>{productName}</h2>
                <div className="overflow-x-auto">
                    <table className="table table-compact ">

                        <thead>
                            <tr>
                                <th className='text-[12px]'>Brand</th>
                                <td className='text-[12px] '>{brand}</td>
                            </tr>
                            <tr>
                                <th className='text-[12px]'>Status</th>
                                <th className='text-[12px] text-green-500'>In Stock</th>
                            </tr>
                            <tr>
                                <th className='text-[12px]'>Available</th>
                                <td className='text-[12px] '>{available} Pics</td>
                            </tr>
                            <tr>
                                <th className='text-[12px]'>Minimum Order</th>
                                <td className='text-[12px] '>{minimumOrder} Pics</td>
                            </tr>
                            <tr>
                                <th className='text-[12px]'>Price</th>
                                <td className='text-[12px] '>{price}$/Pics</td>
                            </tr>
                            <tr>
                                <th className='text-[12px]'>Description</th>
                                <td className='text-[12px] break-normal w-[290px] pb-5'>{description}...</td>
                            </tr>
                        </thead>

                    </table>
                </div>

                <button className="btn drop-shadow-xl hover:bg-primary hover:text-secondary btn-sm bg-secondary border-0 mt-2 text-primary rounded-full px-5 h-10"><Link to={`/purchase/${_id}`}> Purchase now</Link></button>
            </div>
        </div>



    );
};

export default PartsCard;