import "../styles/Home.css";
import { LinkedIn } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Prajuwal</h2>
        <div className="prompt">
          <p>Software Developer | Front-End </p>
          <a
            href="https://www.linkedin.com/in/prajuwalsingh/"
            target="_blank"
            rel="link to linkedin"
          ><LinkedIn />
          </a>

          <a
            href="https://mail.google.com/mail/u/0/?source=mailto&to=prajuwalsingh@gmail.com&fs=1&tf=cm"
            target="_blank"
            rel="link to mail"
          >
            <Email />
          </a>

          <a
            href="https://github.com/Prajuwal"
            target="_blank"
            rel="link to github"
          >
            <GitHub />
          </a>
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
