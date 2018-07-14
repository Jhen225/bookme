import React, { Component } from 'react';

export default class Home extends Component{
    render(){
        return(
         
            <div class="container">
              <div class="nav-container">
                <nav id="navbar">
                  <ul>
                    <li><a href="eventhosting">Create Event</a></li>
                    <li><a href="register">Sign Up</a></li>
                    <li><a href="login">Login</a></li>
                  </ul>
                </nav>
              </div>
              <div id="hero-image">
                <form id="hero-form" action="">
                    <h2>Find Your Crowd</h2>  
                    <div>            
                      <input type="text" name="eventInput" placeholder="Search Events" id="event_input"/>
                      <input type="text" name="locationInput" placeholder="City/State or Zip" id="location_input"/>
                      <input type="text" name="dateInput" placeholder="Dates" id="date_input"/>
                      <button type="submit" id="location_submit">Enter</button>
                    </div>
                  </form>
              </div>
              <div class="content">

              </div>
            </div>
          
        );
    }
}