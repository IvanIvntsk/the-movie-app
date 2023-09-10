const baseURL = 'https://api.themoviedb.org/3'

const originalPosterURL = 'http://image.tmdb.org/t/p/original'
const w500PosterURL = 'http://image.tmdb.org/t/p/w500'

const moviesList = 'discover/movie'
const genresLis = 'genre/movie/list'
const searchMovie = 'search/movie'
const movieById = 'movie'
const upcoming = 'movie/upcoming'

const urls = {
    moviesList,
    genresLis,
    searchMovie,
    movieById,
    upcoming
}


export {
    baseURL,
    originalPosterURL,
    w500PosterURL,
    urls
}