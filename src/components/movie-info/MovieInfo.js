import React, {useEffect} from "react";
import {connect} from "react-redux";
import {imageBuilder} from "../../helpers/helpers";
import {useHistory, useParams} from "react-router-dom";
import {getMovieFromState} from "../../redux/selectors/moviesSelectors";
import {getMovieInfo} from "../../redux/reducers/movies";

const MovieInfo = ({movie, getMovieInfo}) => {
    let history = useHistory();
    let {id} = useParams();
    useEffect(() => getMovieInfo(id), [])
    return (
        movie && <div>
            <button onClick={() => history.push(`/`)}>Back</button>
            <img src={imageBuilder(movie.poster_path, 200)} alt=""/>
            <h5>{movie.original_title}</h5>
            <p>{movie.overview}</p>
            <div>{movie.production}</div>
            <div>{movie.production_companies.map((el) => <div key={el.id}>
                <img src={imageBuilder(el.logo_path, 200)} alt=""/>
            </div>)}</div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        movie: getMovieFromState(state)
    }
}

export default connect(mapStateToProps, {getMovieInfo})(MovieInfo)

