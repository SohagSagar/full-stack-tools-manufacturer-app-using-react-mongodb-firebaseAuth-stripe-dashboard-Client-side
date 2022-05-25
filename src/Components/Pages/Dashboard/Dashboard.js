import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile py-5 lg:px-24 bg-slate-300">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                
                <Outlet />
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open kkkkkkkkkkkkkkkkkkkkdrawer</label>

            </div>

            <div class="drawer-side border rounded-lg ">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 lg:w-60 bg-base-100 text-base-content uppercase text-[12px] font-semibold">

                    {/* <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li> */}

                    <li><Link to={'/dashboard/my-profile'}>My Profile</Link></li>
                    <li><Link to={'/dashboard/my-order'}>My Order</Link></li>
                    <li><Link to={'/dashboard/add-review'}>Write A Review</Link></li>
                    <li><Link to={'/dashboard/add-regular-product'}>Add Regular Product</Link></li>
                    <li><Link to={'/dashboard/add-discounted-product'}>Add Discounted Product</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;