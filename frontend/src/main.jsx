import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Base + components
import "./styles/base.css";
import "./styles/loader.css";
import "./styles/navbar.css";

// Home page sections
import "./styles/hero.css";
import "./styles/experience.css";
import "./styles/achievements.css";
import "./styles/courses.css";
import "./styles/partners.css";
import "./styles/infrastructures.css";
import "./styles/itclub.css";
import "./styles/news.css";
import "./styles/sister.css";
import "./styles/testimonials.css";
import "./styles/cta.css";

import "./styles/footer.css";
import "./styles/responsive.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
