import React from 'react';
import FilmList from '../components/FilmList';

function HomePage({ films, favorites = [], toggleFavorite }) {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Liste des films</h1>

            <FilmList
                films={films}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
            />
        </div>
    );
}

export default HomePage;
