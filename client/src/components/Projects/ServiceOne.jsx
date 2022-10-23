import { useState } from "react"
import { IoCaretDown } from "react-icons/io5";

export default function ServiceOne() {
    const [isActive, setIsActive] = useState(false)
    const options = ["Category1", "Category2", "Category3"]

        const [selected, setSelected] = useState(options[0]);
        const [ challenge, setChallenge] = useState([].challenge)
        const [ pickupline, setPickupline] = useState([].line)

        const submit = () => { 
            // console.log(selected);
            fetch(`http://localhost:8000/challenges`)
                .then((response) => response.json())
                .then((data) => {
                    // console.log(data[0].challenge)
                    setChallenge(data[1].challenge)

                });
        };
        const clickHandler = () => { 
            // console.log(selected);
            fetch(`http://localhost:8000/pickuplines`)
                .then((response) => response.json())
                .then((data) => {
                    // console.log(data[0].challenge)
                    setPickupline(data[1].line)
                });

        };
    return (
        <div className="containerService1">
            <h1 id="title">Pick your challenege</h1>
            <div className="socialSkills">
                <button onClick={submit}>Random Challenge</button>
                <div className="dropdown">
                    <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
                         {selected}
                        <span><IoCaretDown /></span>
                    </div>
                    {isActive && (
                        <div className="dropdown-content">
                            {options.map((option) => (
                                <div
                                    onClick={(e) => {
                                        setSelected(option)
                                        setIsActive(false)
                                    }}
                                    className="dropdown-item"
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <button onClick={clickHandler}>Pick up line</button>
            </div>
            <div id="text">
                <p>{challenge}</p>
                <p>{pickupline} </p>
                </div>
        </div>
    )
}