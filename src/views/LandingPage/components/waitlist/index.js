import React from 'react'
import pressingPhone from '../../../../assets/static/icons/pressingPhone.jpg'
import Input from '../../../../components/input'

export default function Waitlist() {
  return (
    <div className=' container px-5 lg:px-10 mx-auto grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-2 pt-24 md:pt-40 xl:pt-52 bg-white' id="form">
        <div className='col-span-1 md:col-span-3 xl:col-span-1 h-auto'>
            <img alt="" src={pressingPhone} className="h-auto"/>
        </div>

        <div className='col-span-1 md:col-span-2 xl:col-span-1 flex items-center justify-center p-6 md:pt-3 lg:pt-6 xl:pt-0 xl:px-8 border border-neutral_200 border-t-0 md:border-t md:border-l-0 rounded-b-[16px] md:rounded-b-none md:rounded-r-[16px]'>
            <div className='inline-block w-full'>
                <div className='font-clash-medium text-4xl md:text-2xl lg:text-4xl xl:text-6xl text-dark_blue'>Join Wait list</div>
                <div className=' flex flex-col gap-6 md:gap-3 lg:gap-6 mt-4 lg:mt-8'>
                    <Input placeholder="Full name"/>
                    <Input placeholder="Email"/>

                    <button className='btn w-full h-14'>Join wait list</button>
                </div>
            </div>
        </div>
    </div>
  )
}
