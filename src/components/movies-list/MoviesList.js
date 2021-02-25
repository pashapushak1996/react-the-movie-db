import React from 'react';
import {MovieItem} from "../movie-item/MovieItem";

const MoviesList = ({movies, getMovieInfo }) => {

    return (
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {movies.map((movie) => <MovieItem getMovieInfo={getMovieInfo} movie={movie}
                                                  key={movie.id}/>)}
            </div>
    );
};


export default MoviesList;


