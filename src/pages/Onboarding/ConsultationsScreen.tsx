import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import logoSmall from './img/logoSmall.svg';
import acquaintanceBg from './img/acquaintanceBg.webp';
import {Link} from "react-router-dom";
import {WhiteLink} from "@components/ui/WhiteLink.tsx";
import arrowRight from "@pages/Onboarding/img/arrow_right_line.svg";
import avatars1 from "@pages/Onboarding/img/avatars1.png";
import avatars2 from "@pages/Onboarding/img/avatars2.png";


const AcquaintanceScreen: React.FC = () => {
    const steps = [
        {path: '/onboarding/interest'},
        {path: '/onboarding/acquaintance'},
        {path: '/onboarding/consultation'}
    ];


    return (
        <div className="relative overflow-hidden flex flex-col z-2 min-h-[724px]  w-full bg-[#1E112E] py-[19px] px-[16px]   ">


            <Link to='/onboarding/welcome'>
                <img src={logoSmall} alt="Sovetum Logo"/>
            </Link>


            <div className='mt-[29px]'>
                <h2 className='text-[#fff] leading-[100%] text-[32px] font-medium'>
                    Консилиумы-групповые консультации
                </h2>
                <span
                    className=' block font-[Inter] font-normal text-[12px] leading-[140%] mt-[12px] text-[#FFFFFF9C]'>
                    Получите экспертное мнение от команды специалистов

                </span>
            </div>


            <div className='mt-[32px] max-h-[500px] pb-[100px]  overflow-auto flex flex-col gap-[12px] no-scrollbar'>
                <div className="w-full bg-[#160729]  border border-[#A281CD52] rounded-[14px] px-[12px] pt-[12px] pb-[14px] flex flex-col gap-[20px]">
                    <div className="flex items-center gap-[12px]">
                        <div className="w-[42px] h-[42px] flex items-center justify-center rounded-full bg-[#7D5DA7] text-white  ">
                            <i className='icon icon-plus text-[14px] bg-[#FFFFFF]'></i>
                        </div>
                        <div className="flex flex-col gap-[4px]">
                            <p className="text-[#FFFFFF] text-[16px]  font-semibold leading-[100%]">Медицинский</p>
                            <p className="text-[#FFFFFF] text-[12px] opacity-50 leading-[140%] ">В самом общем случае
                                силовое поле выталк...</p>
                        </div>
                    </div>

                    <div className="flex max-w-[175px] ">
                        <img src={avatars1} alt=""/>
                    </div>

                    <button
                        className=" w-full cursor-pointer h-[33px] flex items-center justify-center border border-[#B397D9]  rounded-[100px] text-[#B397D9] text-[14px]
                        font-normal transition-all duration-300 hover:bg-[#A281CD] hover:text-[#1E112E] hover:shadow-md">
                        Узнать больше
                    </button>
                </div>


                <div className="w-full bg-[#160729]  border border-[#A281CD52] rounded-[14px] px-[12px] pt-[12px] pb-[14px] flex flex-col gap-[20px]">
                    <div className="flex items-center gap-[12px]">
                        <div className="w-[42px] h-[42px] flex items-center justify-center rounded-full bg-[#7D5DA7] text-white  ">
                            <i className='icon icon-business text-[15px] bg-[#FFFFFF]'></i>
                        </div>
                        <div className="flex flex-col gap-[4px]">
                            <p className="text-[#FFFFFF] text-[16px]  font-semibold leading-[100%]">Бизнес</p>
                            <p className="text-[#FFFFFF] text-[12px] opacity-50 leading-[140%] ">В самом общем случае
                                силовое поле выталк...</p>
                        </div>
                    </div>

                    <div className="flex max-w-[116px] ">
                        <img src={avatars2} alt=""/>
                    </div>

                    <button
                        className=" w-full cursor-pointer h-[33px] flex items-center justify-center border border-[#B397D9]  rounded-[100px] text-[#B397D9] text-[14px]
                        font-normal transition-all duration-300 hover:bg-[#A281CD] hover:text-[#1E112E] hover:shadow-md">
                        Узнать больше
                    </button>
                </div>


                <div className="w-full bg-[#160729]  border border-[#A281CD52] rounded-[14px] px-[12px] pt-[12px] pb-[14px] flex flex-col gap-[20px]">
                    <div className="flex items-center gap-[12px]">
                        <div className="w-[42px] h-[42px] flex items-center justify-center rounded-full bg-[#7D5DA7] text-white  ">
                            <i className='icon icon-earth text-[15px] bg-[#FFFFFF]'></i>
                        </div>
                        <div className="flex flex-col gap-[4px]">
                            <p className="text-[#FFFFFF] text-[16px]  font-semibold leading-[100%]">IT</p>
                            <p className="text-[#FFFFFF] text-[12px] opacity-50 leading-[140%] ">В самом общем случае
                                силовое поле выталк...</p>
                        </div>
                    </div>

                    <div className="flex max-w-[116px] ">
                        <img src={avatars2} alt=""/>
                    </div>

                    <button
                        className=" w-full cursor-pointer h-[33px] flex items-center justify-center border border-[#B397D9]  rounded-[100px] text-[#B397D9] text-[14px]
                        font-normal transition-all duration-300 hover:bg-[#A281CD] hover:text-[#1E112E] hover:shadow-md">
                        Узнать больше
                    </button>
                </div>

            </div>



            <div className='relative z-[2] white-link-blur'>
                <WhiteLink className='text-[14px] absolute bottom-[26px] left-[16px] w-[92%] ' hrefTo={'/onboarding/welcome'}>
                    Начать использование
                    <img src={arrowRight} alt="arrow" className="w-[16px] h-[16px]"/>
                </WhiteLink>
            </div>


            <div className="absolute bottom-[20px] left-[16px] w-[92%] flex gap-[4px] z-[2]">
                {steps.map((step, index) => (
                    <Link
                        key={index}
                        to={step.path}
                        className={`flex-1 h-[6px] rounded-[10px] transition-all duration-200 ${
                            location.pathname === step.path ? 'bg-[#A281CD]' : 'bg-[#F2EDF8]'
                        }`}
                    />
                ))}
            </div>


            <div className='absolute w-full h-full top-[0] left-[0] z-[-1]'>
                <img src={acquaintanceBg} alt=""/>
            </div>
        </div>
    );
};

export default AcquaintanceScreen;



