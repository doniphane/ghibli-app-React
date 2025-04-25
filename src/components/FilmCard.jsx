import { Link } from 'react-router-dom';

function FilmCard({ film, isFavorite, toggleFavorite }) {
    return (
        <div className="relative bg-white shadow-lg rounded-xl overflow-hidden p-4 hover:scale-105 transition-transform w-full max-w-sm">

            <button
                onClick={() => toggleFavorite(film.id)}
                className="absolute top-2 right-2 text-2xl z-10"
            >
                {isFavorite ? '⭐' : '☆'}
            </button>

            <Link to={`/film/${film.id}`} className="block">
                <img
                    src={film.image}
                    alt={film.title}
                    className="w-full h-64 object-cover rounded-md"
                />
                <div className="mt-4">
                    <h2 className="text-xl font-bold text-gray-800">{film.title}</h2>
                    <p className="text-gray-600">🎬 {film.producer}</p>
                    <p className="text-gray-500">📅 {film.release_date}</p>
                </div>
            </Link>
        </div>
    );
}

export default FilmCard;
