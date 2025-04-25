import React from 'react';
import FilmList from '../components/FilmList';
import SearchBar from '../components/SearchBar';
import SortButtons from '../components/SortButtons';



function HomePage({ films, favorites = [], toggleFavorite }) {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Liste des films</h1>
            <SortButtons />
            <SearchBar />


            <FilmList
                films={films}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
            />


        </div>
    );
}

export default HomePage;
