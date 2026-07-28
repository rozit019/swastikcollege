import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Loader from "./components/Loader.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import NewsNotice from "./pages/news.jsx";
import Facilities from "./pages/facilities";
import ContactUs from "./pages/contact.jsx";
import Achievements from "./pages/achivements.jsx";
import Experience from "./pages/experience.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";
import Chatbot from "./components/chatbot.jsx";
import AdPopup from "./components/Adpopup.jsx";

function AppContent() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      <AdPopup />
      <Loader />
      {!isAdminPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
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
        <Route path="/experience" element={<Experience />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route
          path="/blog"
          element={
            <div style={{ padding: "100px 2rem" }}>
              <h1>Blog Page - Coming Soon</h1>
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

      {!isAdminPage && <Footer /> && <Chatbot />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
