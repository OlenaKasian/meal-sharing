import React from "react";
import Header from "./components/MainPage/Header";

import MealList from "./components/MainPage/MealList";
import Footer from "./components/MainPage/Footer"
import Home from "./components/MainPage/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";

function App() {
  const [meals, setMeals] = React.useState([]);
  const [reviews, setReviews] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/meals")
      .then((res) => res.json())
      .then((data) => {
        setMeals(data);
      });
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <Router><Header />
      <Route exact path="/">
        <Home meals={meals} reviews={reviews} />
      </Route>
      <Route exact path="/meals">
        <MealList meals={meals} />
      </Route>
     


      <Footer />
    </Router>

  );
}

export default App;

