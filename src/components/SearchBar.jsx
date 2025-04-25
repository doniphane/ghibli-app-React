import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <div className="mb-4">
            <input
                type="text"
                placeholder="Rechercher par titre ou réalisateur..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
        </div>
    );
}

export default SearchBar;
