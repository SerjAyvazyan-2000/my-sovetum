import PageHeading from "@/components/shared/PageHeading";
import {FC, useState} from "react";
import BigText from "@components/shared/BigText.tsx";
import FloatingInput from "@/components/ui/FloatingInput";
import {Link} from "react-router-dom";
import BlueGradientButton from "@/components/ui/BlueGradientButton";
import NewMeetingSteps from "@components/shared/NewMeetingSteps.tsx";
import {Range} from "@components/shared/Range.tsx";
import pageDecor from "@pages/Onboarding/img/pageDecor.png";
import {ScrollToTop} from "@components/shared/ScrollToTop.tsx";
import { motion } from "framer-motion";

const NewMeeting: FC = () => {
    const [name, setName] = useState('')


    return <div
        className='min-h-[725px] flex flex-col z-[2]  relative overflow-hidden  pt-[24px]  '>
        <ScrollToTop />

        <NewMeetingSteps/>


        {/*Заголовок*/}
        <motion.div initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 ,delay:.6 }} className='flex items-center gap-[17px] mx-[16px]'>
            <Link className='flex' to={'/onboarding/expertMeetings'}>
                <i className='icon icon-arrow bg-[#9494A9] hover:bg-[#593983] transition duration-300 cursor-pointer text-[18px] rotate-[180deg]'></i>

            </Link>
            <PageHeading classNameSubtitle={'mt-[12px]'}
                         title="Новое совещание"/>
        </motion.div>

        {/*Загрузить аватар*/}

        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9 }} className='flex mx-[16px] gap-[16px] border border-[#F4F4F8]  flex-col mt-[36px]  py-[14px] pl-[16px] bg-[#FFFFFF] rounded-[20px]'>
            <BigText title={'Тема совещания'}/>

            <FloatingInput
                label="О чем будет совещание?"
                classNamPlaceholder={'text-[#9494A9]'}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <div className='custom-scroll  mt-[5px]    overflow-x-auto overflow-y-hidden   '>
                <div className='min-w-max w-fit gap-[4px]  flex items-center '>
                    <button
                        className='p-[12px] hover:bg-[#593983] hover:text-[white] transition duration-300 cursor-pointer bg-[#F8F3FE] text-[14px] font-normal text-[#593983] font-[Inter] rounded-[16px]'>
                        Стратегия развития бизнеса

                    </button>
                    <button
                        className='p-[12px] hover:bg-[#593983] hover:text-[white] transition duration-300 cursor-pointer bg-[#F8F3FE] text-[14px] font-normal text-[#593983] font-[Inter] rounded-[16px]'>
                        Планирование карьерного перехода

                    </button>

                    <button
                        className='p-[12px] hover:bg-[#593983] hover:text-[white] transition duration-300 cursor-pointer bg-[#F8F3FE] text-[14px] font-normal text-[#593983] font-[Inter] rounded-[16px]'>
                        Стратегия развития бизнеса

                    </button>

                </div>


            </div>

        </motion.div>


        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9 }} className='flex mx-[16px] gap-[16px] border border-[#F4F4F8]  flex-col mt-[12px]  py-[14px] px-[16px] bg-[#FFFFFF] rounded-[20px]'>
            <BigText title={'Основной вопрос'}/>

            <div className='relative z-[2]'>
                <textarea className='w-full px-[16px] py-[10px] h-[133px] resize-none text-[16px] focus:border-[#7D5DA7]
                text-[#9494A9] font-[Inter]
                font-normal bg-white border border-[#F4F4F8] rounded-[20px] outline-none
                 placeholder:leading-[100%]
                 ' placeholder='Детально опишите вопрос или ситуацию для обсуждения...'>

                </textarea>
                <p className='flex items-center gap-[4px] absolute right-[16px] bottom-[20px]'>
                    <i className='icon icon-A text-[12px] bg-[#D9D9E2]'></i>
                    <span className='text-[12px] text-[#9494A9] font-normal font-[Inter] leading-[100%]'>0</span>
                </p>
            </div>

        </motion.div>


        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9 }} className=' mx-[16px] mb-[24px]  border border-[#F4F4F8]   mt-[12px]  py-[14px] px-[16px] bg-[#FFFFFF] rounded-[20px]'>
            <BigText title={'Тип совещания'}/>


            <div className='mt-[14px] flex flex-col gap-[12px]'>
                <Range text={'Брейншторм (генерация идей)'}/>
                <Range text={'Консилиум решений (принятие решения)'}/>
                <Range text={'Стратегическая сессия (планирование)'}/>
                <Range text={'Экспертная оценка (анализ ситуации)'}/>

            </div>


        </motion.div>


        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9 }} className='flex  rounded-tl-[16px] rounded-tr-[16px]   w-full  gap-[14px] border border-[#F4F4F8]  flex-col mt-auto px-[16px]  pt-[16px] pb-[20px] bg-[#FFFFFF] '>
            <BlueGradientButton href={'/onboarding/newMeetingStep2'}>
                Выбрать экспертов
            </BlueGradientButton>

        </motion.div>

        <div className='absolute w-full left-[0] top-[0] z-[-1]'>
            <img className='w-full' src={pageDecor} alt=""/>
        </div>
    </div>
};

export default NewMeeting;