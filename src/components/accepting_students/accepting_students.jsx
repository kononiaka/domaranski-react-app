import ContainerWrapper from '../container_wrapper/container_wrapper';
import img from '../../img/img-1.png';

import { useMediaQuery } from 'react-responsive';

import classes from './accepting_students.module.css';

const AcceptingStudents = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 900px)'
    });
    return (
        <ContainerWrapper>
            <div id="accepting_students"></div>
            <div className={isDesktopOrLaptop ? `${classes['accepting-students']} ${classes['container-inner']}` : `${classes['container-inner-responsive']}`}>
                <div className={classes['accepting-students__item']}>
                    <h2>
                        Now accepting students!
                    </h2>
                    <h4>
                        A new type of educational product to help new traders succeed:
                    </h4>
                    <ul >
                        <li>College-style courses on the foundations of successful trading</li>
                        <li>Active chat room with live trading</li>
                        <li>Daily web sessions &amp; watchlist building</li>
                        <li>Trade ideas</li>
                        <li>Homework + quizzes to track your progress</li>
                        <li>Full TRADING AS A BUSINESS Pro Access!!!</li>
                    </ul>
                </div>
                <div>
                    <img className={isDesktopOrLaptop ? classes['accepting-students__img'] : classes['accepting-students__img__responsive']} alt="img" src={img} />
                </div>
            </div>
        </ContainerWrapper>
    );
};

export default AcceptingStudents;