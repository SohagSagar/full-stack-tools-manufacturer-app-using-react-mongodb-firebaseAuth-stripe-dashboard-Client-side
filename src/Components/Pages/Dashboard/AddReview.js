import { format } from 'date-fns/esm';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import auth from '../../../FirebaseAPI/firebase.init';

const AddReview = () => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const [user]=useAuthState(auth);
    console.log(user);
    const postedDate= format(new Date(),'PP');
    const onSubmit = async data =>{
        const customerReview={
            ...data,
            customerName:user?.displayName,
            customerEmail:user?.email,
            postedDate:postedDate,
            image:user?.photoURL
        }

        fetch('http://localhost:5000/add-review',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(customerReview)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                toast.success('REVIEW POSTED SUCCESSFULLY')
                reset();
            }
            else{
                toast.error('FAIL TO POST REVIEW')
            }
        })
    }
    return (
        <div className="hero bg-black-400 mb-36 ">
            <div className="hero-content flex-col lg:flex-row-reverse p-0">
                <div className="text-center lg:text-left uppercase ">
                    <h1 className="lg:text-5xl text-2xl font-bold whitespace-nowrap leading-3 lg:leading-[10px] text-secondary">Write Your!</h1>
                    <p className="py-4 font-semibold text-white">Review </p>
                </div>
                <div className="card w-96 max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)} className="uppercase font-semibold ">

                            {/* Company name field */}
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-[12px] ">Company Name</span>
                                </label>
                                <input {...register('companyName', {
                                    required: {
                                        value: true,
                                        message: "Field is required"
                                    }
                                })} type="text" placeholder="TYPE DESIGNATION" className="input input-bordered input-sm" />
                                <label className="label pt-0">
                                    {
                                        errors?.companyName?.type === 'required' && <span className="label-text-alt text-red-500 text-[11px]">{errors?.companyName.message}</span>
                                    }

                                </label>
                            </div>
                            {/* designation field */}
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-[12px] ">Your designation</span>
                                </label>
                                <input {...register('designation', {
                                    required: {
                                        value: true,
                                        message: "Field is required"
                                    }
                                })} type="text" placeholder="TYPE DESIGNATION" className="input input-bordered input-sm" />
                                <label className="label pt-0">
                                    {
                                        errors?.designation?.type === 'required' && <span className="label-text-alt text-red-500 text-[11px]">{errors?.designation.message}</span>
                                    }

                                </label>
                            </div>
                            {/* ratings field */}
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-[12px] ">Your Ratings</span>
                                </label>
                                <input {...register('rating', {
                                    required: {
                                        value: true,
                                        message: "Field is required"
                                    },
                                    max:{
                                        value:5,
                                        message:'Rating should be 0 to 5'
                                    },
                                    min:{
                                        value:0,
                                        message:'rating shoud be 0 to 5'
                                    }
                                })} type="number" placeholder="TYPE DESIGNATION" className="input input-bordered input-sm" />
                                <label className="label pt-0">
                                    {
                                        errors?.rating?.type === 'required' && <span className="label-text-alt text-red-500 text-[11px]">{errors?.rating.message}</span>
                                    }
                                    {
                                        errors?.rating?.type === 'max' && <span className="label-text-alt text-red-500 text-[11px]">{errors?.rating.message}</span>
                                    }
                                    {
                                        errors?.rating?.type === 'min' && <span className="label-text-alt text-red-500 text-[11px]">{errors?.rating.message}</span>
                                    }

                                </label>
                            </div>
                    
                            {/* review descriptions  field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[12px]">Write Your Review</span>
                                </label>
                                <textarea {...register('reviewDescription', {
                                    required: {
                                        value: true,
                                        message: 'Field is required'
                                    }
                                })} type="text" placeholder="WRITE YOUR REIVEW..." className="textarea textarea-bordered" />

                                <label className="label pt-0">
                                    {
                                        errors?.reviewDescription?.type === 'required' && <span className="label-text-alt text-red-500 text-[11px]">{errors?.reviewDescription.message}</span>
                                    }

                                </label>
                            </div>

                            {/* FORM SUBMIT SECTION */}
                            <div className="form-control w-full">
                                <button type='submit' className="btn drop-shadow-xl hover:bg-primary hover:text-secondary btn-sm bg-secondary border-0  text-primary rounded-full px-5 h-10">SUBMIT REIVEW</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddReview;