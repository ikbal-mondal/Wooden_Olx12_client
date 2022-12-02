import { useQuery } from '@tanstack/react-query';
import CategoryCard from './CategoryCard';

const Categories = () => {
 
    // const [Categories,setCategories] = useState()
    
    const {data:Categories = []} = useQuery({
      queryKey: ['https://wooden-olx12-server.vercel.app/Categories'],
      queryFn: () => fetch('https://wooden-olx12-server.vercel.app/Categories')
      .then(res => res.json())
    })

 
     

    return (
        <>
         <h1 className='text-2xl ml-2 font-semibold border-b-2 border-cyan-500 inline '>Product Category</h1>
        <div className="grid lg:grid-cols-3   md:grid-cols-2 sm:grid-cols-2 my-12   gap-6 container mx-auto ">
          {
            Categories?.map(Category => <CategoryCard
            key={Category.Category_id}
            Category={Category}
            ></CategoryCard>)
          }
        </div>
        </>
    );
};

export default Categories;
