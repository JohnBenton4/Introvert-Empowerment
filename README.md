<h1 align= "center">
Introvert Empowerment
</h1>

<h2 align="center">Empowering Those Who Seek Adventure</h2>   

<p>
Active Development: 10/6/2022 - 10/27/2022
</p>
<p>
Introvert Empowerment was built for those of us in the world who know ourself as an introvert but would like to be more outgoing from time to time. Users can access many features including: challenges, a task manager, pickup lines, and more that can help embolden and give confidence. Another encouraging feature of Introvert Empowerment is the 'Message of the Day' on its landing page. This message is pulled from an API that provides uplifting quotes to start the users' day off right.
</p>

## Demo
[![Introvert Empowerment Demo](./images/Demo.png)](https://youtu.be/INj1jUsurRU "Introvert Empowerment Demo")

## Features
<ul>
<li><strong>Social Challenges - </strong>These challenges have separate categories, from which the user will be able to select (forth coming). Examples of categories include: random challenges, conversation starters, and pickup lines.</li>
<li><strong>Random Challenge - </strong>This portion of the app is used as a extra difficult challenge to push those who feel inspired to truly be outgoing. These differ from Conversation Starters because they require much more social interaction and put the user in a potentially socially vulnerable situation. The Random Challenges can not be individually selected, and the user is encouraged to only request a challenge if they are committed to the challenge.</li>
<li><strong>Conversation Starters - </strong>Conversation Starters are a gentle way to dip a users' toes in the waters of socializing. We encourage the user to request Conversation Starters until they find one that they feel comfortable trying. Future plans include creating individual selectors based on categories so users can target results that best suite their situation.</li>
<li><strong>Pickup Lines - </strong>Although not all of the pickup lines have been thoroughly tested in the real world, we feel confident you will at least walk away with a smile on your face and your intended audience.</li>
<li><strong>User Profile - </strong>The user's profile shows items saved in the Task Manager (forth coming). They can also add and remove items from the Task Manager as needed.</li>
<li><strong>Task Manager - </strong>A Task Manager was essential to this project. Users can store social challenges and pickup lines that are useful to them and be able to reference them for future personal growth.</li>
</ul>

## Project Board
<p>Our project board, which lays out our design ideas and vision, can be found<a href="https://miro.com/app/board/uXjVPPo33Ao=/"> Here.</a>
</p>

## Technologies
<ul>
<li>PostgreSQL</li>
<li>Express</li>
<li>React</li>
<li>Node.js</li>
</ul>

## Screenshots
![Introvert Empowerment homepage](/images/homepage.jpeg)
![task manager](/images/task-manager.jpeg)
![social challenges page](/images/social-challenges.jpeg)
![services page](/images/services.jpeg)

## Code Examples
Express was used to create databases to store all the Social Challenges information
``` javascript 
 'use strict';

const bcrypt = require('bcrypt');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.Challenge, {
        as: 'challenges',
        through: models.UserChallenge,
        foreignKey: 'userId',
        otherKey: 'challengeId',
      });

      User.belongsToMany(models.Conversation, {
        as: 'conversations',
        through: models.UserConversation,
        foreignKey: 'userId',
        otherKey: 'conversationId',
      });

      User.belongsToMany(models.PickupLine, {
        as: 'pickuplines',
        through: models.UserPickupLine,
        foreignKey: 'userId',
        otherKey: 'pickupLineId',
      });
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING
  },
    {
      hooks: {
        async beforeCreate(user) {
          user.password = await bcrypt.hash(user.password, 10);
        },
      },
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
```
Sample of our Services page.
```javascript
import { Link } from "react-router-dom"
export default function Projects() {
    return (
        <>
    <div className="services">
        <h1>Our Services</h1>
        {/* <p>Go through</p> */}
        </div>
        <section className="project-container">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img className="cardimg" src={Social} alt="Avatar" />
                    </div>
                    <div className="flip-card-back">
                        <h2>Social Challenges</h2>
                        <p>Social Challenges allow you to choose from any category and it will return challenges for you to complete. Write them down and add them to the task manager</p>
                        <Link to="/challenges">
                        <button type="button" className="btn btn-dark">Start</button>
                    </Link>                    </div>
                </div>        
           </div> 
           <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img className="cardimg" src={Task} alt="Avatar" />
                    </div>
                    <div className="flip-card-back">
                        <h2>Task Manager</h2>
                        <p>The Task Manager allows you to input your challenges and mark them complete when finished and delete them afterwards.</p>
                        <Link to="/taskmanagement">
                        <button type="button" className="btn btn-dark">Start</button>
                    </Link>
                    </div>
                </div>        
           </div> 
           
```

## Process
<p>Introvert Empowerment was designed to give introverts looking to be more out going, techniques to practice in public settings. It is also designed to be unintimidating and encouraging at the same time. The heart of the app is the database we created that houses all the challenges, pickup lines, and conversation starters. We also left room for growth in the app and will include phone notification technology and ways for users to save there preferences and share with friends as well.
</p>


## Challenges
<p>One of the biggest challenges was getting the login screen to verify the users credentials and then sending the user to their personal homepage once they click 'Login'. This functionality is still underway and we hope to have it completed very soon.
  </p>
<p>A second aspect that was both a challenge and an advantage was creating our own databases. Although we were able to refine the tables in a manor that was most useful for us, it meant we had to spend extra time creating the tables and being extra decisive about what information the tables would be most beneficial.
</p>

## Goals
<ul>
<li><strong>Login - Our first goal is to get the personal login complete so users can save challenges, conversation starters, or pickup lines to their profile.</strong> 
</li>
<li><strong>Mobile Notifications - Although setting up a simple mobile notification is possible, making it work with a full-stack application is a much larger undertaking. This would be a great feature to have, and I know it won't be long before we launch that portion of the app.</strong> </li>
</ul>

## Contributors
<a href="https://github.com/JohnBenton4">John Benton</a> - Project manager, API creator, backend deployment, user profile, database seeding and setup
</br>
<a href="https://github.com/omardun">Omar Rosquero</a> - Frontend manager, visual design, React lead, routes architect

