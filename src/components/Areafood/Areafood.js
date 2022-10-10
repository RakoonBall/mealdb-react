import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Areafood = () => {
    const areaFoods = useLoaderData();
    // const [areaFoods, SetAreaFoods]= useState([]);
    // useEffect(()=>{
    //     fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`)
    //     .then(res => res.json())
    //     .then(data => SetAreaFoods(data))
    //     console.log(areaFoods);
    // },[areaFoods])
    console.log(areaFoods.meals);
    return (
        <div className='bg-rose-50 rounded-xl pt-1 shadow-orange-xl-400 mt-10 w-[95%] m-auto mb-20'>

             <h1 className='text-5xl mt-10 mb-6 ml-5 font-semibold '><span className='bg-rose-200 text-white p-1 rounded shadow-xl'>Food Across the globe</span> </h1>
            <p className='text-2xl mr-[300px] ml-20 bg-rose-100 shadow-lg rounded-md p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, enim delectus quae natus deleniti sint aliquam deserunt totam! Fugit, eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quidem!</p>

            <div className="carousel carousel-center w-[90%] m-auto p-5 space-x-4 bg-rose-50 rounded-box">
  <div className="carousel-item">
    {
        areaFoods.meals.map(areaFood =>{

          return  <img src={areaFood.strMealThumb
          } className="rounded-box h-80" alt='hello' />
         
        })
    }
  </div> 
</div>
        </div>
       
    );
};

export default Areafood;