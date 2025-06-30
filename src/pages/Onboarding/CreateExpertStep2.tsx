import PageHeading from "@/components/shared/PageHeading";
import {FC} from "react";

import {Link} from "react-router-dom";

import BlueGradientButton from "@/components/ui/BlueGradientButton";
import CreateExpertSteps from "@/components/shared/CreateExpertSteps";
import BigText from "@components/shared/BigText.tsx";
import CustomSlider from "@/components/ui/CustomSlider";
import avatar from './img/avatar.png'
import avatar2 from './img/avatar2.png'
import { motion } from "framer-motion";
import ArchetypeSelector from "@components/shared/Archetypes.tsx";
import {ScrollToTop} from "@components/shared/ScrollToTop.tsx";


const CreateExpertStep2: FC = () => {


    return <div
        className='min-h-[725px]   relative overflow-hidden bg-[linear-gradient(180deg,_rgba(89,57,131,0)_20%,_rgba(89,57,131,0.44)_200.84%)] pt-[24px]  '>
        <ScrollToTop />


        <CreateExpertSteps/>


        {/*Заголовок*/}
        <motion.div initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 ,delay:.8 }} className='flex items-center gap-[17px] mx-[16px]'>
            <Link className='flex' to={'/onboarding/createExpertStep1'}>
                <i className='icon icon-arrow bg-[#9494A9] hover:bg-[#593983] transition duration-300 cursor-pointer text-[18px] rotate-[180deg]'></i>

            </Link>
            <PageHeading classNameSubtitle={'mt-[12px]'}
                         title="Личность эксперта"/>
        </motion.div>


        {/*Выбор архетипа*/}

        <ArchetypeSelector />



        {/*Настройка параметров*/}
        <motion.div   initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.8 }} className='flex mx-[16px]  border border-[#F4F4F8]  flex-col mt-[36px]  py-[14px] px-[16px] bg-[#FFFFFF] rounded-[20px]'>
            <BigText title={'Настройка параметров'}/>

            <div className='mt-[14px] flex flex-col gap-[14px]'>
                <CustomSlider startValue={1} title={'Формальность общения'}/>

                <CustomSlider startValue={9} title={'Детальность ответов'}/>

                <CustomSlider startValue={1} title={'Эмоциональность'}/>

                <CustomSlider startValue={1} title={'Частота примеров'}/>

            </div>


        </motion.div>




        <motion.div initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.2 }}
             transition={{ duration: 0.8 }} className='flex  rounded-tl-[16px] rounded-tr-[16px]    gap-[14px] border border-[#F4F4F8]  flex-col mt-[24px] px-[16px]  pt-[16px] pb-[20px] bg-[#FFFFFF] '>
            <div className='flex gap-[8px] border border-[#F4F4F8]  flex-col  pt-[8px] pb-[12px] px-[16px] bg-[#FFFFFF] rounded-[20px]'>
                <div className='flex gap-[8px] items-end'>
                    <img className='w-[26px] h-[26px] rounded-full' src={avatar} alt=""/>
                    <p className='px-[12px] leading-[100%] py-[8px] rounded-bl-[8px] rounded-tl-[12px] rounded-br-[12px] rounded-tr-[12px] bg-[#F4ECFF] text-[14px] font-normal font-[Inter]  text-[#1E112E]'>
                        Привет! Как дела?
                    </p>
                </div>

                <div className='flex gap-[8px] items-end '>
                    <img className='w-[26px] h-[26px] rounded-full' src={avatar2} alt=""/>
                    <p className='px-[12px] py-[8px] leading-[100%] rounded-bl-[8px] rounded-tl-[12px] rounded-br-[12px] border border-[#F4F4F8] rounded-tr-[12px] text-[14px] font-normal font-[Inter]  text-[#1E112E]'>
                        Здравстуй. Хотел уточнить по поводу нашей встречи на следующей неделе
                    </p>
                </div>


            </div>

            <BlueGradientButton href={'/onboarding/createExpertStep3'}>
                Продолжить
            </BlueGradientButton>

        </motion.div>


    </div>
};

export default CreateExpertStep2;