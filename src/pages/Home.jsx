import "../styles/Home.css";
import { LinkedIn } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Prajuwal</h2>
        <div className="prompt">
          <p>Software Developer | Front-End </p>
          <LinkedIn />
          <Email />
          <GitHub />
        </div>
      </div>
      <div className="skills">
        <h1>Skills & Technologies</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>ReactJS, Redux, HTML, CSS, NPM, MaterialUI, TailwindCSS</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
