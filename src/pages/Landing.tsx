import React from "react";
import { Link } from "react-router-dom";
import { Hash, ArrowRight, Calendar, ChevronRight } from "lucide-react";
import { posts } from "../data/posts";
import { useTranslation } from "react-i18next";

const Landing: React.FC = () => {
  const { t } = useTranslation();
  const latestPost = [...posts].sort((a, b) => b.week - a.week)[0];

  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="hero-badge">
                <div className="pulse-dot">
                  <span className="pulse-ring"></span>
                  <span className="pulse-core"></span>
                </div>
                {t("hero.badge")}
              </div>
              <h1 className="hero-title">
                <span className="gradient-text">{t("hero.titleMain")}</span>
                <span className="hero-subtitle">{t("hero.titleSub")}</span>
              </h1>
              <p className="hero-description">
                {t("hero.description")}
              </p>
              <div className="hero-buttons">
                <Link to="/blog" className="btn btn-primary">
                  <Hash /> {t("hero.readDevlog")}
                </Link>
                <Link to="/about" className="btn btn-secondary">
                  <span>{t("hero.aboutCta")}</span>
                </Link>
              </div>
            </div>

            {/* Code Terminal */}
            <div>
              <div className="code-terminal">
                <div className="terminal-header">
                  <div className="terminal-dot dot-red"></div>
                  <div className="terminal-dot dot-yellow"></div>
                  <div className="terminal-dot dot-green"></div>
                </div>
                <div className="code-content">
                  <div className="code-line">
                    <span className="line-number">1</span>
                    <span className="code-keyword">const</span>{" "}
                    <span className="code-const">stage</span>{" "}
                    <span className="code-text">=</span>{" "}
                    <span className="code-keyword">new</span>{" "}
                    <span className="code-function">Experience</span>
                    <span className="code-text">();</span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">2</span>
                    <span className="code-keyword">while</span>{" "}
                    <span className="code-text">(</span>
                    <span className="code-const">stage</span>
                    <span className="code-text">.</span>
                    <span className="code-function">isInProgress</span>
                    <span className="code-text">())</span>{" "}
                    <span className="code-text">{"{"}</span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">3</span>
                    <span className="code-text code-indent">
                      <span className="code-const">stage</span>.
                      <span className="code-function">learn</span>(
                      <span className="code-string">'React'</span>);
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">4</span>
                    <span className="code-text code-indent">
                      <span className="code-const">stage</span>.
                      <span className="code-function">debug</span>(
                      <span className="code-string">'Everything'</span>);
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">5</span>
                    <span className="code-text code-indent">
                      <span className="code-const">me</span>.
                      <span className="code-function">grow</span>();
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">6</span>
                    <span className="code-text">{"}"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Post */}
      {latestPost && (
        <div className="section">
          <div className="container">
            <div className="section-header">
              <div>
                <h2 className="section-title">
                  <span className="section-title-icon">#</span>{" "}
                  {t("sections.latestLog")}
                </h2>
              </div>
              <Link to="/blog" className="section-link">
                {t("sections.viewAllLogs")} <ChevronRight />
              </Link>
            </div>

            <Link to="/blog" className="post-card post-card-horizontal">
              <div className="post-image-wrapper">
                <div className="post-image-overlay"></div>
                <img
                  className="post-image"
                  src={
                    latestPost.imageUrl ||
                    `https://source.unsplash.com/random/800x600?code&sig=${latestPost.id}`
                  }
                  alt={t(latestPost.titleKey)}
                />
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <span className="post-tag">
                    {t(`tags.${latestPost.tags[0]}`)}
                  </span>
                  <span className="post-date">
                    <Calendar style={{ width: "14px", height: "14px" }} />
                    {t("labels.week", { week: latestPost.week })} -{" "}
                    {t(latestPost.dateRangeKey)}
                  </span>
                </div>
                <h3 className="post-title">{t(latestPost.titleKey)}</h3>
                <p className="post-excerpt">{t(latestPost.excerptKey)}</p>
                <div className="post-footer">
                  <span className="post-read-more">
                    {t("labels.readMore")}{" "}
                    <ArrowRight style={{ width: "16px", height: "16px" }} />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;
