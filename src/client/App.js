import React from "react";
import Header from "./MainPage/Header";
import ResearchInput from "./MainPage/ResearchInput";
import MealList from "./MainPage/MealList";
import Footer from "./MainPage/Footer"

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import TestComponent from "./components/TestComponent/TestComponent";

function App() {
  return (
<Header />
<ResearchInput />
<MealList />
<Footer />

    // <Router>
    //   <Route exact path="/">
    //     <p>test</p>
    //   </Route>
    //   <Route exact path="/lol">
    //     <p>lol</p>
    //   </Route>
    //   <Route exact path="/test-component">
    //     <TestComponent></TestComponent>
    //   </Route>
    // </Router>
  );
}

export default App;
