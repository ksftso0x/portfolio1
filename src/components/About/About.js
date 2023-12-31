import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { about } from "../../portfolio";
import ResumeImg from "../Access/resume.png";
import "./About.css";

const About = () => {
  const { photo, name, role, description, resume, social } = about;

  return (
    <div className="about center">
      {photo && (
        <img
          height="200px"
          className="about_img"
          alt="Alan Grant"
          src={photo}
        />
      )}
      {name && (
        <h1>
          Hi, I am <span className="about__name">{name}.</span>
        </h1>
      )}

      {role && <h2 className="about__role">A {role}.</h2>}
      <p className="about__desc">{description && description}</p>

      <div className="about__contact center">
        {resume && (
          <a href={resume} className="link link--icon" target="blank">
            <img height="40px" src={ResumeImg} alt="resume" />
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                className="link link--icon"
                target="blank"
              >
                <GitHubIcon fontSize="large" />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="link link--icon"
                target="blank"
              >
                <LinkedInIcon fontSize="large" />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
