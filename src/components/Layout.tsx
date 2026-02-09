import React from "react";
import Navbar from "./Navbar";
import { useTranslation } from "react-i18next";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

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
              &copy; {year}{" "}
              <span className="footer-accent">WPL_Stage</span>.{" "}
              {t("footer.rights")}
            </p>
            <div className="footer-meta">
              <span className="footer-badge">
                {t("footer.buildStatusLabel")}:{" "}
                <span className="footer-badge-value">
                  {t("footer.buildStatusValue")}
                </span>
              </span>
              <span className="footer-badge">
                {t("footer.versionLabel")}:{" "}
                <span className="footer-badge-value">1.0.0</span>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
