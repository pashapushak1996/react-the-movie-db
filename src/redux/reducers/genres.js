//Genres action types
import {genresService} from "../../services/genresService";

const SET_GENRES = 'SET_GENRES';

//Genres action creators
const setGenres = (payload) => ({type: SET_GENRES, payload});

//Genres thunk
export const getGenres = () => async (dispatch) => {
    const {data} = await genresService.getGenres();
    dispatch(setGenres(data.genres));
};

const initialState = {
    genres: []
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