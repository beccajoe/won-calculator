import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function HeaderKo() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedLanguage] = useState(null);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="header">
            <div className="top">
                <div className="left">
                    <h1><Link to="/won-calculator/ko" className="header-link">WON CALCULATOR</Link></h1>
                </div>
                <div className="right">
                    <div className="language-dropdown">
                        <button
                            onClick={toggleDropdown}
                            className={`dropdown-button ${isDropdownOpen ? 'active' : ''}`}
                        >
                            {selectedLanguage || '🌐 언어'}
                        </button>
                        <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
                            {selectedLanguage !== 'EN' && (
                                <a href="/won-calculator">English</a>
                            )}
                            {selectedLanguage !== 'KO' && (
                                <a href="/won-calculator/ko">한국어</a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                한국 원화(KRW)를 더하고 빼고 곱하고 나눕니다
            </div>
        </header>
    );
}

export default HeaderKo;