import React, { useState, useEffect } from 'react';
import App from '../App';
import './Food.css';
import FoodInfo from './Food-info/FoodInfo';
import Cart from '../Cart/Cart';

const Food = () => {
    const [foods, setFoods] = useState([])
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('https://themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => setFoods(data.meals));
    },[])
    console.log(foods);

    const handlerAddToCart = (food) =>{
        console.log(food);
        const newCart = [...cart, food]
        setCart(newCart)
    }
    return (
        <div className='food-container'>
            <div>
            {
                foods.map(food => <FoodInfo
                key={food.id}
                food = {food}
                handlerAddToCart = {handlerAddToCart}
                ></FoodInfo>)
            }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Food;