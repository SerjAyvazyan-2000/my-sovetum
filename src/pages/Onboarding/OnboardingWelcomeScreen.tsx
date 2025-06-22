import React from 'react';


import mainLogo from './img/logo-main.svg';
import arrowRight from './img/arrow_right_line.svg';


import welcomeBg from "@pages/Onboarding/img/welcomeBg.webp";
import welcomeDecor from "@pages/Onboarding/img/welcomeDecor.png";
import {WhiteLink} from "@components/ui/WhiteLink.tsx";

const OnboardingWelcomeScreen: React.FC = () => {
    return <>
        <div className="relative z-2 min-h-[724px] w-full
       bg-[#1E112E]  overflow-hidden flex flex-col align-items-center">



            <div className=" flex flex-col items-center mt-[26px] relative z-10">
                <img src={mainLogo} alt="Sovetum Logo" className="mx-[101px] h-[91px]"/>
                <div className="text-[#fff] font-bold  text-[27.39px] mt-[4px] font-[Baloo 2]">советум</div>
            </div>


            <div className='absolute top-[0] left-[0] z-[-1] w-full h-full'>
                <img src={welcomeBg} alt=""/>
            </div>


            <div className="rounded-tl-[32px]
             rounded-tr-[32px] bg-[#150628] relative z-[2] flex flex-col items-center mt-auto px-[16px] py-[32px]">
                <h1 className="font-medium text-[32px] text-center leading-[100%] text-[#fff] ">Ваш персональный
                    совет экспертов</h1>
                <p className=" font-[Inter] max-w-[302px] max font-normal text-[13px] mb-[32px] leading-[1.4] mt-[20px] text-center text-[#FFFFFF9C] ">
                    Неустойчивость, как известно, быстро разивается, если химическое соединение сжимает
                    квантово-механический
                </p>

                <WhiteLink className={'text-[16px] w-full'} hrefTo={'/onboarding/interest'}>
                    Начать
                    <img src={arrowRight} alt="arrow" className="w-[16px] h-[16px]" />
                </WhiteLink>

                <div className='absolute w-full bottom-[0] left-[0] z-[-1]  '>
                    <img className='w-full' src={welcomeDecor} alt="image"/>
                </div>

            </div>


        </div>


    </>

}


export default OnboardingWelcomeScreen;