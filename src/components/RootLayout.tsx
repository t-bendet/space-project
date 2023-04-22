import NavBar from "./NavBar";
import { Outlet, useLocation } from "react-router-dom";

function RootLayout() {
  const { pathname } = useLocation();

  console.log(pathname);
  return (
    <div className="root-layout home">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default RootLayout;
