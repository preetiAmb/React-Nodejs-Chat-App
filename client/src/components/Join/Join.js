import React from 'react';
import Header from '../Header/Header';
import JoinForm from './JoinFrom';

const Join = () => {
    return (
      <div className="container">
      <div className="app-wrapper">
        <div className="main">
          <Header />  
          <JoinForm />        
        </div>
      </div>
    </div>
    )
}

export default Join
