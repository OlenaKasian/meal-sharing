import React, { useState, useEffect } from 'react';

const Newmeal = () => {

    const [newMeal, setNewMeal] = useState();
    const [title, setTitle] = useState("");
    const date = new Date();
    const [maxReservations, setMaxReservations] = useState();
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [when, setWhen] = useState();
    const [price, setPrice] = useState();

    useEffect(() => {

        if (newMeal) {
            fetch("/api/meals", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newMeal),
            })
                .then(res => res.text())
                .then(text => console.log(text))
                .then((data) => {
                    alert('Successfully added your meal')
                    window.location.href = '/meals'
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
    }, [newMeal]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const mealInfo = {
            "title": title,

            "max_reservations": maxReservations,
            "description": description,
            "location": location,
            "when": when,
            "price": price
        };
        setNewMeal(mealInfo);

    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input id="title" type="text" required onChange={(e) => setTitle(e.target.value)} />

                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <input id="description" type="text" required onChange={(e) => setDescription(e.target.value)} />

                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="location">Location</label>
                        <input id="location" type="text" required onChange={(e) => setLocation(e.target.value)} />

                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="price">Price</label>
                        <input id="price" type="number" min="1" required onChange={(e) => setPrice(e.target.value)} />

                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="max_reservations">Maximum Reservations Available</label>
                        <input id="max_reservations" type="number" min="1" required onChange={(e) => setMaxReservations(e.target.value)} />

                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="when">Available Date</label>
                        <input id="when" type="date" required min={date} onChange={(e) => setWhen(e.target.value)} />

                    </div>
                </div>
                <button type="submit" name="action">Create A Meal</button>
            </form>
        </div>
    );
}

export default Newmeal;
