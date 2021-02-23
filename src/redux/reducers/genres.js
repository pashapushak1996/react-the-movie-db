//Genres action types
import {genresService} from "../../services/genresService";

const SET_GENRES = 'SET_GENRES';

//Genres action creators
const setGenres = (payload) => ({type: SET_GENRES, payload});

//Genres thunk
export const getGenres = () => async (dispatch) => {
    const {data} = await genresService.getGenres();
    dispatch(setGenres(data));
};

const initialState = {
    genres: [{id: 28, name: "Action"},
        {id: 12, name: "Adventure"},
        {id: 16, name: "Animation"},
        {id: 35, name: "Comedy"},
        {id: 80, name: "Crime"},
        {id: 99, name: "Documentary"},
        {id: 18, name: "Drama"},
        {id: 10751, name: "Family"},
        {id: 14, name: "Fantasy"},
        {id: 36, name: "History"}
        , {id: 27, name: "Horror"}
        , {id: 10402, name: "Music"}
        , {id: 9648, name: "Mystery"}
        , {id: 10749, name: "Romance"}
        , {id: 878, name: "Science Fiction"}
        , {id: 10770, name: "TV Movie"}
        , {id: 53, name: "Thriller"}
        , {id: 10752, name: "War"}
        , {id: 37, name: "Western"}]
};

const genresReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GENRES: {
            return {
                ...state, genres: action.payload
            }
        }
        default: {
            return state
        }
    }
};

export default genresReducer;