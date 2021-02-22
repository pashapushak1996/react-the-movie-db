import React from "react";
import {instance} from "../../services/axios-config";

//Function Image URL builder;

const imageBuilder = (path, width) => {
    return `https://image.tmdb.org/t/p/w${width}${path}`
}

export const MovieItem = ({movie, getMovieInfo}) => {
    let {adult, title, poster_path, overview, vote_count, vote_average, release_date, id} = movie;
    return (
        <div style={{width: '30%', border: "black 1px solid"}}>
            <div>
                <h3>{title}</h3>
                <p>{overview}</p>
                <b> Release date:{release_date}</b>
                <span>Vote Count :{vote_count}</span>
                <img src={imageBuilder(poster_path, 300)} onClick={() => getMovieInfo(id)} alt=""/>
            </div>

        </div>
    );
}

