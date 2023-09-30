import React from 'react';
import {Link} from "react-router-dom";

import '../Header/Header.css';
import './FAQ.css';

function FAQKo() {
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
                    <h2>자주 묻는 질문 (FAQ)</h2>
                    <ol>
                        <li>
                            금액 계산 시 어떤 제한 사항이 있나요?
                            <ul>
                                <li>
                                    총 금액은 항상 0 이상이어야 합니다.
                                </li>
                                <li>
                                    디스플레이는 0으로 시작합니다.
                                </li>
                            </ul>
                        </li>
                        <li>
                            입력 관련 제약 사항은 어떻게 되나요?
                            <ul>
                                <li>
                                    입력에서는 연산자가 숫자 사이에만 나타날 수 있습니다.
                                </li>
                            </ul>

                        </li>
                        <li>
                            연산자 사용 시 어떤 규칙을 따라야 하나요?
                            <ul>
                                <li>
                                    연산자가 주어지면 해당 연산자를 사용하여 앞뒤 숫자를 계산해야 합니다.
                                </li>
                                <li>
                                    연산 결과는 소수점 이하를 버림하여 정수로 표시해야 합니다.
                                </li>
                            </ul>

                        </li>
                        <li>
                            금액 표시에 관한 제한 사항은 어떤가요?
                            <ul>
                                <li>
                                    한국 원화(KRW)로 주어지며, 최대 10자리 숫자까지만 입력됩니다.
                                </li>
                                <li>
                                    10자리 숫자를 넘어가는 결과값은 Infinity로 표기됩니다.
                                </li>
                            </ul>

                        </li>
                        <li>
                            특수 상황에 대한 처리는 어떻게 이루어지나요?
                            <ul>
                                <li>
                                    더하기, 곱하기, 나누기 다음 숫자를 입력하지 않고 '='를 입력할 경우 alert을 띄워줍니다.
                                </li>
                                <li>
                                    0 나누기 0과 같은 예외 결과값은 'Not a Number (숫자 아님)'으로 표시됩니다.
                                </li>
                            </ul>

                        </li>
                        <li>
                            입력을 지우는 기능은 어떻게 구현되어 있나요?
                            <ul>
                                <li>
                                    실수로 입력한 것을 모두 지울 수 있는 'AC' 버튼이 있습니다.
                                </li>
                                <li>
                                    마지막에 입력한 값만 지울 수 있는 'C' 버튼이 있습니다.
                                </li>
                            </ul>

                        </li>
                        <li>
                            연속적인 연산자 입력에 대한 처리는 어떻게 이루어지나요?
                            <ul>
                                <li>
                                    연산자를 연달아 선택할 경우 마지막에 선택한 연산자가 적용되어야 합니다.
                                </li>
                            </ul>

                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default FAQKo;