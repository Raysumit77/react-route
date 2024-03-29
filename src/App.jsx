import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { NotFound } from "./components/NotFound";
import { Blog } from "./components/Blog";
import { Blogs } from "./components/Blogs";
import { NewBlog } from "./components/NewBlog";
import { Users } from "./components/Users";
import { AppLayout } from "./layout/AppLayout";
import { AdminLayout } from "./layout/AdminLayout";

function App() {
  return (
    <>
      <Routes>
        {/* Normal user */}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<Blog />} />
        <Route path="/blogs/new" element={<NewBlog />} /> */}
          <Route path="/blogs">
            <Route index element={<Blogs />} />
            <Route path=":id" element={<Blog />} />
            <Route path="new" element={<NewBlog />} />
          </Route>
        </Route>
        {/* Admin Route  */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="blogs">
            <Route index element={<Blogs />} />
            <Route path=":id" element={<Blog />} />
            <Route path="new" element={<NewBlog />} />
          </Route>
          <Route path="users">
            <Route index element={<Users />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
