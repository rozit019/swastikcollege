import { useEffect, useState } from "react";

const API_URL = "http://localhost:5000/api/experiences";

const categoryColors = {
  Sports: "exp-cat-sports",
  "Tech & Hackathons": "exp-cat-tech",
  "Culture & Fests": "exp-cat-culture",
  Academic: "exp-cat-academic",
};

export default function AdminExperienceList() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setExperiences(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this experience?")) return;

    const token = localStorage.getItem("adminToken");
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        setExperiences((prev) => prev.filter((e) => e._id !== id));
      } else {
        alert("Delete failed");
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  if (loading) {
    return (
      <div className="exp-list-loading">
        <svg className="exp-list-spinner" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        Loading experiences...
      </div>
    );
  }

  if (experiences.length === 0) {
    return (
      <div className="exp-list-empty">
        <div className="exp-list-empty-icon-wrap">
          <svg
            className="exp-list-empty-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h3 className="exp-list-empty-title">No experiences yet</h3>
        <p className="exp-list-empty-text">
          Upload your first experience to see it here.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="exp-list-header">
        <h2 className="exp-list-title">All Experiences</h2>
        <span className="exp-list-count">{experiences.length} total</span>
      </div>

      <div className="exp-list">
        {experiences.map((exp) => (
          <div key={exp._id} className="exp-list-item">
            <img
              src={exp.imageUrl}
              alt={exp.title}
              className="exp-list-thumb"
            />

            <div className="exp-list-info">
              <h3 className="exp-list-item-title">{exp.title}</h3>
              <div className="exp-list-meta">
                <span
                  className={`exp-list-category ${categoryColors[exp.category] || "exp-cat-default"}`}
                >
                  {exp.category}
                </span>
                <span className="exp-list-date">
                  {new Date(exp.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>

            <button
              onClick={() => handleDelete(exp._id)}
              className="exp-list-delete"
              title="Delete"
            >
              <svg
                className="exp-list-delete-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
