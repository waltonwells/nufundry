import React from 'react'

import { Footer, Collection } from '../containers';
import { Navbar } from '../components';

import PAGEBODY from '../assets/PAGEBODY.svg'
import './Brandpage.css';

const Brandpage = () => {
  return (
    <div className='brandpage' id='brandpage'>
      <div className='gradient_bg'>
        <Navbar />
      </div>
      <div className='pagebody'>
        <img src={PAGEBODY} alt='pagebody' />
      <Collection />
      </div>
      <Footer />
    </div>
  )
}

export default Brandpage