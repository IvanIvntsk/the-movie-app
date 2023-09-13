import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesServices} from "../../services/moviesServices/moviesServices";



const initialState = {
    movies: [],
    movieDetails: {},
    loading: false,
    error: null,
    page: 1000,
    genres: []
}

const getAll = createAsyncThunk (
    'movieSlice/getAll',
    async ({page},{rejectWithValue}) =>{
        try {
            const {data} = await moviesServices.getMovies(page)
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
const getMovieById = createAsyncThunk (
    'movieSlice/getMovieById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await moviesServices.geById(id)
            return data
        } catch (e) {
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
        .addCase(getMovieById.pending, (state) => {
            state.loading = true
        })
        .addCase(getMovieById.fulfilled, (state, action) =>{
            state.loading = false
            state.movieDetails = action.payload
            state.error = null
        })
        .addCase(getMovieById.rejected, (state, action) => {
            state.loading = false
        })
})
const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAll,
    getGenres,
    getMovieById
}
export {
    movieActions,
    movieReducer
}