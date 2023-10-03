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
                <Route exact path='/' element={<Main/>}/>
                <Route exact path='/FAQ' element={<FAQEn/>}/>
                <Route exact path='/ko' element={<MainKo/>}/>
                <Route exact path='/ko/FAQ' element={<FAQKo/>}/>
            </Routes>
        </Router>
    );
}

export default App;
