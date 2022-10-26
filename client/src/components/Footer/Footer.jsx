import { DiGithubBadge } from "react-icons/di";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <h1>Follow our socials</h1>
                <div className="footer-heading">
                    <div className="left">
                        <p>Johns</p>
                        <div className="socials">
                            <TfiEmail size={40} style={{ color: "#fff", marginRight: "1rem" }} />
                            <DiGithubBadge size={40} style={{ color: "#fff", marginRight: "1rem" }} />
                            <FaTwitterSquare size={40} style={{ color: "#fff" , marginRight: "1rem" }} />
                            <FaLinkedin size={40} style={{ color: "#fff" , marginRight: "1rem" }} />
                        </div>
                    </div>
                    <div className="left">
                        <p>Omars</p>
                        <div className="socials">
                            <TfiEmail size={40} style={{ color: "#fff" , marginRight: "1rem" }} />
                            <DiGithubBadge size={40} style={{ color: "#fff" , marginRight: "1rem" }} />
                            <FaTwitterSquare size={40} style={{ color: "#fff" , marginRight: "1rem"}} />
                            <FaLinkedin size={40} style={{ color: "#fff" , marginRight: "1rem" }} />
                        </div>
                    </div>
                </div>
                <p className="developed">@2022 developed by <a href="">John</a> and <a href="">Omar</a></p>
            </div>
        </div>
    )
}