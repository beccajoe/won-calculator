import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HeaderKo() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        setDropdownOpen(false);
    };

    return (
        <header className="header">
            <div className="top">
                <div className="left">
                    <h1>
                        <Link to="/won-calculator/ko" className="header-link">
                            WON CALCULATOR
                        </Link>
                    </h1>
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
                                <Link to="/won-calculator" onClick={() => handleLanguageChange('en')}>
                                    English
                                </Link>
                            )}
                            {selectedLanguage !== 'KO' && (
                                <Link to="/won-calculator/ko" onClick={() => handleLanguageChange('ko')}>
                                    한국어
                                </Link>
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
