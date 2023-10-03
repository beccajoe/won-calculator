import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

import HeaderEn from './Header.en';
import HeaderKo from './Header.ko';

import './Header.css';

function Header() {
    const { selectedLanguage } = useLanguage();

    return selectedLanguage === 'ko' ? <HeaderKo /> : <HeaderEn />;
}

export default Header;
