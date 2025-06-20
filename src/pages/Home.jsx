import React from 'react'
import Hero from '../components/Hero'
import Values from '../components/Values'
import CallToAction from '../components/CallToAction'
import Features from '../components/Features'
import Navbar from '../components/Navbar'
export default function Home() {
  return (
    <Navbar>
        <Hero/>
        <Values/>
        <Features/>
        <CallToAction/>
    </Navbar>
  )
}
