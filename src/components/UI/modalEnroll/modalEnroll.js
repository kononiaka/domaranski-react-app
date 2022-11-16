import Modal from '../Modal';

import { useMediaQuery } from 'react-responsive';

import classes from './modalEnroll.module.css';


const ModalEnroll = (props) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 900px)'
    });

    const confirmHandler = () => {
        console.log('logged');
    };

    return (
        <Modal onClick={props.onClose} onSubmit={props.submit}>
            <div className={classes.generic_head_price}>
                <h3>Your Payment</h3>
            </div>
            <div className={classes.total_payment}>
                <h3>rate: <span className={classes.span}>$499/year</span></h3>
            </div>
            <form method="POST" id="paymentForm" name="paymentForm" action="/paypal/paypal_api.php" class="form-horizontal">
                <div class="row form-group">
                    <label for="email" class="col-sm-4 col-form-label">Email</label>
                    <div class="col-sm-8 control">
                        <input name="email" type="text" placeholder="Email" class="form-control input" data-vv-id="1" aria-required="true" aria-invalid="false"></input>
                    </div>
                </div>
            </form>
        </Modal>
    );
};

export default ModalEnroll;;;