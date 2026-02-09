import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { MapPin, Briefcase, Terminal, Award } from "lucide-react";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();
  const objectives = t("about.objectives", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="section">
      <div className="container">
        <div className="about-grid">
          {/* Profile Column */}
          <div className="profile-sidebar">
            <div className="profile-card">
              <div className="profile-card-accent"></div>
              <div className="profile-card-body">
                <div className="profile-avatar-wrapper">
                  <div className="profile-avatar">
                    <img src="" alt="Profile" />
                  </div>
                </div>
                <h2 className="profile-name">Rayan El Kaouid</h2>
                <div className="profile-role">
                  <Terminal /> {t("about.profileRole")}
                </div>

                <div className="profile-socials">
                  <a
                    href="https://www.linkedin.com/in/rayan-el-kaouid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link social-link--linkedin"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a
                    href="https://github.com/RayanElka"
                    target="https://github.com/RayanElka?tab=repositories"
                    rel="noopener noreferrer"
                    className="social-link social-link--github"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a
                    href="mailto:rayanelkaouid@gmail.com"
                    className="social-link social-link--mail"
                  >
                    <FontAwesomeIcon icon={faAt} />
                  </a>
                </div>

                <div className="profile-tech">
                  <h3 className="profile-tech-title">
                    {t("about.techStack")}
                  </h3>
                  <div className="tech-tags">
                    {[
                      "React",
                      "TypeScript",
                      "Node.js",
                      "Git",
                      "AWS",

                      "SQL",
                    ].map((skill) => (
                      <span key={skill} className="tech-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Info Column */}
          <div className="about-content">
            {/* About Text */}
            <div className="content-section">
              <h2>{t("about.heading")}</h2>
              <p>
                {t("about.description")}
              </p>
            </div>

            {/* Stage Card */}
            <div className="stage-card">
              <div className="stage-card-glow"></div>

              <h3 className="stage-card-title">
                <Briefcase />
                {t("about.stageTitle")}
              </h3>

              <div className="stage-grid">
                <div className="stage-item">
                  <span className="stage-item-label">
                    {t("labels.company")}
                  </span>
                  <span className="stage-item-value">Trans-IT</span>
                </div>
                <div className="stage-item">
                  <span className="stage-item-label">
                    {t("labels.location")}
                  </span>
                  <span className="stage-item-value">
                    Heist-op-den-berg <MapPin />
                  </span>
                </div>
                <div className="stage-item">
                  <span className="stage-item-label">{t("labels.role")}</span>
                  <span className="stage-item-value">
                    {t("about.roleValue")}
                  </span>
                </div>
                <div className="stage-item">
                  <span className="stage-item-label">
                    {t("labels.duration")}
                  </span>
                  <span className="stage-item-value">
                    {t("about.durationValue")}
                  </span>
                </div>
              </div>

              <div className="stage-objectives">
                <h4>
                  <Award /> {t("about.objectivesTitle")}
                </h4>
                <div className="objectives-list">
                  {objectives.map((goal, idx) => (
                    <div key={idx} className="objective-item">
                      <div className="objective-number">{idx + 1}</div>
                      <span className="objective-text">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
