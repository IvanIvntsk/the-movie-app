import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services/moviesServices/moviesServices";


const initialState = {
    movies: [],
    genres:[],
    movieByGenre:[],
    movie: null,
    pages: 500,
    movieVideos: [],
    searchResult: []
}

const getAll = createAsyncThunk (
    'movieSlice/getAll',
    async (_,thunkAPI) =>{
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
const getMovieVideosByID = createAsyncThunk (
    'movieSlice/getMovieVideosByID',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getVideoById(id)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const searchMovie = createAsyncThunk (
    'movieSlice/searchMovie',
    async ({query}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getByQuery(query)
            console.log(data)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
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
            state.genreMovie = action.payload.result
        })
        .addCase(getMovieVideosByID.fulfilled, (state, action) => {
            const {results} = action.payload;
            state.movieVideos = results
        })
        .addCase(searchMovie.fulfilled, (state, action) => {
            const {results} = action.payload;
            state.searchResult = results
        })

})
const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAll,
    getMovieById,
    getGenres,
    getMoviesGenres
}
export {
    movieActions,
    movieReducer
}