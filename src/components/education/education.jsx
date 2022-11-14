import ContainerWrapper from '../container_wrapper/container_wrapper';
import Button from '../UI/Button/Button';

import { useMediaQuery } from 'react-responsive';

import classes from './education.module.css';

const Education = (props) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 900px)'
    });

    return (
        <ContainerWrapper background={classes['c-blue-wrapper']}>
            <div id="education"></div>
            <div className={isDesktopOrLaptop ? `${classes['container-inner']} ${classes['c-blue-inner']} ` : `${classes['container-inner-responsive']} ${classes['c-blue-inner-responsive']} `}>
                <h2>Education For Modern Retail Traders</h2>
                <h4>Avoid outdated and incomplete modes of trading education. All TRADING AS A BUSINESS Trading School courses are taught using real-time action in the market, putting you in real-world trading situations while you learn -- and connecting you with the technology you need to succeed.</h4>
                <h4>College style courses using WHAT'S HAPPENING IN THE MARKET TODAY to teach you:</h4>
                <ul style={{ listStyleType: 'none' }}>
                    <li>Chart Price Levels &amp; Technical Analysis</li>
                    <li>How to Identify Trends and Momentum</li>
                    <li>All of the Chart Price Patterns You Need to Know</li>
                    <li>Market Principles &amp; Applied Concepts</li>
                </ul>
                <Button margin click={props.handleClick}></Button>
            </div>
        </ContainerWrapper >
    );
};

export default Education;