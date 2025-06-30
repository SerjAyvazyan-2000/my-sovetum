import { motion } from 'framer-motion';
import React from 'react'
import {Link} from "react-router-dom";


const Menu: React.FC<Props> = () => {
    return <motion.div  initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.6, delay:.1 }} className='absolute bottom-[20px] left-[16px] '>
        <nav className=' relative z-[3]  flex items-center gap-[4px]'>
            <ul className='flex items-center gap-[4px] p-[6px] bg-[#FFFFFF4D] rounded-full'>
                <Link to={'/'} className='blue-icon-gradient cursor-pointer rounded-full p-[14px] gap-[9px] flex items-center'>
                    <i className='icon icon-home flex-[20px] text-[16px] bg-[#FFFFFF]'></i>
                    <p className='font-[Inter] font-normal leading-[100%] text-[14px] text-desktop text-[#FFFFFF]'>Эксперты</p>
                </Link>
                <Link to={'/onboarding/settings'} className='w-[44px] min-w-[44px] h-[44px] group hover:bg-[#493E56] transition duration-300 cursor-pointer bg-[#FFFFFF] rounded-full  flex justify-center items-center '>
                    <i className='icon icon-users group-hover:bg-[white] transition duration-300   text-[16px] bg-[#593983]'></i>
                </Link>

                <Link to={'/onboarding/analytics'} className='w-[44px] min-w-[44px] h-[44px] cursor-pointer bg-[#FFFFFF] group hover:bg-[#493E56] transition duration-300 rounded-full  flex justify-center items-center '>
                    <i className='icon chart_decrease  group-hover:bg-[white] transition duration-300   text-[16px] bg-[#593983]'></i>
                </Link>

                <li className='w-[44px] min-w-[44px] h-[44px]   cursor-pointer bg-[#FFFFFF] group hover:bg-[#493E56] transition duration-300 rounded-full  flex justify-center items-center '>
                    <i className='icon icon-user group-hover:bg-[white] transition duration-300  text-[16px] bg-[#593983]'></i>
                </li>

            </ul>
            <ul className='flex items-center gap-[4px] p-[6px] bg-[#FFFFFF4D] rounded-full'>
                <li className='w-[44px] min-w-[44px] h-[44px] cursor-pointer bg-[#FFFFFF] group hover:bg-[#493E56]  transition duration-300 rounded-full  flex justify-center items-center '>
                    <i className='icon icon-plus group-hover:bg-[white] transition duration-300   text-[16px] bg-[#593983]'></i>
                </li>
            </ul>
        </nav>
        <div className='white-link-blur w-[120%] relative z-[2]'></div>
    </motion.div>
}

export default Menu