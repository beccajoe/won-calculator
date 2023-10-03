import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Footer from '../Footer/Footer';
import Calculator from '../Calculator/Calculator';
import HeaderKo from "../Header/Header.ko";

function MainKo() {
    const { setLanguage } = useLanguage();

    useEffect(() => {
        setLanguage('ko');
    }, [setLanguage]);

    return (
        <div>
            <HeaderKo />
            <Calculator />
            <Footer />
        </div>
    );
}

export default MainKo;
