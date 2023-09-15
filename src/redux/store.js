import {configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices/slices";


const store = configureStore({
    reducer:{
        movieReducer: movieReducer
    }
})

export {
    store
}