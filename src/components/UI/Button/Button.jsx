import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
    const classDiv = props.margin ? `${classes.banner__btn} ${classes.margin}` : classes.banner__btn;
    return (
        <div className={classDiv} onClick={props.click}>
            Start Your 7-Day Trial Now!
        </div>
    );
};
export default Button;