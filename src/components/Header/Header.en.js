import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function HeaderEn() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedLanguage] = useState(null);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="header">
            <div className="top">
                <div className="left">
                    <h1><Link to="/won-calculator" className="header-link">WON CALCULATOR</Link></h1>
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
                Add, subtract, multiply, and divide South Korean won
            </div>
        </header>
    );
}

export default HeaderEn;