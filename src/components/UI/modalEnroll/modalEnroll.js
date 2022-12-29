import { useState } from 'react';

import cc_logo from '../../../img/credit-card.png';
import pp_logo from '../../../img/paypal_icon.png';

import { useMediaQuery } from 'react-responsive';

import classes from './modalEnroll.module.css';
import Congratulations from './../../congratulation/congratulation';


const ModalEnroll = (props) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 900px)'
    });

    const Backdrop = () => {
        return <div className={classes.backdrop} onClick={props.onClose}></div >;
    };

    const [showCreditBlock, setShowCreditBlock] = useState(false);
    const [showPayBtn, setShowPayBtn] = useState(false);
    const [paymentSent, setPaymentSent] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const sendRequest = async (emailValue, firstNameValue, lastNameValue, countryNameValue) => {
        const response = await fetch('https://trading-as-a-business-default-rtdb.europe-west1.firebasedatabase.app/payments.json', {
            method: 'POST',
            body: JSON.stringify({ email: emailValue, firstName: firstNameValue, lastName: lastNameValue, country: countryNameValue }),
            'Content-Type': 'application/json'
        });

        const data = await response.json();

        console.log(data);

        if (response.status === 200) {
            setPaymentSent(true);
        }
    };

    const confirmHandler = async (event) => {
        event.preventDefault();

        const emailValue = event.target[0].value;
        const firstNameValue = event.target[1].value;
        const lastNameValue = event.target[2].value;
        const countryNameValue = event.target[3].value;

        sendRequest(emailValue, firstNameValue, lastNameValue, countryNameValue); //needs to be substituted with logic for the paypal/cc API

        setFirstName(firstNameValue);
        setLastName(lastNameValue);
    };

    const showCreditCard = (e) => {
        e.preventDefault();
        setShowCreditBlock(true);
        setShowPayBtn(true);
    };
    const showPayPal = (e) => {
        e.preventDefault();
        setShowCreditBlock(false);
        setShowPayBtn(true);
    };

    return (
        <>
            <Backdrop />
            <div className={isDesktopOrLaptop ? classes.submitModalEnroll : classes.submitModalEnroll__responsive}>
                {!paymentSent && <>
                    <div className={classes.generic_head_price}>
                        <h3>Your Payment</h3>
                    </div>
                    <div className={classes.total_payment}>
                        <h3>rate: <span className={classes.span}>$2437</span>one time payment</h3>
                    </div>
                    <form method="POST" id="paymentForm" name="paymentForm" onSubmit={confirmHandler}
                    // action="/paypal/paypal_api.php" 
                    >
                        <div className={isDesktopOrLaptop ? classes.form_group : classes.form_group_responsive}>
                            <div className={isDesktopOrLaptop ? classes.form_control : classes.form_control_responsive}>
                                <label htmlFor="email">Email</label>
                            </div>
                            <input required name="email" type="email" className={"form-control"} placeholder="Email" data-vv-id="1" aria-required="true" aria-invalid="true"></input>
                            <div className={isDesktopOrLaptop ? classes.form_control : classes.form_control_responsive}>
                                <label htmlFor="First Name">First Name</label>
                            </div>
                            <input required name="first_name" type="text" className="form-control" placeholder="First Name" data-vv-id="1" aria-required="true" aria-invalid="false"></input>
                            <div className={isDesktopOrLaptop ? classes.form_control : classes.form_control_responsive}>
                                <label htmlFor="Last Name">Last Name</label>
                            </div>
                            <input required name="last_name" type="text" className="form-control" placeholder="Last Name" data-vv-id="1" aria-required="true" aria-invalid="false"></input>
                            <div className={isDesktopOrLaptop ? classes.form_control : classes.form_control_responsive}>
                                <label htmlFor="country">Country</label>
                            </div>
                            <select id="country" className="form-control"><option value="US">United States</option><option value="CA">Canada</option><option value="AF">Afghanistan</option><option value="AX">Aland Islands</option><option value="AL">Albania</option><option value="DZ">Algeria</option><option value="AS">American Samoa</option><option value="AD">Andorra</option><option value="AO">Angola</option><option value="AI">Anguilla</option><option value="AQ">Antarctica</option><option value="AG">Antigua And Barbuda</option><option value="AR">Argentina</option><option value="AM">Armenia</option><option value="AW">Aruba</option><option value="AU">Australia</option><option value="AT">Austria</option><option value="AZ">Azerbaijan</option><option value="BS">Bahamas</option><option value="BH">Bahrain</option><option value="BD">Bangladesh</option><option value="BB">Barbados</option><option value="BY">Belarus</option><option value="BE">Belgium</option><option value="BZ">Belize</option><option value="BJ">Benin</option><option value="BM">Bermuda</option><option value="BT">Bhutan</option><option value="BO">Bolivia</option><option value="BA">Bosnia And Herzegovina</option><option value="BW">Botswana</option><option value="BV">Bouvet Island</option><option value="BR">Brazil</option><option value="IO">British Indian Ocean Territory</option><option value="BN">Brunei Darussalam</option><option value="BG">Bulgaria</option><option value="BF">Burkina Faso</option><option value="BI">Burundi</option><option value="KH">Cambodia</option><option value="CM">Cameroon</option><option value="CV">Cape Verde</option><option value="KY">Cayman Islands</option><option value="CF">Central African Republic</option><option value="TD">Chad</option><option value="CL">Chile</option><option value="CN">China</option><option value="CX">Christmas Island</option><option value="CC">Cocos (Keeling) Islands</option><option value="CO">Colombia</option><option value="KM">Comoros</option><option value="CG">Congo</option><option value="CD">Congo, Democratic Republic</option><option value="CK">Cook Islands</option><option value="CR">Costa Rica</option><option value="CI">Cote D'Ivoire</option><option value="HR">Croatia</option><option value="CU">Cuba</option><option value="CY">Cyprus</option><option value="CZ">Czech Republic</option><option value="DK">Denmark</option><option value="DJ">Djibouti</option><option value="DM">Dominica</option><option value="DO">Dominican Republic</option><option value="EC">Ecuador</option><option value="EG">Egypt</option><option value="SV">El Salvador</option><option value="GQ">Equatorial Guinea</option><option value="ER">Eritrea</option><option value="EE">Estonia</option><option value="ET">Ethiopia</option><option value="FK">Falkland Islands (Malvinas)</option><option value="FO">Faroe Islands</option><option value="FJ">Fiji</option><option value="FI">Finland</option><option value="FR">France</option><option value="GF">French Guiana</option><option value="PF">French Polynesia</option><option value="TF">French Southern Territories</option><option value="GA">Gabon</option><option value="GM">Gambia</option><option value="GE">Georgia</option><option value="DE">Germany</option><option value="GH">Ghana</option><option value="GI">Gibraltar</option><option value="GR">Greece</option><option value="GL">Greenland</option><option value="GD">Grenada</option><option value="GP">Guadeloupe</option><option value="GU">Guam</option><option value="GT">Guatemala</option><option value="GG">Guernsey</option><option value="GN">Guinea</option><option value="GW">Guinea-Bissau</option><option value="GY">Guyana</option><option value="HT">Haiti</option><option value="HM">Heard Island &amp; Mcdonald Islands</option><option value="VA">Holy See (Vatican City State)</option><option value="HN">Honduras</option><option value="HK">Hong Kong</option><option value="HU">Hungary</option><option value="IS">Iceland</option><option value="IN">India</option><option value="ID">Indonesia</option><option value="IR">Iran, Islamic Republic Of</option><option value="IQ">Iraq</option><option value="IE">Ireland</option><option value="IM">Isle Of Man</option><option value="IL">Israel</option><option value="IT">Italy</option><option value="JM">Jamaica</option><option value="JP">Japan</option><option value="JE">Jersey</option><option value="JO">Jordan</option><option value="KZ">Kazakhstan</option><option value="KE">Kenya</option><option value="KI">Kiribati</option><option value="KR">Korea</option><option value="KW">Kuwait</option><option value="KG">Kyrgyzstan</option><option value="LA">Lao People's Democratic Republic</option><option value="LV">Latvia</option><option value="LB">Lebanon</option><option value="LS">Lesotho</option><option value="LR">Liberia</option><option value="LY">Libyan Arab Jamahiriya</option><option value="LI">Liechtenstein</option><option value="LT">Lithuania</option><option value="LU">Luxembourg</option><option value="MO">Macao</option><option value="MK">Macedonia</option><option value="MG">Madagascar</option><option value="MW">Malawi</option><option value="MY">Malaysia</option><option value="MV">Maldives</option><option value="ML">Mali</option><option value="MT">Malta</option><option value="MH">Marshall Islands</option><option value="MQ">Martinique</option><option value="MR">Mauritania</option><option value="MU">Mauritius</option><option value="YT">Mayotte</option><option value="MX">Mexico</option><option value="FM">Micronesia, Federated States Of</option><option value="MD">Moldova</option><option value="MC">Monaco</option><option value="MN">Mongolia</option><option value="ME">Montenegro</option><option value="MS">Montserrat</option><option value="MA">Morocco</option><option value="MZ">Mozambique</option><option value="MM">Myanmar</option><option value="NA">Namibia</option><option value="NR">Nauru</option><option value="NP">Nepal</option><option value="NL">Netherlands</option><option value="AN">Netherlands Antilles</option><option value="NC">New Caledonia</option><option value="NZ">New Zealand</option><option value="NI">Nicaragua</option><option value="NE">Niger</option><option value="NG">Nigeria</option><option value="NU">Niue</option><option value="NF">Norfolk Island</option><option value="MP">Northern Mariana Islands</option><option value="NO">Norway</option><option value="OM">Oman</option><option value="PK">Pakistan</option><option value="PW">Palau</option><option value="PS">Palestinian Territory, Occupied</option><option value="PA">Panama</option><option value="PG">Papua New Guinea</option><option value="PY">Paraguay</option><option value="PE">Peru</option><option value="PH">Philippines</option><option value="PN">Pitcairn</option><option value="PL">Poland</option><option value="PT">Portugal</option><option value="PR">Puerto Rico</option><option value="QA">Qatar</option><option value="RE">Reunion</option><option value="RO">Romania</option><option value="RU">Russian Federation</option><option value="RW">Rwanda</option><option value="BL">Saint Barthelemy</option><option value="SH">Saint Helena</option><option value="KN">Saint Kitts And Nevis</option><option value="LC">Saint Lucia</option><option value="MF">Saint Martin</option><option value="PM">Saint Pierre And Miquelon</option><option value="VC">Saint Vincent And Grenadines</option><option value="WS">Samoa</option><option value="SM">San Marino</option><option value="ST">Sao Tome And Principe</option><option value="SA">Saudi Arabia</option><option value="SN">Senegal</option><option value="RS">Serbia</option><option value="SC">Seychelles</option><option value="SL">Sierra Leone</option><option value="SG">Singapore</option><option value="SK">Slovakia</option><option value="SI">Slovenia</option><option value="SB">Solomon Islands</option><option value="SO">Somalia</option><option value="ZA">South Africa</option><option value="GS">South Georgia And Sandwich Isl.</option><option value="ES">Spain</option><option value="LK">Sri Lanka</option><option value="SD">Sudan</option><option value="SR">Suriname</option><option value="SJ">Svalbard And Jan Mayen</option><option value="SZ">Swaziland</option><option value="SE">Sweden</option><option value="CH">Switzerland</option><option value="SY">Syrian Arab Republic</option><option value="TW">Taiwan</option><option value="TJ">Tajikistan</option><option value="TZ">Tanzania</option><option value="TH">Thailand</option><option value="TL">Timor-Leste</option><option value="TG">Togo</option><option value="TK">Tokelau</option><option value="TO">Tonga</option><option value="TT">Trinidad And Tobago</option><option value="TN">Tunisia</option><option value="TR">Turkey</option><option value="TM">Turkmenistan</option><option value="TC">Turks And Caicos Islands</option><option value="TV">Tuvalu</option><option value="UG">Uganda</option><option value="UA">Ukraine</option><option value="AE">United Arab Emirates</option><option value="GB">United Kingdom</option><option value="UM">United States Outlying Islands</option><option value="UY">Uruguay</option><option value="UZ">Uzbekistan</option><option value="VU">Vanuatu</option><option value="VE">Venezuela</option><option value="VN">Viet Nam</option><option value="VG">Virgin Islands, British</option><option value="VI">Virgin Islands, U.S.</option><option value="WF">Wallis And Futuna</option><option value="EH">Western Sahara</option><option value="YE">Yemen</option><option value="ZM">Zambia</option><option value="ZW">Zimbabwe</option></select>
                            <div className={isDesktopOrLaptop ? classes.pay_control : classes.pay_control_responsive}>
                                <div className={classes.pay_btn} onClick={showCreditCard}>
                                    <img src={cc_logo} width="32" alt="cc_logo" /><button >Credit Card</button>
                                </div>
                                <div className={classes.pay_btn} onClick={showPayPal}>
                                    <img src={pp_logo} width="32" alt="pp_logo" /><button >Paypal</button>
                                </div>
                            </div>

                            {showCreditBlock && <div className={isDesktopOrLaptop ? classes.credit_card_block : classes.credit_card_block_responsive}>
                                <div className={classes.credit_card_block_labels}>
                                    <label htmlFor="creditcard">Credit Card</label>
                                    <label htmlFor="month">Expiration Date</label>
                                </div>
                                <div className={classes.credit_card_block_labels}>
                                    <input required data-vv-as="Credit Card" type="text" id="creditcard" name="creditcard" placeholder="Credit Card #" className="form-control input" data-vv-id="14" aria-required="true" aria-invalid="false" />
                                    <div className={isDesktopOrLaptop ? classes.credit_card_block_checkbox : classes.credit_card_block_checkbox_responsive}>
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
                        </div>
                        <p className={classes.choose_payment}>Choose Convenient Payment System</p>
                        {showPayBtn && <div className={classes.button_block}>
                            <button type="submit" className={isDesktopOrLaptop ? classes.submitBtn : classes.submitBtn_responsive}>Start Trading Journey Now</button>
                        </div>}
                    </form>
                </>}
                {paymentSent && <Congratulations firstName={firstName} lastName={lastName} />}
            </div>
        </>
    );
};

export default ModalEnroll;