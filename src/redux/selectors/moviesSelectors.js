export const getMovieFromState = (state) => {
    return state.moviesReducer.movie
};

export const getMoviesListFromState = (state) => {
    return state.moviesReducer.movies;
};

export const getIsLoadingFromState = (state) => {
    return state.moviesReducer.isLoading;
};

export const getTotalPageFromState = (state) => {
    return state.moviesReducer.total_pages;
};

export const getTotalResultsPageFromState = (state) => {
    return state.moviesReducer.total_results;
};

export const getCurrentPageFromState = (state) => {
    return state.moviesReducer.page;
};