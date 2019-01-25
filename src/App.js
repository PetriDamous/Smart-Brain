import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';
require('dotenv').config();
import Clarifai from 'clarifai';
//const Clarifai = require('clarifai');

const app = new Clarifai.App({
  apiKey: process.env.REACT_APP_API_KEY
 });

class App extends Component {

  constructor(){
    super();
    this.state = {
      input: '',
    }
  } 

  onInputChange = (e) => {
    console.log(e.target.value);
    
  }

  onSubmit = () => {
    console.log('click');

    app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
      function(response) {
        console.log(response);
      },
      function(err) {
        // there was an error
      }
    );    
  }

  render() {
    return (
      <div className="App">
        <Navigation />        
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onSubmit={this.onSubmit}
        />      
        
        {/*<FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
