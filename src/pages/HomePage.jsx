import React, { useState } from 'react';
import FilmList from '../components/FilmList';
import SearchBar from '../components/SearchBar';
import SortButtons from '../components/SortButtons';

function HomePage({ films, favorites = [], toggleFavorite }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');


    const filteredFilms = films.filter((film) =>
        film.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        film.director.toLowerCase().includes(searchTerm.toLowerCase())
    );


    const sortedFilms = [...filteredFilms].sort((a, b) => {
        let result = 0;
        if (sortBy === 'title') {
            result = a.title.localeCompare(b.title);
        } else if (sortBy === 'release_date') {
            result = a.release_date - b.release_date;
        }

        return sortOrder === 'asc' ? result : -result;
    });

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Liste des films</h1>

            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <SortButtons
                sortBy={sortBy}
                sortOrder={sortOrder}
                setSortBy={setSortBy}
                setSortOrder={setSortOrder}
            />

            <p className="text-gray-500 mb-2">{sortedFilms.length} films trouvés</p>

            <FilmList
                films={sortedFilms}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
            />
        </div>
    );
}

export default HomePage;
