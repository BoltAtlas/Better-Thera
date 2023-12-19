import React from 'react';
import '../Styles/Button.css'
// import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium','btn--large']

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
    }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize)
    ? buttonSize
    : SIZES[0];

    return (
        <div  className='btn'>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onclick = {onClick}
            type = {type}>
                {children}
            </button>
        </div>
    )

}