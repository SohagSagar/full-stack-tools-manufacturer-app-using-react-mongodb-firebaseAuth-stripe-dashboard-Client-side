import React from 'react';
import toast from 'react-hot-toast';
import demoProduct from '../../../resources/demo-product.jpg'
const AllOrdersRow = ({ index, order,refetch }) => {
    const { _id,image, productName, productQuantity, totalProductPrice, paymentStatus, orderStatus, customerName, customerEmail } = order;  

    const handleShipped =(_id)=>{
        const paymentSuccessInfo={
            orderStatus:'shipped'
        }
        fetch(`http://localhost:5000/order/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(paymentSuccessInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                toast.success('REQUEST SUCCESSFULL');
                refetch();
            }
            else{
                toast.error('FAIL TO PROCESS');
            }
        })
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                            {
                                image ? <img src={image} alt="Avatar Tailwind CSS Component" />
                                    :
                                    <img src={demoProduct} alt="Avatar Tailwind CSS Component" />
                            }

                        </div>
                    </div>
                    <div>
                        <div class="font-bold">{productName}</div>
                        <div class="text-sm opacity-50">Quantity:{productQuantity};Total Price:{totalProductPrice}</div>
                    </div>
                </div>
            </td>
            <td>
                {customerName}
                <br />
                <span class="badge badge-ghost badge-sm">{customerEmail}</span>
            </td>

            <th>
                {
                    !orderStatus && <button class="btn btn-info btn-xs">N/A</button>
                }
                {
                    orderStatus === 'pending' && <button class="btn btn-info btn-xs">{orderStatus}</button>

                }

                {
                    orderStatus === 'processing' &&
                    <>
                        <button disabled="disabled" class="btn btn-info btn-xs">{orderStatus}</button>
                        <button onClick={()=>handleShipped(_id)} class="btn btn-info btn-xs ml-1">Ready to shipped</button>
                    </>
                }
                {
                    orderStatus === 'shipped' &&
                    <button disabled="disabled" class="btn btn-info btn-xs">{orderStatus}</button>
                }
            </th>
            {
                paymentStatus ? <td><button  class="btn btn-success w-28 btn-xs">{paymentStatus}</button></td>:
                <td><button class="btn btn-xs">N/A</button></td>
            }
            

            <td>
                <>
                    <button class="btn btn-error btn-xs">Cancel</button>
                </>
            </td>
        </tr>
    );
};

export default AllOrdersRow;