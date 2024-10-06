import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetGptState } from '../utils/gptSlice'; // Import your reset action
import GptMovieSuggestionList from './gptMovieSuggestionList';


const GptMovieSuggestion = () => {
    const dispatch = useDispatch();
    const gpt = useSelector(store => store.gpt);
    const { movieNames, movieResults } = gpt;

    // Reset the GPT state when the component mounts
    useEffect(() => {
        dispatch(resetGptState()); // Dispatch the action to reset the state
    }, [dispatch]);

    if (!movieNames) return null;

    return (
        <div>
            <div>
                <h2 className='text-xl md:text-2xl text-white px-8 font-semibold md:font-bold'>Results</h2>
                {movieNames.map((movieNames, index) =>
                    <GptMovieSuggestionList
                        key={movieNames[0]}
                        movies={movieResults[index]} />
                )}
            </div>
        </div>
    );
};

export default GptMovieSuggestion;
