import { useState } from 'react';

import Modal from '../Modal';
import cc_logo from '../../../img/credit-card.png';
import pp_logo from '../../../img/paypal_icon.png';

import { useMediaQuery } from 'react-responsive';

import classes from './modalEnroll.module.css';


const ModalEnroll = (props) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 900px)'
    });

    const [showCreditBlock, setShowCreditBlock] = useState(false);
    const [showPayPalBlock, setShowPayPalBlock] = useState(false);

    const confirmHandler = (e) => {
        e.preventDefault();
        console.log('logged');
    };

    const showCreditCard = (e) => {
        e.preventDefault();
        setShowCreditBlock(true);
        setShowPayPalBlock(false);
    };
    const showPayPal = (e) => {
        e.preventDefault();
        setShowPayPalBlock(true);
        setShowCreditBlock(false);
    };

    return (
        <Modal onClick={props.onClose} onSubmit={props.submit}>
            <div className={classes.generic_head_price}>
                <h3>Your Payment</h3>
            </div>
            <div className={classes.total_payment}>
                <h3>rate: <span className={classes.span}>$1000/year</span></h3>
            </div>
            <form method="POST" id="paymentForm" name="paymentForm"
            // action="/paypal/paypal_api.php" 
            >
                <div className={classes.form_group}>
                    <div className={classes.form_control}>
                        <label htmlFor="email" >Email</label>
                        <input name="email" type="text" className="form-control input" placeholder="Email" data-vv-id="1" aria-required="true" aria-invalid="false" />
                    </div>
                    <div className={classes.form_control}>
                        <label htmlFor="First Name">First Name</label>
                        <input name="first_name" type="text" className="form-control input" placeholder="First Name" data-vv-id="1" aria-required="true" aria-invalid="false"></input>
                    </div>
                    <div className={classes.form_control}>
                        <label htmlFor="Last Name">Last Name</label>
                        <input name="last_name" type="text" className="form-control input" placeholder="Last Name" data-vv-id="1" aria-required="true" aria-invalid="false"></input>
                    </div>
                    <div className={classes.pay_control}>
                        <div className={classes.pay_btn} >
                            <img src={cc_logo} width="32" alt="cc_logo" /><button onClick={showCreditCard}>Credit Card</button>
                        </div>
                        <div className={classes.pay_btn}>
                            <img src={pp_logo} width="32" alt="pp_logo" /><button onClick={showPayPal}>Paypal</button>
                        </div>
                    </div>

                    {showCreditBlock && <div className={classes.credit_card_block}>
                        <div className={classes.credit_card_block_labels}>
                            <label htmlFor="creditcard">Credit Card</label>
                            <label htmlFor="month">Expiration Date</label>
                        </div>
                        <div className={classes.credit_card_block_labels}>
                            <input data-vv-as="Credit Card" type="text" id="creditcard" name="creditcard" placeholder="Credit Card #" className="form-control input" data-vv-id="14" aria-required="true" aria-invalid="false" />
                            <div className={classes.credit_card_block_checkbox}>
                                <select id="month" name="month" data-vv-id="15" aria-required="true" aria-invalid="false">
                                    <option value="">Month</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                <select id="year" name="year" data-vv-id="16" aria-required="true" aria-invalid="false">
                                    <option value="">Year</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                    <option value="2030">2030</option>
                                    <option value="2031">2031</option>
                                    <option value="2032">2032</option>
                                    <option value="2033">2033</option>
                                    <option value="2034">2034</option>
                                    <option value="2035">2035</option>
                                    <option value="2036">2036</option>
                                    <option value="2037">2037</option>
                                    <option value="2038">2038</option>
                                    <option value="2039">2039</option>
                                    <option value="2040">2040</option>
                                    <option value="2041">2041</option>
                                    <option value="2042">2042</option>
                                </select>
                            </div>
                        </div>
                    </div>}

                    {showPayPalBlock && <div className={classes.paypal_block}>
                        <ul style={{ listStyle: 'none' }}>
                            <li>
                                <label>
                                    <input type="radio" name="paypalYear" value="1" />
                                    <span> 1 year</span> <span>$999</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="radio" name="paypalYear" value="2" />
                                    <span> 2 years</span> <span> $1899</span>
                                    <span>$100 discount applied</span>
                                </label>
                            </li>
                        </ul>
                    </div>}
                </div>
                <div className={classes.button_block}>
                    <button type="submit" onClick={confirmHandler} className={classes.submitBtn}>Start My Free Trial</button>
                    <div>
                        or <a href="">Subscribe Now</a>
                    </div>
                </div>
            </form>
        </Modal>
    );
};

export default ModalEnroll;