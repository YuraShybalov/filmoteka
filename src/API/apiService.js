import axios from 'axios';
const API_KEY = 'af0d5f243de6f7a5bfa482911cb42a9e';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
export const getTrending = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

// пошук фільму за ключовим словом на сторінці фільмів.
export const searchMovies = async query => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return response.data;
};

// запит повної інформації про фільм для сторінки кінофільму.
export const getMovieDetails = async id => {
  const response = await axios.get(
    `movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

// запит інформації про акторський склад для сторінки кінофільму.
export const getMovieCredits = async id => {
  const response = await axios.get(
    `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};
//запит оглядів для сторінки кінофільму.
export const getReviews = async id => {
  const response = await axios.get(
    `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data;
};
