import React from 'react';
import './App.css';
import MoviesList from "./components/movies-list/MoviesList";
import {Header} from "./components/header/Header";

function App() {
    return (
        <div>
            <Header/>
            <MoviesList/>
        </div>
    );
}

export default App;
