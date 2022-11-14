import { useMediaQuery } from 'react-responsive';

import classes from './navBar.module.css';
import logo from '../../img/logo.png';

const NavBar = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 900px)'
    });

    const tradingText = isDesktopOrLaptop ?
        <h1>TRADING AS A BUSINESS</h1> :
        <h1>TRADING <br></br>AS A BUSINESS</h1>;

    const replaceDivContent = isDesktopOrLaptop ?
        <div className={classes['logo-and-div']}>
            <img className={classes['logo-and-div__logo']} alt="logo" src={logo} />
            <div className={classes['logo-and-div__div']}>
                {tradingText}
                <h6>Start your big trading journey now!</h6>
            </div>
        </div> :
        <div className={classes['logo-and-div-responsive']}>
            <img className={classes['logo-and-div__logo-responsive']} alt="logo" src={logo} />
            <div className={classes['logo-and-div__div-responsive']}>
                {tradingText}
            </div>
            <h6 className={isDesktopOrLaptop ? classes["logo-and-div__div-responsive"] : ""}>Start your big trading journey now!</h6>
        </div>;


    return (
        <div className={isDesktopOrLaptop ? classes.navBar : classes['navBar-responsive']}>
            {replaceDivContent}
        </div>
    );
};

export default NavBar;