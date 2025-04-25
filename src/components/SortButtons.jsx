import React from 'react';

function SortButtons({ sortBy, setSortBy }) {
    return (
        <div className="flex justify-center gap-2 mb-6 flex-wrap">
            <button
                onClick={() => setSortBy('title')}
                className={`px-4 py-2 rounded-md border transition-colors duration-200 ${sortBy === 'title' ? 'bg-pink-400 text-white' : 'bg-black text-white'
                    }`}
            >
                Titre
            </button>
            <button
                onClick={() => setSortBy('release_date')}
                className={`px-4 py-2 rounded-md border transition-colors duration-200 ${sortBy === 'release_date' ? 'bg-pink-400 text-white' : 'bg-black text-white'
                    }`}
            >
                Année
            </button>
            <button
                onClick={() => setSortBy('rt_score')}
                className={`px-4 py-2 rounded-md border transition-colors duration-200 ${sortBy === 'rt_score' ? 'bg-pink-400 text-white' : 'bg-black text-white'
                    }`}
            >
                Score
            </button>
        </div>
    );
}

export default SortButtons;
