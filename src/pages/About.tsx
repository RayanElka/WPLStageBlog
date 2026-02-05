import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { MapPin, Briefcase, Terminal, Award } from "lucide-react";

const About: React.FC = () => {
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
                  <Terminal /> Full Stack Student
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
                  <h3 className="profile-tech-title">Tech Stack</h3>
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
              <h2>About_Me</h2>
              <p>
                Ik ben een gepassioneerde student Programmeren die altijd op
                zoek is naar de "waarom" achter de code. Tijdens mijn studie heb
                ik een liefde ontwikkeld voor clean code en intuïtieve user
                interfaces. Deze stage is voor mij de kans om de theorie om te
                zetten naar productie-ready software.
              </p>
            </div>

            {/* Stage Card */}
            <div className="stage-card">
              <div className="stage-card-glow"></div>

              <h3 className="stage-card-title">
                <Briefcase />
                Stage Details
              </h3>

              <div className="stage-grid">
                <div className="stage-item">
                  <span className="stage-item-label">COMPANY</span>
                  <span className="stage-item-value">Trans-IT</span>
                </div>
                <div className="stage-item">
                  <span className="stage-item-label">LOCATION</span>
                  <span className="stage-item-value">
                    Heist-op-den-berg <MapPin />
                  </span>
                </div>
                <div className="stage-item">
                  <span className="stage-item-label">ROLE</span>
                  <span className="stage-item-value">Stagiair</span>
                </div>
                <div className="stage-item">
                  <span className="stage-item-label">DURATION</span>
                  <span className="stage-item-value">Feb '26 - Jun '26</span>
                </div>
              </div>

              <div className="stage-objectives">
                <h4>
                  <Award /> Learning Objectives
                </h4>
                <div className="objectives-list">
                  {[
                    "Diepgaande kennis van React en TypeScript opdoen",
                    "Ervaring met AWS cloud services verzamelen",
                  ].map((goal, idx) => (
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
