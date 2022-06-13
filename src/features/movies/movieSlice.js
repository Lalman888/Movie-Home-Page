import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi"
import  APIKey  from "../../common/apis/MovieApiKey"

// const initialState = []; 
// empty array for movie

export const fetchAsyncMovieDetail = createAsyncThunk(
    "movies/fetchAsyncMovieDetail",
    async (id) => {
        const response = await movieApi.get(
            `?apiKey=${APIKey}&i=${id}&Plot=full`
        );
        return response.data;
    }
)

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: {},
        selectMovie: {},
    },
    reducers: {
     addMovies: (state, {payload}) => {
        state.movies = payload;
     },
     removeSelectedMovie: (state) => {
      state.removeSelectedMovie = {};
     }
    },
    extraReducers: {
        [fetchAsyncMovieDetail.fulfilled]: (state, {payload}) => {
            return { ...state, selectMovie: payload};
        }
    }
})

export const {addMovies,removeSelectedMovie } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export const getSelectedMovie = (state) => state.movies.selectMovie
export default movieSlice.reducer;