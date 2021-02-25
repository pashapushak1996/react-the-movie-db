import React from "react";
import {connect} from "react-redux";
import {
    getCurrentPageFromState,
    getTotalPageFromState,
    getTotalResultsPageFromState
} from "../../redux/selectors/moviesSelectors";
import {getMoviesList, setCurrentPage} from "../../redux/reducers/movies";


const Paginator = ({children, currentPage, total_pages, nextClick, prevClick, firstPage, lastPage,getMovies}) => {
    const handleNextClick = () => {
        // setCurrentPage(currentPage + 1)
        getMovies(currentPage + 1)
        // nextClick(++currentPage)
    }
    const handlePrevClick = () => {
        // setCurrentPage(currentPage - 1)
        getMovies(currentPage -1)
    }
    const handleFirstPage = () => {
        firstPage(1)
    }
    const handleLastPage = () => {
        lastPage(total_pages);
    }
    return (
        <div>
            <div>
                <button onClick={handleFirstPage}>first page</button>
                <button onClick={handlePrevClick}>PrevPage</button>
                <span>{currentPage} of {total_pages}</span>
                <button onClick={handleNextClick}>NextPage</button>
                <button onClick={handleLastPage}>LastPage</button>
            </div>
            <div>{children}</div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        currentPage: getCurrentPageFromState(state),
        total_pages: getTotalPageFromState(state),
        totalResults: getTotalResultsPageFromState(state)
    }
}
export default connect(mapStateToProps, {setCurrentPage})(Paginator);


