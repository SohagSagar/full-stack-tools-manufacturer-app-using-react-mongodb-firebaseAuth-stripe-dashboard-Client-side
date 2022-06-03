import React, { useState } from 'react';
import img from '../../../resources/tire/tire1.png';
import DeleteRegularProductModal from './DeleteRegularProductModal';

const ViewRegularProductRow = ({product,refetch,index}) => {
    const {_id,productName,brand,imageURL,minimumOrder,price,available} = product;
    const [modalStatus, setModalStatus] = useState(true);
    const handleModalStatus = () =>{
        setModalStatus(true);
    }
    return (
        <tr>
            <td>{index+1}</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={imageURL} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{productName}</div>
                        <div className="text-sm opacity-50">{brand}</div>
                    </div>
                </div>
            </td>
            <td>{available}</td>
            <td>{minimumOrder}</td>
            <td>{price}</td>
            <th>
                <>
                    <button className="btn btn-success btn-xs">Details</button>
                    <button className="btn btn-warning btn-xs ml-1">Update</button>
                    <label onClick={handleModalStatus} className="btn btn-error btn-xs ml-1" htmlFor="deleteRegularProductModal">Cencel</label>
                </>
            </th>

            {
                modalStatus && <DeleteRegularProductModal refetch={refetch} _id={_id} setModalStatus={setModalStatus}></DeleteRegularProductModal>
            }
        </tr>
    );
};

export default ViewRegularProductRow;