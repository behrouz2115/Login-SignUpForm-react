import React from 'react';
import { Route, Routes , Navigate } from 'react-router-dom';

import SignUp from './component/SignUp';
import Login from './component/Login';

import './App.css';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/" element={<Navigate to="signup"/>} />
      </Routes>
    </div>
  );
};

export default App;