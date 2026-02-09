import React, { useState, useMemo } from "react";
import { Calendar, Award, Wrench, ChevronDown, ChevronUp } from "lucide-react";
import { posts } from "../data/posts";
import { useTranslation } from "react-i18next";

const Blog: React.FC = () => {
  const { t } = useTranslation();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [expandedWeeks, setExpandedWeeks] = useState<Set<string>>(
    new Set(["1"]),
  );

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags).sort();
  }, []);

  const filteredPosts = useMemo(() => {
    let sortedPosts = [...posts].sort((a, b) => a.week - b.week);
    if (!selectedTag) return sortedPosts;
    return sortedPosts.filter((post) => post.tags.includes(selectedTag));
  }, [selectedTag]);

  const toggleWeek = (weekId: string) => {
    setExpandedWeeks((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(weekId)) {
        newSet.delete(weekId);
      } else {
        newSet.add(weekId);
      }
      return newSet;
    });
  };

  return (
    <div className="internship-page">
      <div className="container">
        {/* Hero Section */}
        <div className="internship-hero">
          <div className="internship-hero-content">
            <h1 className="internship-title">
              {t("blog.titlePrefix")}{" "}
              <span className="gradient-text">{t("blog.titleHighlight")}</span>
              <br />
              {t("blog.titleSuffix")}
            </h1>
            <p className="internship-subtitle">
              {t("blog.subtitle")}
            </p>
            <div className="internship-meta">
              <div className="meta-item">
                <span className="meta-label">{t("labels.company")}</span>
                <span className="meta-value">Trans-IT</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">{t("labels.role")}</span>
                <span className="meta-value">{t("blog.roleValue")}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">{t("labels.duration")}</span>
                <span className="meta-value">{t("blog.durationValue")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="timeline-filters">
          <h3 className="filter-title">{t("labels.filterByTag")}</h3>
          <div className="filter-tags">
            <button
              onClick={() => setSelectedTag(null)}
              className={`timeline-filter-btn ${selectedTag === null ? "active" : ""}`}
            >
              {t("labels.all")}
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                className={`timeline-filter-btn ${selectedTag === tag ? "active" : ""}`}
              >
                {t(`tags.${tag}`)}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline-section">
          <h2 className="timeline-heading">
            <Calendar style={{ width: "24px", height: "24px" }} />{" "}
            {t("labels.timeline")}
          </h2>

          <div className="timeline-container">
            {/* Timeline line */}
            <div className="timeline-line"></div>

            {/* Timeline items */}
            <div className="timeline-items">
              {filteredPosts.map((post) => {
                const isExpanded = expandedWeeks.has(post.id);

                return (
                  <div key={post.id} className="timeline-item">
                    {/* Timeline dot */}
                    <div className="timeline-dot-wrapper">
                      <div className="timeline-dot">
                        <span className="timeline-week-number">
                          {post.week}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="timeline-content">
                      <button
                        className="timeline-header"
                        onClick={() => toggleWeek(post.id)}
                      >
                        <div className="timeline-header-info">
                          <div className="timeline-week-label">
                            {t("labels.week", { week: post.week })}
                          </div>
                          <h3 className="timeline-title">
                            {t(post.titleKey)}
                          </h3>
                          <div className="timeline-date">
                            {t(post.dateRangeKey)}
                          </div>
                        </div>
                        <div className="timeline-toggle">
                          {isExpanded ? <ChevronUp /> : <ChevronDown />}
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="timeline-body">
                          {post.imageUrl && (
                            <div className="timeline-image">
                              <img src={post.imageUrl} alt={t(post.titleKey)} />
                            </div>
                          )}

                          <div className="timeline-description">
                            {t(post.contentKey)
                              .split("\n")
                              .map(
                                (paragraph, i) =>
                                  paragraph.trim() && (
                                    <p key={i}>{paragraph}</p>
                                  ),
                              )}
                          </div>

                          <div className="timeline-details">
                            {/* Achievements */}
                            <div className="timeline-detail-section">
                              <h4 className="detail-section-title">
                                <Award
                                  style={{ width: "16px", height: "16px" }}
                                />
                                {t("labels.keyAchievements")}
                              </h4>
                              <ul className="achievement-list">
                                {(
                                  t(post.achievementsKey, {
                                    returnObjects: true,
                                  }) as string[]
                                ).map((achievement, i) => (
                                  <li key={i}>{achievement}</li>
                                ))}
                              </ul>
                            </div>

                            {/* Technologies */}
                            <div className="timeline-detail-section">
                              <h4 className="detail-section-title">
                                <Wrench
                                  style={{ width: "16px", height: "16px" }}
                                />
                                {t("labels.technologiesUsed")}
                              </h4>
                              <div className="tech-list">
                                {post.technologies.map((tech, i) => (
                                  <span key={i} className="tech-badge">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
