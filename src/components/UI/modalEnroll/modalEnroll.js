import Modal from '../Modal';
import cc_logo from '../../../img/credit-card.png';
import pp_logo from '../../../img/paypal_icon.png';

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
                <h3>rate: <span className={classes.span}>$1000/year</span></h3>
            </div>
            <form method="POST" id="paymentForm" name="paymentForm"
            // action="/paypal/paypal_api.php" 
            >
                <div className={classes.form_group}>
                    <div className={classes.form_control}>
                        <label htmlFor="email" >Email</label>
                        <input name="email" type="text" placeholder="Email" data-vv-id="1" aria-required="true" aria-invalid="false" />
                    </div>
                    <div className={classes.form_control}>
                        <label htmlFor="First Name">First Name</label>
                        <input name="first_name" type="text" placeholder="Email" data-vv-id="1" aria-required="true" aria-invalid="false"></input>
                    </div>
                    <div className={classes.form_control}>
                        <label htmlFor="Last Name">Last Name</label>
                        <input name="last_name" type="text" placeholder="Email" data-vv-id="1" aria-required="true" aria-invalid="false"></input>
                    </div>
                    <div className={classes.pay_control}>
                        <div className={classes.pay_btn}>
                            <img src={cc_logo} width="32" alt="cc_logo" /><button>Credit Card</button>
                        </div>
                        <div className={classes.pay_btn}>
                            <img src={pp_logo} width="32" alt="pp_logo" /><button>Paypal</button>
                        </div>
                    </div>

                    <div>
                        <div>
                            <label htmlFor="creditcard">Credit Card</label>
                            <div>
                                <input data-vv-as="Credit Card" type="text" id="creditcard" name="creditcard" placeholder="Credit Card #" className="form-control input" data-vv-id="14" aria-required="true" aria-invalid="false" /></div>
                            <span></span>
                        </div> <div ><label htmlFor="month">Expiration Date</label>
                            <div><div>
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
                                <select id="year" name="year" className="form-control col-sm-6" data-vv-id="16" aria-required="true" aria-invalid="false"><option value="">Year</option> <option value="2022">2022</option><option value="2023">2023</option><option value="2024">2024</option><option value="2025">2025</option><option value="2026">2026</option><option value="2027">2027</option><option value="2028">2028</option><option value="2029">2029</option><option value="2030">2030</option><option value="2031">2031</option><option value="2032">2032</option><option value="2033">2033</option><option value="2034">2034</option><option value="2035">2035</option><option value="2036">2036</option><option value="2037">2037</option><option value="2038">2038</option><option value="2039">2039</option><option value="2040">2040</option><option value="2041">2041</option><option value="2042">2042</option></select></div></div> <span className="help is-danger col-sm-12" ></span> <span className="help is-danger col-sm-12">
                            </span>
                        </div>
                    </div>
                    <div >
                        <ul ><li><label>
                            <input type="radio" name="paypalYear" value="1" /> <span>1 year</span> <span>$499</span>
                        </label></li> <li><label><input type="radio" name="paypalYear" value="2" /> <span>2 years</span>
                            <span> $948</span> <span className="region_desc"> $50 discount applied</span></label></li>
                            <li><label><input type="radio" name="paypalYear" value="3" /> <span>3 years</span>
                                <span> $1397</span> <span className="region_desc"> $100 discount applied</span></label></li>
                        </ul></div>
                </div>
                <button type="submit">Start My Free Trial</button>
                <div>
                    or <a href="">Subscribe Now</a></div>
            </form>
        </Modal>
    );
};

export default ModalEnroll;