import {instance} from "./axios-config";

export const moviesService = {
    getMovies() {
        return instance.get(`/discover/movie`)
    },
    getMovie(movie_id) {
        return instance.get(`/movie/${movie_id}`)
    }
}