import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <h1>Follow our socials</h1>
                <div className="footer-heading">
                    <div className="left">
                        <p>John</p>
                        <div className="socials">
                            <a href="mailto:jtbentoniv@gmail.com"><TfiEmail size={40} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                            <a href="https://github.com/JohnBenton4" target="_blank" rel="noreferrer"><DiGithubBadge size={40} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                            <a href="https://www.linkedin.com/in/john-benton/" target="_blank" rel="noreferrer"><FaLinkedin size={40} style={{ color: "#fff" , marginRight: "1rem" }} /></a>
                        </div>
                    </div>
                    <div className="left">
                        <p>Omar</p>
                        <div className="socials">
                            <a href="mailto:omarosquero@gmail.com"><TfiEmail size={40} style={{ color: "#fff" , marginRight: "1rem" }} /></a>
                            <a href="https://github.com/omardun" target="_blank" rel="noreferrer" ><DiGithubBadge size={40} style={{ color: "#fff" , marginRight: "1rem" }} /></a>
                            <a href="https://www.linkedin.com/in/omar-rosquero-55403524b/" target="_blank" rel="noreferrer"><FaLinkedin size={40} style={{ color: "#fff" , marginRight: "1rem" }} /></a>
                        </div>
                    </div>
                </div>
                <p className="developed">@2022 developed by <a href="https://www.linkedin.com/in/john-benton/">John</a> and <a href="https://www.linkedin.com/in/omar-rosquero-55403524b/">Omar</a></p>
            </div>
        </div>
    )
}