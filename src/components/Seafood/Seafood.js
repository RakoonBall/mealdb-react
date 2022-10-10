import React from 'react';

const Seafood = ({seaFoods}) => {
    const {strMealThumb} = seaFoods;
    console.log(seaFoods)
    
    return (
        <div className='bg-cyan-50 rounded-xl pt-1 shadow-orange-xl-400 mt-10 w-[95%] m-auto' >
            <h1 className='text-5xl mt-10 mb-6 ml-5 font-semibold '><span className='bg-cyan-200 text-white p-1 rounded shadow-xl'>Fresh Food from the Sea</span> </h1>
            <p className='text-2xl mr-[300px] ml-20 bg-cyan-100 shadow-lg rounded-md p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, enim delectus quae natus deleniti sint aliquam deserunt totam! Fugit, eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quidem!</p>
            <div className="carousel carousel-center w-[90%] m-auto mb-5  p-5 space-x-4 bg-cyan-50 rounded-box">
  <div className="carousel-item">
    {
        seaFoods.map(seaFood =>{

          return  <img src={seaFood.strMealThumb} className="rounded-box h-80" alt='hello' />
         
        })
    }
  </div> 
</div>
        </div>
    );
};

export default Seafood;