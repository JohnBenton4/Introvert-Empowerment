import { useState } from "react"
import { IoCaretDown } from "react-icons/io5";


export default function ServiceOne() {
    const [isActive, setIsActive] = useState(false)
    const options = ["Category1", "Category2", "Category3"]

        const [selected, setSelected] = useState(options[0]);

        const submit = () => {
            console.log(selected);
            fetch(`http://localhost:8000/challenges`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    // onSetType(data);
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
                <button>Pick up line</button>
            </div>
            <div id="text">
                    <p>{}</p>
                </div>
        </div>
    )
}