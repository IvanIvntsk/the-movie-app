import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesServices} from "../../services/moviesServices/moviesServices";



const initialState = {
    movies: [],
    genres: []
}

const getAll = createAsyncThunk (
    'movieSlice/getAll',
    async (_,{rejectWithValue}) =>{
        try {
            const {data} = await moviesServices.getMovies()
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const getGenres = createAsyncThunk(
    'movieSlice/getGenres',
    async (_,{rejectWithValue}) => {
        try {
            const {data} = await moviesServices.getGenres()
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
)

const movieSlice = createSlice({
    name: "movieSlice",
    initialState,
    reducers:{},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.movies = action.payload.results
        })
        .addCase(getGenres.fulfilled, (state, action) => {
            state.genres = action.payload.genres
        })
})
const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAll,
    getGenres
}
export {
    movieActions,
    movieReducer
}