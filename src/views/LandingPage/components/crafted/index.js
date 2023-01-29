import React, {useRef, useEffect} from 'react'
import './crafted.css'
import girl from '../../../../assets/static/icons/girl.svg'
import boy from '../../../../assets/static/icons/boy.svg'
import man from '../../../../assets/static/icons/man.svg'
import woman from '../../../../assets/static/icons/woman.svg'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Crafted() {
    const circlesClass = "rounded-full flex items-center justify-center border border-green_150 relative aspect-square" 

    const text1Ref = useRef(null);
    const text2Ref = useRef(null);
    const imageContainerRef = useRef(null);

    useEffect(() => {
        const text1 = text1Ref.current;
        const text2 = text2Ref.current;
        const imageContainer = imageContainerRef.current;
    
        gsap.from(text1, {
          xPercent: -70,
          duration: 2,
          scrollTrigger: {
            scrub:true,
            trigger: imageContainer,
            start: "top 100%",
            end: "top 0%",
          },
        });
    
        gsap.from(text2, {
          xPercent: 100,
          duration: 2,
          scrollTrigger: {
            trigger: imageContainer,
            scrub: 1,
            start: "top 100%",
            end: "top 0%",
          },
        });
    
    
        return () => {};
      }, []);

  return (
    <div className='py-40 relative h-auto overflow-x-hidden' >
        <div className={`${circlesClass} big-round w-full lg:w-[800px] rounded-full mx-auto`} ref={imageContainerRef}>
            <div className={`${circlesClass} w-4/5`}>
                <div className={`${circlesClass} w-4/6`}>
                    <div className={`${circlesClass} w-3/5`}>
                        <div className={`${circlesClass} w-2/5`}>

                        </div>
                    </div>

                    <img src={boy} alt="" className=" w-20 md:w-auto absolute top-20 -right-20 z-10"/>
                </div>

                <img src={girl} alt="" className=" w-20 md:w-auto absolute -top-10 left-40 z-10"/>
            </div>

            <img src={man} alt="" className=" w-20 md:w-auto absolute block -left-16 mt-40 z-10"/>

            <img src={woman} alt="" className=" w-20 md:w-auto absolute block left-0 right-0 mx-auto -bottom-16 z-10"/>
        </div>

        <div className='text-center absolute top-0 left-0 flex items-center justify-center h-full w-full'>
            <div className='text-center text-8xl xl:text-[224px] font-clash-regular'>
                <h1 ref={text1Ref} className='text-green_50 line-text w-[500px] md:w-auto'>Crafted for</h1>
                <h1 ref={text2Ref} className='text-green_700'>Delight</h1>
            </div>
        </div>
    </div>
  )
}
