import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query"
import Loading from "../Components/Shared/Loading";

const useDeleteItem = (url) => {
    const [deleteStatus, setDeleteStatus] = useState(false);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    setDeleteStatus(true)
                }
                else {
                    setDeleteStatus(false)
                }
            })
    },[url])

    // const { data, isLoading } = useQuery('delete', () => fetch(url, {
    //     method: 'DELETE',
    //     headers: {
    //         'content-type': 'application/josn'
    //     }
    // })).then(res => res.json())

    // if (data.deletedCount > 0) {
    //     setDeleteStatus(true)

    // }
    // else {
    //     setDeleteStatus(false)
    //     toast.error('FAIL TO DELETE')
    // }

    return [deleteStatus];
}
export default useDeleteItem;