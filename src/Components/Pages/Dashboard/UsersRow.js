import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import DeleteUserModal from './DeleteUserModal';

const UsersRow = ({ user, index,refetch }) => {
    const { _id, name, email, role } = user;
    const [modalStatus, setModalStatus] = useState(true);

    const onCancel = () =>{
        setModalStatus(true);
    }
    //make an user to an admin
    const makeAdmin = () => {
        fetch(`https://vast-forest-24784.herokuapp.com/user/makeAdmin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount>0){
                    toast.success('REQUEST SUCCESSFUL');
                    refetch();
                }
            })
    }

    //remove an user from admin role
    const removeAdmin = () =>{
        fetch(`https://vast-forest-24784.herokuapp.com/user/removeAdmin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount>0){
                    toast.success('REQUEST SUCCESSFUL');
                    refetch();
                }
            })
    }
    const deleteUser = (id) => {
        console.log(id);
    }
    return (

        <tr>
            <th>{index+1}</th>
            <td>{name ? name : 'N/A'}</td>
            <td>{email}</td>
            <td>{
                role ? <button onClick={removeAdmin} className="btn btn-error  btn-xs">Remove Admin</button>
                    : <button onClick={makeAdmin} className="btn btn-success btn-xs">Make an Admin</button>}</td>
            <td><label onClick={onCancel} htmlFor="deleteUserModal" className="btn btn-xs btn-error ">Cencel</label></td>
            

            {
                modalStatus && <DeleteUserModal _id={_id} refetch={refetch}  setModalStatus={setModalStatus}></DeleteUserModal>
            }
        </tr>

    );
};

export default UsersRow;