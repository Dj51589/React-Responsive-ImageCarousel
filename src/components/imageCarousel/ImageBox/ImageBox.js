import React, { Component } from "react";
import './ImageBox.css';
class ImageBox extends Component {
    render() {
        let { src, alt, description } = this.props;
        return (
            < div className = "img_box" >
                <div className = "" >
                    <img src = {src} alt = {alt}/> 
                </div>
                <div>
                    {description}
                </div>
            </div>
            
        );
    }
}

export default ImageBox;
