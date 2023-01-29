import React from 'react'
import footerImage from '../../assets/static/logos/footer-logo.svg'

export default function Footer() {
    const year = new Date().getFullYear()
  return (
    <div className='bg-dark_blue py-8 mt-24'>
        <div className='flex items-center justify-between container px-4 xl:px-10  mx-auto'>
            <img src={footerImage} alt="logo" className=''/>
            <div className='text-neutral_300 xl:text-2xl'>&copy;{year}</div>
        </div>
    </div>
  )
}
