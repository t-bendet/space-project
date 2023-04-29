import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = (): JSX.Element => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const navToggleHandler = () => {
    setIsNavOpen((prev) => !prev);
  };
  const linkClasses = (isActive: boolean) => {
    return isActive
      ? "ff-sans-cond uppercase text-white letter-spacing-2 active"
      : "ff-sans-cond uppercase text-white letter-spacing-2";
  };
  return (
    <header className="primary-header flex">
      <Link to="..">
        <img src="../logo.svg" alt="space tourism logo" className="logo" />
      </Link>
      <button
        onClick={navToggleHandler}
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        data-visible={isNavOpen}
      >
        <span className="sr-only" aria-expanded={isNavOpen}>
          Menu
        </span>
      </button>
      <nav>
        <ul
          id="primary-navigation"
          className="primary-navigation underline-indicators flex"
          data-visible={isNavOpen}
          onClick={navToggleHandler}
        >
          <li>
            <NavLink
              className={({ isActive }) => linkClasses(isActive)}
              to=".."
            >
              <span aria-hidden="true">00</span>Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => linkClasses(isActive)}
              to="destinations"
            >
              <span aria-hidden="true">01</span>Destination
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => linkClasses(isActive)}
              to="crew"
            >
              <span aria-hidden="true">02</span>Crew
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => linkClasses(isActive)}
              to="technology"
            >
              <span aria-hidden="true">03</span>Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
