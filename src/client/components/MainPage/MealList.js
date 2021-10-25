import React from "react";
import selectFood from './../../assets/images/selectfood.png';

function MealList() {
    return (
        <nav>
            <div>
                <img src={selectFood} alt="meal photo" id="meal-photo" />
            </div>
            <div className="container">
                <h2>Name1 food</h2>
                <p>Very good food</p>
                <p>Location: Denmark </p>
                <p>Price: 120 DKK</p>
                <a className="btn-link bgn-green" href="////">Book Meal</a>
            </div>
        </nav >

    );
}

export default MealList;
