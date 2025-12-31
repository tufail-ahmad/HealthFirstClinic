import { Outlet } from "react-router-dom";
function Main({ onOpenPopup }) {
  return (
    <main>
      <Outlet context={onOpenPopup} />
    </main>
  );
}

export default Main;
