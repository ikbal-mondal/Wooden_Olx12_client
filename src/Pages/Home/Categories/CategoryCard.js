import React from 'react';

const CategoryCard = ({Category}) => {
    const {name,img} = Category
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"> Show More Items</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CategoryCard;