<h1 align= "center">
Introvert Empowerment
</h1>

<h2 align="center">Empowering Those Who Seek Adventure</h2>   

<p>
Active Development: 10/6/2022 - 10/27/2022
</p>
<p>
Introvert Empowerment was built for those of us in the world who know ourself as an introvert but would like to be more outgoing from time to time. Users can access many features including: challenges, a task manager, pickup lines, and more that can help embolden and give confidence. Another encouraging feature of Intrivert Empowerment is the 'Message of the Day' that is on the landing page. This message is pulled from an API that provides uplifting quotes to start the users' day off right.
</p>
<p>
We'd love for you to feel empowered too at <a href="live link coming soon">Introvert Empowerment</a>!
</p>

## Demo
[Introvert Empowerment Demo]

## Features
<ul>
<li><strong>Social Challenges - </strong>These challenges have separate categories, which the user will be able to select from (forth coming). Examples of categories include: social environments, workplace, school setting, and more.</li>
<li><strong>Random Challenge - </strong>This portion of the app is used as a extra difficult challenge to push those who feel inspired to truly be outgoing. These differ from Conversation Starters because they require much more social interaction and usually put the user in a potentially socially volernable situation. The Radnom Challenges can not be individually selected and the user is encouraged to only request a challenge if they are commited to doing whatever the challenge reads.</li>
<li><strong>Conversation Starters - </strong>Conversation Starters are a gentle way to dip a users' toes in the waters of being socializing. We encourage the user to request Conversation Starters until they find on that they feel comfortable trying. We will later create individual selectors based on categories so users can target results that best suite their situation.</li>
<li><strong>Pickup Lines - </strong>Although not all of the pickup lines have been thoughly tested in the real world, we feel confident you will at least get a smile in return.</li>
<li><strong>User Profile - </strong>The users profile shows tiems saved in the task manager. They can also add and remove items from the task manager as needed.</li>
<li><strong>Task Manager - </strong>A task manager was essential to this project. Users will be able to store social challenges that are useful to them and be able to reference them for future personal growth.</li>


</ul>

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
        forignKey: 'userId',
        otherKey: 'challengeId',
      });

      User.belongsToMany(models.Conversation, {
        as: 'conversations',
        through: models.UserConversation,
        forignKey: 'userId',
        otherKey: 'conversationId',
      });

      User.belongsToMany(models.PickupLine, {
        as: 'pickuplines',
        through: models.UserPickupLine,
        forignKey: 'userId',
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
Sample of our services page.
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
                        <p>Social challenges allows you to choose from any category and it will spit out challenges for your to complete. Write them down and input them into the task manager</p>
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
                        <p>The task manager allows you to input your challenges and mark them complete when finished and delete them afterwards.</p>
                        <Link to="/taskmanagement">
                        <button type="button" className="btn btn-dark">Start</button>
                    </Link>
                    </div>
                </div>        
           </div> 
           
```


## Process
<p>Introvert Empowerment was designed to not only give introverts looking for ways to be more out going techniques to practice in public settings, but it is also designed to be unintimidating and encouraging at the same time. The heart of the app is the database we created that houses all the challenges, pickup lines, and conversation starters. We also left room for growth in the app and will include phone notification technology and ways for users to save there progress and share with friends as well.
</p>


## Challenges
<p>One of the biggest challenges was getting the login screen to verify the users credentials and then sending the user to their personal homepage once they click 'Login'. This functionality is still ongoing and we hope to have it complete very soon.
  </p>
<p>A second aspect that was both a challenge and an advantage was creating our own databases. Although we were able to tune the tables in a manor that was most useful for us, it meant we had to spend extra time creating the tables and being extra decisive about what information the tables would hold.
</p>

## Goals
<ul>
<li><strong>Login - Our first goal is to get the personal login complete so users can save challenges or pickup lines to their profile.</strong> 
</li>
<li><strong>Mobile Notifications - althogh setting up a simple mobile notification is possible, making it work with a full0stack application is a larger feet for sure. This would be a great feature to have and I know it won't be long before we have the cide set up.</strong> </li>
</ul>

## Contributors
<a href="https://github.com/JohnBenton4">John Benton</a> - roles here
</br>
<a href="https://github.com/omardun">Omar Rosquero</a> - roles here

