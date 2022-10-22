import { useState } from "react"
import { IoCaretDown } from "react-icons/io5";


export default function ServiceOne({ selected, setSelected }) {
    const [isActive, setIsActive] = useState(false)
    const options = ["Category1", "Category2", "Category3"]
    return (
        <div className="containerService1">
            <h1 id="title">Pick your challenege</h1>
            <div className="socialSkills">
                <button>Random Chaellenge</button>
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
                    <p>this is where all the text is put when a button or a category is clicked above</p>
                </div>
        </div>
    )
}