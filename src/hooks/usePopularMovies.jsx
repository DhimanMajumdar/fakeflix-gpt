import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addPopularMovies} from "../utils/moviesSlice";

const usePopularMovies = () => {
    // fetch data from TMDB API and update the store
    const dispatch = useDispatch(); // Fixed typo from "dispath" to "dispatch"

    const getPopularMovies = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
            const json = await response.json();
            dispatch(addPopularMovies(json.results));
        } catch (error) {
            console.error("Failed to fetch popular movies: ", error);
        }
    };

    useEffect(() => {
        getPopularMovies();
    }, [dispatch]); // Added `dispatch` to dependency array
};

export default usePopularMovies;
