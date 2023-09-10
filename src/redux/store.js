import {configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices/slices";


const store = configureStore({
    reducer:{
        movie: movieReducer
    }
})

export {
    store
}