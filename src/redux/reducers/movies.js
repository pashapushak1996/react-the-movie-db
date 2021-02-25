import {moviesService} from '../../services/moviesService'
import {genresService} from "../../services/genresService";

const {getMovies, getMovie} = moviesService;
const {getGenres} = genresService;

const initialState = {
    movies: [],
    movie: null,
    isLoading: false,
    total_pages: null,
    total_results: null,
    page: null,
};


const SET_MOVIES = 'SET_MOVIES';
const SET_MOVIE = 'SET_MOVIE';
const SET_IS_LOADING = 'SET_IS_LOADING';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';

const setTotalPages = (payload) => ({type: SET_TOTAL_PAGES, payload});
export const setCurrentPage = (payload) => ({type: SET_CURRENT_PAGE, payload});
export const setMovies = (payload) => ({type: SET_MOVIES, payload});
export const setMovie = (payload) => ({type: SET_MOVIE, payload});
export const setIsLoading = (payload) => ({type: SET_IS_LOADING, payload});

//Movies list thunk
export const getMoviesList = (page) => async (dispatch) => {
    try {
        dispatch(setIsLoading(true));
        const request = [await getGenres(), await getMovies(page)];

        //method promise all return all promises response;
        const [genres, movies] = await Promise.all(request);

        //Merge movies with genres

        const movieWithGenres = movies.data.results.map((movie) => {
            const mergedMovieGenre = movie.genre_ids.map((id) => genres.data.genres.find((genre) => {
                if (id === genre.id) {
                    return genre
                }
            }));
            return {...movie, genres: mergedMovieGenre}
        });
        dispatch(setTotalPages(movies.data.total_pages));
        dispatch(setCurrentPage(movies.data.page));
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
        case SET_CURRENT_PAGE: {
            return {
                ...state, page: action.payload
            }
        }
        case SET_TOTAL_PAGES: {
            return {
                ...state, total_pages: action.payload
            }
        }
        default: {
            return state
        }
    }
};

export default moviesReducer;