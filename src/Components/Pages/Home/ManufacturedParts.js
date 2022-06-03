import useRegularProducts from '../../../Hooks/useRegularProducts';
import SectionHeading from '../../Shared/SectionHeading';
import PartsCard from '../../Pages/Home/PartsCard'
import { useQuery } from 'react-query';

const ManufacturedParts = () => {
    const [regularProducts]=useRegularProducts();

    //Try to use useQuery:::::

    // const {data:regularProducts,isLoading} = useQuery('regularProducts',()=>
    //     fetch('https://vast-forest-24784.herokuapp.com/regularProducts').then(res=>res.json())
    // )
    // if(isLoading){
    //     return;
    // }

    return (
        <div className='lg:px-24'>
            <SectionHeading>Manufactured Items</SectionHeading>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 justify-items-center'>


                {
                  regularProducts &&   regularProducts.slice(0,6).map(product =>
                        <PartsCard
                            key={product?._id}
                            product={product}>

                        </PartsCard>)
                }



            </div>
        </div>
    );
};

export default ManufacturedParts;