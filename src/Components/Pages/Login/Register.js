import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../FirebaseAPI/firebase.init';
import Loading from '../../Shared/Loading';
import { MdError } from 'react-icons/md';
import useToken from '../../../Hooks/useToken';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [errorMessage, setErrorMessage] = useState('');
    const navigate =useNavigate();
    

    // SET USER NAME WHILE REGISTER
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    // CREATE USER USING EMAIL AND PASSWORD
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [token] = useToken(user);


    // GETTING FORM DATA
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data?.email, data?.password);
        await updateProfile( {displayName:data?.name})
    }


    // GET USER STATUS
    useEffect(()=>{
        // if(user){
        //     toast.success('USER CREATED SUCCESSFULLY !');
        //     navigate('/');
        // }
        if(token){
            toast.success('USER CREATED SUCCESSFULLY !');
            navigate('/');
        }
    },[token]);

    // SET ERROR MESSAGES
    useEffect(()=>{
        if(error || updateError){
            const message = error?.code.split('/')[1] || updateError?.code.split('/')[1];
            setErrorMessage(message)
        }else{
            setErrorMessage('')
        }
    },[])

    // SHOWING LOADDING STATUS
    if(updating || loading){
        return <Loading/>
    }
    return (
        <div className="hero min-h-full bg-black-100 mb-36 mt-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left uppercase ">
                    <h1 className="lg:text-5xl text-2xl font-bold whitespace-nowrap leading-3 lg:leading-[10px] text-secondary">Register now!</h1>
                    <p className="py-4 font-semibold">Already have an account? <span className='text-secondary font-bold'><Link to={'/login'}>Login First</Link></span> </p>
                </div>
                <div className="card w-96 max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)} className="uppercase font-semibold ">

                            {/* SHOWING LOGIN ERRORS */}
                            {
                                errorMessage &&
                                <div className="alert  shadow-md">
                                    <span className='mx-auto font-semibold text-[14px] text-red-600'><MdError />{errorMessage}</span>
                                </div>
                            }

                            {/*  NAME FIELD */}
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-[12px] ">Name</span>
                                </label>
                                <input {...register('name', {
                                    required: {
                                        value: true,
                                        message: "Name is required"
                                    }
                                })} type="text" placeholder="TYPE YOUR NAME" className="input input-bordered" />

                                <label className="label">
                                    {
                                        errors?.email?.type === 'required' && <span className="label-text-alt text-red-500 text-[11px]">{errors?.email.message}</span>
                                    }
                                </label>
                            </div>
                            {/* Email field */}
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-[12px] ">Email</span>
                                </label>
                                <input {...register('email', {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                        message: "Invalid Email"
                                    }
                                })} type="Email" placeholder="TYPE YOUR EMAIL" className="input input-bordered" />
                                <label className="label">
                                    {
                                        errors?.email?.type === 'required' && <span className="label-text-alt text-red-500 text-[11px]">{errors?.email.message}</span>
                                    }
                                    {
                                        errors?.email?.type === 'pattern' && <span className="label-text-alt text-red-500 text-[11px]">{errors?.email.message}</span>
                                    }

                                </label>
                            </div>

                            {/* password field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[12px]">Password</span>
                                </label>
                                <input {...register('password', {
                                    required: {
                                        value: true,
                                        message: 'Password field is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Minimum length should be 6.'
                                    }
                                })} type="password" placeholder="TYPE YOUR PASSWORD" className="input input-bordered" />

                                <label className="label">
                                    {
                                        errors?.password?.type === 'required' && <span className="label-text-alt text-red-500 text-[11px]">{errors?.password.message}</span>
                                    }
                                    {
                                        errors?.password?.type === 'minLength' && <span className="label-text-alt text-red-500 text-[11px]">{errors?.password.message}</span>
                                    }

                                </label>
                            </div>

                            {/* FORM SUBMIT SECTION */}
                            <div className="form-control w-full">
                                <button type='submit' className="btn drop-shadow-xl hover:bg-primary hover:text-secondary btn-sm bg-secondary border-0  text-primary rounded-full px-5 h-10">REGISTER </button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;