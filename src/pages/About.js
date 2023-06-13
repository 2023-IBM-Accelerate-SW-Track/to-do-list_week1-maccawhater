import React, { Component } from 'react';
import "./About.css";
import jibraanProfilePic from "../assets/jibraan_profile_pic.jpg";
export default class About extends Component {
  render() {
    return (
      <div>
         <div>
          <div className="split left">
            <div className="centered">
              <img 
                className="profile_image"
                src={jibraanProfilePic}
                alt="jibraanProfilePic"
                ></img>
            </div>    
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Jibraan Ghani</div>
        <div className="brief_description">
        Jibraan is a student at the University of Pennsylvania studying Philosophy and Computer Science. 
        He is most excited to have a chance to impact his newfound community here in Philadelphia by helping people experiencing homelessness. 
        Beyond work, food, cycling and friends are his highest priority.
        </div>
      </div>
    </div>
  </div> 
      </div>
    )
  }
}