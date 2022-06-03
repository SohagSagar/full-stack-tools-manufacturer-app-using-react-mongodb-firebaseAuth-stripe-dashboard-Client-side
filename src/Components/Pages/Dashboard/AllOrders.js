import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import AllOrdersRow from './AllOrdersRow';


const AllOrders = () => {
    const { data: orders, isLoading } = useQuery('orders', () => fetch('https://vast-forest-24784.herokuapp.com/orders', {
        method: 'GET',
        headers:{
            'content-type':'application/json',
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }

    }).then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }
    return;
    console.log(orders.length);
    return (
        <div class="overflow-x-auto w-full">
            <table class="table w-full">
            
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Product Info</th>
                        <th>Customer Info</th>
                        <th>Order Status</th>
                        <th>Payment Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        orders?.map(order=><AllOrdersRow
                            key={order._id}
                            
                            order={order}
                        ></AllOrdersRow>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllOrders;