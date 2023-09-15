import {apiServices} from "../apiServices/apiServices";
import {urls} from "../../constants/urls/urls";


const moviesService = {
    getMovies: (page) => apiServices.get(urls.moviesList, {params: {page: `${page}`}}),
    getById: (id) => apiServices.get(urls.movieById.byId(id)),
    getGenres: () => apiServices.get(urls.genresLis),
    getByGenreId: (genreId, page) => apiServices.get(urls.moviesList, {params: {sort_by: 'popularity.desc', with_genres: genreId, page}}),
    // getVideoById: (id) => apiServices.get(`${urls.movieById}/${id}/videos`),
    // getByQuery: (query) => apiServices.get(urls.searchMovie, {params: {query}})
}

export {
    moviesService
}