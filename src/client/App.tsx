import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { IMovies } from "./utils/Movietypes"
import { ICommercial } from "./utils/Commericialstypes"
import Home from "./Home"
import MovieCard from "./MovieCard";
import CommercialCard from "./CommercialCard"
import newMovie from "./newMovie"
import newCommercial from "./newCommercial"

export default function App() {
    return (
        <Router>
            <main className="container my-5">
                <h1 className="text-primary text-center">Welcome to the William Shatner Catalog!</h1>
                

            </main>

                

            <Switch>
                <Route exact path="/" component={Home}></Route>
                {/* <Route exact path = "/MovieHome" component= {MovieHome}></Route> */}
                <Route exact path="/CommercialCard" component={CommercialCard}></Route>
                <Route exact path="/newMovie" component={newMovie}></Route>
                <Route exact path="/MovieCard" component={MovieCard}></Route>
                <Route exact path = "/newCommercial" component={newCommercial}></Route>
               
                {/* <Route exact path = "/newCommercial" component = {newCommercial}></Route> */}
                {/* <Route exact path="/movie/:id/admin" component={singleMovie}></Route> */}
                {/* <Route exact path="/commercial/:id/admin" component={singleCommercial}></Route> */}
            </Switch>
        </Router>
    )
}





