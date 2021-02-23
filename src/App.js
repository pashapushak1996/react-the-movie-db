import React from 'react';
import './App.css';
import MoviesList from "./components/movies-list/MoviesList";
import {Header} from "./components/header/Header";
import MovieInfo from "./components/movie-info/MovieInfo";
import {NavLink, Route, Switch,} from "react-router-dom";

function App() {
    return (
        <div>
            <Header/>
                <Route exact={true} path={`/:id`} render={() => <MovieInfo/>}/>
                <Route exact={true} path={`/`} render={()=><MoviesList/>}/>
        </div>
    );
}

export default App;
