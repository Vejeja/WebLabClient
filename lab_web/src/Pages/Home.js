import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Tickets from './Tickets';
import Concerts from './Concerts';

export default function Home() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Concerts />} />
                <Route path="/tickets" element={<Tickets />} />
            </Routes>
            
            <Footer />
        </div>
    )
}