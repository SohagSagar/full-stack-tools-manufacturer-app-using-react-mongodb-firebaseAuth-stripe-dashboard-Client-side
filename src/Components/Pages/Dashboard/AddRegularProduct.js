import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AddRegularProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async data => {
        console.log(data);

    }
    return (
        <div class="hero bg-black-400 mb-36 ">
            <div class="hero-content flex-col lg:flex-row-reverse p-0">
                <div class="text-center lg:text-left uppercase ">
                    <h1 class="lg:text-5xl text-2xl font-bold whitespace-nowrap leading-3 lg:leading-[10px] text-secondary">Add Regular!</h1>
                    <p class="py-4 font-semibold text-white">Product </p>
                </div>
                <div class="card w-96 max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <form onSubmit={handleSubmit(onSubmit)} className="uppercase font-semibold ">

                            {/*  NAME FIELD */}
                            <div class="form-control ">
                                <label class="label">
                                    <span class="label-text text-[12px] ">Product Name</span>
                                </label>
                                <input {...register('productName', {
                                    required: {
                                        value: true,
                                        message: "Product name is required"
                                    }
                                })} type="text" placeholder="TYPE PRODUCT NAME" class="input input-bordered input-sm" />

                                <label class="label pt-0">
                                    {
                                        errors?.productName?.type === 'required' && <span class="label-text-alt text-red-500 text-[11px]">{errors?.productName.message}</span>
                                    }
                                </label>
                            </div>

                            {/* Brand field */}
                            <div class="form-control ">
                                <label class="label">
                                    <span class="label-text text-[12px] ">Brand</span>
                                </label>
                                <input {...register('brand', {
                                    required: {
                                        value: true,
                                        message: "Brand is required"
                                    }
                                })} type="text" placeholder="TYPE BRAND NAME" class="input input-bordered input-sm" />
                                <label class="label pt-0">
                                    {
                                        errors?.brand?.type === 'required' && <span class="label-text-alt text-red-500 text-[11px]">{errors?.brand.message}</span>
                                    }

                                </label>
                            </div>

                            {/* available quantity field */}
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-[12px]">Quantity</span>
                                </label>
                                <input {...register('available', {
                                    required: {
                                        value: true,
                                        message: 'Quantity field is required'
                                    }
                                })} type="number" placeholder="TYPE Quantity" class="input input-bordered input-sm" />

                                <label class="label pt-0">
                                    {
                                        errors?.available?.type === 'required' && <span class="label-text-alt text-red-500 text-[11px]">{errors?.available.message}</span>
                                    }
                                    
                                </label>
                            </div>

                            {/* minimum order field */}
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-[12px]">Minimum order  </span>
                                </label>
                                <input {...register('minimumOrder', {
                                    required: {
                                        value: true,
                                        message: 'Field is required'
                                    }
                                })} type="number" placeholder="TYPE MINIMUM ORDER" class="input input-bordered input-sm" />

                                <label class="label pt-0">
                                    {
                                        errors?.minimumOrder?.type === 'required' && <span class="label-text-alt text-red-500 text-[11px]">{errors?.minimumOrder.message}</span>
                                    }
                                    
                                </label>
                            </div>

                            {/* price  field */}
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-[12px]">Price</span>
                                </label>
                                <input {...register('price', {
                                    required: {
                                        value: true,
                                        message: 'Field is required'
                                    }
                                })} type="number" placeholder="TYPE PRICE" class="input input-bordered input-sm" />

                                <label class="label pt-0">
                                    {
                                        errors?.price?.type === 'required' && <span class="label-text-alt text-red-500 text-[11px]">{errors?.price.message}</span>
                                    }
                                    
                                </label>
                            </div>

                            {/* descriptions  field */}
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-[12px]">Description</span>
                                </label>
                                <textarea {...register('description', {
                                    required: {
                                        value: true,
                                        message: 'Field is required'
                                    }
                                })} type="number" placeholder="WRITE PRODUCT DESCRIPTIONS..." class="textarea textarea-bordered" />

                                <label class="label pt-0">
                                    {
                                        errors?.description?.type === 'required' && <span class="label-text-alt text-red-500 text-[11px]">{errors?.description.message}</span>
                                    }
                                    
                                </label>
                            </div>

                            {/* FORM SUBMIT SECTION */}
                            <div class="form-control w-full">
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