import React, {useEffect} from 'react';
import './App.css';
import MoviesList from "./components/movies-list/MoviesList";
import {Header} from "./components/header/Header";
import MovieInfo from "./components/movie-info/MovieInfo";
import {Route,} from "react-router-dom";
import {getIsLoadingFromState, getMoviesListFromState} from "./redux/selectors/moviesSelectors";
import {connect} from "react-redux";
import {getMovieInfo, getMoviesList} from "./redux/reducers/movies";
import Paginator from "./components/paginator/Paginator";

function App({isLoading, movies, getMoviesList, getMovieInfo}) {

    useEffect(() => {
        getMoviesList();
    }, []);

    // const nextClick = (pageNum) => {
    //     getMoviesList(pageNum)
    // }
    // const prevClick = (pageNum) => {
    //     getMoviesList(pageNum)
    // }
    const firstPage = (pageNum) => {
        getMoviesList(pageNum)
    }
    const lastPage = (pageNum) => {
        getMoviesList(pageNum)
    }
    return (
        <div>
            <Header/>
            {isLoading ? <h1>Loading...</h1> :
                <Paginator  getMovies={getMoviesList}  firstPage={firstPage} lastPage={lastPage}>
                    <Route exact={true} path={`/`}
                           render={() => <MoviesList movies={movies} getMovieInfo={getMovieInfo}/>
                           }/>
                    <Route exact={true} path={`/:id`} render={() => <MovieInfo/>}/>
                </Paginator>}

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        movies: getMoviesListFromState(state),
        isLoading: getIsLoadingFromState(state)
    }
};
export default connect(mapStateToProps, {getMoviesList, getMovieInfo})(App);
