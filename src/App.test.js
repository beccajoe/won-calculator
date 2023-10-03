import React from 'react';
import { render, screen } from '@testing-library/react';
import { LanguageProvider } from './context/LanguageContext';
import { MemoryRouter } from 'react-router-dom';
import MainEn from './components/Main/Main.en';

const renderMainEn = () => {
    return render(
        <MemoryRouter>
            <LanguageProvider selectedLanguage="en">
                <MainEn />
            </LanguageProvider>
        </MemoryRouter>
    );
}

test('MainEn 컴포넌트 렌더링', () => {
    const { container } = renderMainEn();
    // MainEn 컴포넌트가 에러 없이 렌더링되는지 확인
    expect(container).toBeInTheDocument();
});