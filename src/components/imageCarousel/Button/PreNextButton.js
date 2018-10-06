import React, {
    Component
} from "react";
import './PreNextButton.css';
class PreNextButton extends Component {
    render() {
        let {
            prevClick, nextClick, isNextDisabled, isPreDisabled
        } = this.props;
        return (
            <div className = "carousel-buttons">
                <a 
                className = {`${isPreDisabled === true ? 'disable' : ''} prev button`}
                onClick = {
                    prevClick
                } > < /a>
                <a 
                className = {
                    `${isNextDisabled === true ? 'disable' : ''} next button`
                }
                onClick = {nextClick} > </a>  
            </div >
        );
    }
}

export default PreNextButton;
