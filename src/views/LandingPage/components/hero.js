import React, {useRef, useEffect} from 'react'
import { NavBar } from '../../../components/navbar'
import arrow from '../../../assets/static/icons/hero-arrow.svg'
import arrowForward from '../../../assets/static/icons/arrow_forward.svg'
// import heroImage from '../../../assets/static/images/hero.png'
import heroVector from '../../../assets/static/images/hero-vector.svg'

import lightWoman from '../../../assets/static/images/light_woman.webp'
import lightMan from '../../../assets/static/images/light_man.webp'
import ebonyMan from '../../../assets/static/images/ebony_man.webp'
import ebonyWoman from '../../../assets/static/images/ebony_woman.webp'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const services="Data,Airtime,Bank Transfer,Cable Subscription,Electricity,Physical Card,Virtual Card".split(",")

export default function Hero() {
    const photo1 = useRef(null)
    const photo2 = useRef(null)
    const photo3 = useRef(null)
    const photo4 = useRef(null)

    useEffect(()=>{
        gsap.to(photo1.current, {
            yPercent: 10,
            rotate:-5,
            duration: 2,
          });
      
          gsap.to(photo2.current, {
            yPercent: 20,
            rotate:10,
            duration: 1,
          });

          gsap.to(photo4.current, {
            yPercent: 5,
            rotate:5,
            duration: 1,
          });
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 5,
        autoplay: true,
        speed: 9000,
        autoplaySpeed: 9000,
        cssEase: "linear",
    };
  return (
    <div className='bg-dark_blue'>
        <NavBar/>

        <header className='text-center mt-24 lg:mt-16'>
            <p className='text-white text-xs md:text-sm border border-blue_300 rounded-full inline-flex py-1 px-5 bg-blue_300 bg-opacity-5'>We are getting set to launch, join wait list {" "} <img src={arrowForward} alt="" className='inline-block ml-2'/></p>

            <div className='text-white text-4xl md:text-5xl xl:text-7xl mt-6 font-clash-medium'>
                Your everyday 
                <br className='block md:hidden'/>{" "}financial 
                <br className='hidden md:block'/> needs are 
                <br className='block md:hidden'/>{" "}now {" "} 
                <span className='text-blue_300'>a click away</span> {" "}
                <img src={arrow} alt="" className='inline-block'/>
            </div>
        </header>

        <div className='relative mt-32'>
            <img src={heroVector} alt="" className='absolute w-full h-auto z-10 -top-20'/>
            <div className='overflow-hidden w-full'>
                <div className='w-[900px] md:container px-4 lg:px-10 mx-auto flex justify-start md:justify-center items-center z-20 relative overflow-hidden -ml-[150px] md:mx-auto'>
                    <div className='hero-image-cont'>
                        <img ref={photo1} src={ebonyMan} alt="Dark skinned Man" className='rounded-lg w-[200px] md:w-auto relative'/>
                    </div>

                    <div className='hero-image-cont'>
                        <img ref={photo2} src={ebonyWoman} alt="Dark skinned Man" className='rounded-lg w-[200px] md:w-auto relative'/>
                    </div>

                    <div className='hero-image-cont'>
                        <img ref={photo3} src={lightWoman} alt="Dark skinned Man" className='rounded-lg w-[200px] md:w-auto relative'/>
                    </div>

                    <div className='hero-image-cont'>
                        <img ref={photo4} src={lightMan} alt="Dark skinned Man" className='rounded-lg w-[200px] md:w-auto relative'/>
                    </div>
                </div>
            </div>
        </div>

        <div className='lg:text-2xl xl:text-2xl text-white bg-green_700 py-4 relative z-10 overflow-hidden'>
            <div className='w-[1500px]'>
                <Slider {...settings} className="w-full flex items-center justify-center text-center">
                    {services.map((service, index)=>{
                        return <div className='w-auto service inline-block relative clash-medium xl:text-3xl'>{service}</div>
                    })}
                </Slider>
            </div>
        </div>

    </div>
  )
}
