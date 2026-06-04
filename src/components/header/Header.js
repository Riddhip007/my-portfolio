import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  bigProjects,
  myOfficeProjects
} from "../../portfolio";

function Header() {
  const isDark = true;
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewProjects = bigProjects.display;
  const viewMyOfficeProjects = myOfficeProjects.display;


  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
          {viewProjects && (
            <li>
              <a href="#projects">My Projects</a>
            </li>
          )}
          {viewMyOfficeProjects && (
            <li>
              <a href="#officeProjects">My Office Projects</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="https://mayursinhdevblog.hashnode.dev/">My Blogs</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
