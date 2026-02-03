import React, { useState, useMemo } from "react";
import { Calendar, Award, Wrench, ChevronDown, ChevronUp } from "lucide-react";
import { posts } from "../data/posts";

const Blog: React.FC = () => {
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
              Building <span className="gradient-text">Experience</span>
              <br />
              at Trans-IT.
            </h1>
            <p className="internship-subtitle">
              Een 15-weken durende reis door frontend development, backend
              integratie, en professionele software engineering. Van eerste
              analyse tot productie deployment.
            </p>
            <div className="internship-meta">
              <div className="meta-item">
                <span className="meta-label">COMPANY</span>
                <span className="meta-value">Trans-IT</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">ROLE</span>
                <span className="meta-value">Stagiair</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">DURATION</span>
                <span className="meta-value">15 Weken</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="timeline-filters">
          <h3 className="filter-title">FILTER BY TAG</h3>
          <div className="filter-tags">
            <button
              onClick={() => setSelectedTag(null)}
              className={`timeline-filter-btn ${selectedTag === null ? "active" : ""}`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                className={`timeline-filter-btn ${selectedTag === tag ? "active" : ""}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline-section">
          <h2 className="timeline-heading">
            <Calendar style={{ width: "24px", height: "24px" }} /> TIMELINE
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
                            WEEK {post.week}
                          </div>
                          <h3 className="timeline-title">{post.title}</h3>
                          <div className="timeline-date">{post.dateRange}</div>
                        </div>
                        <div className="timeline-toggle">
                          {isExpanded ? <ChevronUp /> : <ChevronDown />}
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="timeline-body">
                          {post.imageUrl && (
                            <div className="timeline-image">
                              <img src={post.imageUrl} alt={post.title} />
                            </div>
                          )}

                          <div className="timeline-description">
                            {post.content
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
                                KEY ACHIEVEMENTS
                              </h4>
                              <ul className="achievement-list">
                                {post.achievements.map((achievement, i) => (
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
                                TECHNOLOGIES USED
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
