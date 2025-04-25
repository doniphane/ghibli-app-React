import FilmCard from './FilmCard';


function FilmList({ films = [], favorites = [], toggleFavorite }) {
    return (
        <div className="film-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {films.map((film) => (
                <FilmCard
                    key={film.id}
                    film={film}
                    isFavorite={favorites.includes(film.id)}
                    toggleFavorite={toggleFavorite}
                />
            ))}
        </div>
    );
}

export default FilmList;
