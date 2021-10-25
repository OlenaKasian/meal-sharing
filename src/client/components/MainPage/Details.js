import React from 'react';
import { useParams } from 'react-router';
import selectFood from './../../assets/images/selectfood.png';
import { Link } from 'react-router-dom';

const Details = (props) => {
    const params = useParams();
    const meal = props.meals.filter((m) => m.id == Number(params.id))[0];

    return (
        <div>
            <div>
                <img src={selectFood} alt="meal photo" id="meal-photo" />
            </div>
            {meal ? <div>

                <p>
                    id: {meal.id}</p>
                <p> title: {meal.title}</p>
                <p> description: {meal.description}</p>
                <p> location: {meal.location}</p>
                <p> max_reservations: {meal.max_reservations}</p>
                <p> price: {meal.price}

                </p>
                <button><Link to={`/meals/${meal.id}`}>More Details</Link></button>


            </div> : "Loading"}
        </div>
    );
}

export default Details;
