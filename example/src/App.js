import React, { Component } from 'react';
// CSS
import classes from './App.css';
// JSX
// import React_PNG_Component from 'react-png-component'
import HoverCard from 'react-png-hovercard';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <HoverCard
          front={
            <div className="Back">
              <p> DON'T YOU DARE HOVER ME</p>
            </div>
          }
          back={
            <div className="Front">
              <img
                src="http://66.media.tumblr.com/7a967612c41232bb63dd1a78548554ef/tumblr_ofdq945Wv41qbxi45o2_500.gif"
                alt=""
                style={{ objectFit: 'cover' }}
              />
            </div>
          }
          maxWidth={300}
          animationSpeed={500}
          height={300}
        />
      </div>
    );
  }
}
