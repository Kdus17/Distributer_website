import React from 'react'
import Hero from '../components/Hero'
import Values from '../components/Values'
import CallToAction from '../components/CallToAction'
import Features from '../components/Features'

export default function Home() {
  return (
    <div>
        <Hero/>
        <Values/>
        <Features/>
        <CallToAction/>
    </div>
  )
}
