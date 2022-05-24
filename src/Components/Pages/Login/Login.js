import React, { useEffect, useState } from 'react';
import { AiOutlineGoogle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import PasswordResetModal from './PasswordResetModal';
import auth from '../../../FirebaseAPI/firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading';
import toast from 'react-hot-toast';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [modalStatus,setModalStatus]=useState(true);
    const [signInWithGoogle, user, loading, googleError] = useSignInWithGoogle(auth);
    const [loginError,setLoginError]=useState('');
    const onSubmit = data => console.log(data);

    if(googleError){
        console.log(googleError?.code);
        const loginErrorMessage= googleError.code.split('/')[1];
        setLoginError(loginErrorMessage);
    }
    useEffect(()=>{
        if(user){
            toast.success('LOGIN SUCCESSFUL!');
        }
    },[user]);
    

    if(loading){
        return ;
    }
    
    return (
        <div class="hero min-h-full bg-black-100 mb-36 mt-5">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left uppercase ">
                    <h1 class="lg:text-5xl text-2xl font-bold whitespace-nowrap leading-3 lg:leading-[10px] text-secondary">Login now!</h1>
                    <p class="py-4 font-semibold">New in american axle? <span className='text-secondary font-bold'><Link to={'/register'}>Register First</Link></span> </p>
                </div>
                <div class="card w-96 max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <form onSubmit={handleSubmit(onSubmit)} className="uppercase font-semibold ">

                            {/* Email field */}
                            <div class="form-control ">
                                <label class="label">
                                    <span class="label-text text-[12px] ">Email</span>
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
                                })} type="Email" placeholder="TYPE YOUR EMAIL" class="input input-bordered" />
                                <label class="label">
                                    {
                                        errors?.email?.type === 'required' && <span class="label-text-alt text-red-500 text-[11px]">{errors?.email.message}</span>
                                    }
                                    {
                                        errors?.email?.type === 'pattern' && <span class="label-text-alt text-red-500 text-[11px]">{errors?.email.message}</span>
                                    }

                                </label>
                            </div>

                            {/* password field */}
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-[12px]">Password</span>
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
                                })} type="password" placeholder="TYPE YOUR PASSWORD" class="input input-bordered" />

                                <label class="label">
                                    {
                                        errors?.password?.type === 'required' && <span class="label-text-alt text-red-500 text-[11px]">{errors?.password.message}</span>
                                    }
                                    {
                                        errors?.password?.type === 'minLength' && <span class="label-text-alt text-red-500 text-[11px]">{errors?.password.message}</span>
                                    }

                                </label>

                                {/* FORGOT PASSWORD PASSWORD LINK */}
                                <label class="label">

                                    {/* <a href="#" class="label-text-alt link link-hover text-[10px]">Forgot password?</a> */}
                                    <label onClick={()=>setModalStatus(true)} for="resetPasswordModal" class="label-text-alt link link-hover text-[10px]">Forgot password?</label>
                                </label>
                            </div>

                            {/* FORM SUBMIT SECTION */}
                            <div class="form-control w-full">
                                <button type='submit' className="btn drop-shadow-xl hover:bg-primary hover:text-secondary btn-sm bg-secondary border-0  text-primary rounded-full px-5 h-10 font-semibold">Login</button>

                            </div>
                        </form>
                        <div class="divider">OR</div>
                        <button onClick={()=>signInWithGoogle()} className="btn drop-shadow-xl hover:bg-primary hover:text-secondary btn-sm bg-secondary border-0  text-primary rounded-full px-5 h-10 font-bold"><AiOutlineGoogle className="text-lg mr-1" /> Continue with google</button>
                    </div>
                </div>
            </div>
            {modalStatus && <PasswordResetModal setModalStatus={setModalStatus}/>}
        </div>
    );
};

export default Login;