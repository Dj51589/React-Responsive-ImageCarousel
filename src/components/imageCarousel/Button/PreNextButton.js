import React, {
    Component
} from "react";
import './PreNextButton.css';
class PreNextButton extends Component {
    render() {
        return (
            <div className = "carousel-buttons">
                <a href = "javascript:void();" className = "prev button"> </a>
                <a href = "javascript:void();" className = "next button"> </a>  
            </div >
        );
    }
}

export default PreNextButton;
