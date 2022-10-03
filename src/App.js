import React from 'react'

import { Footer, Blog, Possibility, Features, Logo, Hero } from './containers';
import { CTA, Brand, Navbar, } from './components';

import BIGBODY from '../src/assets/BIGBODY.svg';
import NEWBODY from '../src/assets/NEWBODY.svg';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
      </div>
      <Hero />
      <div className='bigbody'>
        <img src={BIGBODY} alt='bigbody' />
      <Brand />
      <Logo />
      <Features />
      <Possibility />
      <CTA />
      </div>
      <div className='newbody'>
        <img src={NEWBODY} alt='newbody' />
        <Blog />
      </div>
      <Footer />
    </div>
  )
}

export default App