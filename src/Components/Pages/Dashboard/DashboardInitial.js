import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../FirebaseAPI/firebase.init';
import useAdmin from '../../../Hooks/useAdmin';

const DashboardInitial = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user);
    return (
        <div>
            {
                admin ? <h2 className='text-center uppercase font-semibold text-2xl'>Welcome to Admin</h2>:
                <h2 className='text-center uppercase font-semibold text-2xl'>Welcome to User</h2>
            }
            
        </div>
    );
};

export default DashboardInitial;