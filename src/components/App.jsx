import { Routes, Route } from 'react-router-dom';

import Home from './../pages/Home/Home';
import Movies from './../pages/Movies/Movies';
import NotFound from './../pages/NotFound/NotFound';
import Layout from './Layouts/Layout';

export const App = () => {
  return (
    <Routes>
      <Route psth="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
