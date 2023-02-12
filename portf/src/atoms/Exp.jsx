import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Icon } from "@iconify/react";

const Exp = () => {
  return (
    <div className="exp">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<Icon
            icon="dashicons:welcome-learn-more"
            style={{ fontSize: "80px", color: "white" }}
           />}
        >
          <h3 className="vertical-timeline-element-title">Zuri Training</h3>
          <h4 className="vertical-timeline-element-subtitle">Remote</h4>
          <p>
            Html, Css, javascript, Django
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<Icon
            icon="dashicons:welcome-learn-more"
            style={{ fontSize: "80px", color: "white" }}
           />}
        >
          <h3 className="vertical-timeline-element-title">Zuri Internship</h3>
          <h4 className="vertical-timeline-element-subtitle">
           Remote
          </h4>
          <p>
            Html, Scss, Css, Javascript, React js.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=""
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<Icon
            icon="eos-icons:bubble-loading"
            style={{ fontSize: "80px", color: "white" }}
           />}
        >
          
        </VerticalTimelineElement>
        
        </VerticalTimeline>
    </div>
  );
};

export default Exp;
