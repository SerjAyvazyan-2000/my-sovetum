import React from 'react'
import {Link} from "react-router-dom";

interface Props {
}

const PageHeading: React.FC<Props> = () => {
    return <div className='absolute bottom-[20px] left-[16px] '>
        <nav className=' relative z-[3]  flex items-center gap-[4px]'>
            <ul className='flex items-center gap-[4px] p-[6px] bg-[#FFFFFF4D] rounded-full'>
                <Link to={'/'} className='blue-gradient cursor-pointer rounded-full p-[14px] gap-[9px] flex items-center'>
                    <i className='icon icon-home flex-[20px] text-[16px] bg-[#FFFFFF]'></i>
                    <p className='font-[Inter] font-normal leading-[100%] text-[14px] text-desktop text-[#FFFFFF]'>Эксперты</p>
                </Link>
                <Link to={'/onboarding/settings'} className='w-[44px] min-w-[44px] h-[44px] cursor-pointer bg-[#FFFFFF] rounded-full  flex justify-center items-center '>
                    <i className='icon icon-users  text-[16px] bg-[#593983]'></i>
                </Link>

                <li className='w-[44px] min-w-[44px] h-[44px] cursor-pointer bg-[#FFFFFF] rounded-full  flex justify-center items-center '>
                    <i className='icon chart_decrease  text-[16px] bg-[#593983]'></i>
                </li>

                <li className='w-[44px] min-w-[44px] h-[44px] cursor-pointer bg-[#FFFFFF] rounded-full  flex justify-center items-center '>
                    <i className='icon icon-user  text-[16px] bg-[#593983]'></i>
                </li>

            </ul>
            <ul className='flex items-center gap-[4px] p-[6px] bg-[#FFFFFF4D] rounded-full'>
                <li className='w-[44px] min-w-[44px] h-[44px] cursor-pointer bg-[#FFFFFF] rounded-full  flex justify-center items-center '>
                    <i className='icon icon-plus  text-[16px] bg-[#593983]'></i>
                </li>
            </ul>
        </nav>
        <div className='white-link-blur w-[120%] relative z-[2]'></div>
    </div>
}

export default PageHeading