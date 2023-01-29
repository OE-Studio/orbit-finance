import React from 'react'
import Hero from './components/hero'
import Crafted from './components/crafted'
import Market from './components/market'
import ScrollingCard from './components/scrollingCards'
import Desktop from './components/desktop'
import Waitlist from './components/waitlist'
import Footer from '../../components/footer'

export default function LandingPage() {
  return (
    <div className='relative'>
        <Hero/>
        <Crafted/>
        <Market/>
        <ScrollingCard/>
        <Desktop/>
        <Waitlist/>
        <Footer/>
    </div>
  )
}
