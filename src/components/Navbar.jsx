import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-white text-black p-4 shadow-md w-full">
            <div className="flex justify-between items-center px-6">
                <Link to="/" className="text-2xl font-bold text-pink-400 hover:text-white transition-colors">
                    🎥 GhibliApp
                </Link>
                <ul className="flex space-x-6 text-lg">
                    <li>
                        <Link to="/" className="hover:text-pink-400 transition-colors">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/favorites" className="hover:text-pink-400 transition-colors">Favoris</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
