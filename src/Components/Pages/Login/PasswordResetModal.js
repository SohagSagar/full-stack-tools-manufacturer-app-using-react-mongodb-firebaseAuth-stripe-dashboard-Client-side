import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import auth from '../../../FirebaseAPI/firebase.init';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading';
import { MdError } from 'react-icons/md';
import toast from 'react-hot-toast';

const PasswordResetModal = ({ setModalStatus }) => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [resetError, setResetError] = useState('')
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );

    const onSubmit = data => {
        console.log(data);
        sendPasswordResetEmail(data?.email)
        if (sending) {
            return <Loading />
        }
        if (error) {
            setResetError(error?.code.split('/')[1]);
        }
        else {
            toast.success('Reset Link send to your email');
            setResetError('')
        }
    }
    return (
        <div>
            <input type="checkbox" id="resetPasswordModal" className="modal-toggle" />
            <div className="modal modal-middle sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="resetPasswordModal" className="btn btn-sm  absolute right-2 top-2">✕</label>
                    <h1 className='text-center text-xl text-accent font-semibold mb-2'>Reset Your password</h1><hr />

                    {/* SHOWING LOGIN ERRORS */}
                    {
                        resetError &&
                        <div className="alert  shadow-md">
                            <span className='mx-auto font-semibold text-[14px] text-red-600'><MdError />{resetError}</span>
                        </div>
                    }

                    <form onSubmit={handleSubmit(onSubmit)} className="uppercase font-semibold mt-5 ">

                        {/* Email field */}
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-[12px] ">your registered email </span>
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

                        <div className="form-control w-1/2 mx-auto">
                            <button type='submit' className="btn drop-shadow-xl hover:bg-primary hover:text-secondary btn-sm bg-secondary border-0  text-primary font-semibold rounded-full px-5 h-10">RESET NOW</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default PasswordResetModal;