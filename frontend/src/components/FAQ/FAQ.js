import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

import FAQEn from './FAQ.en';
import FAQKo from './FAQ.ko';

import './FAQ.css';

function FAQ() {
    const { selectedLanguage } = useLanguage();

    const faqContent = selectedLanguage === 'ko' ? <FAQKo /> : <FAQEn />;

    return (
        <div className="faq">
            {faqContent}
        </div>
    );
}

export default FAQ;
