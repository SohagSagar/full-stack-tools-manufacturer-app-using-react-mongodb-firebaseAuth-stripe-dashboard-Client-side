import React from 'react';
import toast from 'react-hot-toast';

const DeleteUserModal = ({_id,refetch,setModalStatus}) => {


    const deleteConfirm = () => {
        setModalStatus(false);

        fetch(`https://vast-forest-24784.herokuapp.com/user/${_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('DELETE SUCCESSFUL');
                    refetch();
                }
                else {
                    toast.error('FAIL TO DELETE')
                }
            })



    }
    const deleteCancel = () => {
        setModalStatus(false)
    }
    return (
        <div>
            <input type="checkbox" id="deleteUserModal" className="modal-toggle" />
            <div className="modal modal-middle sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">Are you sure to delete?</h3>
                    <div className='flex justify-center mt-5 modal-action'>
                        <lebel htmlFor="deleteUserModal" onClick={deleteConfirm} className="btn drop-shadow-xl hover:bg-primary hover:text-white btn-sm bg-red-500  border-0  text-white rounded-full px-5 h-10 ">DELETE </lebel>

                        <lebel htmlFor="deleteUserModal" onClick={deleteCancel} className="btn drop-shadow-xl hover:bg-primary hover:text-white btn-sm bg-accent border-0  text-white rounded-full px-5 h-10 ml-2">CENCEL</lebel>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DeleteUserModal;