import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import logoSmall from './img/logoSmall.svg';
import acquaintanceBg from './img/acquaintanceBg.webp';
import acquaintanceSlideImg1 from './img/acquaintanceSlideImg1.webp';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Link, useLocation} from "react-router-dom";
import {motion} from "framer-motion";
import {ScrollToTop} from "@components/shared/ScrollToTop.tsx";


const AcquaintanceScreen: React.FC = () => {
    const location = useLocation();

    const steps = [
        {path: '/onboarding/interest'},
        {path: '/onboarding/acquaintance'},
        {path: '/onboarding/consultation'}
    ];
    const currentStepIndex = steps.findIndex((step) => step.path === location.pathname)

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


    const stepsVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0, transition: {duration: 1, delay: 0.6}},
    }

    return (
        <div className="relative z-2 min-h-[724px] w-full bg-[#1E112E] py-[19px] px-[16px]  overflow-hidden ">
            <ScrollToTop />



            <motion.div initial={{opacity: 0, y: -100}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1}}>
                <Link to='/onboarding/welcome'>
                    <img src={logoSmall} alt="Sovetum Logo"/>
                </Link>
            </motion.div>


            <motion.div className='mt-[29px]'>
                <motion.h2 initial={{ opacity: 0, y: 30 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.8 ,delay:.6 }} className='text-[#fff] leading-[100%] text-[32px] font-medium'>Познакомьтесь с вашими
                    экспертами</motion.h2>
                <motion.span initial={{ opacity: 0, y: 30 }}
                             animate={{ opacity: 1, y: 0 }}
                             transition={{ duration: 1,delay:.9 }}
                    className='max-w-[250px] block font-[Inter] font-normal text-[12px] leading-[140%] mt-[12px] text-[#FFFFFF9C]'>Каждый эксперт имеет уникальную
                     личность и специализацию
                </motion.span>
            </motion.div>


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
                        <motion.div   initial={{ opacity: 0, y: 30 }}
                                      whileInView={{ opacity: 1, y: 0 }}
                                      viewport={{ once: true }}
                                      transition={{ duration: 1, delay: index * 0.1 }}
                                      whileHover={{ scale: 1.02 }}
                                      className="border-[1px] border-[#A281CD52] rounded-[14px]">
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
               rounded-full cursor-pointer transition-all duration-300 hover:bg-[#B397D9] hover:text-[white] hover:shadow-[0_0_15px_#B397D9]"
                                >
                                    Поговорить
                                </button>
                            </div>

                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>


            <motion.button initial={{ opacity: 0, scale: 0 }}
                           animate={{ opacity: 1, scale: 1 }}
                           transition={{duration: 0.7 }}
                className="mt-[30px]    h-[50px] w-full flex items-center justify-center gap-[11px]
             px-[20px] py-[11px] border border-[#B397D9] rounded-[64px]
             bg-[#160729] text-[#B397D9] text-[14px] font-ibm font-medium
             leading-[100%] tracking-[1px] uppercase text-center cursor-pointer
             transition-all duration-100  hover:bg-[#B397D9] hover:text-[white] group hover:shadow-[0_0_15px_#B397D9]"
            >
                <span>Пропустить знакомство</span>
                <i className='icon icon-arrow_right_line bg-[#B397D9] text-[17px] transition duration-300 group-hover:bg-[white]  group-hover:rotate-[-20deg]'></i>
            </motion.button>


            <motion.div      initial="hidden"
                             animate="visible"
                             variants={stepsVariants} className=''>

                <div className="mt-[24px] flex gap-[4px] z-[1]">
                    {steps.map((step, index) => (
                        <Link
                            key={index}
                            to={step.path}
                            className={`flex-1 h-[6px] rounded-[10px] hover:bg-[#A281CD]  transition-all duration-200 transition-all duration-200
                             ${index <= currentStepIndex ? 'bg-[#A281CD]' : 'bg-[#F2EDF8]'}
                            ${location.pathname === step.path ? 'bg-[#A281CD]' : ''}`}

                        />
                    ))}
                </div>

            </motion.div>





            <div className='absolute w-full h-full top-[0] left-[0] z-[-1]'>
                <img src={acquaintanceBg} alt=""/>
            </div>

        </div>
    );
};

export default AcquaintanceScreen;