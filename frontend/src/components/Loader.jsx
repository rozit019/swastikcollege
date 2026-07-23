import { useEffect, useState } from "react";

function Loader() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
      setTimeout(() => setRemoved(true), 600);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (removed) return null;

  return (
    <div id="loader" className={hidden ? "hidden" : ""}>
      <div className="stage">
        <div className="logo-frame">
          <div className="layer-base">
            <img src="/images/logo.png" alt="" />
          </div>
          <div className="layer-fill">
            <img src="/images/logob.png" alt="" />
          </div>
        </div>
        <div className="tagline">Swastik College</div>
        <div className="status">
          Loading
          <span className="dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
