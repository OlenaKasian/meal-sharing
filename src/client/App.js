import React from "react";
import Header from "./components/MainPage/Header";
import About from "./components/About/About";
import MealList from "./components/MainPage/MealList";
import Footer from "./components/MainPage/Footer"
import Home from "./components/MainPage/Home";
import Details from "./components/MainPage/Details";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import Newmeal from "./components/MainPage/NewMeal";

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
      <Route exact path={`/meals/:id`}>
        <Details meals={meals} />
      </Route>
      {/*<Route exact path={`/meals/:id/reviews`}>
        <Mealreviews meals={meals} reviews={reviews} />
      </Route>*/}
      <Route exact path="/newmeal">
        <Newmeal />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>


      <Footer />
    </Router>

  );
}

export default App;
