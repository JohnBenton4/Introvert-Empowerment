import { DiGithubBadge } from "react-icons/di";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

export default function Footer() {
    return (
        <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="email">
                    <a href="mailto: omarosquero@gmail.com">
                        <TfiEmail size={20} style={{ color: "#000000", marginRight: "2rem" }} />
                    </a>
                    <a href="mailto: omarosquero@gmail.com">
                        <p>omarosquero@gmail.com</p>
                    </a>
                </div>
                <div className="linkedIn">
                    <a href="https://www.linkedin.com/in/omar-rosquero-55403524b/">
                        <FaLinkedin size={20} style={{ color: "#007CBE", marginRight: "2rem" }} />
                    </a>
                    <a href="https://www.linkedin.com/in/omar-rosquero-55403524b/">
                        <p>omar rosquero</p>
                    </a>
                </div>
            </div>
            <div className="right">
                <div className="social">
                    <a href="https://github.com/omardun">
                        <DiGithubBadge size={20} style={{ color: "#7546C1", marginRight: "2rem" }} />
                    </a>
                    <a href="https://www.linkedin.com/in/omar-rosquero-55403524b/">
                        <FaLinkedin size={20} style={{ color: "#007CBE", marginRight: "2rem" }} />
                    </a>
                    <a href="https://twitter.com/omarosquero">
                        <FaTwitterSquare size={20} style={{ color: "#007CBE", marginRight: "2rem" }} />
                    </a>
                </div>
            </div>

        </div>
    </div>
    )
}