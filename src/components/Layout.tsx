import React from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="app-layout">
      <div className="background-glow">
        <div className="glow-1"></div>
        <div className="glow-2"></div>
      </div>

      <Navbar />
      <main>{children}</main>
      <footer>
        <div className="footer-container">
          <div className="footer-content">
            <p className="footer-text">
              &copy; {new Date().getFullYear()}{" "}
              <span className="footer-accent">WPL_Stage</span>. All rights
              reserved.
            </p>
            <div className="footer-meta">
              <span className="footer-badge">
                Build Status:{" "}
                <span className="footer-badge-value">Passing</span>
              </span>
              <span className="footer-badge">
                Version: <span className="footer-badge-value">1.0.0</span>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
