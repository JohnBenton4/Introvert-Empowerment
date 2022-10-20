import card from "../../images/card.jpg"
import { Link } from "react-router-dom"
export default function Projects() {
    return (
        <>
        <div className="services">
        <h1>Services</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repellat odio natus cum reiciendis nobis fugit error soluta, adipisci quia!</p>
        </div>
        <section className="project-container">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img className="cardimg" src={card} alt="Avatar" />
                        <p>this is step 1 </p>
                    </div>
                    <div className="flip-card-back">
                        <h2>hi im john doe</h2>
                        <p>Text test</p>
                        <p>we love that guy</p>
                        <Link to="/challenges">
                        <button className="btn btn-light">Click here</button>
                    </Link>                    </div>
                </div>        
           </div> 
           <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img className="cardimg" src={card} alt="Avatar" />
                        <p>this is step 2 </p>
                    </div>
                    <div className="flip-card-back">
                        <h2>hi im john doe</h2>
                        <p>Text test</p>
                        <p>we love that guy</p>
                        <Link to="/taskmanagement">
                        <button className="btn btn-light">Click here</button>
                    </Link>
                    </div>
                </div>        
           </div> 
           <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img className="cardimg" src={card} alt="Avatar" />
                        <p>this is step 3 </p>
                    </div>
                    <div className="flip-card-back">
                        <h2>hi im john doe</h2>
                        <p>Text test</p>
                        <p>we love that guy</p>
                        <Link to="/textreminder">
                        <button className="btn btn-light">Click here</button>
                    </Link>
                    </div>
                </div>        
           </div> 
        </section>
        </>
    )
}