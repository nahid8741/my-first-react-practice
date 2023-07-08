import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseFloodWater} from '@fortawesome/free-solid-svg-icons'
import './FoodInfo.css';

const FoodInfo = (props) => {
    console.log(props);
    const {strMealThumb, strArea} = props.food;
    const handlerAddToCart = props.handlerAddToCart;
    return (
        <div className='food'>
            <img  src={strMealThumb} alt="" />
             <h4>Area: {strArea}</h4>
              <button className='btn-meal' onClick={() =>handlerAddToCart(props.food)}>
                Meal Add
                <FontAwesomeIcon icon={faHouseFloodWater}/>
                </button>
            
        </div>
    );
};

export default FoodInfo;