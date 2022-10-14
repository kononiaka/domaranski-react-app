import React, { useState } from 'react';
import LeftContainer from "../left_container/left_container";
import ModalHelp from './../ModalHelp/modalHelp';
import help_ico from '../../img/help_icon.png';

import classes from "./main.module.css";
const Main = () => {
    const [showHelp, setShowHelp] = useState(false);

    const helpHandler = () => {
        console.log('Clicked help');
        setShowHelp(true);
    };
    const helpCloseHandler = () => {
        setShowHelp(false);
    };

    return (
        <div className={classes.main}>
            <div className={classes['gap-first']}></div>
            <LeftContainer></LeftContainer>
            <div className={classes.gap}></div>
            <div>
                <img className={classes["help_ico"]} src={help_ico} alt="help-ico" onClick={helpHandler} />
            </div>
            {showHelp && <ModalHelp onClose={helpCloseHandler}></ModalHelp>}


        </div>
    );
};

export default Main;