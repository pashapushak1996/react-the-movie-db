import React from "react";
import {connect} from "react-redux";
import {imageBuilder} from "../../helpers/helpers";
import {useHistory} from "react-router-dom";
import {getMovieFromState} from "../../redux/selectors/moviesSelectors";

const MovieInfo = ({movie}) => {
    let history = useHistory();
    return (
        movie && <div>
            <button onClick={() => history.push(`/`)}>Back</button>
            <img src={imageBuilder(movie.poster_path, 200)} alt=""/>
            <h5>{movie.original_title}</h5>
            <p>{movie.overwiew}</p>
            <div>{movie.production}</div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        movie: getMovieFromState(state)
    }
}

export default connect(mapStateToProps, {})(MovieInfo)

