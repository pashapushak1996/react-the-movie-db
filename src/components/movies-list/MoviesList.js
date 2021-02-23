import React, {useEffect} from 'react';
import {getMovieInfo, getMoviesList} from "../../redux/reducers/movies";
import {connect} from "react-redux";
import {MovieItem} from "../movie-item/MovieItem";
import {getMoviesListFromState} from "../../redux/selectors/moviesSelectors";
import {getGenres} from "../../redux/reducers/genres";
import {getGenresFromState} from "../../redux/selectors/genresSelectors";

const MoviesList = ({movies, getMoviesList, getMovieInfo, getGenres, genres}) => {
    useEffect(() => {
        // getGenres();
        getMoviesList();
    }, []);

    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {movies.map((movie) => <MovieItem genres={genres} getMovieInfo={getMovieInfo} movie={movie}
                                              key={movie.id}/>)}
            {movies.map((movie) => movie.genre_ids.map((el) => genres.filter((ss) => {
                if (el === ss.id) {
                    return console.log(ss)
                }
            })))}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        movies: getMoviesListFromState(state),
        genres: getGenresFromState(state)
    }
};

export default connect(mapStateToProps, {
    getMoviesList, getMovieInfo, getGenres
})(MoviesList)


