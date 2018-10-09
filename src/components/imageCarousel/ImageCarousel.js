import React, { Component } from "react";
import PreNextButton from './Button/PreNextButton';
import './ImageCarousel.css';
import ImageBox from './ImageBox/ImageBox';
class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  componentWillReceiveProps = (nextProps) => {
    let totalImage = nextProps.images.length;
    let activeIndex;
    if (totalImage === 1) { // if total image of slider is 1 then by default first image will be active
      activeIndex = 1;
    } else {
      activeIndex = Math.floor(totalImage / 2); // if total image of slider is more than 2 then by default 
                                                // image will be the quotient
    }
    this.setState({
      activeIndex: activeIndex,
      prevDisabled: activeIndex === 1,
      nextDisabled: activeIndex === totalImage
    });
  };

  // previous click
  prevClick = () => {
    let totalImage = this.props.images.length;
    var activeIndex = this.state.activeIndex - 1;
    this.setState({ // on each prev/next click, setting current active image index as well as doing check to eanble/disable
                    // prev and next button
      activeIndex: activeIndex,
      prevDisabled: activeIndex === 1,
      nextDisabled: activeIndex === totalImage,
    });
  }
  
  // next click
  nextClick = () => {
    let totalImage = this.props.images.length;
    var activeIndex = this.state.activeIndex + 1;
    this.setState({
      activeIndex: activeIndex,
      nextDisabled: activeIndex === totalImage,
      prevDisabled: activeIndex === 1
    });
  }

  render() {
    let {images} = this.props;
    // creating all slider images here
    const imageList = images.map((image, index) =>
      <ImageBox src = {image.webformatURL}
        alt = {image.tag}
        key = {image.id}
        isActive = {
          (index + 1) === this.state.activeIndex
        }
        description = {image.tags}>
      </ImageBox>
    );
    return ( 
      <div className = "carousel-box">
        <div className = "carousel-img-box" >
          { imageList }
        </div>
        {
          images.length > 0 ? 
          <PreNextButton // component that render buttons
            prevClick = {
              this.prevClick
            }
            nextClick = {
              this.nextClick
            }
            isPreDisabled = {
              this.state.prevDisabled
            }
            isNextDisabled = {
              this.state.nextDisabled
            }
          /> : null
        }
        
      </div>
    );
  }
}

export default ImageCarousel;
