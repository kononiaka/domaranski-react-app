import { useMediaQuery } from 'react-responsive';

import classes from './Button.module.css';


const Button = (props) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 900px)'
    });

    const classDiv = props.margin ? `${classes.banner__btn} ${classes.margin}` : isDesktopOrLaptop ? classes.banner__btn : classes.banner__btn__responsive;
    return (
        <div className={classDiv} onClick={props.click}>
            Start Your 7-Day Trial Now!
        </div>
    );
};
export default Button;