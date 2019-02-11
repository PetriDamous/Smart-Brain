import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Clarifai from 'clarifai';
require('dotenv').config();
//const Clarifai = require('clarifai');

const app = new Clarifai.App({
  apiKey: process.env.REACT_APP_API_KEY
 });

class App extends Component {

  constructor(){
    super();
    this.state = {
      input: '',
      imageURL: ''
    }
  } 

  onInputChange = (e) => {
    this.setState({input: e.target.value});
    
  }

  onSubmit = () => {    
    this.setState({imageURL: this.state.input})

    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      function(response) {
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
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
        
        <FaceRecognition imageURL={this.state.imageURL}/>
      </div>
    );
  }
}

export default App;
