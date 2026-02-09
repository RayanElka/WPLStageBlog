import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Terminal } from "lucide-react";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.devlog"), path: "/blog" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const currentLanguage = i18n.resolvedLanguage ?? i18n.language;

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("lang", language);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div>
          <Link to="/" className="navbar-logo">
            <div className="logo-icon">
              <Terminal />
            </div>
            <span className="logo-text">&lt;WPL_Stage /&gt;</span>
          </Link>
        </div>

        <div className="nav-actions">
          {/* Desktop Menu */}
          <ul className="nav-menu">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`nav-link ${isActive(link.path) ? "active" : ""}`}
                >
                  <span className="nav-link-comment">//</span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div
            className="lang-switch"
            role="group"
            aria-label={t("nav.languageLabel")}
          >
            {[
              { code: "en", label: "EN" },
              { code: "nl", label: "NL" },
              { code: "fr", label: "FR" },
            ].map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => changeLanguage(lang.code)}
                className={`lang-button ${
                  currentLanguage === lang.code ? "active" : ""
                }`}
                aria-pressed={currentLanguage === lang.code}
              >
                {lang.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <ul className="mobile-nav-menu">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`mobile-nav-link ${isActive(link.path) ? "active" : ""}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mobile-lang-switch">
          <div
            className="lang-switch"
            role="group"
            aria-label={t("nav.languageLabel")}
          >
            {[
              { code: "en", label: "EN" },
              { code: "nl", label: "NL" },
              { code: "fr", label: "FR" },
            ].map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => changeLanguage(lang.code)}
                className={`lang-button ${
                  currentLanguage === lang.code ? "active" : ""
                }`}
                aria-pressed={currentLanguage === lang.code}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
