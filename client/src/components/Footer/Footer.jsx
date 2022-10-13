import "../Footer/FooterStyles.css"

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="title">
                        <h1>Introvert Empowerment</h1>
                        <h5>@2022 developed by John and <a href="https://www.linkedin.com/in/omar-rosquero-55403524b/">omar</a></h5>
                    </div>
                </div>
                <div className="middle">
                    <h1>Menu Links</h1>
                    <h4>About</h4>
                    <h4>Services</h4>
                    <h4>Contact</h4>
                    <h4>Login-Register</h4>
                    <h4>About</h4>
                </div>
                <div className="right">
                    <div className="omar-social">
                    <a href="https://github.com/omardun">
                            <FaGithub size={20} style={{ color: "#7546C1", marginRight: "2rem" }} />
                        </a>
                        <a href="https://www.linkedin.com/in/omar-rosquero-55403524b/">
                            <FaLinkedin size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        </a>
                        <a href="https://twitter.com/omarosquero">
                            <FaTwitter size={20} style={{ color: "#007CBE", marginRight: "2rem" }} />
                        </a>
                    </div>
                    <div className="john-social">
                    <a href="https://github.com/omardun">
                            <FaGithub size={20} style={{ color: "#7546C1", marginRight: "2rem" }} />
                        </a>
                        <a href="https://www.linkedin.com/in/omar-rosquero-55403524b/">
                            <FaLinkedin size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        </a>
                        <a href="https://twitter.com/omarosquero">
                            <FaTwitter size={20} style={{ color: "#007CBE", marginRight: "2rem" }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}