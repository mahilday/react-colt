import React from "react";
import Navbar from "./components/layout/Navbar";
import Anime from "./homepage/anime.js";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./components/auth/SignIn/SignIn";
import SignUp from "./components/auth/signup/signup";
import AddFood from "./components/layout/AddFood";
import Explore from "./components/layout/Explore"

function App() {
  const background = "#7e1f1f";
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <div>
                <Navbar />
                <Anime />
              </div>
            )}
          />
          <Route
            path="/signin"
            render={(props) => (
              <div>
                <Navbar background={background} {...props} />
                <SignIn />
              </div>
            )}
          />
          <Route
            path="/signup"
            render={(props) => (
              <div>
                <Navbar background={background} {...props} />
                <SignUp />
              </div>
            )}
          />
          <Route
            path="/explore"
            render={(props) => (
              <div>
                <Navbar background={background} {...props} />
                <Explore /> 
              </div>
            )}
          />
          <Route
            exact
            path="/addnewfoodseverynowandthentothefirestoredatabase"
            render={(props) => (
              <div>
                <Navbar background="black" {...props} />
                <AddFood />
              </div>
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
