import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addUpcomingMovies} from "../utils/moviesSlice";

const useUpcomingMovies = () => {
    // fetch data from TMDB API and update the store
    const dispatch = useDispatch(); // Fixed typo from "dispath" to "dispatch"

    const getUpcomingMovies = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/upcoming', API_OPTIONS)
            const json = await response.json();
            dispatch(addUpcomingMovies(json.results));
        } catch (error) {
            console.error("Failed to fetch upcoming movies: ", error);
        }
    };

    useEffect(() => {
        getUpcomingMovies();
    }, [dispatch]); // Added `dispatch` to dependency array
};

export default useUpcomingMovies;
