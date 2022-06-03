import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../FirebaseAPI/firebase.init'

import toast from 'react-hot-toast';

const AddRegularProduct = () => {
    const { register,reset, formState: { errors }, handleSubmit } = useForm();
    const [imageUrl,setImageUrl] =useState('');
    const [user, loading] = useAuthState(auth);
    const imageStorage_KEY = 'ca3a23b36ef2ec3a06a5f2ba99f6b1c1';

    const onSubmit = async data => {
        const image = data?.imageURL[0];


        const formData = new FormData();
        formData.append('image',image);


        const url =`https://api.imgbb.com/1/upload?key=${imageStorage_KEY}`;
        fetch(url,{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(result=>{
            if(result?.success){
                setImageUrl(result?.data?.url)
            }
            else{
                toast.error('FAIL TO UPLOAD IMAGE !')
            }
        })

        if(!imageUrl){
            return;
        }
        const regularProducts={
            ...data,
            imageURL:imageUrl,
            userEmail:user?.email
        }

        //send data to database
       fetch('https://vast-forest-24784.herokuapp.com/regularProducts',{
           method:'POST',
           headers:{
               'content-type':'application/json',
           },
           body:JSON.stringify(regularProducts)    
       })
       .then(res=>res.json())
       .then(data=>{
           if(data?.insertedId){
               toast.success('PRODUCT ADDED SUCCESSFULLY !');
               reset();
           }
           else{
               toast.error('FAIL TO ADD PRODUCT')
           }
       })
        
    }




    return (
        <div className="hero bg-black-400 mb-36 ">
            <div className="hero-content flex-col lg:flex-row-reverse p-0">
                <div className="text-center lg:text-left uppercase ">
                    <h1 className="lg:text-5xl text-2xl font-bold whitespace-nowrap leading-3 lg:leading-[10px] text-secondary">Add Regular!</h1>
                    <p className="py-4 font-semibold text-white">Product </p>
                </div>
                <div className="card w-96 max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)} className="uppercase font-semibold ">

                            {/*  NAME FIELD */}
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-[12px] ">Product Name</span>
                                </label>
                                <input {...register('productName', {
                                    required: {
                                        value: true,
                                        message: "Product name is required"
                                    }
                                })} type="text" placeholder="TYPE PRODUCT NAME" className="input input-bordered input-sm" />

                                <label className="label pt-0">
                                    {
                                        errors?.productName?.type === 'required' && <span className="label-text-alt text-red-500 text-[11px]">{errors?.productName.message}</span>
                                    }
                                </label>
                            </div>

                            {/* Brand field */}
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-[12px] ">Brand</span>
                                </label>
                                <input {...register('brand', {
                                    required: {
                                        value: true,
                                        message: "Brand is required"
                                    }
                                })} type="text" placeholder="TYPE BRAND NAME" className="input input-bordered input-sm" />
                                <label className="label pt-0">
                                    {
                                        errors?.brand?.type === 'required' && <span className="label-text-alt text-red-500 text-[11px]">{errors?.brand.message}</span>
                                    }

                                </label>
                            </div>

                            {/* available quantity field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[12px]">Quantity</span>
                                </label>
                                <input {...register('available', {
                                    required: {
                                        value: true,
                                        message: 'Quantity field is required'
                                    }
                                })} type="number" placeholder="TYPE Quantity" className="input input-bordered input-sm" />

                                <label className="label pt-0">
                                    {
                                        errors?.available?.type === 'required' && <span className="label-text-alt text-red-500 text-[11px]">{errors?.available.message}</span>
                                    }
                                    
                                </label>
                            </div>

                            {/* minimum order field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[12px]">Minimum order  </span>
                                </label>
                                <input {...register('minimumOrder', {
                                    required: {
                                        value: true,
                                        message: 'Field is required'
                                    }
                                })} type="number" placeholder="TYPE MINIMUM ORDER" className="input input-bordered input-sm" />

                                <label className="label pt-0">
                                    {
                                        errors?.minimumOrder?.type === 'required' && <span className="label-text-alt text-red-500 text-[11px]">{errors?.minimumOrder.message}</span>
                                    }
                                    
                                </label>
                            </div>

                            {/* price  field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[12px]">Price</span>
                                </label>
                                <input {...register('price', {
                                    required: {
                                        value: true,
                                        message: 'Field is required'
                                    }
                                })} type="number" placeholder="TYPE PRICE" className="input input-bordered input-sm" />

                                <label className="label pt-0">
                                    {
                                        errors?.price?.type === 'required' && <span className="label-text-alt text-red-500 text-[11px]">{errors?.price.message}</span>
                                    }
                                    
                                </label>
                            </div>

                            {/* image  field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[12px]">image url</span>
                                </label>
                                <input {...register('imageURL', {
                                    required: {
                                        value: true,
                                        message: 'Field is required'
                                    }
                                })} type="file" placeholder="IMAGE URL" className="input input-bordered input-sm" />

                                <label className="label pt-0">
                                    {
                                        errors?.imageURL?.type === 'required' && <span className="label-text-alt text-red-500 text-[11px]">{errors?.imageURL.message}</span>
                                    }
                                    
                                </label>
                            </div>

                            {/* descriptions  field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[12px]">Description</span>
                                </label>
                                <textarea {...register('description', {
                                    required: {
                                        value: true,
                                        message: 'Field is required'
                                    }
                                })} type="number" placeholder="WRITE PRODUCT DESCRIPTIONS..." className="textarea textarea-bordered" />

                                <label className="label pt-0">
                                    {
                                        errors?.description?.type === 'required' && <span className="label-text-alt text-red-500 text-[11px]">{errors?.description.message}</span>
                                    }
                                    
                                </label>
                            </div>

                            {/* FORM SUBMIT SECTION */}
                            <div className="form-control w-full">
                                <button type='submit' className="btn drop-shadow-xl hover:bg-primary hover:text-secondary btn-sm bg-secondary border-0  text-primary rounded-full px-5 h-10">ADD PRODUCT </button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddRegularProduct;