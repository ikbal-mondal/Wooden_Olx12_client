import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';


const Home = () => {
    return (
        <div>
          
            <Banner></Banner>
             <Categories></Categories>
             <div className="text-center">
                <h1 className='text-2xl'>Gallery</h1>
                <progress className="progress  w-56"></progress>
             </div>
             <section className="py-6 dark:bg-gray-800">
	     <div className="container flex flex-col justify-center p-4 mx-auto">
	  	 <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://i.ibb.co/p3nqCz0/newbead.webp" />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://i.ibb.co/qrm9GzH/newbead2.jpg" />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://i.ibb.co/p09qbGd/office1.webp" />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://i.ibb.co/bvMRpp9/office2.webp" />
		</div>
	</div>
</section>
           
        </div>
    );
};

export default Home;