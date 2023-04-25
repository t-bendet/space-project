import NavBar from "./NavBar";
import { Outlet, useLocation } from "react-router-dom";

function RootLayout() {
  const { pathname } = useLocation();
  const appClasses = () => {
    if (location.pathname === "/") {
      return "root-layout home";
    }
    return `root-layout ${pathname.replace("/", "")}`;
  };
  return (
    <div className={appClasses()}>
      <a className="skip-to-content" href="#main">
        Skip to content
      </a>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default RootLayout;
