import css from './container.module.css';

const Container = ({ children }) => {
  return <div className={css.wrapper}>{children}</div>;
};

export default Container;
