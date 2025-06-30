import PageHeading from "@/components/shared/PageHeading";
import {FC} from "react";

import pageDecor from "@pages/Onboarding/img/pageDecor.png";
import BigText from "@components/shared/BigText.tsx";
import avatars3 from "@pages/Onboarding/img/avatars3.png";
import BorderButton from "@components/ui/BorderButton.tsx";
import BlueGradientButton from "@components/ui/BlueGradientButton.tsx";
import {ScrollToTop} from "@components/shared/ScrollToTop.tsx";
import {motion} from "framer-motion";
import CurrentDiscussions from "@components/shared/CurrentDiscussions.tsx";
import RecentMeetings from "@/components/shared/RecentMeetings";


const ExpertMeetings: FC = () => {
    return <div
        className='min-h-[725px] bg-[white]  relative z-[2] overflow-hidden  pt-[24px] '>
        <ScrollToTop/>

        {/*Заголовок*/}
        <motion.div initial={{opacity: 0, y: -30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: .6}} className='px-[16px]'>
            <PageHeading classNameSubtitle={'mt-[12px]'} reverse={true}
                         subtitle="Получите мнения нескольких экспертов по одному вопросу"
                         title="Совещания экспертов"/>
        </motion.div>


        <CurrentDiscussions/>


        <motion.div initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.2}}
                    transition={{duration: 0.6}}>


            <h2 className='mx-[16px] text-[#1E112E] text-[24px] font-normal mt-[28px]'>Ожидают начала</h2>

            <div className='flex flex-col gap-[12px] mt-[16px]'>

                <div
                    className='flex mx-[16px]  border border-[#F4F4F8]  flex-col    p-[16px] bg-[#FFFFFF] rounded-[20px]'>
                    <BigText title={'Улучшить финансовое планирование'}/>

                    <div className='flex mt-[12px] items-center gap-[8px]'>
                        <i className='icon icon-time_fill text-[16px]  bg-[#593983]'></i>
                        <p className='font-normal font-[Inter] text-[12px] leading-[140%]  text-[#1E112E] opacity-[.6]'>Время
                            начала: 12.05.25 15:30</p>
                    </div>
                    <div className=' mt-[20px] flex gap-[12px] items-center'>
                        <img className='max-w-[92px]' src={avatars3} alt=""/>

                    </div>
                    <BorderButton href={'/'} className='h-[44px] mt-[20px]'>
                        Начать досрочно
                    </BorderButton>

                </div>


            </div>

        </motion.div>



        <RecentMeetings />




        <motion.div initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.2}}
                    transition={{duration: 0.6}}
            className='flex flex-col  rounded-tl-[16px] rounded-tr-[16px]    gap-[10px] border border-[#F4F4F8]   mt-[24px] px-[16px]  pt-[16px] pb-[20px] bg-[#FFFFFF] '>

            <BlueGradientButton
                href={'/onboarding/newMeeting'}
                className='h-[44px] flex gap-[10px] group'
            >

                <i className='icon icon-plus  group-hover:bg-[#593983]  transition-all duration-300 text-[15px] bg-[#FFFFFF]'></i>
                <span>Собрать экспертов</span>

            </BlueGradientButton>


        </motion.div>


        <div className='absolute w-full left-[0] top-[0] z-[-1]'>
            <img className='w-full' src={pageDecor} alt=""/>
        </div>
    </div>
};

export default ExpertMeetings;