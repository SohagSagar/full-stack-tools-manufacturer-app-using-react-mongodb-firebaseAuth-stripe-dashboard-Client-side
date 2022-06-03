import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../FirebaseAPI/firebase.init';
import img from '../../../resources/offer-imgs/air-filter.png';
import Loading from '../../Shared/Loading';
import SharedButton from '../../Shared/SharedButton';
import demoUserImg from '../../../resources/demo-user.jpg'

const MyProfile = () => {
    const [user,loading]=useAuthState(auth);
    if(loading){
        return <Loading/>
    }

    const {email,displayName,photoURL} = user;
    return (
        <div className='flex justify-center'>
            <div className="card w-96 lg:w-[500px] bg-base-100 shadow-xl ">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 flex justify-center mx-auto mt-5">
                       {
                           photoURL ? <img src={photoURL} alt="" />:
                           <img src={demoUserImg} alt="" />
                       } 
                    </div>
                </div>
                <div className="">
                    <div className='text-center mt-2 text-[14px] font-semibold'>
                        <p>{displayName}</p>
                        <p>{email}</p>
                    </div>
                    
                    <div className="card-actions justify-center pb-5">
                        <SharedButton>Update Info</SharedButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;