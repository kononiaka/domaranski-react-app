import React from 'react';
import classes from './navBar.module.css';
import logo from '../../img/logo.png';

const NavBar = () => {
    return (
        <div className={classes.navBar}>
            <div className={classes['logo-and-div']}>
                <img className={classes['logo-and-div__logo']} alt="logo" src={logo} />
                <div className={classes['logo-and-div__div']}>
                    <h1>TRADING AS A BUSINESS</h1>
                    <h6>Start your big trading journey now!</h6>
                </div>
            </div>
        </div>
    );
};

export default NavBar;