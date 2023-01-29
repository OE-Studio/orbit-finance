import React, {useRef, useEffect, useState} from 'react'
import phone1 from '../../../../assets/static/images/phone1.svg'
import phone2 from '../../../../assets/static/images/phone2.svg'
import desktop from '../../../../assets/static/images/desktop.jpg'
import rounds from '../../../../assets/static/images/rounds.svg'
import all from '../../../../assets/static/icons/all.svg'


import {Bolt, Add, Remove} from '../../../../utils/icons'
import './desktop.css'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



export default function Desktop() {
    const [focus, setFocus] = useState(false)
    let phoneRef1 = useRef(null)
    let phoneRef2 = useRef(null)

    let details = useRef(null)

    useEffect(()=>{
        let trigger = document.querySelector(".phone-trigger")
        gsap.from(phoneRef1.current, {
            yPercent: 40,
            duration: 2,
            scrollTrigger:{
                scrub:true,
                trigger:trigger,
                start: "top 100%",
                end: "top 0%",
            }
          });
      
          gsap.from(phoneRef2.current, {
            yPercent: -40,
            duration: 2,
            scrollTrigger:{
                scrub:true,
                trigger:trigger,
                start: "top 100%",
                end: "top 0%",
            }
          });
    }, [])

    const showLess = (e) =>{
        details.classList.add("-top-full")
    }

    const showMore = (e) =>{
        details.classList.remove("-top-full")
    }

  return (
    <div className='mt-24'>
        <header className='text-center'>
            <h1 className='font-clash-medium text-4xl xl:text-7xl'>
                On desktop, mobile<br/> and {" "} 
                <span className='text-green_700'>on the go!</span>
            </h1>
        </header>

        <div className='grid grid-cols-1 lg:grid-cols-6 container mx-auto gap-8 mt-6 xl:mt-20 px-4 lg:px-10'>
            <div className='lg:col-span-2 flex flex-col items-start justify-between'>
                <div className='border rounded-inputs border-neutral_200 p-8'>
                    <div className='font-clash-medium text-2xl'>Familiar Interface</div>
                    <p className='mt-5 text-gray_400 text-lg'>Start attending to all your needs from the get-go. All the tools you need are placed front and centre so you can do what matters.</p>
                </div>

                <div className='border rounded-inputs border-neutral_200 p-8 mt-8'>
                    <div className='font-clash-medium text-2xl'>Familiar Interface</div>
                    <p className='mt-5 text-gray_400 text-lg'>Start attending to all your needs from the get-go. All the tools you need are placed front and centre so you can do what matters.</p>
                </div>
            </div>

            <div className='lg:col-span-4 flex flex-col-reverse gap-20 md:gap-0 md:flex-row md:items-center justify-between px-8 border border-neutral_200 rounded-cards overflow-hidden phone-trigger'>
                <div className='flex items-end justify-center h-full'>
                    <img ref={phoneRef1} src={phone1} alt="" className='block'/>
                </div>
                <div className='flex items-start justify-center h-full'>
                    <img ref={phoneRef2} src={phone2} alt=""/>
                </div>
            </div>
        </div>


        <div className='grid grid-cols-1 md:grid-cols-6 container mx-auto mt-20 gap-8 px-4 lg:px-10'>
            <div className='md:col-span-4 border border-neutral_200 rounded-cards px-8 pt-8 overflow-hidden md:flex md:justify-center md:items-end'>
                <img src={desktop} alt="" className='w-auto md:w-full scale-150 md:scale-100 mt-20 ml-20 md:ml-0 md:mt-0'/>
            </div>

            <div className='md:col-span-2 border border-neutral_200 rounded-cards flex flex-col items-start justify-between relative overflow-hidden hover:shadow-[10px_30px_100px_0px_#00000017] hover:bg-white'>
                {/* Normal view */}
                <div onMouseOver={()=>setFocus(true)} onMouseOut={()=>setFocus(false)} className='w-full cursor-pointer ' onClick={showMore}>
                    <div className='w-full p-4'>
                        <div className='w-full flex items-center justify-between'>
                            <div className={`${focus ? 'bg-green_700 text-white' : "bg-neutral_100"}  rounded-full flex items-center gap-4 h-9 px-4`}>
                                <Bolt fill={focus ? "#FFFFFF" : "#000000"}/>
                                Take a look
                            </div>

                            <div className={`${focus ? 'bg-green_700 text-white' : "bg-neutral_100"} w-9 h-9 flex items-center justify-center rounded-full`}>
                                <Add fill={focus ? "#FFFFFF" : "#000000"}/>
                            </div>
                        </div>

                        <div className='font-clash-medium text-4xl xl:text-5xl mt-4'>Availability & <br/>Affordability</div>
                    </div>

                    <div className='relative'>
                        <img src={all} alt="" className='w-full mt-4 absolute left-0 right-0 mx-auto top-12'/>
                        <img src={rounds} alt="" className='w-full mt-4'/>
                    </div>
                </div>

                {/* More details */}
                <div onClick={showLess} ref={el=>details=el} className='p-6 w-full h-full absolute left-0 bg-green_700 rounded-cards -top-full animate-element cursor-pointer'>
                    <div className='flex items-center justify-end'>

                        <div className={`w-9 h-9 flex items-center justify-center rounded-full bg-black bg-opacity-20`}>
                            <Remove/>
                        </div>
                    </div>
                    <div className='text-4xl mt-6 font-clash-medium'>Availability & Affordability</div>
                    <p className='mt-6'>We’ve put together all your daily needs so you can find them quickly and easily. Get what you need at the best price so you can focus on what matters.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
