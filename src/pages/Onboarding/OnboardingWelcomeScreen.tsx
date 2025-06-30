import React from 'react';


import mainLogo from './img/logo-main.svg';
import arrowRight from './img/arrow_right_line.svg';


import welcomeBg from "@pages/Onboarding/img/welcomeBg.webp";
import welcomeDecor from "@pages/Onboarding/img/welcomeDecor.png";
import {WhiteLink} from "@components/ui/WhiteLink.tsx";
import {motion} from 'framer-motion';
import {ScrollToTop} from "@components/shared/ScrollToTop.tsx";

const OnboardingWelcomeScreen: React.FC = () => {
    return <>
        <ScrollToTop />

        <motion.div initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1}}
                    className="relative z-2 min-h-[724px] w-full
       bg-[#1E112E]  overflow-hidden flex flex-col align-items-center">


            <motion.div initial={{opacity: 0, scale: 0}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 1}} className=" flex flex-col items-center mt-[26px] relative z-10">
                <img src={mainLogo} alt="Sovetum Logo" className="mx-[101px] h-[91px]"/>
                <div className="text-[#fff] font-bold  text-[27.39px] mt-[4px] font-[Baloo 2]">советум</div>
            </motion.div>


            <div className='absolute top-[0] left-[0] z-[-1] w-full h-full'>
                <img src={welcomeBg} alt=""/>
            </div>


            <motion.div initial={{opacity: 0, y: 40}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.4, duration: 1}} className="rounded-tl-[32px]
             rounded-tr-[32px] bg-[#150628] relative z-[2] flex flex-col items-center mt-auto px-[16px] py-[32px]">
                <motion.h1 initial={{opacity: 0, y: 20}}
                           animate={{opacity: 1, y: 0}}
                           transition={{delay: 0.7, duration: 0.9}}
                           className="font-medium text-[32px] text-center leading-[100%] text-[#fff] ">Ваш персональный
                    совет экспертов
                </motion.h1>
                <motion.p      initial={{ opacity: 0, y: 10 }}
                               animate={{ opacity: 1, y: 0 }}
                               transition={{ delay: 0.9, duration: 0.9 }} className=" font-[Inter] max-w-[302px] max font-normal text-[13px] mb-[32px] leading-[1.4] mt-[20px] text-center text-[#FFFFFF9C] ">
                    Неустойчивость, как известно, быстро разивается, если химическое соединение сжимает
                    квантово-механический
                </motion.p>

                <motion.div
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                    className="w-full"
                >
                    <WhiteLink className={'text-[16px] w-full flex items-center justify-center gap-2'} hrefTo={'/onboarding/interest'}>
                        <motion.span
                            variants={{
                                rest: { scale: 1 },
                                hover: { scale: 1.05 },
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            Начать
                        </motion.span>
                        <motion.img
                            src={arrowRight}
                            alt="arrow"
                            className="w-[16px] h-[16px]"
                            variants={{
                                rest: { x: 0 },
                                hover: { x: 5 },
                            }}
                            transition={{ duration: 0.3 }}
                        />
                    </WhiteLink>
                </motion.div>


                <div className='absolute w-full bottom-[0] left-[0] z-[-1]  '>
                    <img className='w-full' src={welcomeDecor} alt="image"/>
                </div>

            </motion.div>


        </motion.div>


    </>

}


export default OnboardingWelcomeScreen;