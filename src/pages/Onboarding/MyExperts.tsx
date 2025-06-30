import PageHeading from "@/components/shared/PageHeading";
import {FC, useState} from "react";

import {Link} from "react-router-dom";
import pageDecor from "@pages/Onboarding/img/pageDecor.png";


import BorderButton from "@components/ui/BorderButton.tsx";
import BlueGradientButton from "@components/ui/BlueGradientButton.tsx";
import {SegmentedSwitch} from "@components/shared/SegmentedSwitch.tsx";
import * as Slider from "@radix-ui/react-slider";
import SmallText from "@components/shared/SmallText.tsx";
import { motion } from "framer-motion";
import DefaultExpertsBlock from "@/components/shared/DefaultExpertsBlock";
import PopUpShare from "@components/shared/PopUpShare.tsx";
import PopularExpertTemplates from "@components/shared/PopularExpertTemplates.tsx";
import {ScrollToTop} from "@components/shared/ScrollToTop.tsx";




const MyExperts: FC = () => {
    const [value, setValue] = useState<number[]>([2])
    const [modalShare, setModalShare] = useState<boolean>(false)

    const handleShareModal =()=>{
        setModalShare(!modalShare)
    }

    return <div
        className='relative z-[2] overflow-hidden pt-[24px] bg-[#FFFFFF]  '>
        <ScrollToTop />


        {/*Заголовок*/}
        <motion.div initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 ,delay:.6 }} className='flex items-center gap-[17px] mx-[16px]'>
            <Link className='flex' to={'/onboarding/settings'}>
                <i className='icon icon-arrow hover:bg-[#593983] transition duration-300 bg-[#9494A9] cursor-pointer text-[18px] rotate-[180deg]'></i>
            </Link>
            <div>
                <PageHeading classNameSubtitle={'mt-[12px]'} title="Мои эксперты" />
            </div>

        </motion.div>
        <motion.div initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 ,delay:.6 }}>
            <p className='mx-[16px] mt-[16px] font-[Inter] font-normal text-[14px] leading-[140%] text-[#1E112E]'>Управление вашими AI-консультантами</p>

        </motion.div>



        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }} className='mt-[35px] px-[16px]'>
            <SegmentedSwitch
                options={["Все", "Активные", "Архивные"]}
                onChange={(val) => console.log("Выбрано:", val)}
            />

            <DefaultExpertsBlock onClick={handleShareModal} title="Предустановленные эксперты" />

        </motion.div>



        <div className='mt-[12px] px-[16px]'>

            <DefaultExpertsBlock onClick={handleShareModal} title="Пользовательские эксперты" />

        </div>


        <div className='mt-[12px] px-[16px]'>

            <PopularExpertTemplates/>
        </div>






        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }} className='rounded-tl-[16px] rounded-tr-[16px]   border border-[#F4F4F8]   mt-[24px] px-[16px]  pt-[16px] pb-[20px] bg-[#FFFFFF] '>

            <div className='border border-b-[#F4F4F8] pb-[18px] border-t-[transparent] border-l-[transparent] border-r-[transparent]'>
                <div className="flex justify-between items-center mb-[8px]">
                    <SmallText text={'Free'} className='opacity-[1] text-[14px] text-[#593983]'/>

                    <p className=" text-[14px] leading-[100%] font-normal font-[Inter] ">
                        <span className='text-[#1E112E]'>2</span>
                        <span className='text-[#D9D9E2]'>/3</span>
                    </p>

                </div>
                <Slider.Root
                    className="relative flex items-center select-none touch-none w-full h-[12px]"
                    value={value}
                    onValueChange={(val) => setValue(val)}
                    max={3}
                    min={1}
                    step={1}
                >
                    <Slider.Track className="bg-[#F2EDF8] relative grow rounded-full h-[6px]">
                        <Slider.Range className="absolute bg-[#A281CD] rounded-full h-full"/>
                    </Slider.Track>

                </Slider.Root>
            </div>

            <div className='flex buttons-column gap-[10px] mt-[18px]'>
                <BorderButton
                    href={'/'}
                    as="button"
                    className=' text-[#1E112E] h-[44px]'
                >
                    Из сообщества

                </BorderButton>
                <BlueGradientButton href={'/onboarding/createExpertStep4'}>
                    Создать эксперта
                </BlueGradientButton>
            </div>


        </motion.div>

        <div className='absolute w-full left-[0] top-[0] z-[-1]'>
            <img className='w-full' src={pageDecor} alt=""/>
        </div>

        <PopUpShare onClose={handleShareModal} open={modalShare}/>

    </div>
};

export default MyExperts;