import HomeImage from "../../images/home.jpg"


export default function Message() {
    return (
        <div className="container">
            <div className="sub-container">
            <img className="home-image" src={HomeImage} alt="Homeimage"/>
            <div id="MessageDayContainer">
            <h1>Meessage of the day....</h1>
            <div id="message">
                <p id="quote">"Work out your own salvation. Do not depend on others."</p>
                <p id="author">-"Buddha"</p>
            </div>
            </div>

            </div>
        </div>
    )
}