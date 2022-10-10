import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MealDetail = () => {
    const mealDetail = useLoaderData().meals;

    // mealDetail = mealDetail[0];
    console.log(mealDetail[0])
    const {strArea,strCategory,strIngredient1, strIngredient2, strIngredient3, strIngredient4,strIngredient5, strIngredient6, strMeal,strMealThumb, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strInstructions    }=mealDetail[0];
    return (
        <div className='flex gap-6 mt-8 w-[90%] m-auto border bg-rose-100 rounded-xl p-5'>
           
            <div>
                <img className='w-[45rem] rounded-xl' src={strMealThumb} alt="this is meal" />
            </div>
            <div className='bg-rose-200 p-3 rounded-xl w-full'>
                <h1 className='text-4xl mb-1 font-bold'> {strMeal} </h1>
                <h2 className='text-3xl mb-1'>Category: {strCategory}</h2>
                <h2 className='text-3xl mb-1'>Area: {strArea}</h2>
                <h2 className='text-3xl mb-1 bg-rose-400 rounded-xl p-1'>Recipe::</h2>
                <div className='grid grid-cols-2 bg-rose-300 rounded-xl mt-2'>
                    <div className='p-2 '>
                        <h2 className='text-3xl'>Ingridients</h2>
                        <p className='text-2xl text-gray-600'>{strIngredient2}</p>
                        <p className='text-2xl text-gray-600'>{strIngredient3}</p>
                        <p className='text-2xl text-gray-600'>{strIngredient4}</p>
                        <p className='text-2xl text-gray-600'>{strIngredient5}</p>
                        <p className='text-2xl text-gray-600'>{strIngredient1}</p>
                        <p className='text-2xl text-gray-600'>{strIngredient6}</p>
                    </div>
                    <div>
                        <h2 className='text-3xl'>Amount</h2>
                        <p className='text-2xl text-gray-600'>{strMeasure1}</p>
                        <p className='text-2xl text-gray-600'>{strMeasure2}</p>
                        <p className='text-2xl text-gray-600'>{strMeasure3}</p>
                        <p className='text-2xl text-gray-600'>{strMeasure4}</p>
                        <p className='text-2xl text-gray-600'>{strMeasure5}</p>
                        <p className='text-2xl text-gray-600'>{strMeasure6}</p>
                    </div>
                
                </div>
                <p></p>
            </div>


        </div>
    );
};

export default MealDetail;