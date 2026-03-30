import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">

        <div className="footerLogo">
          <h2>News Masala</h2>
          <p>Your daily dose of trusted news.</p>
        </div>

        <div className="footerLinks">
          <h3>Quick Links</h3>
          <a>Home</a>
          <a>Latest</a>
          <a>Categories</a>
          <a>Contact</a>
        </div>

        <div className="footerLinks">
          <h3>Categories</h3>
          <a>Politics</a>
          <a>Business</a>
          <a>Sports</a>
          <a>Entertainment</a>
        </div>

        <div className="footerSocial">
          <h3>Follow Us</h3>
          <div className="icons">
            <span>🌐</span>
            <span>🐦</span>
            <span>📸</span>
          </div>
        </div>

      </div>

      <div className="footerBottom">
        <p>© 2026 News Masala. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;