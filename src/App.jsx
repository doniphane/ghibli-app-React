import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import FilmDetailPage from './pages/FilmDetailPage';
import FavoritesPage from './pages/FavoritePage';
import './App.css';

function App() {
  const [films, setFilms] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);


  const toggleFavorite = (filmId) => {
    if (favorites.includes(filmId)) {
      setFavorites(favorites.filter(id => id !== filmId));
    } else {
      setFavorites([...favorites, filmId]);
    }
  };



  const getFilms = async () => {
    const response = await fetch('https://ghibliapi.vercel.app/films');
    const data = await response.json();
    setFilms(data);
  };

  useEffect(() => {
    getFilms();

  }, []);


  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage filmss={films}
            films={films}
            favorites={favorites}
            toggleFavorite={toggleFavorite} />} />
          <Route path="/film/:id" element={<FilmDetailPage films={films} />} />
          <Route path="/favorites"
            element={
              <FavoritesPage
                films={films}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
