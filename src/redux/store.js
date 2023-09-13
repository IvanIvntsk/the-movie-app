import {configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices/slices";


const store = configureStore({
    reducer:{
        movies: movieReducer,
        genres: movieReducer,
        movieDetails: movieReducer
    }
})

export {
    store
}