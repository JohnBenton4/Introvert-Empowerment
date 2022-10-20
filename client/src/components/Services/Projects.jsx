import card from "../../images/card.jpg"

export default function Projects() {
    return (
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
                        <button>Click here</button>
                    </div>
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
                        <button>Click here</button>

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
                        <button>Click here</button>

                    </div>
                </div>        
           </div> 
        </section>
    )
}