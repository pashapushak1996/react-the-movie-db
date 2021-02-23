import {instance} from "./axios-config";

export const genresService = {
    async getGenres() {
        return await instance.get(`/genre/movie/list`)
    }
}