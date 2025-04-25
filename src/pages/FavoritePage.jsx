import FilmList from "../components/FilmList";

function FavoritesPage({ films = [], favorites = [], toggleFavorite }) {
    const favoriteFilms = films.filter(film => favorites.includes(film.id));

    return (
        <div className="w-screen min-h-screen p-6 bg-black">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-white">🎞️ Mes films favoris</h1>
                {favoriteFilms.length > 0 ? (
                    <FilmList
                        films={favoriteFilms}
                        favorites={favorites}
                        toggleFavorite={toggleFavorite}
                    />
                ) : (
                    <p className="text-white text-lg">Vous n'avez encore aucun favori.</p>
                )}
            </div>
        </div>
    );
}

export default FavoritesPage;
