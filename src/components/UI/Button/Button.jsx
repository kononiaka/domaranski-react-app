import { useMediaQuery } from 'react-responsive';
import classes from './Button.module.css';

const Button = (props) => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 900px)'
    });

    const classDiv = props.margin
        ? isDesktopOrLaptop
            ? `${classes.banner__btn} ${classes.margin}` :
            `${classes.banner__btn__responsive} ${classes.margin__responsive}` :
        `${classes.banner__btn__responsive}`;
    return (
        <div className={classDiv} onClick={props.click}>
            Start Trading Journey Now
        </div>
    );
};
export default Button;