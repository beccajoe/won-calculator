import React, {useState} from 'react';
import './Calculator.css';

function Calculator() {
    const [displayValue, setDisplayValue] = useState('0'); // 현재 표시 값
    const [paperTrail, setPaperTrail] = useState(''); // 사용자 입력 기록
    const [currentOperator, setCurrentOperator] = useState(''); // 현재 연산자
    const [currentCalculation, setCurrentCalculation] = useState(''); // 현재 계산
    const [currentNumber, setCurrentNumber] = useState('0'); // 현재 입력 중인 숫자

    // AC 및 C 버튼 처리 함수
    const handleClear = (type) => {
        if (type === 'AC') {
            // 올 클리어: 모든 것을 초기화
            setDisplayValue('0'); // 표시 값을 '0'으로 재설정
            setPaperTrail(''); // 사용자 입력 기록을 지움
            setCurrentOperator(''); // 현재 연산자 초기화
            setCurrentCalculation(''); // 현재 계산 지움
        } else if (type === 'C') {
            // 클리어: 마지막 문자를 제거하거나 필요한 경우 재설정
            if (currentOperator === '=') {
                setCurrentOperator(''); // 현재 연산자가 '='인 경우 초기화
            }
            if (displayValue.length === 1) {
                setDisplayValue('0'); // 문자가 하나만 있는 경우 표시 값을 '0'으로 재설정
                setCurrentCalculation(''); // 현재 계산 지움
            } else {
                // 표시 값 및 현재 계산에서 마지막 문자 제거
                const updatedDisplayValue = displayValue.slice(0, -1);
                setDisplayValue(updatedDisplayValue);
                setCurrentCalculation(currentCalculation.slice(0, -1));
            }
        }
    };

    // 숫자 버튼을 처리하는 함수
    const handleNumber = (value) => {
        if (displayValue === ('0' || 'Error' || 'Invalid input (숫자가 아닙니다)') || paperTrail.includes('=')) {
            // 만약 표시 값이 '0'이거나, 사용자 입력에 '='이 포함되어 있거나, 표시 값이 'Error' 또는 'Invalid input (숫자가 아닙니다)'인 경우
            const hasOperatorInTrail = /[+\-x/]/.test(paperTrail);
            if (displayValue === '0' && hasOperatorInTrail) {
                // 표시 값이 '0'이고 연산자가 있는 경우
                setCurrentCalculation((prevCalculation) => prevCalculation + ' ' + value);
                setPaperTrail((prevPaperTrail) => prevPaperTrail + ' ' + value);
            } else {
                setCurrentCalculation(value); // 현재 계산을 업데이트
                setPaperTrail('0' + value); // 사용자 입력 기록을 업데이트
            }
            setDisplayValue(value); // 표시 값을 설정
            setCurrentNumber(value); // 현재 숫자 설정

            setCurrentOperator(''); // 현재 연산자 초기화
        } else {
            const inputCount = displayValue.toString() + value;
            if (inputCount.length <= 10) {
                // 만약 표시 값의 길이가 10 이하인 경우에만 업데이트
                const lastChar = paperTrail.slice(-1);
                if (['+', '-', 'x', '/'].includes(lastChar)) {
                    // 마지막 문자가 연산자 (+, -, x, /) 중 하나인 경우
                    setDisplayValue(value); // 표시 값 업데이트
                    setCurrentNumber(value); // 현재 숫자 업데이트
                } else {
                    // 마지막 문자가 연산자 (+, -, x, /) 중 하나가 아닌 경우
                    setDisplayValue((prevDisplayValue) => prevDisplayValue + value.toString());
                    setCurrentNumber((prevCurrentNumber) => prevCurrentNumber + value.toString());
                }
                setCurrentCalculation((prevCalculation) => prevCalculation + ' ' + value);
                setPaperTrail((prevPaperTrail) => prevPaperTrail + ' ' + value);
                setCurrentOperator('');
            }
        }
    };

    // 연산자 버튼 (+, -, x, /)을 처리하는 함수
    const handleOperator = (operator) => {
        if (displayValue !== 'Error') {
            const hasOperatorInTrail = /[+\-x/]/.test(paperTrail);
            if (!hasOperatorInTrail) {
                // 입력 값이 첫 번째 연산자인 경우
                setCurrentOperator(operator);
                setCurrentCalculation(currentNumber.toString() + ' ' + operator);
                setPaperTrail(currentNumber.toString() + ' ' + operator);
            } else {
                // 계산에 연산자가 1개 이상인 경우
                const lastChar = paperTrail.slice(-1);
                if (['+', '-', 'x', '/'].includes(lastChar)) {
                    // 계산에 마지막 문자가 연산자인 경우, 현재 연산자 재설정
                    const newCurrentCalculation = currentCalculation.slice(0, -1) + operator;
                    const newPaperTrail = paperTrail.slice(0, -1) + operator;

                    // 현재 연산자, 현재 계산 및 사용자 입력 기록 업데이트
                    setCurrentOperator(operator);
                    setCurrentCalculation(newCurrentCalculation);
                    setPaperTrail(newPaperTrail);
                }
                const operatorMatch = /[+\-x/]/.exec(currentCalculation);
                const calculationOperator = operatorMatch ? operatorMatch[0] : ''; // 현재 계산에서 연산자 찾기
                const currentCalculationWithoutSpaces = currentCalculation.replace(/\s+/g, '');

                const currentCalculationParts = currentCalculationWithoutSpaces
                    .split(calculationOperator);
                
                if (calculationOperator && currentCalculationParts.length >= 2) {
                    // 연산을 수행할 연산자와 최소 두 개의 숫자가 있는지 확인
                    const num1 = parseFloat(currentCalculationParts[0]);
                    const num2 = parseFloat(currentCalculationParts[1]);

                    if (!isNaN(num1) && !isNaN(num2)) {
                        let result;
                        switch (calculationOperator) {
                            case '+':
                                result = num1 + num2;
                                break;
                            case '-':
                                result = num1 - num2;
                                break;
                            case 'x':
                                result = num1 * num2;
                                break;
                            case '/':
                                if (num2 !== 0) {
                                    result = num1 / num2;
                                } else {
                                    setDisplayValue('Invalid input (숫자가 아닙니다)');
                                    return;
                                }
                                break;
                            default:
                                // 지원되지 않는 연산자 처리
                                break;
                        }
                        // 현재 계산, 사용자 입력 기록 및 표시 값을 업데이트
                        const newCalculation = result.toString() + ' ' + operator;
                        setCurrentCalculation(newCalculation);
                        setPaperTrail(paperTrail + ' ' + operator);
                        setDisplayValue(result);
                        setCurrentOperator(operator);
                    }
                }
            }
        }
    };

    // equals 버튼 (=)을 처리하는 함수
    const handleEquals = () => {
        if (displayValue !== 'Error') {
            const operatorMatch = /[+\-x/]/.exec(currentCalculation);
            const calculationOperator = operatorMatch ? operatorMatch[0] : ''; // 현재 계산에서 연산자 찾기
            const currentCalculationWithoutSpaces = currentCalculation.replace(/\s+/g, '');

            const currentCalculationParts = currentCalculationWithoutSpaces
                .split(calculationOperator);

            if (calculationOperator && currentCalculationParts.length >= 2) {
                const num1 = parseFloat(currentCalculationParts[0]);
                const num2 = parseFloat(currentCalculationParts[1]);
                let result;

                if (!isNaN(num1) && !isNaN(num2)) {
                    switch (calculationOperator) {
                        case '+':
                            result = num1 + num2;
                            break;
                        case '-':
                            result = num1 - num2;
                            break;
                        case 'x':
                            result = num1 * num2;
                            break;
                        case '/':
                            if (num2 !== 0) {
                                result = num1 / num2;
                            } else {
                                setDisplayValue('Invalid input (숫자가 아닙니다)');
                                return;
                            }
                            break;
                        default:
                            // 지원되지 않는 연산자 처리
                            break;
                    }

                    // 결과가 무한대(Infinity)이거나 10 자리 이상인지 확인
                    if (result === Infinity || Math.abs(result) >= 1e10) {
                        setDisplayValue('Infinity');
                    } else {
                        // 결과를 가장 가까운 정수로 반올림
                        const roundedResult = Math.round(result);
                        // 계산 기록과 반올림된 결과를 업데이트
                        setPaperTrail(`${paperTrail} = ${roundedResult.toString()}`);
                        setDisplayValue(roundedResult.toString());
                    }
                } else {
                    // 경고 메시지 표시
                    alert('Invalid expression (올바른 수식이 아닙니다)');
                }
            } else {
                // 경고 메시지 표시
                alert('Invalid expression (올바른 수식이 아닙니다)');
            }
        }
        setCurrentOperator('');
    };

    // 버튼 클릭을 처리하는 함수
    const handleButtonClick = (value) => {
        // console.log(`Entered Value: ${value}`);

        if (value === 'C') {
            handleClear('C');
        } else if (value === 'AC') {
            handleClear('AC');
        } else if (value === '+' || value === '-' || value === 'x' || value === '/') {
            handleOperator(value);
        } else if (value === '=') {
            handleEquals();
        } else {
            handleNumber(value);
        }
    };

    return (
        <div className="calculator">
            <div className="display-container">
                <div className="display-top">
                    <div className="title">WON CALCULATOR</div>
                    <button className="button special-button all-clear-button" onClick={() => handleClear('AC')}>
                        AC
                    </button>
                </div>
                <div className="display">
                    <div className="display-bottom">
                        <div className="display-value">{parseFloat(displayValue).toLocaleString()}</div>
                        <div className="won-symbol">₩</div>
                    </div>
                    <div className="paper-trail">
                        {paperTrail && paperTrail.split(' ').map((item, index) => {
                            // 현재 항목이 '='인지 확인
                            if (item === '=') {
                                // "equals" 클래스와 함께 렌더링
                                return <span key={index} className="equals">=</span>;
                            }
                            // 현재 항목이 연산자 (+, -, x, /) 중 하나인지 확인
                            else if (['+', '-', 'x', '/'].includes(item)) {
                                // "operator" 클래스와 함께 연산자를 렌더링
                                return <span key={index} className="operator">{item}</span>;
                            }
                            // 항목이 '='나 연산자가 아닌 경우
                            else {
                                // 현재 인덱스가 짝수인지 확인 (숫자인 경우)
                                if (index % 2 === 0) {
                                    // 필요한 경우 콤마로 숫자를 서식화하여 렌더링
                                    return parseFloat(item).toLocaleString();
                                }
                                // 현재 인덱스가 홀수인 경우 (숫자 사이의 연산자인 경우)
                                else {
                                    // 이전 항목이 연산자인지 확인합니다
                                    const prevItem = index > 0 ? paperTrail.split(' ')[index - 1] : '';
                                    // "operator" 클래스와 함께 연산자 렌더링
                                    return <span key={index}
                                                 className="operator">{prevItem !== '=' ? item : ` ${item}`}</span>;
                                }
                            }
                        })}
                    </div>

                </div>
            </div>
            <div className="buttons-container">
                <div className="button-row">
                    {[7, 8, 9, '/'].map((number) => (
                        <button
                            key={number}
                            className={`button${number === '/' ? ' operation-button' : ''}`}
                            onClick={() => handleButtonClick(number)}
                        >
                            {number}
                        </button>
                    ))}
                </div>
                <div className="button-row">
                    {[4, 5, 6, 'x'].map((number) => (
                        <button
                            key={number}
                            className={`button${number === 'x' ? ' operation-button' : ''}`}
                            onClick={() => handleButtonClick(number)}
                        >
                            {number}
                        </button>
                    ))}
                </div>
                <div className="button-row">
                    {[1, 2, 3, '+'].map((number) => (
                        <button
                            key={number}
                            className={`button${number === '+' ? ' operation-button' : ''}`}
                            onClick={() => handleButtonClick(number)}
                        >
                            {number}
                        </button>
                    ))}
                </div>
                <div className="button-row">
                    <button
                        className="button special-button clear-button"
                        onClick={() => handleClear('C')}
                    >
                        C
                    </button>
                    <button
                        className="button"
                        onClick={() => handleButtonClick('0')}
                    >
                        0
                    </button>
                    <button
                        className="button special-button equals-button"
                        onClick={() => handleButtonClick('=')}
                    >
                        =
                    </button>
                    <button
                        className="button operation-button"
                        onClick={() => handleButtonClick('-')}
                    >
                        -
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;