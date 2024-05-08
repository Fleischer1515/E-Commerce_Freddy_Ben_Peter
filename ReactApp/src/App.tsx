import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginPage from './pages/loginpage.tsx';
import './App.css';

 export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/login" Component={LoginPage} />
      </div>
    </BrowserRouter>
  );
}

