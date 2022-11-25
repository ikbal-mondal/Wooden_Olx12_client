import React, { useEffect } from 'react';
import { useState } from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
 
    const [Categories,setCategories] = useState()

    useEffect(() => {
        fetch('http://localhost:5000/Categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
     

    return (
        <div>
          {
            Categories?.map(Category => <CategoryCard
            key={Category.Category_id}
            Category={Category}
            ></CategoryCard>)
          }
        </div>
    );
};

export default Categories;
