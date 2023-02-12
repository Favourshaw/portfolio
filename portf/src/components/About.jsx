import React from "react";
import profilePic from "../assets/profilepic.jpg"
import "../styles/about.css"

const About = () => {
  return (
    <div className="about">
        <div>
            <h1 className="title">About </h1>
        </div>
      <div className="flex-container">
  <div className="flex-item-left">
  <div className="cardLeft">
  <img src={profilePic} className="imgAbout" alt="profile pic"/>
  
  <div>
    <div className="at">👋</div> 
    
  </div>
  
</div></div>
  <div className="flex-item-right">
  
  <div className="rightCardTop">
  
<span className='redDot'>&#8226;</span>
<span className='yellowDot'>&#8226;</span>
<span className='greenDot'>&#8226;</span>
</div>

<div className="rightCardBottom">
 
  <p className="ptext">
<span className="ptextHead">Hi :)</span><br />

👋 I'm Favour Onyenobi. Fictional person for preview purposes :) I'm working with newest front-end frameworks like Angular, React and Vue. What you are seeing now is portfolio template from Dorota1997. If you like this portfolio template, make sure to ⭐ the repository to make it more recognizable for other users. Thank you 💜</p>
</div>
  </div>
</div>

    </div>
  );
}

export default About;