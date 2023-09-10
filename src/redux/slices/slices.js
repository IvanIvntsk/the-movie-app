import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesServices} from "../../services/moviesServices/moviesServices";


const initialState = {
    movies:[]
}

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async (_,{rejectedWithValue}) => {
        try {
            const {data} = await moviesServices.getMovies()
            return data
            console.log(data);
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers:{},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) =>{
            state.movies = action.payload.result
        })
})

const {reducer:movieReducer, actions} = movieSlice

const movieActions = {
    ...actions,
    getAll
}

export {
    movieReducer,
    movieActions
}