import React, {useEffect, useState, useRef} from 'react'
import "./scrollingCard.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import scrollingcard1 from '../../../../assets/static/cards/scrollingcard1.svg'
import scrollingcard2 from '../../../../assets/static/cards/scrollingcard2.svg'
import scrollingcard3 from '../../../../assets/static/cards/scrollingcard3.svg'
import scrollingcard4 from '../../../../assets/static/cards/scrollindcard4.svg'

import scrollingvector1 from '../../../../assets/static/cards/scrollingvector1.svg'
import scrollingvector2 from '../../../../assets/static/cards/scrollingvector2.svg'
import scrollingvector3 from '../../../../assets/static/cards/scrollingvector3.svg'

export default function ScrollingCard() {
    const [current, setCurrent] = useState(0)
    let [innerWidth, setInnerWidth] = useState(window.innerWidth)

    let sliderRef = useRef(null)

    const shiftLeft = ()=>{
        sliderRef.slickNext()
    }

    // const shiftRight = ()=>{
    //     sliderRef.slickPrev()
    // }

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        autoplaySpeed: 5000,
        cssEase: "linear",
        draggable:false
      };
    // function isInViewport(element) {
    //     const rect = element.getBoundingClientRect();
    //     console.log(rect.top + " CONT TOP")
    //     return (
    //         rect.top >= 0 && rect.top < 140 && (window.scrollY < 3300 && window.scrollY < 2900)


    //         // rect.top >= 0 &&
    //         // rect.left >= 0 &&
    //         // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //         // rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    //     );
    // }

    // function scrollHorizontally(e) {
    //     console.log(e)
    //     e = window.event || e;
    //     var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    //     var scrollSpeed = 10; // Janky jank <<<<<<<<<<<<<<
    //     let elem = document.querySelector(".scroll")
    //     let cont = document.querySelector(".cont")
    //     let scrollItemWidth = elem.offsetWidth
    //     console.log(window.scrollY + "SCROLLY")
    //     let parentCont = document.querySelector('.parent')
    //     if(isInViewport(cont)){
    //         parentCont.classList.add("fixed", "top-0", "left-0", "mx-auto", "w-screen")
    //         elem.scrollLeft -= (delta * scrollItemWidth);
    //     }
    //     else {
    //         parentCont.classList.remove("fixed", "top-0", "left-0", "mx-auto", "w-screen")
    //     }
    //     e.preventDefault();
    // }

      
    //   useEffect(()=>{
    //         if (window.addEventListener) {
    //             // IE9, Chrome, Safari, Opera
    //             window.addEventListener("mousewheel", scrollHorizontally, false);
    //             // Firefox
    //             window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
    //         } else {
    //         // IE 6/7/8
    //         window.attachEvent("onmousewheel", scrollHorizontally);
    //         }
    //   }, [])

    let timer
    
    const timerFunction = (i)=>{
        let currIndex = i
        let bars = document.querySelectorAll(".loading-bar")
        let nos = 0 //fraction of the seconds the bar has loaded for
        
        timer = setInterval(()=>{
            if(nos < 500) {
                nos++
                
                Array.from(bars).map((bar, index)=>{
                    if(index === currIndex) {
                        // bar.style.left="-100%"/
                        bar.style.left = `${((nos/500) * 100) - 100}%`
                    }

                    if(currIndex === 0) {
                        Array.from(bars)[1].style.left = "-100%"
                        Array.from(bars)[2].style.left = "-100%"
                    }

                    if(currIndex === 1) {
                        Array.from(bars)[0].style.left = "0%"
                        Array.from(bars)[2].style.left = "-100%"
                    }

                    if(currIndex === 2) {
                        Array.from(bars)[0].style.left = "0%"
                        Array.from(bars)[1].style.left = "0%"
                    }

                    return false
                })
            }
            else {
                currIndex++
                shiftLeft()
                nos = 0
                if(currIndex === 3) {
                    currIndex = 0
                }
                setCurrent(0)
            }
        }, 10)
    }

    useEffect(()=>{
        timerFunction(current)

        return ()=> clearInterval(timer)

        // eslint-disable-next-line
    }, [current])

    useEffect(()=>{
        let currentWidth = window.innerWidth;
        setInnerWidth(currentWidth)
    }, [innerWidth])

  return (
    <div className='mt-12 relative overflow-hidden flex items-center justify-center min-h-screen bg-white'>
        {/* <div className='parent h-screen flex items-center justify-center bg-white'> */}
            <div className='container mx-auto scroll cont px-5 lg:px-10 overflow-hidden'>
                <div className='scrollingcard flex overflow-hidden h-auto lg:h-[500px] xl:h-[600px]'>
                    <Slider ref={el=>sliderRef=el} {...settings} className="container overflow-hidden h-full">      
                        <div className='h-full lg:h-[600px] inline-block bg-neutral_100 rounded-medium scroll-item'>
                            <div className='flex flex-col md:flex-row w-full h-full'>
                                <div className='w-full p-4 lg:p-6 xl:p-16 lg:pr-0'>
                                    <p className='text-green_700'>001</p>
                                    <h2 className='font-clash-medium text-4xl mt-6 xl:text-7xl text-dark_blue '>Virtual USD & <br/>Naira cards</h2>
                                    <p className='mt-6 max-w-[30ch] text-gray_300'>Virtual cards designed to meet your International and local needs</p>
                                </div>
                                <div className='flex items-center justify-center h-full w-full relative '>
                                    <img src={scrollingvector1} alt="" className="absolute bottom-0 right-0 w-full xl:w-[800px]"/>
                                    <div className='transform translate-y-20 md:translate-y-0'>
                                        <div className='relative block'>
                                            <img src={scrollingcard1} alt="" className={`block w-[300px] lg:w-[350px] xl:w-[400px] drop-shadow-2xl`}/>    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 

                        <div className='h-full lg:h-[600px] inline-block bg-neutral_100 rounded-medium scroll-item overflow-hidden'>
                            <div className='flex flex-col md:flex-row w-full h-full'>
                                <div className='w-full p-4 lg:p-6 xl:p-16 lg:pr-0'>
                                    <p className='text-green_700'>002</p>
                                    <h2 className='font-clash-medium text-4xl mt-6 xl:text-7xl text-dark_blue '>A generous<br/> spending limit</h2>
                                    <p className='mt-6 max-w-[30ch] text-gray_300'>Spend without hassle, go beyond, with a generous spending limit.</p>
                                </div>
                                <div className='flex items-start justify-center h-full w-full relative'>
                                    <img src={scrollingvector2} alt="" className="absolute bottom-0 right-0 w-[800px]"/>

                                    <div className='transform mt-12 md:mt-0 translate-y-28 md:translate-y-0'>
                                        <img src={scrollingcard2} alt="" className={`block w-[300px] lg:w-[350px] xl:w-[400px] relative`}/>
                                    </div>
                                </div>
                            </div>
                        </div> 

                        <div className='h-full lg:h-[600px] inline-block bg-neutral_100 rounded-medium scroll-item overflow-hidden'>
                            <div className='flex flex-col md:flex-row w-full h-full'>
                                <div className='p-4 lg:p-6 xl:p-16 lg:pr-0 w-full'>
                                    <p className='text-green_700'>003</p>
                                    <h2 className='font-clash-medium text-4xl mt-6 xl:text-7xl text-dark_blue '>A physical card<br/> just for you</h2>
                                    <p className='mt-6 max-w-[30ch] text-gray_300'>Get our physical card for your shopping and withdrawal, we have you covered. </p>
                                </div>
                                <div className='flex items-end justify-start h-full w-full relative overflow-hidden '>
                                    <img src={scrollingvector3} alt="" className="absolute bottom-0 right-0 w-[800px]"/>

                                    <div className='transform mt-12 md:mt-0 translate-y-20 md:translate-y-0 w-full'>
                                        <img src={scrollingcard4} alt="" className={`absolute w-[200px] bottom-0 right-0 lg:right-12`}/>
                                        <img src={scrollingcard3} alt="" className={`block w-[300px] lg:w-[350px] xl:w-[400px] relative`}/>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>  
                    </Slider>
                </div>

                <div className='flex justify-between items-center gap-4 mt-6 xl:mt-12'>
                    <div className='w-full h-1 bg-neutral_200 rounded-full relative overflow-hidden'>
                        <div className='absolute loading-bar top-0 h-full w-full rounded-full bg-green_700'></div>
                    </div>
                    <div className='w-full h-1 bg-neutral_200 rounded-full relative overflow-hidden'>
                        <div className='absolute loading-bar top-0 h-full w-full rounded-full bg-green_700'></div>
                    </div>
                    <div className='w-full h-1 bg-neutral_200 rounded-full relative overflow-hidden'>
                        <div className='absolute loading-bar top-0 h-full w-full rounded-full bg-green_700'></div>
                    </div>
                </div>
            </div>
        {/* </div> */}
    </div>
  )
}


