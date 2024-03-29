import { Link } from "react-router-dom";

export const AdminNavbar = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "flex-start", height: "700px" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "20px,",
          width: "10rem",
        }}
      >
        Blogify
        <Link to="/admin/blogs">Home</Link>
        <br />
        <Link to="/admin/blogs">Blogs</Link>
        <br />
        <Link to="/admin/Users">Users </Link>
        <br />
      </div>
    </div>
  );
};
