import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-brand">
          <h3>
            <i className="fas fa-graduation-cap"></i> Swastik College
          </h3>
          <p>
            One of the best IT colleges in Nepal offering BCA and B.Sc. CSIT
            programs with industry-focused education, research facilities, and
            100% job placement. Affiliated to Tribhuvan University.
          </p>
          <div className="social-links">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Programs</h4>
          <ul>
            <li>
              <Link to="/courses/bca">BCA</Link>
            </li>
            <li>
              <Link to="/courses/csit">B.Sc. CSIT</Link>
            </li>
            <li>
              <Link to="/scholarships">Scholarships</Link>
            </li>
            <li>
              <Link to="/research">Research</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Organization</h4>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/team">Our Team</Link>
            </li>
            <li>
              <Link to="/facilities">Facilities</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li>
              <span>Kathmandu, Nepal</span>
            </li>
            <li>
              <a href="mailto:info@swastikcollege.edu.np">
                info@swastikcollege.edu.np
              </a>
            </li>
            <li>
              <a href="tel:+977XXXXXXXXXX">+977-XXXXXXXXXX</a>
            </li>
            <li>
              <Link to="/online-enquiry">Admissions Open</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
