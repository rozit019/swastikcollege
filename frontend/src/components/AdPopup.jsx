import { useState, useEffect } from "react";
import "../styles/adpopup.css";

export default function AdPopup() {
  const [isVisible, setIsVisible] = useState(false);

  if (location.pathname.startsWith("/admin")) {
    return null;
  }

  useEffect(() => {
    // Don't show if user already closed it this session
    if (sessionStorage.getItem("swastik_ad_closed")) return;

    // Show after 3 seconds (after your loader finishes)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("swastik_ad_closed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="ad-popup-overlay" onClick={handleClose}>
      <div className="ad-popup-container" onClick={(e) => e.stopPropagation()}>
        <button className="ad-popup-close" onClick={handleClose}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Replace this with your actual poster image */}
        <div className="ad-popup-content">
          <img
            src="/images/pop.jpeg"
            alt="Admissions Open 2026"
            className="ad-popup-image"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />

          {/* when doesnt load */}
          <div className="ad-popup-fallback" style={{ display: "none" }}>
            <h2>Admissions Open 2026</h2>
            <p>Apply now for BCA, B.Sc. CSIT & BIT programs.</p>
            <a href="/contact" className="ad-popup-cta">
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
