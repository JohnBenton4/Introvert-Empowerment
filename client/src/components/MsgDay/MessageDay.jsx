import React from "react";
import HomeImage from "../../images/home.jpg"
import { useState } from "react";
import { useEffect } from "react";

const MessageDay = () => {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        getAPI()
    }, [])

    const getAPI = () => {
        fetch("https://type.fit/api/quotes")

            .then(res => res.json())
            .then(quotes => {
                setQuotes(quotes)
                console.log(quotes)
            })
    };

    const renderMessageDay = () => {
        if (!quotes.length) {
            return "";
        }
        const quote = quotes[Math.floor(Math.random() * quotes.length)  ];
        return (
            <div>
                "{quote.text}"
                <br></br>
                -{quote.author}
            </div>
        );
    };

    return (
        <div className="container">
            <div className="sub-container">
                <img className="home-image" src={HomeImage} alt="Homeimage" />
                <div id="MessageDayContainer">
                    <h1>Message of the day....</h1>
                    <div id="message">
                    {renderMessageDay()}
                    </div>
                </div>

            </div>
        </div>
    )
}
export default MessageDay;