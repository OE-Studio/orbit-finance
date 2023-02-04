import React, {useState} from 'react'
import pressingPhone from '../../../../assets/static/icons/pressingPhone.jpg'
import congratulations from '../../../../assets/static/icons/congratulations.svg'
import Input from '../../../../components/input'

export default function Waitlist() {
    const [data, setData] = useState({
        email:"",
        fullName:""
    })
    const [loading, setLoading] = useState(false)
    const [showCongrats, setShowCongrats] = useState(false)

    const submitDetails = async(e) =>{
        e.preventDefault()
        try{
            setLoading(true)
            let response = await(fetch("https://orbitform.onrender.com/signup", {
                method:'POST',
                headers:{
                    'Content-type':"pplication/json"
                },
                body:JSON.stringify(data)
            }))
            let result = await response.json()
            if(result && result._id) {
                setLoading(false)
                setData({email:"", fullName:""})
                setShowCongrats(true)
                return false   
            }
            setLoading(false)
            throw new Error()
            
        }
        catch(err){
            setLoading(false)
        }
        
    }

  return (
    <div className=' container px-5 lg:px-10 mx-auto grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-2 pt-24 md:pt-40 xl:pt-52 bg-white' id="form">
        <div className='col-span-1 md:col-span-3 xl:col-span-1 h-auto'>
            <img alt="" src={pressingPhone} className="h-auto"/>
        </div>

        <div className='col-span-1 md:col-span-2 xl:col-span-1 flex items-center justify-center p-6 md:pt-3 lg:pt-6 xl:pt-0 xl:px-8 border border-neutral_200 border-t-0 md:border-t md:border-l-0 rounded-b-[16px] md:rounded-b-none md:rounded-r-[16px]'>
            {showCongrats ? <Congratulations setShowCongrats={setShowCongrats}/> : <div className='inline-block w-full'>
                <div className='font-clash-medium text-4xl md:text-2xl lg:text-4xl xl:text-6xl text-dark_blue'>Join Wait list</div>
                <div className=' flex flex-col gap-6 md:gap-3 lg:gap-6 mt-4 lg:mt-8'>
                    <Input onChange={(e)=>setData(prev=>({...prev, [e.target.name]:e.target.value}))} 
                        name="fullName" 
                        placeholder="Full name" 
                        type="text" 
                        value={data.fullName}
                    />

                    <Input onChange={(e)=>setData(prev=>({...prev, [e.target.name]:e.target.value}))} 
                        name="email" 
                        placeholder="Email" 
                        type="email" 
                        value={data.email}
                    />

                    <button type="submit" disabled={!data.fullName && !data.email} className='btn w-full h-14' onClick={submitDetails}>
                        {loading ? "Submittting" : "Join wait list"}
                    </button>
                </div>
            </div>}
        </div>
    </div>
  )
}

const Congratulations = ({setShowCongrats}) =>{

    return (
        <div className='inline-block w-full relative' id="drawing_canvas">
            <div>
                <img src={congratulations} alt="flower" className='w-24 xl:w-auto block mx-auto'/>
            </div>

            <div className='font-clash-medium text-4xl md:text-2xl lg:text-4xl xl:text-6xl text-dark_blue text-center mt-3 xl:mt-6'>Congratulations</div>

            <p className='text-center mt-3 xl:mt-6 leading-loose'>We've added you to our waiting list! We'll let you know <br className='hidden md:block'/>when Orbit Finance  is ready!</p>

            <button className='btn w-full h-14 mt-4 xl:mt-6' onClick={()=>setShowCongrats(false)}>Close</button>

            <div className='absolute top-0 left-0 mx-auto w-full'>
                <lottie-player 
                src="https://assets10.lottiefiles.com/packages/lf20_da4xcSnZnu.json"  
                background="transparent"  
                speed="1"  
                style={{width:'100%', height:'300px'}}  
                 autoplay></lottie-player>
            </div>
        </div>
    )
}
