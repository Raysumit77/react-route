import { Outlet } from "react-router-dom";
import { AdminNavbar } from "./AdminNavbar";
import { Footer } from "./Footer";

export const AdminLayout = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-start" ,height: "700px"}}>
        <AdminNavbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
