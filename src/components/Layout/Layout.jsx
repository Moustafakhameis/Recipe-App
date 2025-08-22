import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
