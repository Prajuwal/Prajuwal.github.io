import { Twitter } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="socialMedia">
          <Twitter />
          <LinkedIn />
        </div>
        <p> &copy; 2023 prajuwal.com</p>
      </div>
    </>
  );
};
export default Footer;
