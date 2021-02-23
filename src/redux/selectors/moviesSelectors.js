export const getMovieFromState = (state) => {
    return state.moviesReducer.movie
};

export const getMoviesListFromState = (state) => {
    return state.moviesReducer.movies
};