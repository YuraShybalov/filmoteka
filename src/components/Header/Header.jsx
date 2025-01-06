import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <headerr>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
    </headerr>
  );
};

export default Header;
