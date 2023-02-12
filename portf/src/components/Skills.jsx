import React from "react";
import "../styles/skills.css";
import { Icon } from "@iconify/react";

const Skills = () => {
  return (
    <div className="skills">
    <div>
    <h1 className="titleDark">About </h1>
</div>
      <div className="skillsContainer">
        <div className="skillsRow">
          <div className="skillsCol">
            <div className="skillsTab">
              <span>
                <Icon
                  icon="icon-park-outline:html-five"
                  style={{ fontSize: "80px", color: "white" }}
                />
              </span>
              <p className="skillsTitle">HTML : 5</p>
            </div>
          </div>

          <div className="skillsCol">
            <div className="skillsTab">
              <span className="skillsIcon">
                <Icon
                  icon="mdi:language-css3"
                  style={{ fontSize: "80px", color: "white" }}
                />
              </span>

              <p className="skillsTitle">CSS : 3</p>
            </div>
          </div>

          <div className="skillsCol">
            <div className="skillsTab">
              <span>
                <Icon
                  icon="mdi:language-javascript"
                  style={{ fontSize: "80px", color: "white" }}
                />
              </span>

              <p className="skillsTitle">Javascript</p>
            </div>
          </div>

          <div className="skillsCol">
            <div className="skillsTab">
              <span>
                <Icon
                  icon="mdi:react"
                  style={{ fontSize: "80px", color: "white" }}
                />
              </span>

              <p className="skillsTitle">React Js</p>
            </div>
          </div>

          <div className="skillsCol">
            <div className="skillsTab">
              <span>
                <Icon
                  icon="tabler:brand-django"
                  style={{ fontSize: "80px", color: "white" }}
                />
              </span>

              <p className="skillsTitle">Django</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
