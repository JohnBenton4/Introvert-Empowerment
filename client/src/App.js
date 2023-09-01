import React from 'react';
import './index.css';
import { Routes, Route } from "react-router-dom"
import "./App.css";
import { Challenges, Contact, Home, Login, Register, Services, TaskManagement, TextReminder } from './routes';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/challenges' element={<Challenges />} />
          <Route path='/taskmanagement' element={<TaskManagement />} />
          <Route path='/textreminder' element={<TextReminder />} />
        </Routes>
    </div>
  );
}
export default App;