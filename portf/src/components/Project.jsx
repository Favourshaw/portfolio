import React from "react"
import "../styles/project.css";
import profilePic from "../assets/profilepic.jpg"

const Project = () => {
  return (
    <div className="project">

<div className="projectContainer">
<div>
            <h1 className="title">About </h1>
        </div>
<div className="projRow">
  <div className="proCol">
    <div className="contents">
      <img src={profilePic} alt="Mountains" class="projImg" />
      <p className="projectTitle">My Work</p>
     
    </div>
  </div>

  <div className="proCol">
    <div className="contents">
      <img src={profilePic} alt="Mountains" class="projImg" />
      <p className="projectTitle">My Work</p>
     
    </div>
  </div>

  <div className="proCol">
    <div className="contents">
      <img src={profilePic} alt="Mountains" class="projImg" />
      <p className="projectTitle">My Work</p>
     
    </div>
  </div>

  <div className="proCol">
    <div className="contents">
      <img src={profilePic} alt="Mountains" class="projImg" />
      <p className="projectTitle">My Work</p>
     
    </div>
  </div>
 

</div>




</div>

      
    </div>
  );
};

export default Project;
