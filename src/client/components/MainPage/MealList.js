import React from "react";

function MealList() {
    return (
        <nav>
            <div>
                <img src="src/frontend/assets/images/select food.jpg" alt="meal photo" id="meal-photo" />
            </div>
            <div className="container">
                <h2>Name1 food</h2>
                <p>Very good food</p>
                <p>Location: Denmark </p>
                <p>Price: 120 DKK</p>
                <a class="btn-link bgn-green" href="////">Book Meal</a>
            </div>
        </nav >

    );
}

export default MealList;