import React, { Component } from "react";
import './ImageBox.css';
class ImageBox extends Component {
    render() {
        let { src, alt, description } = this.props;
        return (
            <div className = "img_box">
                <img src = {src} alt = {alt} />
                <p>{description}</p>
            </div>
        );
    }
}

export default ImageBox;
