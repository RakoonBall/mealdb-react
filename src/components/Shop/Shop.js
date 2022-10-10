import React, { useEffect, useState } from 'react';
import ShopBanner from '../ShopBanner/ShopBanner';
// import { useLoaderData } from 'react-router-dom';
import Shopmeals from '../Shopmeals/Shopmeals';
import './Shop.css'

const Shop = ({search}) => {
   
    // const meals = useLoaderData();
    const [meals, setMeals] = useState([]);
    useEffect(()=>{
        const interval = setInterval(()=>{
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
            console.log(meals);
            console.log(search)
        },1000)
        return()=>{
            clearInterval(interval);
        } 
    },[search, meals])
    
    
    
    return (
        <div className='m-auto'>
            <ShopBanner></ShopBanner>
            <div className='grid grid-cols-3 gap-6 mt-10'>
           {
            meals?.map(meal =>
                <Shopmeals  meal={meal}>

                </Shopmeals>
            )
           }
            </div>
        </div>
    );
};

export default Shop;