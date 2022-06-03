import React, { useEffect, useState } from 'react';
import { AiOutlineGoogle } from 'react-icons/ai';
import { Link, useNavigate,useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import PasswordResetModal from './PasswordResetModal';
import auth from '../../../FirebaseAPI/firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading';
import toast from 'react-hot-toast';
import { MdError } from 'react-icons/md';
import useToken from '../../../Hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [modalStatus, setModalStatus] = useState(true);
    const [loginError, setLoginError] = useState('');
    const navigate=useNavigate();

    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // SIGN IN USING GOOGLE 
    const [signInWithGoogle, googleUser, googlelLoading, googleError] = useSignInWithGoogle(auth);

    // SIGN IN WITH EMAIL AND PASSWORD
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    
    // GET FORM DATA
    const onSubmit = data =>{
        console.log(data);
        signInWithEmailAndPassword(data?.email,data?.password)
    } 

    const [token] = useToken(user || googleUser)

    // SET LOGIN ERRORS
    useEffect(() => {
        if (googleError || error) {
            console.log(googleError?.code);
            const loginErrorMessage = googleError?.code?.split('/')[1] || error?.code?.split('/')[1];
            setLoginError(loginErrorMessage);
        }
        else {
            setLoginError('');
        }
    }, [googleError,error])

    // CHECKING LOGIN STATUS
    useEffect(() => {
        // if (googleUser || user) {
        //     toast.success('LOGIN SUCCESSFUL!');
        //     navigate(from, { replace: true });
        // }
        if (token) {
            toast.success('LOGIN SUCCESSFUL!');
            navigate(from, { replace: true });
        }
    }, [token]);


    // CHEKING LOADING STATUS
    if (googlelLoading || loading) {
        return <Loading/>;
    }

    return (
        <div className="hero min-h-full bg-black-100 mb-36 mt-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left uppercase ">
                    <h1 className="lg:text-5xl text-2xl font-bold whitespace-nowrap leading-3 lg:leading-[10px] text-secondary">Login now!</h1>
                    <p className="py-4 font-semibold">New in american axle? <span className='text-secondary font-bold'><Link to={'/register'}>Register First</Link></span> </p>
                </div>
                <div className="card w-96 max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)} className="uppercase font-semibold ">

                            {/* SHOWING LOGIN ERRORS */}
                            {
                                loginError &&
                                <div className="alert  shadow-md">
                                    <span className='mx-auto font-semibold text-[14px] text-red-600'><MdError />{loginError}</span>
                                </div>
                            }


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

                                {/* FORGOT PASSWORD PASSWORD LINK */}
                                <label className="label">

                                    {/* <a href="#" className="label-text-alt link link-hover text-[10px]">Forgot password?</a> */}
                                    <label onClick={() => setModalStatus(true)} htmlFor="resetPasswordModal" className="label-text-alt link link-hover text-[10px]">Forgot password?</label>
                                </label>
                            </div>

                            {/* FORM SUBMIT SECTION */}
                            <div className="form-control w-full">
                                <button type='submit' className="btn drop-shadow-xl hover:bg-primary hover:text-secondary btn-sm bg-secondary border-0  text-primary rounded-full px-5 h-10 font-semibold">Login</button>

                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <button onClick={() => signInWithGoogle()} className="btn drop-shadow-xl hover:bg-primary hover:text-secondary btn-sm bg-secondary border-0  text-primary rounded-full px-5 h-10 font-bold"><AiOutlineGoogle className="text-lg mr-1" /> Continue with google</button>
                    </div>
                </div>
            </div>
            {modalStatus && <PasswordResetModal setModalStatus={setModalStatus} />}
        </div>
    );
};

export default Login;