import ContainerWrapper from '../container_wrapper/container_wrapper';

import { useMediaQuery } from 'react-responsive';

import classes from './trading_school.module.css';

const TradingSchool = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 900px)'
    });

    return (
        <ContainerWrapper>
            <div id="trading_school"></div>
            <div className={isDesktopOrLaptop ? classes['container-inner'] : classes['container-inner-responsive']}>
                <h2 className={classes['h2-center']}>TRADING AS A BUSINESS Trading School Mission:</h2>
                <h4>To teach and empower students to learn how to profit from the recognition of important levels and trends in the markets. All TRADING AS A BUSINESS Trading School courses are taught using real-time action in the market, putting you in real-world trading situations while you learn.</h4>
                <h2 className={classes['h2-center']}>The TRADING AS A BUSINESS Process:</h2>

                <h4>TRADING AS A BUSINESS Trading School is designed like an accelerated college course on trading.</h4>
                <h4>As such, progress through the program follows this path:</h4>
                <ul className={isDesktopOrLaptop ? classes['b-double'] : classes['b-double-responsive']}>
                    <li>Completion of the full body of lectures, workshops and guided trading sessions.</li>
                    <li>Graduation to developing your own system with ongoing mentorship.</li>
                    <li>Group trading with access to all of the platform's tools (TRADING AS A BUSINESS Pro, charting, chat etc.)</li>
                </ul>
                <h4>This 3 step process is the path to your own personalized success!</h4>
            </div>
        </ContainerWrapper>
    );
};

export default TradingSchool;