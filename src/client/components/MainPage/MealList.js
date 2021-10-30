import React from "react";
import { Link } from 'react-router-dom';
import selectFood from './../../assets/images/selectfood.png';
import "./Home.css"

function MealList(props) {
    return (
        <div>
            <ul className="row">
                {props.meals.map((meal) => (
                    <div key={meal.id} className="column">
                        <li key={meal.id} className="card">
                            <p> {meal.title}</p>
                            <img src={selectFood} alt="meal photo" id="meal-photo" className="imagePic" />
                            <p> {meal.description}</p>
                            <p> location: {meal.location}</p>
                            <p> max_reservations: {meal.max_reservations}</p>
                            <p> price: {meal.price}</p>
                            <button><Link to={`/meals/${meal.id}`}>More Details</Link></button>
                            <hr />
                        </li>
                    </div>
                ))}
            </ul>
        </div >
    );
}

export default MealList;
