import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from './components/Main/Main';
import FAQEn from './components/FAQ/FAQ.en';
import FAQKo from './components/FAQ/FAQ.ko';
import MainKo from "./components/Main/Main.ko";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/won-calculator' element={<Main/>}/>
                <Route exact path='/won-calculator/FAQ' element={<FAQEn/>}/>
                <Route exact path='/won-calculator/ko' element={<MainKo/>}/>
                <Route exact path='/won-calculator/ko/FAQ' element={<FAQKo/>}/>
            </Routes>
        </Router>
    );
}

export default App;
