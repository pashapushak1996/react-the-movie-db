import React from "react";
import {useHistory} from "react-router-dom";
import {imageBuilder} from "../../helpers/helpers";


export const MovieItem = ({movie}) => {
    let {adult, title, poster_path, overview, vote_count, vote_average, release_date, id, genre_ids} = movie;
    let history = useHistory();
    const viewMovieInfo = (id) => {
        history.push(`/${id}`);
    };
    return (
        <div style={{width: '30%', border: "black 1px solid"}}>
            <div>
                <h3>{title}</h3>
                <p>{overview}</p>
                <b> Release date:{release_date}</b>
                <span>Vote Count :{vote_count}</span>
                <img src={imageBuilder(poster_path, 300)} onClick={() => viewMovieInfo(id)} alt=""/>
                <div>{movie.genres.map((genre) => <div>{genre.name}</div>)}</div>
            </div>

        </div>
    );
}

