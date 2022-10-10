import React from 'react';
import { Link } from 'react-router-dom';

const Shopmeals = ({meal}) => {
    // console.log(meal);
    const {strMealThumb,strMeal,strArea, idMeal  } = meal;
    return (
        <div className='m-auto'>
            <div className="card w-96 glass m-auto">
            <figure><img className='h-[250px] w-full' src={strMealThumb} alt="car!"/></figure>
            <div className="card-body">
                <h2 className="card-title">{strMeal}</h2>
                <h2 className="card-title">{strArea}</h2>
                <p>{meal.strInstructions.slice(0,50)}</p>
                <div className="card-actions justify-end">
                 <Link to={`/shop/${idMeal}`}><button className="btn btn-primary">Details</button></Link>
                
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Shopmeals;