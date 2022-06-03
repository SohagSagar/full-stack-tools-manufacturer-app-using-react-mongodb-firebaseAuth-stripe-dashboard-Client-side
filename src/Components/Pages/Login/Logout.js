import React, { useEffect } from 'react';
import auth from '../../../FirebaseAPI/firebase.init';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';

const Logout = () => {
    const [user, loading, error] = useAuthState(auth);

    signOut(auth);
    useEffect(()=>{
        if(!user){
            localStorage.removeItem('accessToken');
            toast.success('LOGOUT SUCCESSFULLY !')
        }
    },[user]);
    
    const navigate=useNavigate();
    
    return (
        <div>
            {
                !user && navigate('/login')
            }
        </div>
    );
};

export default Logout;