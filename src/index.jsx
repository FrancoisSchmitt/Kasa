import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import About from './pages/About';
import Home from './pages/Home';
import Accommodation from './pages/Accommodation';
import Error from './pages/Error';
import Footer from './components/Footer';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>
            <BrowserRouter>
                  <Header />
                  <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route
                              path="/accommodation/:id"
                              element={<Accommodation />}
                        />
                        <Route path="/404" element={<Error />} />
                        <Route path="*" element={<Error />} />
                  </Routes>
                  <Footer />
            </BrowserRouter>
      </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
