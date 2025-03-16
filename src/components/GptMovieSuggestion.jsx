import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetGptState } from '../utils/gptSlice';
import GptMovieSuggestionList from './gptMovieSuggestionList';

const GptMovieSuggestion = () => {
    const dispatch = useDispatch();
    const gpt = useSelector(store => store.gpt);
    const { movieNames, movieResults } = gpt;

    // Reset GPT state on mount
    useEffect(() => {
        dispatch(resetGptState());
    }, [dispatch]);

    if (!movieNames) return null;

    return (
        <div className="space-y-4 md:space-y-6 mt-4 md:mt-8">
            <h2 className="text-lg md:text-2xl text-white px-4 md:px-8 font-semibold md:font-bold">Results</h2>
            {movieNames.map((movieName, index) => (
                <GptMovieSuggestionList
                    key={movieName[0] + index}
                    title={movieName}
                    movies={movieResults[index]}
                />
            ))}
        </div>
    );
};

export default GptMovieSuggestion;
