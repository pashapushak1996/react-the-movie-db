import {moviesService} from '../../services/moviesService'
import {genresService} from "../../services/genresService";

const {getMovies, getMovie} = moviesService;
const {getGenres} = genresService;

const initialState = {
    movies: [],
    movie: null,
    isLoading: false
}

// Movies list action types
const SET_MOVIES = 'SET_MOVIES';

//Movie action type
const SET_MOVIE = 'SET_MOVIE';

// Loading action type
const SET_IS_LOADING = 'SET_IS_LOADING';


//Movies list action creators
export const setMovies = (payload) => ({type: SET_MOVIES, payload});

//Movie action creator
export const setMovie = (payload) => ({type: SET_MOVIE, payload});

//Loading action creator
export const setIsLoading = (payload) => ({type: SET_IS_LOADING, payload});

//Movies list thunk
export const getMoviesList = () => async (dispatch) => {
    try {
        dispatch(setIsLoading(true));
        const request = [await getGenres(), await getMovies()];

        //method promise all return all promises response;

        let [genres, movies] = await Promise.all(request);

        //Merge movies with genres

        const movieWithGenres = movies.data.results.map((movie) => {
            const mergedMovieGenre = movie.genre_ids.map((id) => genres.data.genres.find((genre) => {
                if (id === genre.id) {
                    return genre
                }
            }));
            return {...movie, genres: mergedMovieGenre}
        });
        dispatch(setMovies(movieWithGenres));
    } catch (e) {
        console.log(e);
    } finally {
        dispatch(setIsLoading(false));
    }
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
        case SET_IS_LOADING: {
            return {...state, isLoading: action.payload}
        }
        default: {
            return state
        }
    }
};

export default moviesReducer;