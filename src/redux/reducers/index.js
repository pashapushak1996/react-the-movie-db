import {combineReducers} from "redux";
import moviesReducer from "./movies";
import genresReducer from "./genres";

const reducer = combineReducers({
    moviesReducer,
    genresReducer
});

export default reducer;