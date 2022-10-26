import { useState } from "react"

export default function ServiceOne() {

    // const [conversation, setConversation] = useState([].conversationStarter)
    //     const [ challenge, setChallenge] = useState([].challenge)
    //     const [ pickupline, setPickupline] = useState([].line)
    const [text, setText] = useState("")
        const submit = () => { 
            fetch(`http://localhost:8000/challenges`)
                .then((response) => response.json())
                .then((data) => {
                    setText(data[1].challenge)

                });
        };

        const clickHandler = () => { 
            fetch(`http://localhost:8000/pickuplines`)
                .then((response) => response.json())
                .then((data) => {
                    setText(data[1].line)
                });
        };

        const click = () => { 
            fetch(`http://localhost:8000/conversations`)
                .then((response) => response.json())
                .then((data) => {
                    setText(data[1].conversationStarter)
                });
        };
        
    return (
        <div className="containerService1">
            <h1 id="title">Pick your challenege</h1>
            <div className="socialSkills">
                <button onClick={submit}>Random Challenge</button>
                <button onClick={click}>Conversation Starter</button>
                <button onClick={clickHandler}>Pick up line</button>
            </div>
            <div id="text">

                <p>{text}</p>

                </div>
        </div>
    )
}