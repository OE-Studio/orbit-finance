import React, {useRef, useEffect} from 'react'

export default function Input({placeholder}) {
    const inputRef = useRef(null)
    const title = useRef(null)
    const focus = () =>{
        inputRef.current.focus()
    }

    const movePlaceholder = () =>{
        title.current.classList.remove("top-6")
        title.current.classList.add("top-2")
    }

    const checkInput = (e) =>{
        if(!e.target.value) {
        title.current.classList.remove("top-2")
        title.current.classList.add("top-6")
        }
    }

    useEffect(()=>{

    }, [])


  return (
    <div className='bg-neutral_100 h-16 relative flex items-end rounded-[8px]' onClick={focus} >
        <p ref={title} className='absolute top-6 my-auto left-3 transition-all text-text_100 text-xs'>{placeholder}</p>
        <input onBlur={checkInput} onFocus={movePlaceholder} ref={inputRef} className='w-full bg-transparent pl-3 h-10 outline-none'/>
    </div>
  )
}
