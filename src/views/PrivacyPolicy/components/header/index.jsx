import React, {useState, useLayoutEffect} from "react"
import { NavBar } from "../../../../components/navbar"
import privacyVector1 from "../../../../assets/static/images/privacy_vector1.svg"
import privacyVector2 from "../../../../assets/static/images/privacy_vector2.svg"

export const Header = () =>{
    const [currView, setCurrView] = useState(window.innerWidth)

    useLayoutEffect(()=>{
        let width = window.innerWidth
        setCurrView(width)
    }, [currView])
    return (
        <div className="bg-dark_blue w-full">
            <NavBar/>
            <div className="relative w-full">
                <img src={currView > 700 ? privacyVector1 : privacyVector2} alt="" className='absolute w-full h-auto bottom-0'/>
                <div className="text-green_50 text-center py-32 font-clash-semibold text-8xl relative">
                    Privacy Policy
                </div>
            </div>

        </div>
    )
}