import React, {useContext} from 'react'
import Hero from './components/hero'
import Crafted from './components/crafted'
import Market from './components/market'
import ScrollingCard from './components/scrollingCards'
import Desktop from './components/desktop'
import Waitlist from './components/waitlist'
import Footer from '../../components/footer'
import { WaitlistContext } from '../../App'

export default function LandingPage() {
  const waitlist = useContext(WaitlistContext)

  return (
    <div className='relative'>
        <div className='fixed top-0 left-0 w-full h-96 bg-dark_blue z-0'></div>
        <div className='relative bg-white'>
          <Hero/>
          <Crafted/>
          <Market/>
          <ScrollingCard/>
          <Desktop/>
          <Waitlist/>
          <Footer/>

          {waitlist.show && <div className='fixed top-0 left-0 mx-auto w-full z-[1000]'>
              <div className=' w-full min-h-screen flex items-start justify-center'>
                <lottie-player 
                src="https://assets5.lottiefiles.com/packages/lf20_da4xcSnZnu.json"  
                background="transparent"  
                speed="1"  
                style={{width:'100vh', height:'800px'}}  
                autoplay></lottie-player>
              </div>
          </div>}
        </div>
    </div>
  )
}
