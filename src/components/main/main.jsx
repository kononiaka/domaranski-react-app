import React, { useState, useCallback } from 'react';
import LeftContainer from "../left_container/left_container";
import ModalHelp from './../ModalHelp/modalHelp';
import help_ico from '../../img/help_icon.png';
import PopUpSubmit from './../pop_up_submit/pop_up_submit';

import classes from "./main.module.css";
const Main = () => {
    const [showHelp, setShowHelp] = useState(false);

    const [showSubmit, setShowSubmit] = useState(false);

    const handleClick = () => {
        setShowSubmit(true);
    };

    const helpHandler = () => {
        setShowHelp(true);
    };
    const helpCloseHandler = () => {
        setShowHelp(false);
        setShowSubmit(false);
    };

    return (
        <div className={classes.main}>
            <div className={classes['gap-first']} />
            <LeftContainer handleClick={handleClick} />
            <div className={classes.gap} />
            <div>
                <img className={classes["help_ico"]} src={help_ico} alt="help-ico" onClick={helpHandler} />
            </div>
            {showHelp && <ModalHelp onClose={helpCloseHandler} />}
            {showSubmit && <PopUpSubmit onClose={helpCloseHandler} submit />}
        </div >
    );
};

export default Main;