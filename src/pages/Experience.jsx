import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School } from "@mui/icons-material";
import { Work } from "@mui/icons-material";

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            National Institute of Technology(NIT) Patna, India
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer Intern - Fantoz
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            New Delhi, India
          </h4>
          <ul>
            <li>
              Successfully debugged the web-related issues, leading to improved
              efficiency and performance.
            </li>
            <li>
              Implemented visual elements to enhance user experience based on
              design feedback and client requirements
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            Front-end Developer - DigiLocker
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            New Delhi, India
          </h4>
          <ul>
            <li>
              Developed the API Directory for DigiLocker on apisetu.gov.in,
              enabling access to 4k+ APIs for 500+ organizations, using React,
              Redux Toolkit, and ChakraUI.
            </li>
            <li>
              Enhanced user experience by implementing design feedback,
              resulting in visually appealing features and high user
              satisfaction.
            </li>
            <li>
              Collaborated across teams to ensure precise implementation of
              functional requirements, maintaining a high level of accuracy.
            </li>
            <li>
              Optimized UI for responsiveness, leading to an improved user
              experience across various devices.
            </li>
            <li>
              Analyzed user research trends and recommended design process
              changes, driving more effective and user-centric design
              iterations.
            </li>
            <li>
              Contributed to various DigiLocker services, including driving
              license and RC, used by millions.
            </li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
