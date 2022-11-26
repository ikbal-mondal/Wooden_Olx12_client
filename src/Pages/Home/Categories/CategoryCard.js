import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({Category}) => {
    const {name,img,Category_id} = Category
    return (
        <div>
  <div className="card w-96 bg-base-100 shadow-xl image-full">
   <figure><img src={img} alt="Shoes" /></figure>
    <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <div className="card-actions justify-end">
    <Link to={`/Categories/${Category_id}`} className="btn btn-primary"> Show More Items</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default CategoryCard;