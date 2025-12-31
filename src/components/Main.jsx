import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

function Main() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

export default Main;
