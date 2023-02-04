import React, {useRef, useEffect, useState} from 'react'

export default function Input({placeholder, onChange, name, type, value}) {
    const inputRef = useRef(null)
    const title = useRef(null)
    let contRef = useRef(null)

    const [showError, setShowError] = useState(false)

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
            setShowError(true)
            contRef.classList.add("border", "border-[#EA596E]")
        }
        else {
            setShowError(false)
            contRef.classList.remove("border", "border-[#EA596E]")
        }
    }

    useEffect(()=>{

    }, [])


  return (
    <div className='bg-neutral_100 h-16 relative flex items-end rounded-[8px]' ref={el=>contRef=el} onClick={focus} >
        <p ref={title} className='absolute top-6 my-auto left-3 transition-all text-text_100 text-xs'>
            {placeholder} 
            {" "} {showError && <span className='text-[#EA596E]'>This field is required</span>}
        </p>
        <input required onChange={onChange} value={value} name={name} type={type} onBlur={checkInput} onFocus={movePlaceholder} ref={inputRef} className='w-full bg-transparent pl-3 h-10 outline-none'/>
    </div>
  )
}
