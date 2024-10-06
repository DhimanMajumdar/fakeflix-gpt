import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        movieNames: null,
        movieResults: null,
    },
    reducers: {
        toggleGptSearchView: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        // New reducer to reset the GPT state
        resetGptState: (state) => {
            state.movieNames = null;
            state.movieResults = null;
        },
    },
});

// Export the actions, including the new reset action
export const { toggleGptSearchView, addGptMovieResult, resetGptState } = gptSlice.actions;
export default gptSlice.reducer;
