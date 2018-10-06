import React, { Component } from "react";
import PreNextButton from './Button/PreNextButton';
import './ImageCarousel.css';
import ImageBox from './ImageBox/ImageBox';
class ImageCarousel extends Component {
  render() {
    let {images} = this.props;
    debugger;
    const imageList = images ? images.map((image) =>
      <ImageBox src = {image.webformatURL}
        alt = {image.tag}
        key = {image.id}
        description = {image.tag} />
    ) : null;
    return ( 
      <div className = "carousel-box">
        <div className = "carousel-img-box" >
          { imageList }
        </div>
        <PreNextButton />
      </div>
    );
  }
}

export default ImageCarousel;
