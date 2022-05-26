import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const AddRegularProduct = () => {
    const { register,reset, formState: { errors }, handleSubmit } = useForm();
    const [regularProduct,setRegularProduct]=useState('')


    const imageStorage_KEY = '57ce17c1c8539ec3f021cae064cc7167';

    const onSubmit = async data => {
        console.log(data?.productName);

        const regularProduct={
            // productName:data?.productName,
            // available:data?.available,
            // brand:data?.brand,
            // description:data?.description,
            // imageURL:data?.imageURL,
            // minimumOrder:data?.minimumOrder,
            // price:data?.price
            
        }
        console.log(regularProduct);
        
        // const image = data?.imageURL[0];
        // const formData = new FormData();
        // formData.append('imageURL', image);
        // const url = `https://api.imgbb.com/1/upload?key=${imageStorage_KEY}`;

        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         console.log(result);
        //         if(result.success){
        //             const imageURL = result?.data?.url;
        //             const regularProduct = {
        //                 data,
        //                 imageURL
        //             }
        //             setRegularProduct(regularProduct)
        //         }
                
                
        //     })
        //     console.log(regularProduct);

        //send data to database
       
        console.log(regularProduct);
        fetch('https://immense-dusk-26481.herokuapp.com/regularProducts', {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Product added successfully')
                    
                }
                else {
                    toast.error('Failed to add the doctor');
                }
            })

        
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

                            {/* image  field */}
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-[12px]">image url</span>
                                </label>
                                <input {...register('imageURL', {
                                    required: {
                                        value: true,
                                        message: 'Field is required'
                                    }
                                })} type="text" placeholder="IMAGE URL" class="input input-bordered input-sm" />

                                <label class="label pt-0">
                                    {
                                        errors?.imageURL?.type === 'required' && <span class="label-text-alt text-red-500 text-[11px]">{errors?.imageURL.message}</span>
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