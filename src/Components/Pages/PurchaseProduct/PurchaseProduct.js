import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PurchaseModal from './PurchaseModal';


const PurchaseProduct = () => {
    const { id } = useParams();
    const [purchaseInfo, setPurchaseInfo] = useState({});
    const [quantityError, setQuantityError] = useState('');
    const [purchaseModalStatus, setPurchaseModalStatus] = useState(true);

    useEffect(() => {
        fetch(`https://vast-forest-24784.herokuapp.com/purchase/${id}`)
            .then(res => res.json())
            .then(data => setPurchaseInfo(data))
    }, [])
    const { productName, brand, available, minimumOrder, price, imageURL, description } = purchaseInfo;

    const [inputOrderQuantity, setInputOrderQuantity] = useState(Number);

    useEffect(() => {
        if (!inputOrderQuantity) {
            setInputOrderQuantity(parseInt(minimumOrder))
        }
        else {
            setInputOrderQuantity(parseInt(inputOrderQuantity))
        }

        if (parseInt(inputOrderQuantity) < parseInt(minimumOrder)) {
            setQuantityError(`Minimum Quantity should ${minimumOrder}`);

        } else if (parseInt(inputOrderQuantity) > parseInt(available)) {
            setQuantityError(`Maximum Quantity should ${available}`);
        }
        else {
            setQuantityError('')
        }
    }, [inputOrderQuantity, available, minimumOrder])



    return (
        <div>
            <div className="hero min-h-screen bg-base-200 lg:px-24">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={imageURL} alt="" className="max-w-sm lg:max-w-md rounded-lg shadow-2xl" />
                    <div className="overflow-x-auto ">
                        <table className="table lg:max-w-md max-w-sm">

                            <thead className='p-4'>
                                <tr>
                                    <th className='text-[12px]'>Product Name</th>
                                    <td className='text-[12px] '>{productName}</td>
                                </tr>
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
                                    <td className='text-[12px] '><input type="number" onChange={e => setInputOrderQuantity(e.target.value)} name='minOrder' className="input input-bordered input-sm w-[100px]" defaultValue={minimumOrder} /> Pics
                                        {
                                            quantityError &&
                                            <label className="label">
                                                <span className="label-text-alt text-red-500 text-[11px]">{quantityError}</span>
                                            </label>
                                        }

                                    </td>


                                </tr>
                                <tr>
                                    <th className='text-[12px]'>Price</th>
                                    <td className='text-[12px] '>{price}$/Pics</td>
                                </tr>
                                <tr>
                                    <th className='text-[12px]'>Description</th>
                                    <td className='text-[12px] break-normal w-[290px] '>{description}</td>
                                </tr>
                            </thead>




                        </table>

                        {
                            !quantityError ?
                                <div className='flex justify-center '>
                                    <label htmlFor="purchaseModal" className="btn modal-button drop-shadow-xl hover:bg-primary hover:text-secondary btn-sm bg-secondary border-0 mt-4 text-primary rounded-full px-5 h-10">Review Order</label>
                                </div>
                                :
                                <div className='flex justify-center '>
                                    <label disabled="disabled" htmlFor="purchaseModal" className="btn modal-button drop-shadow-xl hover:bg-primary hover:text-secondary btn-sm bg-secondary border-0 mt-4 text-primary rounded-full px-5 h-10">Review Order</label>
                                </div>

                        }

                    </div>
                </div>

                {
                    purchaseModalStatus && <PurchaseModal purchaseInfo={purchaseInfo} inputOrderQuantity={inputOrderQuantity} price={price} setPurchaseModalStatus={setPurchaseModalStatus} />
                }
            </div>



        </div>
    );
};

export default PurchaseProduct;