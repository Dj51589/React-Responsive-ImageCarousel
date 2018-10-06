import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageCarousel from "./components/imageCarousel/ImageCarousel";
import {
  getCall
} from "./utils/serviceUtil";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  getImages() {
    let url = `key=9656065-a4094594c34f9ac14c7fc4c39&q=beautiful+landscape&image_type=photo`;
    getCall(url, (response) => {
      debugger;
      this.setState({
        images: response.hits
      });
    }, (error) => {
      console.log(error);
    });
  }

  componentDidMount() {
    this.getImages();
  }

  render() {
    let {images} = this.state;
    return (
      <div className="App">
        <ImageCarousel images={images}></ImageCarousel>
      </div>
    );
  }
}

export default App;
