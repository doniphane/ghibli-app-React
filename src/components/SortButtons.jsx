import React from 'react';

function SortButtons({ sortBy, sortOrder, setSortBy, setSortOrder }) {
    const setSort = (by, order) => {
        setSortBy(by);
        setSortOrder(order);
    };

    return (
        <div className="flex gap-2 mb-4 flex-wrap">
            <button
                onClick={() => setSort('title', 'asc')}
                className={`px-3 py-1 rounded-md border ${sortBy === 'title' && sortOrder === 'asc' ? 'bg-pink-400 text-white' : 'bg-white text-white'
                    }`}
            >
                Titre A-Z
            </button>
            <button
                onClick={() => setSort('title', 'desc')}
                className={`px-3 py-1 rounded-md border ${sortBy === 'title' && sortOrder === 'desc' ? 'bg-pink-400 text-white' : 'bg-white text-white'
                    }`}
            >
                Titre Z-A
            </button>
            <button
                onClick={() => setSort('release_date', 'asc')}
                className={`px-3 py-1 rounded-md border ${sortBy === 'release_date' && sortOrder === 'asc' ? 'bg-pink-400 text-white' : 'bg-white text-white'
                    }`}
            >
                Année ↑
            </button>
            <button
                onClick={() => setSort('release_date', 'desc')}
                className={`px-3 py-1 rounded-md border ${sortBy === 'release_date' && sortOrder === 'desc' ? 'bg-pink-400 text-white' : 'bg-white text-white'
                    }`}
            >
                Année ↓
            </button>
        </div>
    );
}

export default SortButtons;
