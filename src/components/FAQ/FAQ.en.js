import React from 'react';
import {Link} from "react-router-dom";

import '../Header/Header.css';
import './FAQ.css';

function FAQEn() {
    return (
        <div className="faq-page">
            <header className="header">
                <div className="top">
                    <div className="left">
                        <h1><Link to="/ko" className="header-link">WON CALCULATOR</Link></h1>
                    </div>
                </div>
            </header>
            <div className="faq-container">
                <div className="faq-section">
                    <h2>Frequently Asked Questions (FAQ)</h2>
                    <ol>
                        <li>
                            What are the limitations when calculating amounts?
                            <ul>
                                <li>
                                    The total amount must always be greater than or equal to zero.
                                </li>
                                <li>
                                    The display always starts with zero.
                                </li>
                            </ul>
                        </li>
                        <li>
                            What constraints apply to user inputs?
                            <ul>
                                <li>
                                    Operators can only appear between numbers in the input.
                                </li>
                            </ul>

                        </li>
                        <li>
                            What rules should be followed when using operators?
                            <ul>
                                <li>
                                    When an operator is given, it should be used to calculate the numbers before and after it.
                                </li>
                                <li>
                                    The result of the operation should be displayed as an integer by discarding any decimal places.
                                </li>
                            </ul>

                        </li>
                        <li>
                            Are there any restrictions on how amounts are displayed?
                            <ul>
                                <li>
                                    The amounts are provided in South Korean Won (KRW) and can have a maximum of 10 digits.
                                </li>
                                <li>
                                    Results exceeding 10 digits should be displayed as Infinity.
                                </li>
                            </ul>

                        </li>
                        <li>
                            How are special cases handled?
                            <ul>
                                <li>
                                    If the user enters an operator (+, -, x, /) without inputting the next number, an alert should be displayed when '=' is pressed.
                                </li>
                                <li>
                                    Exceptional cases like dividing zero by zero should be displayed as 'Invalid input (숫자가 아닙니다).'
                                </li>
                            </ul>

                        </li>
                        <li>
                            What functionality is available to clear inputs?
                            <ul>
                                <li>
                                    There is an 'AC' button to clear all input.
                                </li>
                                <li>
                                    There is a 'C' button to clear the last input value.
                                </li>
                            </ul>

                        </li>
                        <li>
                            How are consecutive operator inputs handled?
                            <ul>
                                <li>
                                    If operators are selected consecutively, the last selected operator should be applied.
                                </li>
                            </ul>

                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default FAQEn;