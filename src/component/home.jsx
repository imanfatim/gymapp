import React from 'react'
import Navbar from './Navbar'
import Header from './header';
import Section from './section';
import Cards  from './cards';
import Section2 from './section2'
import Section3 from './section3'
import Card2 from './cards2'
import Footer from './footer'

const home = () => {
  return (
    <div className='space-y-4 max-auto sm:border-lime-700 md:border-amber-400 lg:border-indigo-600'>
      <Navbar></Navbar>
      <Header></Header>
      <Section></Section>
      <Cards></Cards>
      <Section2></Section2>
      <Section3></Section3>
      <Card2></Card2>
      <Footer></Footer>
    </div>
  )
};

export default home
