import React from 'react';
import LeftContainer from "../left_container/left_container";

import help_ico from '../../img/help_icon.png';

import classes from "./main.module.css";

const Main = (props) => {
    return (
        <div className={classes.main}>
            <div className={classes['gap-first']} />
            <LeftContainer handleClick={props.handleClick} />
            <div className={classes.gap} />
            <div>
                <img className={classes["help_ico"]} src={help_ico} alt="help-ico" onClick={props.helpHandler} />
            </div>

        </div >
    );
};

export default Main;