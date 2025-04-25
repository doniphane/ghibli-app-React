import FilmList from "../components/FilmList";



function FavoritesPage({ films = [], favorites = [], toggleFavorite }) {
    const favoriteFilms = films.filter(film => favorites.includes(film.id));


    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Mes films favoris</h1>
            {favoriteFilms.length > 0 ? (
                <FilmList
                    films={favoriteFilms}
                    favorites={favorites}
                    toggleFavorite={toggleFavorite}
                />
            ) : (
                <p className="text-gray-500">Vous n'avez encore aucun favori.</p>
            )}
        </div>
    );
}

export default FavoritesPage