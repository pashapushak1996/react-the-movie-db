import {instance} from "./axios-config";

export const moviesService = {
    getMovies(page) {
        return instance.get(`/discover/movie?page=${page}`)
    },
    getMovie(movie_id) {
        return instance.get(`/movie/${movie_id}`)
    }
}