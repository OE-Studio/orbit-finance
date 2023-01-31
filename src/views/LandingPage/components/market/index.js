import React, {useState, useEffect} from 'react'
import {Bolt, Add, Remove} from '../../../../utils/icons'
import { marketArr } from '../../../../utils/marketArray'
import './market.css'

const CardTemplate = ({title, image, description, index}) =>{
    const [focus, setFocus] = useState(false)

    const showMore=(index)=>{
        let elems = document.querySelectorAll('.disappear')
        // console.log(elems)
        
        Array.from(elems).map((elem, i)=>{
            // console.log(index)
            elem.classList.remove("appear")

            if ( i === index) {
                console.log(index)
                elem.classList.add("appear")
            }
            return false
        })
    }

    const showLess = (e) =>{
        e.stopPropagation()
        console.log(e.target)
        e.currentTarget.classList.remove('appear')
    }

    useEffect(()=>{
        let images = document.querySelectorAll(".market-image")

        Array.from(images).map((image, index)=>{
            if(index === 0) {
                image.classList.add("image0")
            }
            if(index === 1) {
                image.classList.add("image1")
            }
            if(index === 2) {
                image.classList.add("image2")
            }
            if(index === 3) {
                image.classList.add("image3")
            }

            return false
        })
    }, [])

    return (
        <div className='border border-neutral_200 rounded-cards h-[580px] md:h-auto w-full p-0 relative overflow-hidden hover:shadow-[10px_30px_100px_0px_#00000017] hover:bg-white cursor-pointer'>
            {/* Main view */}
            <div onClick={()=>showMore(index)} onMouseOver={()=>setFocus(true)} onMouseOut={()=>setFocus(false)} className="flex flex-col items-center justify-between  h-full">
                <div className='p-6 lg:p-4 xl:p-6'>
                    <div className='flex items-center justify-between'>
                        <div className={`${focus ? 'bg-green_700 text-white' : "bg-neutral_100"}  rounded-full flex items-center gap-4 h-9 px-4 lg:px-2 xl:px-4`}>
                            <Bolt fill={focus ? "#FFFFFF" : "#000000"}/>
                            Take a look
                        </div>

                        <div className={`${focus ? 'bg-green_700 text-white' : "bg-neutral_100"} w-9 h-9 flex items-center justify-center rounded-full`}>
                            <Add fill={focus ? "#FFFFFF" : "#000000"}/>
                        </div>
                    </div>

                    <div className='text-4xl lg:text-3xl xl:text-4xl mt-6 font-clash-medium'>{title}</div>
                </div>

                
                <div className='w-full h-auto relative md:mt-0'>
                    <img src={image} alt="" className={`market-image`}/>
                </div>
            </div>

            {/* More view */}
            <div onClick={showLess} className='p-6 w-full h-full absolute left-0 bg-green_500 disappear rounded-cards'>
                <div className='flex items-center justify-end'>

                    <div className={`w-9 h-9 flex items-center justify-center rounded-full bg-black bg-opacity-20`}>
                        <Remove/>
                    </div>
                </div>
                <div className='text-4xl mt-6 font-clash-medium'>{title}</div>
                <p className='mt-6'>{description}</p>
            </div>
        </div>
    )
}

export default function Market() {
  return (
    <div className='mt-20 xl:mt-48'>
        <header className='text-center '>
            <h1 className='text-3xl xl:text-7xl font-clash-medium'>It&apos;s a market but now <br/>
                <span className='text-green_700'>in your hands</span>
            </h1>
            <p className='text-gray_400 xl:text-2xl mt-6'>Say goodbye to multiple platforms for all your digital needs. Purchase data,<br className='hidden lg:block'/> recharge airtime, cable subscription and virtual cards - all in one place.</p>
        </header>

        <div className='mt-20 container px-5 lg:px-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {marketArr.map((market, index)=>{
                return <CardTemplate key={market.title} index={index} title={market.title} image={market.image} description={market.description}/>
            })}
        </div>
    </div>
  )
}
