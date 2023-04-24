import { useState } from "react";
const NavBar = (): JSX.Element => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const navToggleHandler = () => {
    setIsNavOpen((prev) => !prev);
  };
  return (
    <header className="primary-header flex">
      <div>
        <img src="../logo.svg" alt="space tourism logo" className="logo" />
      </div>
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
          <li className="active">
            <a
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              href="index.html"
            >
              <span>00</span>Home
            </a>
          </li>
          <li>
            <a
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              href="destination.html"
            >
              <span>01</span>Destination
            </a>
          </li>
          <li>
            <a
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              href="crew.html"
            >
              <span>02</span>Crew
            </a>
          </li>
          <li>
            <a
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              href="technology.html"
            >
              <span>03</span>Technology
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
