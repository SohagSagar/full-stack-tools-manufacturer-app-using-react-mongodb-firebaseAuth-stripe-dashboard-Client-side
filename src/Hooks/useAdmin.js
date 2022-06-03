import { useEffect, useState } from "react"

const useAdmin = (user) =>{
    const [admin,setAdmin]= useState(false);
    const email=user?.email;
    useEffect(()=>{
        fetch(`https://vast-forest-24784.herokuapp.com/admin/${email}`)
        .then(res=>res.json())
        .then(data=>setAdmin(data?.admin))
    },[user])
    
    return [admin]
}

export default useAdmin;