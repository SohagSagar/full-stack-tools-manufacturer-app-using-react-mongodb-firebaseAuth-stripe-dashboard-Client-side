import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import ViewRegularProductRow from './ViewRegularProductRow';


const ViewRegularProduct = () => {
    const { data: products, refetch, isLoading } = useQuery('regularProduct', () => fetch('https://vast-forest-24784.herokuapp.com/regular-product', {
        method: 'GET',
        headers: {
            'content-type': 'application-json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }
    return (

        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>
                        
                        <th>SL</th>
                        <th>Name</th>
                        <th>Available</th>
                        <th>Mininum-Order</th>
                        <th>Price($)/Pics</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        [...products].reverse().map((product,index)=><ViewRegularProductRow
                            key={product._id}
                            product={product}
                            refetch={refetch}
                            index={index}
                        ></ViewRegularProductRow>)
                    }
                    
                </tbody>
            </table>
        </div>

    );
};

export default ViewRegularProduct;