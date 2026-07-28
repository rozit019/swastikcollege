import { useState } from "react";

const API_URL = "http://localhost:5000/api/experiences";
const categories = [
  "Sports",
  "Tech & Hackathons",
  "Culture & Fests",
  "Academic",
];

export default function AdminExperienceUpload({ onUpload }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "Sports",
    date: new Date().toISOString().split("T")[0],
  });
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Select an image");

    const token = localStorage.getItem("adminToken");
    const data = new FormData();
    data.append("image", file);
    data.append("title", form.title);
    data.append("description", form.description);
    data.append("category", form.category);
    data.append("date", form.date);

    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/upload`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: data,
      });

      if (res.ok) {
        alert("Experience posted successfully!");
        setForm({
          title: "",
          description: "",
          category: "Sports",
          date: new Date().toISOString().split("T")[0],
        });
        setFile(null);
        setPreview(null);
        onUpload?.();
      } else {
        const err = await res.json();
        alert(err.message || "Upload failed");
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
    setLoading(false);
  };

  return (
    <div className="exp-upload">
      <div className="exp-upload-header">
        <h2 className="exp-upload-title">Post New Experience</h2>
        <p className="exp-upload-desc">
          Upload photos from college events, fests, workshops, and sports.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="exp-upload-form">
        <div>
          <label className="exp-upload-label">Event Photo</label>
          <div className="exp-upload-zone-wrap">
            {preview ? (
              <div className="exp-upload-preview">
                <img
                  src={preview}
                  alt="Preview"
                  className="exp-upload-preview-img"
                />
                <button
                  type="button"
                  onClick={() => {
                    setFile(null);
                    setPreview(null);
                  }}
                  className="exp-upload-remove"
                >
                  <svg
                    className="exp-upload-remove-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              <label className="exp-upload-dropzone">
                <svg
                  className="exp-upload-dropzone-icon"
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
                <span className="exp-upload-dropzone-text">
                  Click to upload image
                </span>
                <span className="exp-upload-dropzone-hint">
                  JPG, PNG, WEBP up to 5MB
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="exp-upload-file-input"
                  required
                />
              </label>
            )}
          </div>
        </div>

        <div className="exp-upload-grid">
          <div>
            <label className="exp-upload-label">Event Title</label>
            <input
              type="text"
              placeholder="e.g. Sports Fest 2024"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="exp-upload-input"
              required
            />
          </div>

          <div>
            <label className="exp-upload-label">Category</label>
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="exp-upload-input exp-upload-select"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="exp-upload-label">Event Date</label>
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="exp-upload-input"
          />
        </div>

        <div>
          <label className="exp-upload-label">Description</label>
          <textarea
            placeholder="Short description of the event..."
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="exp-upload-input exp-upload-textarea"
            rows={3}
            required
          />
        </div>

        <div className="exp-upload-actions">
          <button
            type="submit"
            disabled={loading}
            className="exp-upload-submit"
          >
            {loading ? (
              <>
                <svg className="exp-upload-spinner" viewBox="0 0 24 24">
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
                Uploading...
              </>
            ) : (
              <>
                <svg
                  className="exp-upload-submit-icon"
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
                Post Experience
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
