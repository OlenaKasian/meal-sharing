import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bg from './../../assets/images/mainbackround.png'

const Home = (props) => {
    const [search, setSearch] = useState("")
    const [meals, setMeals] = useState([])
    useEffect(() => {
        if (search) {
            fetch(`/api/meals?title=${search}`)
                .then(res => res.json())
                .then(data => {
                    setMeals(data)
                })
        }
    }, [search])

    return (<>


        <div><hr />
            <input type='text' placeholder="search for meal" onChange={(e) => setSearch(e.target.value)} />
            <hr />
            <div>

                {meals.map((meal) => (
                    <div key={meal.id}>

                        <span >{meal.title}</span>
                        <p>{meal.description}</p>

                        <div >
                            <Link to={`/meals/${meal.id}`}>Details</Link>
                        </div>
                    </div>


                ))}
            </div>
        </div>


        <img src={bg} alt="background-image" className="center" />

    </>
    );
};


export default Home;
