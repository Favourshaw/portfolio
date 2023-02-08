import videobg from "../assets/videobg.mp4";
import Typical from "react-typical";
import { Icon } from "@iconify/react";
import Switch from "react-switch";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="overlay"></div>
      <video src={videobg} autoPlay loop muted></video>
      <div className="content">
        <Icon icon="la:laptop-code" style={{ fontSize: "84px" }} />
        <br />
        <h1>
          <Typical
            loop={1}
            wrapper="p"
            steps={["👋 Favour Onyenobi", 1000]}
          ></Typical>
        </h1>
        <p>
          I am a{" "}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              "developer",
              3000,
              "designer",
              3000,
              "founder",
              3000,
              "innovator",
              2000,
            ]}
          ></Typical>
        </p>
      </div>
    </div>
  );
};

export default Header;
