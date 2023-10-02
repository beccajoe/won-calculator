import React, {useState} from 'react';
import './Calculator.css';

function Calculator() {
    const [displayValue, setDisplayValue] = useState('');
    const [paperTrail, setPaperTrail] = useState('');

    const handleButtonClick = (value) => {
        //
    };

    const handleClear = (type) => {
        //
        if (type === 'AC') {
            setDisplayValue('');
            setPaperTrail('');
        } else if (type === 'C') {
            setDisplayValue(displayValue.slice(0, -1));
        }
    };

    const handleCalculate = () => {
        //
    };

    return (
        <div className="calculator">
            <div className="display-container">
                <div className="display-top">
                    <div className="title">WON CALCULATOR</div>
                    <button className="button special-button all-clear-button" onClick={handleClear}>
                        AC
                    </button>
                </div>
                <div className="display">
                    <div className="paper-trail">{paperTrail}</div>
                    <div className="display-bottom">
                        <div className="display-value">{displayValue}</div>
                        <span className="won-symbol">₩</span>
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
                        onClick={() => handleButtonClick(0)}
                    >
                        0
                    </button>
                    <button
                        className="button special-button equals-button"
                        onClick={handleCalculate}
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