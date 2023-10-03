import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

import MainEn from './Main.en';
import MainKo from './Main.ko';

function Main() {
    const { selectedLanguage } = useLanguage();

    return selectedLanguage === 'ko' ? <MainKo /> : <MainEn />;
}

export default Main;
