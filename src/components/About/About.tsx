import { FaCalendar } from "react-icons/fa6";
import "./About.css";
const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text padd-15">
                <h3>
                  I'm Chuhan Li Chen and
                  <span> Design and Creation Artist </span>
                </h3>
                <p>
                  Design and Create original artwork using any of a wide variety
                  of media and techniques.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="personal-info padd-15">
                <div className="row">
                  <div className="info-item padd-15">
                    <p>
                      Email : <span>amychenlich@gmail.com</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Phone : <span>609 358 4178</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Degree : <span>Bachelor</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      City : <span>Princeton NJ</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="skills padd-15">
                <div className="row">
                  <div className="skill-item padd-15">
                    <h5>********</h5>
                    <div className="progress">
                      <div className="progress-in w-90"></div>
                      <div className="skill-percent">90%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>*****************</h5>
                    <div className="progress">
                      <div className="progress-in w-66"></div>
                      <div className="skill-percent">66%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>***********</h5>
                    <div className="progress">
                      <div className="progress-in w-96"></div>
                      <div className="skill-percent">96%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>************</h5>
                    <div className="progress">
                      <div className="progress-in w-90"></div>
                      <div className="skill-percent">90%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="education padd-15">
                <h3 className="title">Education</h3>
                <div className="row">
                  <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date bottom-align">
                          <FaCalendar />
                          &nbsp; <span>2023 - 2027</span>
                        </h3>
                        <h4 className="timeline-title">Bachelor in RISD</h4>
                        <p className="timeline-text">
                          Rhode Island School of Design - Providence, RI USA
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="experience padd-15">
                <h3 className="title">Recent Experience</h3>
                <div className="row">
                  <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date bottom-align">
                          <FaCalendar />
                          &nbsp; 2025 - Now
                        </h3>
                        <h4 className="timeline-title">
                          Education Test Service - Princeton
                        </h4>
                        <p className="timeline-text">Internship Artist</p>
                      </div>

                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date bottom-align">
                          <FaCalendar />
                          &nbsp; 2024 - 2025
                        </h3>
                        <h4 className="timeline-title">Citi Group - NJ</h4>
                        <p className="timeline-text">Internship Artist</p>
                      </div>

                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date bottom-align">
                          <FaCalendar />
                          &nbsp; 2023 - 2024
                        </h3>
                        <h4 className="timeline-title">
                          J.P.Morgan Chase Bank – NY
                        </h4>
                        <p className="timeline-text">Internship Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
