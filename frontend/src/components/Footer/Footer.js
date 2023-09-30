import React, {useContext} from 'react';
import {LanguageContext} from '../../context/LanguageContext';
import {Link} from 'react-router-dom';

import FooterContentEn from './Footer.en';
import FooterContentKo from './Footer.ko';

import './Footer.css';

function Footer() {

    const {selectedLanguage} = useContext(LanguageContext);

    const footerContent =
        selectedLanguage === 'ko' ? FooterContentKo : FooterContentEn;

    const faqLinkPath = selectedLanguage === 'ko' ? '/ko/FAQ' : '/FAQ';

    return (
        <footer className="footer">
            <div className="footer-faq-link">
                <p>
                    <Link to={faqLinkPath} className="faq-link">
                        {footerContent.faq}
                    </Link>
                </p>
            </div>
            <div className="copyright">

                {footerContent.copyright}
            </div>
        </footer>
    );
}

export default Footer;