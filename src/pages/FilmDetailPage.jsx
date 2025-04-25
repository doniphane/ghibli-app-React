import { useParams } from 'react-router-dom';

function FilmDetailPage({ films }) {
    const { id } = useParams();
    const film = films.find(film => film.id === id);

    if (!film) {
        return <div className="text-center mt-10 text-gray-500 text-xl">Chargement...</div>;
    }

    return (
        <div className="w-screen min-h-screen flex justify-center items-start p-6 bg-black">
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl overflow-hidden">
                <img
                    src={film.image}
                    alt={film.title}
                    className="w-full h-80 object-cover"
                />
                <div className="p-6">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{film.title}</h1>
                    <p className="text-gray-600 mb-1"><strong>🎬 Réalisateur :</strong> {film.director}</p>
                    <p className="text-gray-600 mb-1"><strong>🎞️ Producteur :</strong> {film.producer}</p>
                    <p className="text-gray-600 mb-4"><strong>📅 Année :</strong> {film.release_date}</p>
                    <p className="text-gray-700 leading-relaxed">{film.description}</p>
                </div>
            </div>
        </div>
    );
}

export default FilmDetailPage;
