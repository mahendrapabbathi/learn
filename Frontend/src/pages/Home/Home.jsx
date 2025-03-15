import React from 'react'
import Hero from '../../components/Hero/Hero'
import Skills from '../../components/Skills/Skills'
import Testimonials from '../../components/Testimonials/Testimonials'
import Contact from '../../components/Contact/Contact'

const Home = ({setLogin}) => {
  return (
    <div>
      <Hero setLogin={setLogin}/>
      <Skills/>
      <Testimonials/>
      <Contact/>
      
    </div>
  )
}

export default Home
