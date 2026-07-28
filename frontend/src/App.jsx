import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import NewsNotice from "./pages/news.jsx";
import Facilities from "./pages/facilities";
import ContactUs from "./pages/contact.jsx";
import Achievements from "./pages/achivements.jsx";

function App() {
  return (
    <BrowserRouter>
      <Loader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes as you build pages */}
        <Route path="/about" element={<About />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route
          path="/courses"
          element={
            <div style={{ padding: "100px 2rem" }}>
              <h1>Courses Page - Coming Soon</h1>
            </div>
          }
        />
        <Route path="/news" element={<NewsNotice />} />
        <Route
          path="/blog"
          element={
            <div style={{ padding: "100px 2rem" }}>
              <h1>Blog Page - Coming Soon</h1>
            </div>
          }
        />
        <Route
          path="/gallery"
          element={
            <div style={{ padding: "100px 2rem" }}>
              <h1>Gallery Page - Coming Soon</h1>
            </div>
          }
        />
        <Route
          path="/downloads"
          element={
            <div style={{ padding: "100px 2rem" }}>
              <h1>Downloads Page - Coming Soon</h1>
            </div>
          }
        />
        <Route path="/contact" element={<ContactUs />} />
        <Route
          path="/online-enquiry"
          element={
            <div style={{ padding: "100px 2rem" }}>
              <h1>Online Enquiry - Coming Soon</h1>
            </div>
          }

        />
        <Route path="/facilities" element={<Facilities />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
