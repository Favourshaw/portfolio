import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <About />
    <Project />
    <Skills />
    <Experience />
    <Footer />
  </React.StrictMode>
);

