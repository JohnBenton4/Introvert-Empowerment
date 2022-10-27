import { useState } from "react"

export default function ServiceOne() {

    const randomConversation = Math.floor(Math.random() * 23)
    const randomChallenge = Math.floor(Math.random() * 20)
    const randomPickupline = Math.floor(Math.random() * 12)


    const [text, setText] = useState("")
        const submit = () => { 
            fetch(`http://localhost:8000/challenges`)
                .then((response) => response.json())
                .then((data) => {
                    setText(data[randomChallenge].challenge)
                });
        };

        const clickHandler = () => { 
            fetch(`http://localhost:8000/pickuplines`)
                .then((response) => response.json())
                .then((data) => {
                    setText(data[randomPickupline].line)
                });
        };

        const click = () => { 
            fetch(`http://localhost:8000/conversations`)
                .then((response) => response.json())
                .then((data) => {
                    setText(data[randomConversation].conversationStarter)
                });
        };
        
    return (
        <>
        {/* <div className="serviceOneHeading">
        <h1>A Social  exercise </h1>
        <p>This service allows you to click a button below and it will spit out a challenge. These exercises will challenge you to get out of your comfort zone and feel accomplished when you complete your task. Pick a challenge from each category and remember the challenge or write it down. You will input the same challenges in our next service.</p>
        </div> */}
        <div className="containerService1">
            <h1 id="title">Pick your challenege</h1>
            <p>*Click on a button to retrieve challenges from each category. Write down or remember the challenges you received and you will put them into the next service*</p>
            <div className="socialSkills">
                <button  onClick={submit} type="button" className="btn btn-dark">Random Challenge</button>
                <button onClick={click} type="button" className="btn btn-dark">Conversation Starter</button>
                <button onClick={clickHandler} type="button" className="btn btn-dark">Pick up line</button>
            </div>
            <div id="text">

                <p>{text}</p>

                </div>
        </div>
        </>
    )
}