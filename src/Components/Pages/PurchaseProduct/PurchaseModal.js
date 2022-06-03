import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../FirebaseAPI/firebase.init';
import Loading from '../../Shared/Loading';
import { format } from 'date-fns'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

const PurchaseModal = ({ _id, available, purchaseInfo, price, inputOrderQuantity, setPurchaseModalStatus }) => {
    const [user] = useAuthState(auth);
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const totalPrice = parseInt(price) * parseInt(inputOrderQuantity);
    const quantity = parseInt(inputOrderQuantity);
    const orderDate = format(new Date(), 'PP');
    const navigate = useNavigate();


    if (!quantity || !totalPrice) {
        return <Loading></Loading>
    }

    const onSubmit = data => {

        const updatedQuantity = parseInt(available) - parseInt(data?.productQuantity);

        const orderedItemDetails = {
            ...data,
            orderDate,
            paymentStatus: 'unpaid',
            image: purchaseInfo?.imageURL,
            orderStatus: 'pending'

        }
        // reset();


        fetch('http://localhost:5000/ordered-product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderedItemDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId) {
                    toast.success('ORDER SUCCESSFUL');
                    setPurchaseModalStatus(false);

                    fetch(`http://localhost:5000/regularProducts/${_id}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({available:updatedQuantity})
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                        })

                    navigate('/dashboard/my-order')

                }
                else {
                    toast.error('FAIL TO PLACE ORDER')
                }
            })


    }
    return (
        <div>
            <input type="checkbox" id="purchaseModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle ">
                <div className="modal-box flex justify-center mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)} className="uppercase font-semibold w-[300px]">
                        <label htmlFor="purchaseModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                        {/* ------customer info ------- */}

                        <fieldset className='mb-4'>
                            <legend>Customer Info</legend><hr />
                            {/* CustomerName field */}
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-[12px] ">Customer Name</span>
                                </label>
                                <input {...register('customerName')} readOnly type="text" className="input input-bordered input-sm w-full max-w-xs" value={user?.displayName} />
                            </div>

                            {/* CustomerEmail field */}
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-[12px] ">Customer Email</span>
                                </label>
                                <input {...register('customerEmail')} readOnly type="Email" className="input input-bordered input-sm w-full max-w-xs" value={user?.email} />
                            </div>

                            {/* Customer mobile field */}

                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-[12px] ">Mobile no</span>
                                </label>
                                <input {...register('mobileNumber', {
                                    required: {
                                        value: true,
                                        message: "Field is required"
                                    },
                                    pattern: {
                                        value: /^(?:\+?88|0088)?01[15-9]\d{8}$/,
                                        message: "Invalid Mobile Number"
                                    }
                                })} type="text" placeholder="TYPE YOUR NUMBER" className="input input-bordered input-sm w-full max-w-xs input-sm w-full max-w-xs" />
                                <label className="label">
                                    {
                                        errors?.mobileNumber?.type === 'required' && <span className="label-text-alt text-red-500 text-[11px]">{errors?.mobileNumber.message}</span>
                                    }
                                    {
                                        errors?.mobileNumber?.type === 'pattern' && <span className="label-text-alt text-red-500 text-[11px]">{errors?.mobileNumber.message}</span>
                                    }

                                </label>
                            </div>

                            {/* Customer address field */}
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-[12px] ">Address</span>
                                </label>
                                <textarea {...register('customerAddress', {
                                    required: true,
                                    message: "Field is required"
                                })} type="text" className="input input-bordered textarea h-[60px] input-sm w-full max-w-xs" />
                                <label className="label">
                                    {
                                        errors?.customerAddress?.type === 'required' && <span className="label-text-alt text-red-500 text-[11px]">{errors?.customerAddress.message}</span>
                                    }
                                </label>
                            </div>

                        </fieldset>

                        {/* --------Order info------- */}
                        <fieldset>
                            <legend>Order Info</legend><hr />

                            {/* product name field */}
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-[12px] ">Product Name</span>
                                </label>
                                <input {...register('productName')} readOnly type="text" className="input input-bordered input-sm w-full max-w-xs" value={purchaseInfo?.productName} />
                            </div>

                            {/* product quantity field */}
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-[12px] ">Quantity</span>
                                </label>
                                <input {...register('productQuantity')} readOnly type="text" className="input input-bordered input-sm w-full max-w-xs" value={quantity}
                                />
                            </div>

                            {/* product price field */}
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-[12px] ">Total Price</span>
                                </label>
                                <input {...register('totalProductPrice')} readOnly type="text" className="input input-bordered input-sm w-full max-w-xs" value={totalPrice} />
                            </div>
                        </fieldset>


                        {/* FORM SUBMIT SECTION */}
                        <div className=" flex justify-center mx-auto py-5">
                            <button type='submit' className="btn drop-shadow-xl hover:bg-primary hover:text-secondary btn-sm bg-secondary border-0  text-primary rounded-full px-5 h-5 font-semibold">Order Now</button>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;