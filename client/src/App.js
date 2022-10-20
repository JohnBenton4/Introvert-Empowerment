import React from 'react';
import './index.css';
import { Routes, Route } from "react-router-dom"
import About from './routes/About';
import Contact from "../src/routes/Contact"
import Services from './routes/Services';
import Login from './routes/Login';
import Register from './routes/Register';
import Home from "./routes/Home"
import "./App.css"
import Challenges from './routes/Challenges';
import TaskManagement from './routes/TaskManagement';
import TextReminder from './routes/TextReminder';
function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/challenges' element={<Challenges />} />
          <Route path='/taskmanagement' element={<TaskManagement />} />
          <Route path='/textreminder' element={<TextReminder />} />

        </Routes>
        </>
    </div>
  );
}

export default App;