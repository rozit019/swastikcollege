import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminExperienceUpload from "../components/AdminExperienceUpload.jsx";
import AdminExperienceList from "../components/AdminExperienceList.jsx";

export default function AdminPanel() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("upload");
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) navigate("/admin-login");
  }, [navigate]);

  const token = localStorage.getItem("adminToken");
  if (!token) return null;

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin-login");
  };

  return (
    <div className="admin-panel-page">
      <header className="admin-panel-header">
        <div className="admin-panel-header-inner">
          <div className="admin-panel-brand">
            <div className="admin-panel-logo">
              <svg
                className="admin-panel-logo-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <div>
              <h1 className="admin-panel-brand-title">Swastik College</h1>
              <p className="admin-panel-brand-subtitle">Content Management</p>
            </div>
          </div>

          <button onClick={handleLogout} className="admin-panel-logout">
            <svg
              className="admin-panel-logout-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Logout
          </button>
        </div>
      </header>

      <main className="admin-panel-main">
        <div className="admin-panel-tabs">
          <button
            onClick={() => setActiveTab("upload")}
            className={`admin-panel-tab ${activeTab === "upload" ? "admin-panel-tab-active" : "admin-panel-tab-inactive"}`}
          >
            <span className="admin-panel-tab-content">
              <svg
                className="admin-panel-tab-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              New Upload
            </span>
          </button>
          <button
            onClick={() => setActiveTab("manage")}
            className={`admin-panel-tab ${activeTab === "manage" ? "admin-panel-tab-active" : "admin-panel-tab-inactive"}`}
          >
            <span className="admin-panel-tab-content">
              <svg
                className="admin-panel-tab-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
              Manage Content
            </span>
          </button>
        </div>

        <div className="admin-panel-card">
          <div className="admin-panel-card-inner">
            {activeTab === "upload" ? (
              <AdminExperienceUpload
                onUpload={() => setRefresh((r) => r + 1)}
              />
            ) : (
              <AdminExperienceList key={refresh} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
