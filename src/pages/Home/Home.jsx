import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { getTrending } from '../../API/apiService';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTrending().then(data => {
      setTrendMovies(data.results);
      setIsLoading(false);
    });
  }, []);
  console.log({ trendMovies });

  return (
    <main>
      <h1>Top Movies for today</h1>
      <ul>
        {trendMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.original_title || movie.name}
            </Link>
          </li>
        ))}
        {isLoading && <Loader />}
      </ul>
    </main>
  );
};

export default Home;
