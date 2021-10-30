import React, { useState, useEffect } from 'react';
import MealList from './MealList';
import "./Home.css"

const Home = (props) => {
    const [serchPhrase, setSearchPhrase] = useState("")
    const [searchResultMeals, setSearchResultMeals] = useState([])
    const [serchPriceLimit, setSerchPriceLimit] = useState(0)
    const [searchNumberLimit, setSearchNumberLimit] = useState(0)
    const [maximumReservationsAvailable, setMaximumReservationsAvailable] = useState(0)

    useEffect(() => {
        let urlWithoutParameters = '/api/meals?';
        let finalUrl = urlWithoutParameters

        if (serchPhrase) {
            finalUrl += `&title=${serchPhrase}`;
        }
        if (serchPriceLimit) {
            finalUrl += `&maxPrice=${serchPriceLimit}`;
        }
        if (searchNumberLimit) {
            finalUrl += `&limit=${searchNumberLimit}`;
        }
        if (maximumReservationsAvailable) {
            finalUrl += `&maxReservationsAvailable=${maximumReservationsAvailable}`;
        }

        if (finalUrl !== urlWithoutParameters) {
            fetch(finalUrl)
                .then(res => res.json())
                .then(fetchedMeals => {
                    setSearchResultMeals(fetchedMeals)
                })
        }
        else {
            setSearchResultMeals([])
        }
    }, [serchPhrase, serchPriceLimit, searchNumberLimit, maximumReservationsAvailable])

    return (<>
        <div className="mainArea">
            <div className="searchCriteria">
                <input type='text' name="search" placeholder="search meal" onChange={(e) => setSearchPhrase(e.target.value)} />
                <input type='number' name="priceLimit" placeholder="max price" onChange={(e) => setSerchPriceLimit(e.target.value)} />
                <input type='number' name="reservationAvailable" placeholder="max reservations available" onChange={(e) => setMaximumReservationsAvailable(e.target.value)} />
                <input type='number' name="totalLimit" placeholder="max number of meals to show" onChange={(e) => setSearchNumberLimit(e.target.value)} />
            </div>
            <MealList meals={searchResultMeals} />
        </div>
    </>
    );
};

export default Home;
