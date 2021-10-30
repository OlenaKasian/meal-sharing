import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import selectFood from './../../assets/images/selectfood.png';


const Details = (props) => {
    const [reserve, setReserve] = React.useState(false);
    const params = useParams();
    const meal = props.meals.filter((m) => m.id == Number(params.id))[0];
    const [guests, setGuests] = useState(1);
    const [contact, setContact] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [reservation, setReservation] = useState({});
    const [availableReservations, setAvailableReservations] = useState(null)

    useEffect(() => {
        fetch(`api/meals?availableReservations=true`)
            .then(res => res.json())
            .then(meals => {
                const meal1 = meals.filter((m) => m.id === Number(params.id))[0];
                setAvailableReservations(meal1 ? meal1.available_reservations : meal.All_reservations)
            })
        if (reserve) {
            fetch("/api/reservations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(reservation),
            })
                .then(res => res.text())
                .then(text => console.log(text))
                .then((data) => {
                    alert('Successfully added your reservation')
                    setReserve(false)
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
    }, [reservation]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const customerInfo = {
            number_of_guests: guests,
            meal_id: Number(params.id),
            created_date: new Date().toISOString,
            contact_phonenumber: contact,
            contact_name: name,
            contact_email: email,
        };
        setReservation(customerInfo);

    };
    return (
        <div className="reserve-page">
            {meal ? <div>
                <p>{meal.title}</p>
                <img className="reserve-picture" src={selectFood} alt="meal photo" />
                <p> id: {meal.id}</p>
                <p> description: {meal.description}</p>
                <p> location: {meal.location}</p>
                <p> max_reservations: {meal.max_reservations}</p>
                <p> price: {meal.price} DKK</p>
                <p> Available Reservations: {availableReservations ? availableReservations : meal.max_reservations}</p>
                <button onClick={() => setReserve(true)}>Reserve</button>
            </div> : "Loading"}

            {reserve ? <>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="no_of_guests">Number of guests</label>
                        <input
                            type="number"
                            min="1"
                            max={availableReservations}
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="contact">Contact number</label>
                        <input
                            type="text"
                            id="contact"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="name">Contact name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div >
                        <label htmlFor="email">Contact email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <button type="submit">Reserve your seats</button>
                    </div>
                </form>
            </> : true
            }
        </div >
    );
}

export default Details;
