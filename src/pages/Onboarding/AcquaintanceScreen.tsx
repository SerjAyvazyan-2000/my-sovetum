import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import logoSmall from './img/logoSmall.svg';
import acquaintanceBg from './img/acquaintanceBg.webp';
import acquaintanceSlideImg1 from './img/acquaintanceSlideImg1.webp';

import {Swiper, SwiperSlide} from 'swiper/react';
import arrowRightLight from "@pages/Onboarding/img/arrowRightLight.svg";
import {Link} from "react-router-dom";


const AcquaintanceScreen: React.FC = () => {
    const steps = [
        {path: '/onboarding/interest'},
        {path: '/onboarding/acquaintance'},
        {path: '/onboarding/consultation'}
    ];
    const experts = [
        {
            name: 'Виктор',
            desc: 'Течение среды, при адиабатическом измен...',
            tags: ['Финансы', 'Хобби'],
            image: acquaintanceSlideImg1,
        },
        {
            name: 'Виктор',
            desc: 'Течение средыd, при адиабатическом измен...',
            tags: ['Питание', 'ЗОЖ'],
            image: acquaintanceSlideImg1,
        },
        {
            name: 'Виктор',
            desc: 'Течение среды, при адиабатическом измен...',
            tags: ['Питание', 'ЗОЖ'],
            image: acquaintanceSlideImg1,
        },
    ];


    return (
        <div className="relative z-2 min-h-[724px] w-full bg-[#1E112E] py-[19px] px-[16px]  overflow-hidden ">


            <Link to='/onboarding/welcome'>
                <img src={logoSmall} alt="Sovetum Logo"/>
            </Link>


            <div className='mt-[29px]'>
                <h2 className='text-[#fff] leading-[100%] text-[32px] font-medium'>Познакомьтесь с вашими
                    экспертами</h2>
                <span
                    className='max-w-[250px] block font-[Inter] font-normal text-[12px] leading-[140%] mt-[12px] text-[#FFFFFF9C]'>Каждый эксперт имеет уникальную
                     личность и специализацию
                </span>
            </div>


            <Swiper
                spaceBetween={8}
                style={{overflow: 'unset'}}
                breakpoints={{
                    430: {
                        slidesPerView: 2.1,
                    },
                    320: {
                        slidesPerView: 1.5,
                    },
                }}
                className=" mt-[24px]">
                {experts.map((expert, index) => (
                    <SwiperSlide key={index}>
                        <div className="border-[1px] border-[#A281CD52] rounded-[14px]">
                            <img
                                src={expert.image}
                                alt={expert.name}
                                className="w-full h-[214px] object-cover rounded-[14px] border-[1px] border-[#A281CD52] mb-3"
                            />
                            <div className='p-[12px]'>
                                <p className=" font-semibold text-[16px] leading-[100%] text-white">{expert.name}</p>
                                <p className="font-[Inter] font-normal text-[11px] leading-[140%] text-white opacity-40 mt-[4px]">{expert.desc}</p>
                                <div className="mt-[12px] flex gap-[4px] flex-wrap">
                                    {expert.tags.map((tag, idx) => (
                                        <p
                                            key={idx}
                                            className={`
          font-[Inter] font-normal text-[12px]  leading-[100%] px-[6px] py-[3px]
          rounded-full text-white
          ${idx === 0 ? 'bg-[#7D5DA7]' : ''}
          ${idx === 1 ? 'bg-[#9D5DA7]' : ''}
        `}
                                        >
                                            {tag}
                                        </p>
                                    ))}
                                </div>
                                <button
                                    className="w-full  mt-[20px] px-[16px] py-[8px] font-inter text-[14px] font-normal
               leading-[100%] border border-[#A281CD52] bg-white text-[#160729]
               rounded-full cursor-pointer transition-all duration-300 hover:bg-[#B397D9] hover:text-[#160729] hover:shadow-[0_0_15px_#B397D9]"
                                >
                                    Поговорить
                                </button>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>


            <button
                className="mt-[30px] h-[50px] w-full flex items-center justify-center gap-[11px]
             px-[20px] py-[11px] border border-[#B397D9] rounded-[64px]
             bg-[#160729] text-[#B397D9] text-[14px] font-ibm font-medium
             leading-[100%] tracking-[1px] uppercase text-center cursor-pointer
             transition-all duration-300 hover:bg-[#B397D9] hover:text-[#160729] hover:shadow-[0_0_15px_#B397D9]"
            >
                <span>Пропустить знакомство</span>
                <img src={arrowRightLight} alt="arrow" className="max-w-[17px]"/>
            </button>


            <div className="mt-[24px] flex gap-[4px] z-[1]">
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