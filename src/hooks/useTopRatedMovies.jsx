import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedMovies} from "../utils/moviesSlice";

const useTopRatedMovies = () => {
    // fetch data from TMDB API and update the store
    const dispatch = useDispatch(); // Fixed typo from "dispath" to "dispatch"

    const getTopRatedMovies = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS)
            const json = await response.json();
            dispatch(addTopRatedMovies(json.results));
        } catch (error) {
            console.error("Failed to fetch top rated movies: ", error);
        }
    };

    useEffect(() => {
        getTopRatedMovies();
    }, [dispatch]); // Added `dispatch` to dependency array
};

export default useTopRatedMovies;
