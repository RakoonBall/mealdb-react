import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Seafood from '../Seafood/Seafood';
import Areafood from '../Areafood/Areafood';

import './Home.module.css'

const Banner = () => {
    const seaFoods = useLoaderData().meals;
    // console.log(seaFoods)
    return (
        <div className="p-4">
            <div>
                <div className='p-20'>
                <h1 className='text-7xl mb-10 text-white'>Delicious food made with love</h1>
                <h2 className='text-6xl mb-8 text-white'>Exotic indrigients</h2>
                <h2 className='text-6xl mb-8 text-rose-400 font-semibold'>Get upto 50% discount</h2>
                <button className="btn btn-secondary text-[34px] mb-60">Shop Now</button>
                </div>
            </div>
            <div>
                <Seafood 
                seaFoods ={seaFoods}
                ></Seafood>
            </div>          
            <div>
                <Areafood
                seaFoods ={seaFoods}
                ></Areafood>
            </div>
            
        </div>
    );
};

export default Banner;