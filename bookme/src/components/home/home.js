import React, { Component } from 'react';

export default class Home extends Component{
    render(){
        return(
         
            <div class="container">
              <div class="split left">
                <h2>Looking For A Fun Night Out?</h2>
                <input type="text" name="state" id="state"/>
                <input type="text" name="city" id="city"/>
                <input type="text" name="zipcode" id="zipcode"/>                
              </div>
              <div class="split right">
                <h2>Hosting The Hottest Events Just Got Easier!</h2>
                <input type="button" value="Register"/>
              </div>
            </div>
          
        );
    }
}