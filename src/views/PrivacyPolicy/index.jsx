import React, { useEffect, useState } from "react";
import { Content } from "./components/content";
import { Sidebar } from "./components/sidebar";
import { Header } from "./components/header";

export const PrivacyPolicy = () =>{
    const [current, setCurrent] = useState("")
    useEffect(()=>{
        let sections = document.getElementsByTagName('section')

        window.addEventListener('scroll', ()=>{
            
            Array.from(sections).forEach(element => {
                let sectionTop = element.offsetTop - 200
                if(window.scrollY > sectionTop){
                    setCurrent(element.getAttribute('id'))
                }
            });
        })
    }, [current])

    return (
        <div>
            <Header/>
            <div className="flex container mx-auto px-5 xl:px-20 gap-20">
                <Sidebar current={current}/>
                <Content/>
            </div>
        </div>
    )
}