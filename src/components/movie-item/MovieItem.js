import React from "react";
import {useHistory} from "react-router-dom";
import {imageBuilder} from "../../helpers/helpers";

//Function Image URL builder;


export const MovieItem = ({movie, getMovieInfo, genres}) => {
    let {adult, title, poster_path, overview, vote_count, vote_average, release_date, id, genre_ids} = movie;
    let history = useHistory();
    const viewMovieInfo = (id) => {
        history.push(`/${id}`);
        getMovieInfo(id)
    };
    const newArray = genre_ids.map(el => genres.filter(ss => {
        if (el === ss.id) {
            return {ss}
        }
    }))
    console.log(newArray);

    return (
        <div style={{width: '30%', border: "black 1px solid"}}>
            <div>
                <h3>{title}</h3>
                <p>{overview}</p>
                <b> Release date:{release_date}</b>
                <span>Vote Count :{vote_count}</span>


                <img src={imageBuilder(poster_path, 300)} onClick={() => viewMovieInfo(id)} alt=""/>
            </div>

        </div>
    );
}

