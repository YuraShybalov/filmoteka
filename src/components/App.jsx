import { Routes, Route } from 'react-router-dom';

// import Home from './../pages/Home/Home';
import Movies from './../pages/Movies/Movies';
import NotFound from './../pages/NotFound/NotFound';
import Layout from './Layouts/Layout';

export const App = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route psth="/" element={<Layout />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
