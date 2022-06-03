import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../FirebaseAPI/firebase.init';
import Loading from '../../Shared/Loading';
import { useQuery } from 'react-query'
import MyOrderRow from './MyOrderRow';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
const MyOrder = () => {
    const [user] = useAuthState(auth)
    const navigate=useNavigate()

    const { data:myItems, isLoading,refetch } = useQuery('myItems', () => 
        fetch(`https://vast-forest-24784.herokuapp.com/my-order?customerEmail=${user?.email}`,{
            method:'GET',
            headers:{
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            if(res.status===401 || res.status===403){
                navigate('/login');
                signOut(auth);
                localStorage.removeItem('accessToken')
                toast.error('UnAuthorized Access !!')
            }
           return res.json()
        })
    )

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full uppercase font-semibold text-[12px]">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Product Name</th>
                            <th>Price($)</th>
                            <th>Quantity</th>
                            <th>Payment Status</th>
                            <th>Order Status</th>
                            <th>Transction ID</th>
                            <th>Order Date</th>
                            <th>Payment Date</th>
                            
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            [...myItems]?.reverse().map((myItem,index) =>
                                <MyOrderRow
                                    key={myItem?._key}
                                    myItem={myItem}
                                    index={index+1}
                                    refetch={refetch}
                                ></MyOrderRow>

                            )
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;