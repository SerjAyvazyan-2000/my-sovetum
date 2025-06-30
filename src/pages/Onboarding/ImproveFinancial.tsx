import PageHeading from "@/components/shared/PageHeading";
import {FC, useState} from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import pageDecor3 from "@pages/Onboarding/img/pageDecor3.png";
import BigText from "@components/shared/BigText.tsx";
import meetingDecor from "@pages/Onboarding/img/icons/meetingDecor.svg";
import avatars3 from "@pages/Onboarding/img/avatars3.png";
import BorderButton from "@components/ui/BorderButton.tsx";
import {SegmentedSwitch} from "@components/shared/SegmentedSwitch.tsx";
import BlueGradientButton from "@components/ui/BlueGradientButton.tsx";
import {ScrollToTop} from "@components/shared/ScrollToTop.tsx";
import PopUpMenu from "@components/shared/PopUpMenu.tsx";
import {motion} from "framer-motion";


const ImproveFinancial: FC = () => {
    const options = ["Обсуждение", "Повестка", "Материалы", "Выводы"]

    const [modalMenu, setModalMenu] = useState<boolean>(false)

    const handleMenuModal = () => {
        setModalMenu(!modalMenu)
    }


    return <div className='relative z-[2] overflow-hidden  pt-[24px] bg-[#FFFFFF]  '>
        <ScrollToTop/>


        {/*Заголовок*/}
        <motion.div initial={{opacity: 0, y: -30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: .6}} className='flex items-center gap-[17px] mx-[16px]'>
            <div>
                <PageHeading title="Улучшить финансовое планирование"/>
            </div>


            <div className=' ml-auto '>
                <i onClick={handleMenuModal}
                   className='icon cursor-pointer icon-setting text-[15px] transition-all duration-300 bg-[#9494A9] hover:bg-[#593983]'></i>
            </div>

        </motion.div>


        <motion.div initial={{opacity: 0, y: -30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: .6}}
                    className='mx-[16px] flex items-center mt-[16px] justify-between '>
            <div className='flex  items-center gap-[8px]'>
                <i className='icon icon-time_fill text-[16px] bg-[#D9D9E2]'></i>
                <p className='font-normal font-[Inter] text-[14px] leading-[140%]  text-[#1E112E] opacity-[.6]'>Идет 23
                    минуты</p>
            </div>

            <div className='flex'>
                <img className='max-w-[92px]' src={avatars3} alt=""/>
            </div>
        </motion.div>


        <div className='flex flex-col gap-[12px] mt-[16px]'>


            <motion.div initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, amount: 0.2}}
                        transition={{duration: 0.9}}
                className='flex mx-[16px]  border border-[#F4F4F8]  flex-col pb-[16px] pt-[16px]  pl-[16px] bg-[#FFFFFF] rounded-[20px]'>

                <div className='custom-scroll overflow-auto pb-[8px] mb-[20px]'>
                    <SegmentedSwitch options={options}/>
                </div>

                <div className='pr-[16px] '>
                    <BigText title={'Улучшить финансовое планирование'}/>

                    <div className='flex mt-[12px] items-center gap-[8px]'>
                        <img src={meetingDecor} alt=""/>
                        <p className='font-normal font-[Inter] text-[12px] leading-[140%]  text-[#1E112E] opacity-[.6]'>Идет
                            обсуждение, начато 1 час назад</p>
                    </div>

                    <div className=' mt-[20px] flex gap-[12px] items-center'>

                        <img className='max-w-[92px]' src={avatars3} alt=""/>
                        <p className='font-normal font-[Inter] text-[14px] leading-[140%]  text-[#1E112E] '>3 из 5
                            экспертов ответили</p>

                    </div>

                    <BorderButton href={'/onboarding/meeting'} as={"a"} className='h-[44px] mt-[20px]'>
                        Присоединиться
                    </BorderButton>
                </div>

            </motion.div>

            <motion.div initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, amount: 0.2}}
                        transition={{duration: 0.9}}
                className='flex mx-[16px]  border border-[#F4F4F8]  flex-col pb-[16px] pt-[16px]   pl-[16px] bg-[#FFFFFF] rounded-[20px]'>

                <div className='pr-[16px] '>
                    <BigText title={'Улучшить финансовое планирование'}/>

                    <div className='flex mt-[12px] items-center gap-[8px]'>
                        <img src={meetingDecor} alt=""/>
                        <p className='font-normal font-[Inter] text-[12px] leading-[140%]  text-[#1E112E] opacity-[.6]'>Идет
                            обсуждение, начато 1 час назад</p>
                    </div>

                    <div className=' mt-[20px] flex gap-[12px] items-center'>

                        <img className='max-w-[92px]' src={avatars3} alt=""/>
                        <p className='font-normal font-[Inter] text-[14px] leading-[140%]  text-[#1E112E] '>3 из 5
                            экспертов ответили</p>

                    </div>

                    <BorderButton href={'/onboarding/meeting'} className='h-[44px] mt-[20px]'>
                        Присоединиться
                    </BorderButton>
                </div>

            </motion.div>


            <motion.div initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, amount: 0.2}}
                        transition={{duration: 0.9}}>
                <h2 className='mx-[16px] text-[#1E112E] text-[24px] font-normal mt-[14px]'>Ожидают начала</h2>

                <div className='flex mt-[16px] flex-col gap-[12px] '>

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

            <motion.div initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, amount: 0.2}}
                        transition={{duration: 0.9}}>
                <h2 className='mx-[16px] text-[#1E112E] text-[24px] font-normal mt-[14px]'>Недавние совещания</h2>


                <div className='flex mt-[16px] flex-col gap-[12px] '>

                    <div
                        className='flex mx-[16px]  border border-[#F4F4F8]  flex-col    p-[16px] bg-[#FFFFFF] rounded-[20px]'>
                        <div className='flex items-center gap-[10px] justify-between'>
                            <BigText title={'Улучшить финансовое планирование'} className='max-w-[274px]'/>

                            <div className='flex items-center gap-[5px] bg-[#FFF8E2] py-[3px] px-[7px] rounded-[16px]'>
                                <i className='icon icon-star text-[11px] bg-[#FFD650]'></i>
                                <p className='font-normal font-[Inter] text-[12px] leading-[140%] text-[#1E112E]'>5.0</p>
                            </div>
                        </div>

                        <p className='font-normal mt-[16px] font-[Inter] text-[12px] leading-[140%]  text-[#1E112E] opacity-[.6]'>Сверхновая,
                            даже при наличии сильных аттракторов, отталкивает экситон. Струя, если рассматривать </p>

                        <BorderButton href={'/onboarding/resultsMeeting'} as={'a'} className='h-[44px] mt-[20px]'>
                            Посмотреть результаты
                        </BorderButton>


                    </div>

                    <div
                        className='flex mx-[16px]  border border-[#F4F4F8]  flex-col    p-[16px] bg-[#FFFFFF] rounded-[20px]'>
                        <div className='flex items-center gap-[10px] justify-between'>
                            <BigText title={'Улучшить финансовое планирование'} className='max-w-[274px]'/>

                            <div className='flex items-center gap-[5px] bg-[#FFF8E2] py-[3px] px-[7px] rounded-[16px]'>
                                <i className='icon icon-star text-[11px] bg-[#FFD650]'></i>
                                <p className='font-normal font-[Inter] text-[12px] leading-[140%] text-[#1E112E]'>5.0</p>
                            </div>
                        </div>

                        <p className='font-normal mt-[16px] font-[Inter] text-[12px] leading-[140%]  text-[#1E112E] opacity-[.6]'>Сверхновая,
                            даже при наличии сильных аттракторов, отталкивает экситон. Струя, если рассматривать </p>

                        <BorderButton href={'/onboarding/resultsMeeting'} as={'a'} className='h-[44px] mt-[20px]'>
                            Посмотреть результаты
                        </BorderButton>


                    </div>
                </div>
            </motion.div>



            <motion.div initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, amount: 0.2}}
                        transition={{duration: 0.9}} className='flex flex-col  rounded-tl-[16px] rounded-tr-[16px]    gap-[10px] border border-[#F4F4F8]   mt-[24px] px-[16px]  pt-[16px] pb-[20px] bg-[#FFFFFF] '>

                <BlueGradientButton
                    href={'/onboarding/meeting'}
                    className='h-[44px] flex group gap-[10px]'
                >

                    <i className='icon icon-plus group-hover:bg-[#593983]  transition-all duration-300 text-[15px] bg-[#FFFFFF]'></i>
                    <span>Собрать экспертов</span>

                </BlueGradientButton>


            </motion.div>

        </div>


        <div className='absolute w-full left-[0] top-[0] z-[-1]'>
            <img className='w-full' src={pageDecor3} alt=""/>
        </div>

        <PopUpMenu onClose={handleMenuModal} open={modalMenu}/>

    </div>;
};

export default ImproveFinancial;