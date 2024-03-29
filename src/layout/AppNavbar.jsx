import { Link } from "react-router-dom";

export const AppNavbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        marginBottom: "20px,",
      }}
    >
      Navbar
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About Us </Link>
      <br />
      <Link to="/contact">Contact Me</Link>
      <br />
      <Link to="/blogs">Blogs</Link>
      <br />
    </div>
  );
};
