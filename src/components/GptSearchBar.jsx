import React from 'react';
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
    const langkey = useSelector((store) => store.config.lang);

    return (
        <div className="pt-[20%] flex justify-center">
            <form className="w-1/2 bg-slate-950  grid grid-cols-12 f">
                {/* Handle missing or undefined lang[langkey] */}
                <input
                    type="text"
                    className="p-4 m-4 col-span-9"
                    placeholder={lang[langkey]?.gptSearchPlaceholder}
                />
                <button className="px-4 py-2 bg-red-700 text-white rounded-lg col-span-3 m-4">
                    {lang[langkey]?.search || 'Search'}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;
