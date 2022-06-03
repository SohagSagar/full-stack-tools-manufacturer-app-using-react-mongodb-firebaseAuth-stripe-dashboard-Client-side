import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import DeleteMyOrderedModal from './DeleteMyOrderedModal';

const MyOrderRow = ({ myItem, index, refetch }) => {
    const { _id, productName, totalProductPrice, productQuantity, orderDate, orderStatus, paymentDate, transactionId } = myItem;
    const [modalStatus, setModalStatus] = useState(true);
    const handleModalStatus = () => {
        setModalStatus(true);
    }

    return (
        <tr>
            <th>{index}</th>
            <td>{productName}</td>
            <td>{totalProductPrice}</td>
            <td>{productQuantity}</td>

            {
                orderStatus === 'processing' || orderStatus === 'shipped' ?
                    <td>
                        <><button class="btn btn-success btn-xs w-32">Paid</button></>
                    </td>
                    :
                    <td><>
                        <button disabled="disabled" className="btn btn-xs rounded-pill btn-accent">Unpaid</button>
                        <button className="btn btn-xs btn-success ml-1"><Link to={`/payment/${_id}`}>Pay now</Link></button>
                    </></td>
            }
            <td>
                <><button class="btn btn-info btn-xs">{orderStatus}</button></>
            </td>
            {
                transactionId ? <td>{transactionId}</td> : <td>N/A</td>
            }

            <td>{orderDate}</td>
            {
                paymentDate ? <td>{paymentDate}</td> :
                    <td>N/A</td>
            }


            {
                orderStatus === 'processing' || orderStatus === 'shipped' ?
                    <td><>
                        <button disabled="disabled" className="btn btn-xs rounded-pill btn-secondary">Update</button>
                        <label disabled="disabled" onClick={handleModalStatus} htmlFor="deleteMyOrderModal" className="btn btn-xs btn-error ml-1">Cencel</label>
                    </></td>
                    :

                    <td><>
                        <button className="btn btn-xs rounded-pill btn-secondary">Update</button>
                        <label onClick={handleModalStatus} htmlFor="deleteMyOrderModal" className="btn btn-xs btn-error ml-1">Cencel</label>
                    </></td>
            }


            {
                modalStatus &&
                <DeleteMyOrderedModal _id={_id} setModalStatus={setModalStatus} refetch={refetch}></DeleteMyOrderedModal>
            }
        </tr>
    );
};

export default MyOrderRow;