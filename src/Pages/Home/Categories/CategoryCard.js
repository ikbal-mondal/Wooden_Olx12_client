import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({Category}) => {
    const {name,img,Category_id} = Category
    return (
        <div>
  <div className="card h-40 shadow-purple-400 bg-gradient-to-r from-secondary to-slate-00 border-0 shadow-xl image-full">
   <figure><img src={img} alt="Shoes" /></figure>
    <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <div className="card-actions justify-end">
    <Link to={`/Categories/${Category_id}`} className="btn bg-gradient-to-r from-primary to-secondary border-0"> Show More Items</Link>
    </div>
  </div>
</div>

{/* <div className="card  shadow-purple-400 bg-gradient-to-r from-slate-100 to-slate-200 border-0   shadow-xl">
  <div className="card-body">
    <h1 className='text-xl'>{name}</h1>
    <div className="card-actions justify-end">
    <Link to={`/Categories/${Category_id}`} className="btn bg-gradient-to-r text-black from-slate-100 to-slate-200 border-0  shadow-2xl shadow-slate-900"> Show More Items</Link>
    </div>
  </div>
</div> */}





        </div>
    );
};

export default CategoryCard;