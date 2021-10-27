import React from "react";
import { Link } from 'react-router-dom';
import selectFood from './../../assets/images/selectfood.png';
import "./Home.css"

function MealList(props) {
    return (
        <div>
            <div>
                <img src={selectFood} alt="meal photo" id="meal-photo" className="imagePic" />
            </div>
            <ul className="row">
                {props.meals.map((meal) => (
                    <div className="column">
                        <li key={meal.id} className="card">
                            <p>
                                id: {meal.id}</p>
                            <p> title: {meal.title}</p>
                            <p> description: {meal.description}</p>
                            <p> location: {meal.location}</p>
                            <p> max_reservations: {meal.max_reservations}</p>
                            <p> price: {meal.price}

                            </p>
                            <button><Link to={`/meals/${meal.id}`}>More Details</Link></button>
                            <hr />
                        </li></div>
                ))}
            </ul>
            {/* <div className="container">
                <h2>Name1 food</h2>
                <p>Very good food</p>
                <p>Location: Denmark </p>
                <p>Price: 120 DKK</p>
                <a className="btn-link bgn-green" href="////">Book Meal</a>
            </div> */}
        </div >

    );
}

export default MealList;
