import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';


function App() {
    return <div className='App'>
        <Navbar />
        <Hero />
        <Projects/>
        <Skills />
        <About />
        <Contact />
    </div>
}

export default App
