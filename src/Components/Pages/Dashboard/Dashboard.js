import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../FirebaseAPI/firebase.init';
import useAdmin from '../../../Hooks/useAdmin';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const [admin] = useAdmin(user);
    if(loading){
        return;
    }

    return (
        <div className="drawer drawer-mobile py-5  lg:px-24 bg-slate-300">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ml-3">
                {/* <!-- Page content here --> */}
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Dashboard</label>

            </div>

            <div className="drawer-side border rounded-lg ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto  w-80 lg:w-60 bg-base-100 text-base-content uppercase text-[12px] font-semibold">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to={'/dashboard/my-profile'}>My Profile</Link></li>
                    {
                        !admin && <>
                            
                            <li><Link to={'/dashboard/my-order'}>My Order</Link></li>
                            <li><Link to={'/dashboard/add-review'}>Write A Review</Link></li>
                        </>
                    }

                    {
                        admin && <>
                            <li><Link to={'/dashboard/all-users'}>All Users</Link></li>
                            <li><Link to={'/dashboard/all-orders'}>All Orders</Link></li>
                            <li><Link to={'/dashboard/view-regular-product'}>View Regular Product</Link></li>
                            <li><Link to={'/dashboard/add-regular-product'}>Add Regular Product</Link></li>
                            <li><Link to={'/dashboard/add-discounted-product'}>Add Discounted Product</Link></li>
                        </>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;