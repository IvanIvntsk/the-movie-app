import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services/moviesServices/moviesServices";


const initialState = {
    movies: [],
    genres:[],
    movieByGenre:[],
    movie: null,
    searchResult: [],
    pages: 500,
    prevPage: null,
    nextPage: null
}

const getAll = createAsyncThunk (
    'movieSlice/getAll',
    async ({page},thunkAPI) =>{
        try {
            const {data} = await moviesService.getMovies()
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getMovieById = createAsyncThunk (
    'movieSlice/getMovieById',
    async ({id}, thunkApi) => {
        try {
            const {data} = await moviesService.getById(id)
            return data
        } catch (e) {
            return thunkApi.rejectWithValue(e.response.data)
        }
    }
);
const getGenres = createAsyncThunk(
    'movieSlice/getGenres',
    async (_,thunkAPI) =>{
        try {
            const {data} = await moviesService.getGenres()
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)
const getMoviesGenres = createAsyncThunk(
    'movieSlice/getMoviesGenres',
    async ({id},thunkAPI) =>{
        try {
            const {data} = await moviesService.getByGenreId(id)
            return data
        }catch (e){
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const searchMovie = createAsyncThunk (
    'movieSlice/searchMovie',
    async ({query}, thunkAPI) => {
        try {
            const {data} = await moviesService.getByQuery(query)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const movieSlice = createSlice({
    name: "movieSlice",
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) =>{
                const {results} = action.payload;
                state.movies = results
            })
            .addCase(getMovieById.fulfilled, (state, action) => {
                state.movie = action.payload
            })
            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload.genres
            })
            .addCase(getMoviesGenres.fulfilled, (state, action) => {
                const {result} = action.payload
                state.movieByGenre = result
            })
            .addCase(searchMovie.fulfilled, (state, action) => {
                const {results} = action.payload
                state.searchResult = results
            })


})
const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAll,
    getMovieById,
    getGenres,
    getMoviesGenres,
    searchMovie
}
export {
    movieActions,
    movieReducer
}