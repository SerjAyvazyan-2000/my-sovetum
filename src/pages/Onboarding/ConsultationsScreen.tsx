import React from 'react';

import logoSmall from './img/logoSmall.svg';
import acquaintanceBg from './img/acquaintanceBg.webp';
import {Link, useLocation} from "react-router-dom";
import {WhiteLink} from "@components/ui/WhiteLink.tsx";
import arrowRight from "@pages/Onboarding/img/arrow_right_line.svg";

import {motion} from "framer-motion";
import ExpertCategoryList from '@/components/shared/ExpertCategories';
import {ScrollToTop} from "@components/shared/ScrollToTop.tsx";


const AcquaintanceScreen: React.FC = () => {
    const location = useLocation();

    const steps = [
        {path: '/onboarding/interest'},
        {path: '/onboarding/acquaintance'},
        {path: '/onboarding/consultation'}
    ];

    const currentStepIndex = steps.findIndex((step) => step.path === location.pathname)


    return (
        <div
            className="relative overflow-hidden flex flex-col z-2 min-h-[724px]  w-full bg-[#1E112E] py-[19px] px-[16px]   ">

            <ScrollToTop />

            <motion.div initial={{opacity: 0, y: -100}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1}}>
                <Link to='/onboarding/welcome'>
                    <img src={logoSmall} alt="Sovetum Logo"/>
                </Link>
            </motion.div>


            <div className='mt-[29px]'>
                <motion.h2 initial={{opacity: 0, y: 30}}
                           animate={{opacity: 1, y: 0}}
                           transition={{duration: 0.8, delay: .6}}
                           className='text-[#fff] leading-[100%] text-[32px] font-medium'>
                    Консилиумы-групповые консультации
                </motion.h2>
                <motion.span
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1, delay: .9}}
                    className=' block font-[Inter] font-normal text-[12px] leading-[140%] mt-[12px] text-[#FFFFFF9C]'>
                    Получите экспертное мнение от команды специалистов

                </motion.span>
            </div>




            <ExpertCategoryList/>


            <motion.div initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1, delay: .6}} className='absolute bottom-[49px] w-[92%] white-link-blur'>
                <WhiteLink className='text-[14px]    '
                           hrefTo={'/onboarding/home'}>
                    Начать использование
                    <img src={arrowRight} alt="arrow" className="w-[16px] h-[16px]"/>
                </WhiteLink>

            </motion.div>


            <motion.div initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1, delay: .9}}
                        className="absolute bottom-[20px] left-[16px] w-[92%] flex gap-[4px] z-[2]">
                {steps.map((step, index) => (
                    <Link
                        key={index}
                        to={step.path}
                        className={`flex-1 h-[6px] rounded-[10px] hover:bg-[#A281CD] transition-all duration-200 
                        ${index <= currentStepIndex ? 'bg-[#A281CD]' : 'bg-[#F2EDF8]'}
                            ${location.pathname === step.path ? 'bg-[#A281CD]' : ''}
                         `}
                    />
                ))}
            </motion.div>


            <div className='absolute  w-full h-full top-[0] left-[0] z-[-1]'>
                <img src={acquaintanceBg} alt=""/>
            </div>
        </div>
    );
};

export default AcquaintanceScreen;



