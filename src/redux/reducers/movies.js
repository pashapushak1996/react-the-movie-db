import {moviesService} from '../../services/moviesService'

const {getMovies, getMovie} = moviesService;

const initialState = {
    movies: [],
    movie: null
}

// Movies list action types
const SET_MOVIES = 'SET_MOVIES';

//Movie action type
const SET_MOVIE = 'SET_MOVIE'


//Movies list action creators
export const setMovies = (payload) => ({type: SET_MOVIES, payload});

//Movie action creator
export const setMovie = (payload) => ({type: SET_MOVIE, payload})


//Movies list thunk
export const getMoviesList = () => async (dispatch) => {
    const {data} = await getMovies();
    dispatch(setMovies(data.results));
}

//Movie thunk
export const getMovieInfo = (movieId) => async (dispatch) => {
    const {data} = await getMovie(movieId);
    dispatch(setMovie(data));
}


const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES: {
            return {...state, movies: action.payload}
        }
        case SET_MOVIE: {
            return {...state, movie: action.payload}
        }
        default: {
            return state
        }
    }
};

export default moviesReducer;