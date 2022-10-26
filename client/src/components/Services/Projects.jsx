import Task from "../../images/taskmanage.jpg"

import { Link } from "react-router-dom"
export default function Projects() {
    return (
        <>
        <div className="services">
        <h1>Our Services</h1>
        <p>Go through each service and</p>
        </div>
        <section className="project-container">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img className="cardimg" src={Task} alt="Avatar" />
                        <p>this is step 1 </p>
                    </div>
                    <div className="flip-card-back">
                        <h2>Social Challenges</h2>
                        <p>Social Challenges gives you challenges</p>
                        <Link to="/challenges">
                        <button type="button" class="btn btn-dark">Click here</button>
                    </Link>                    </div>
                </div>        
           </div> 
           <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img className="cardimg" src={Task} alt="Avatar" />
                        <p>this is step 2 </p>
                    </div>
                    <div className="flip-card-back">
                        <h2>Task Manager</h2>
                        <p>The task manager allows you to input your challenges and mark them complete when finished and delete them afterwards.</p>
                        <Link to="/taskmanagement">
                        <button type="button" class="btn btn-dark">Click here</button>
                    </Link>
                    </div>
                </div>        
           </div> 
           <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img className="cardimg" src={Task} alt="Avatar" />
                        <p>this is step 3 </p>
                    </div>
                    <div className="flip-card-back">
                        <h2>Task Reminder</h2>
                        <p>This service will alow you to input your phone number and allow us to send you reminders to finish your tasks and check them off in the task manager. (COMING SOON)</p>
                        <button type="button" class="btn btn-dark" disabled>Click here</button>
                    </div>
                </div>        
           </div> 
        </section>
        </>
    )
}