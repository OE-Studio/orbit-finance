import {PrivacySideArray} from '../../../../utils/privacySideArray'

export const Sidebar = ({current}) =>{
    return (
        <div className='hidden lg:block mt-10 dm-sans'>
            <div className='w-72 p-4 bg-[#71879C] bg-opacity-10 sticky top-0'>
                <ul className='space-y-2 uppercase '>
                    {PrivacySideArray.map(link=>{
                        return <li className='text-[#5E7387] font-medium text-sm py-2'>
                            <a href={`#${link.title}`} className={current === link.title && `text-green_700 font-semibold`}>{link.title}</a>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}