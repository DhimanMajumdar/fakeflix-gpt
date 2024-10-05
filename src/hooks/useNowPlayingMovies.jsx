import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
    // fetch data from TMDB API and update the store
    const dispatch = useDispatch(); // Fixed typo from "dispath" to "dispatch"

    const getNowPlayingMovies = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
            const json = await response.json();
            dispatch(addNowPlayingMovies(json.results));
        } catch (error) {
            console.error("Failed to fetch now playing movies: ", error);
        }
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, [dispatch]); // Added `dispatch` to dependency array
};

export default useNowPlayingMovies;
