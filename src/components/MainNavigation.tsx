import { Link } from "react-router-dom";

import classes from './MainNavigation.module.css';

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/movies'>Movies</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
