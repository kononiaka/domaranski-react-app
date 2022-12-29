import classes from './congratulation.module.css';

const Congratulations = (props) => {
    return (
        <div className={classes.submitModalCongrats}>
            <div className={classes.congrats_bcg}>
                <h2 className={classes.congrats_title}>{`Congratulations ${props.firstName} ${props.lastName}!`}</h2>
                <p>Your Trading Journey toward consistent profitability will start shortly.</p>
                <p>We will contact you soon to arrange time for the first lesson.</p>
            </div>
        </div>
    );
};

export default Congratulations;