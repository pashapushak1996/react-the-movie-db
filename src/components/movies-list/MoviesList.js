import React, {useEffect} from 'react';
import {getMovieInfo, getMoviesList} from "../../redux/reducers/movies";
import {connect} from "react-redux";
import {MovieItem} from "../movie-item/MovieItem";
import {getIsLoadingFromState, getMoviesListFromState} from "../../redux/selectors/moviesSelectors";
import {getGenres} from "../../redux/reducers/genres";
import {getGenresFromState} from "../../redux/selectors/genresSelectors";

const MoviesList = ({movies, getMoviesList, getMovieInfo, isLoading, genres, getGenres}) => {

    useEffect(() => {
        // getGenres();
        getMoviesList();
    }, []);

    //Merge genres with movie

    // const movieWithGenres = movies.map((movie) => {
    //     const mergedMovieGenre = movie.genre_ids.map((id) => genres.find((genre) => {
    //         if (id === genre.id) {
    //             return genre
    //         }
    //     }));
    //     return {...movie, genres: mergedMovieGenre}
    // });


    return (
        isLoading ? <h1>Loading...</h1> :
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {movies.map((movie) => <MovieItem getMovieInfo={getMovieInfo} movie={movie}
                                                           key={movie.id}/>)}
            </div>
    );
};

const mapStateToProps = (state) => {
    return {
        movies: getMoviesListFromState(state),
        genres: getGenresFromState(state),
        isLoading: getIsLoadingFromState(state)
    }
};

export default connect(mapStateToProps, {
    getMoviesList, getMovieInfo, getGenres
})(MoviesList)


