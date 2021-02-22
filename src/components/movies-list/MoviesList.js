import React, {useEffect, useState} from 'react';
import {getMovieInfo, getMoviesList} from "../../redux/reducers/movie-lists";
import {connect} from "react-redux";
import {MovieItem} from "../movie-item/MovieItem";

const MoviesList = ({movies, getMoviesList,getMovieInfo}) => {

    useEffect(() => {
        getMoviesList()
    }, []);

    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {movies.map((movie) => <MovieItem getMovieInfo={getMovieInfo}  movie={movie}
                                              key={movie.id}/>)}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        movies: state.moviesList.movies
    }
};

export default connect(mapStateToProps, {
    getMoviesList, getMovieInfo
})(MoviesList)


