import React from 'react'
import './App.css';

import lambdalogo from './assets/lambdalogo.png';
import githublogo from './assets/githublogo.png';
import User from './components/User';
import Followers from './components/Followers';
import Following from './components/Following';
import Search from './components/Search';

export default function App() {
  return (
    <div className="container">
    <div className="header">
      <img src={lambdalogo} alt="Lambda Logo"/>
      <p>❤️'s</p>
      <img src={githublogo} alt="GitHub Logo" />
    </div>
    <User/>
    

    <Search/>
    <Followers/>
    <Following/>
      
    </div>

  )
}