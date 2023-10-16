import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HeaderEn() {
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
                        <Link to="/won-calculator" className="header-link">
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
                            {selectedLanguage || '🌐 Languages'}
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
                Add, subtract, multiply, and divide South Korean won
            </div>
        </header>
    );
}

export default HeaderEn;
