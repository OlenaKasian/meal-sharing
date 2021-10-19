import React from "react";

function Reservation() {
    return (
        <>
           <img src="src/frontend/assets/images/select food.jpg" alt="meal photo" id="reservation-meal-photo" />

            <div className="res-container">
                <h2>Name1 food</h2>
                <p>Very good food</p>
                <p>Location: Denmark </p>
                <p>Price: 120 DKK</p>
                <a class="btn-link bgn-green" href="////">Book Meal</a>
            </div>
            <div>
                <input id="full_name" type="text" />
                <label>Full name</label>
                <input id="e-mail" type="text" />
                <label>E-mail</label>
                <input id="phone" type="text" />
                <label>Phone</label>
                <input id="Quantity" type="text" />
                <label>Quantity</label>
                <div>
                    <button>Reserve</button>
                </div>
            </div>
        </>

    );
}

export default Reservation;