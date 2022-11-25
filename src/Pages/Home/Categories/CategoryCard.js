import React from 'react';

const CategoryCard = ({Category}) => {
    const {name,img} = Category
    return (
        <div>
            <img src={img} alt="" />
            <p>Name:{name}</p>
        </div>
    );
};

export default CategoryCard;