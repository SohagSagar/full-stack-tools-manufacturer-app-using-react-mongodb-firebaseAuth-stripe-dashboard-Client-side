import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import UsersRow from './UsersRow';
const AllUsers = () => {

    const {data:users,isLoading,refetch} = useQuery('users', ()=> fetch('http://localhost:5000/all-users',{
        method:'GET',
        headers:{
            'content-type':'application/json',
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()))
    if(isLoading){
        return <Loading/>
    }
    


    



    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full uppercase text-[12px]">
                    
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            [...users].reverse()?.map((user,index)=><UsersRow
                                key={user?._id}
                                index={index}
                                user={user}
                                refetch={refetch}
                            ></UsersRow>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;