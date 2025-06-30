import React from 'react';
import '../OnboardingInterestScreen.css';
import {Link, useLocation} from 'react-router-dom';


import logoSmall from "@pages/Onboarding/img/logoSmall.svg";
import acquaintanceBg from "@pages/Onboarding/img/acquaintanceBg.webp";
import {motion} from 'framer-motion';
import {ScrollToTop} from "@components/shared/ScrollToTop.tsx";

const categories = [
    'Планирование дня', 'Спорт', 'Рацион',
    'Финансовый вопрос', 'Планирование дня', 'Восстановление',
    'Спорт', 'Рацион', 'Творчество',
    'Финансовый вопрос', 'Хобби', 'Психическое здоровье',
    'Восстановление', 'Хобби', 'Творчество',
    'Уход за собой', 'Психическое здоровье', 'Уход за собой'
];

export const InterestScreen: React.FC = () => {
    const location = useLocation();

    const steps = [
        {path: '/onboarding/interest'},
        {path: '/onboarding/acquaintance'},
        {path: '/onboarding/consultation'}
    ];
    const currentStepIndex = steps.findIndex((step) => step.path === location.pathname)


    const categoryVariants = {
        hidden: {opacity: 0, y: 10},
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {duration: 1,delay: i * 0.05},

        }),
    }

    const stepsVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0, transition: {duration: 0.4, delay: 0.6}},
    }

    return <>
        <div
            className="relative z-2 min-h-[724px] pb-[50px] w-full bg-[#1E112E]  overflow-hidden flex flex-col align-items-center">
            <ScrollToTop />


            <div className="py-[19px] px-[16px]">
                <motion.div initial={{opacity: 0, y: -100}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 1}}>
                    <Link to='/onboarding/welcome'>
                        <img src={logoSmall} alt="Sovetum Logo"/>
                    </Link>
                </motion.div>

                <motion.h2 initial={{opacity: 0, y: -20}}
                           animate={{opacity: 1, y: 0}}
                           transition={{duration: 0.8}} className='mt-[93px] text-[#fff] loading-[100%] text-[32px] font-medium'>Что вас интересует?</motion.h2>


                <div className="w-full flex flex-wrap gap-[8px] mt-[40px]">
                    {categories.map((cat, idx) => (
                        <motion.div
                            className="

        px-[12px] py-[8px]
        text-[14px] text-[#593983] font-[Inter] font-normal
        bg-white rounded-full border border-[rgba(162,129,205,0.32)]
        shadow-[0_2px_8px_rgba(90,60,130,0.04)]
        whitespace-nowrap cursor-pointer
        transition-colors duration-200
        hover:bg-[#A281CD] hover:text-white
        flex-shrink-0
      " key={idx}
                            custom={idx}
                            initial="hidden"
                            animate="visible"
                            variants={categoryVariants}
                        >{cat}

                        </motion.div>
                    ))}
                </div>


            </div>



            <motion.div
                className="absolute bottom-[20px] left-[16px] right-[16px] flex gap-[4px] z-[1]"
                initial="hidden"
                animate="visible"
                variants={stepsVariants}
                style={{
                    bottom: 'calc(20px + env(safe-area-inset-bottom))',
                }}
            >
                {steps.map((step, index) => (
                    <Link
                        key={index}
                        to={step.path}
                        className={`
              flex-1 h-[6px] rounded-[10px]
              hover:bg-[#A281CD] transition-all duration-200
              ${ index <= currentStepIndex ? 'bg-[#A281CD]' : 'bg-[#F2EDF8]'}
              ${location.pathname === step.path ? 'bg-[#A281CD]' : 'bg-[#F2EDF8]' }
            `}
                    />
                ))}
            </motion.div>


            <div className='absolute w-full h-full top-[0] left-[0] z-[-1]'>
                <img src={acquaintanceBg} alt=""/>
            </div>

        </div>

    </>
};

export default InterestScreen;