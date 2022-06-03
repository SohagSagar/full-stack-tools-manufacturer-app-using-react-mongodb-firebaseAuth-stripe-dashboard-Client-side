import { useEffect, useState } from 'react';
import { useQuery } from 'react-query'

const useRegularProducts=()=>{

    const [regularProducts,setRegularProducts]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/regularProducts',{
            method:'GET',
            headers:{
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>setRegularProducts(data?.reverse()))
    },[])


    // const {data:regularProducts,isLoading} = useQuery('regularProducts',()=>
    //     fetch('http://localhost:5000/regularProducts').then(res=>res.json())
    // )
    // if(isLoading){
    //     return;
    // }
    

    return [regularProducts];


    
    
}
export default useRegularProducts;