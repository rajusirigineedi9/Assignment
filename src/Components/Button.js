import React from "react";
import "./button.css";


const STYLES = [
    "btn-first",
    "btn--second",
    "btn--third"
];


const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
    buttonStyle, 
    buttonSize,
    name
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0] ;

    return (
        <button className={`${checkButtonStyle} ${checkButtonSize}`}  >
            {name}
        </button>
    )
}