
  import { Icon } from "@iconify/react";
  import "../styles/footer.css";
  const Footer = () => {
    return (
      <div className="footer">
        <div className="footerContainer">
        <Icon
                  icon="mdi:github"
                  style={{ fontSize: "30px", color: "white" }}
                />

<Icon
                  icon="mdi:instagram"
                  style={{ fontSize: "30px", color: "white" }}
                />
        </div>

        <div className="footerContainer">
            <p style={{ fontSize: "15px", color: "white" }}>copyright ©  Favour Shaw</p>
        </div>
      </div>
    );
  };
  
  export default Footer;
  