import PageHeading from "@/components/shared/PageHeading";
import {FC, useState} from "react";

import {Link} from "react-router-dom";
import CreateExpertSteps from "@/components/shared/CreateExpertSteps";
import avatar2 from "@pages/Onboarding/img/avatar2.png";
import BigText from "@components/shared/BigText.tsx";
import BorderButton from "@components/ui/BorderButton.tsx";
import BlueGradientButton from "@components/ui/BlueGradientButton.tsx";
import FloatingInput from "@components/ui/FloatingInput.tsx";
import SendButton from "@components/ui/SendButton.tsx";
import { motion } from "framer-motion";
import {ScrollToTop} from "@components/shared/ScrollToTop.tsx";


const CreateExpertStep4: FC = () => {
const [sms, setSms] = useState('')
    return <div
        className='min-h-[725px]   relative overflow-hidden bg-[linear-gradient(180deg,_rgba(89,57,131,0)_20%,_rgba(89,57,131,0.44)_200.84%)] pt-[24px]  '>
        <ScrollToTop />


        <CreateExpertSteps/>


        {/*Заголовок*/}
        <motion.div initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 ,delay:.6 }} className='flex items-center gap-[17px] mx-[16px]'>
            <Link className='flex' to={'/onboarding/createExpertStep3'}>
                <i className='icon icon-arrow hover:bg-[#593983] transition duration-300 bg-[#9494A9] cursor-pointer text-[18px] rotate-[180deg]'></i>

            </Link>
            <PageHeading classNameSubtitle={'mt-[12px]'}
                         title="Финализация"/>


        </motion.div>


        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }} className='mt-[35px] px-[16px]'>
            <div className=' border border-[#F4F4F8]  mt-[16px] p-[16px] bg-[#FFFFFF] rounded-[20px]'>
                <div className='border border-b-[#F4F4F8] pb-[24px] border-t-[transparent] border-l-[transparent] border-r-[transparent]'>
                    <div className='  pb-[14px]  flex items-center gap-[12px]'>
                        <div className='flex'>
                            <img className='w-[40px] min-w-[40px] h-[40px]' src={avatar2} alt=""/>
                        </div>
                        <div className='w-full'>
                            <div className='flex w-full items-center gap-[10px] justify-between'>
                                <BigText title='Анна Маркетолог'/>

                            </div>

                            <div className='flex w-full mt-[4px] items-center gap-[10px] justify-between'>
                                <p className='font-normal font-[Inter] text-[14px] leading-[100%]  text-[#9494A9]'>Специалист
                                    по SMM</p>
                            </div>

                        </div>

                    </div>
                    <p className='font-normal font-[Inter] text-[14px] leading-[100%]  text-[#9494A9]'>
                        Поможет с продвижением в социальных сетях
                    </p>
                </div>

                <div className='mt-[24px]'>
                    <div className='flex items-center gap-[8px]'>
                        <i className='icon icon-target_fill   transition-all duration-300 text-[15px] bg-[#593983]'></i>
                        <BigText title={'Наставник'}/>
                    </div>

                    <div className='border flex flex-col gap-[12px] mt-[14px] border-b-[#F4F4F8] pb-[24px] border-t-[transparent] border-l-[transparent] border-r-[transparent]'>
                        <div className='flex items-center justify-between gap-[10px]'>
                            <p className='font-normal font-[Inter] text-[14px] leading-[100%]  text-[#1E112E]'>Формальность общения</p>
                            <p className=" text-[14px] leading-[100%] font-semibold font-[Inter] ">
                                <span className='text-[#1E112E]'>1</span><span className='text-[#D9D9E2] font-normal'>/10</span>
                            </p>
                        </div>
                        <div className='flex items-center justify-between gap-[10px]'>
                            <p className='font-normal font-[Inter] text-[14px] leading-[100%]  text-[#1E112E]'>Детальность ответов</p>
                            <p className=" text-[14px] leading-[100%] font-semibold font-[Inter] ">
                                <span className='text-[#1E112E]'>9</span><span className='text-[#D9D9E2] font-normal'>/10</span>
                            </p>
                        </div>

                        <div className='flex items-center justify-between gap-[10px]'>
                            <p className='font-normal font-[Inter] text-[14px] leading-[100%]  text-[#1E112E]'>Эмоциональность</p>
                            <p className=" text-[14px] leading-[100%] font-semibold font-[Inter] ">
                                <span className='text-[#1E112E]'>1</span><span className='text-[#D9D9E2] font-normal'>/10</span>
                            </p>
                        </div>

                        <div className='flex items-center justify-between gap-[10px]'>
                            <p className='font-normal font-[Inter] text-[14px] leading-[100%]  text-[#1E112E]'>Частота примеров</p>
                            <p className=" text-[14px] leading-[100%] font-semibold font-[Inter] ">
                                <span className='text-[#1E112E]'>1</span><span className='text-[#D9D9E2] font-normal'>/10</span>
                            </p>
                        </div>

                    </div>

                    <div className='flex buttons-column  mt-[24px]    gap-[8px] w-full'>
                        <BorderButton
                            href={'/'}
                            as="button"
                            className=' text-[#1E112E] h-[44px]'

                        >
                            <i className='icon icon-file_fill text-[16px] opacity-[.9]  bg-[#593983]'></i>
                            5 файлов
                        </BorderButton>

                        <BorderButton
                            href={'/'}
                            as="button"
                            className=' text-[#1E112E] h-[44px]'

                        >
                            <i className='icon   icon-earth_2_fill opacity-[.9] text-[16px] bg-[#593983]'></i>
                            10 Ссылок

                        </BorderButton>


                    </div>


                </div>

            </div>
        </motion.div>


        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }} className=' rounded-[20px] mx-[16px] mt-[16px] p-[16px] bg-[#FFFFFF]'>
            <BigText title={'Дополнительные настройки'}/>

            <div className='mt-[14px] flex flex-col gap-[14px]'>
                <div>
                    <p className='font-[Inter] text-[12px] font-normal leading-[100%]'>Время работы</p>
                    <div className='flex rounded-[64px] mt-[8px] items-center  bg-[#E1D7EF]'>
                        <button className={`py-[10px] px-[10px] sm:py-[7.5px] sm:px-[24px]  flex-1/2 cursor-pointer  rounded-[64px] text-[#593983] font-[Inter] font-normal text-[14px] leading-[100%] border border-[transparent]    hover:bg-[#FFFFFF]  hover:border-[#A281CD52] transition-all duration-300`}>Только я</button>
                        <button className='py-[10px] px-[10px] sm:py-[7.5px] sm:px-[24px]  flex-1/2 cursor-pointer  rounded-[64px] text-[#593983] font-[Inter] font-normal text-[14px] leading-[100%] border border-[transparent] hover:bg-[#FFFFFF] hover:border-[#A281CD52] transition-all duration-300'>Семья</button>
                        <button className='py-[10px] px-[10px] sm:py-[7.5px] sm:px-[24px]  flex-1/2 cursor-pointer  rounded-[64px] text-[#593983] font-[Inter] font-normal text-[14px] leading-[100%] border border-[transparent] hover:bg-[#FFFFFF] hover:border-[#A281CD52] transition-all duration-300'>Публичный</button>
                    </div>
                </div>

                <div>
                    <p className='font-[Inter] text-[12px] font-normal leading-[100%]'>Время работы</p>
                    <div className='flex rounded-[64px] mt-[8px] items-center  bg-[#E1D7EF]'>
                        <button className={`py-[10px] px-[10px] sm:py-[7.5px] sm:px-[24px]  flex-1/2 cursor-pointer   rounded-[64px] text-[#593983] font-[Inter] font-normal text-[14px] leading-[100%] border border-[transparent]    hover:bg-[#FFFFFF]  hover:border-[#A281CD52] transition-all duration-300`}>Вкл</button>
                        <button className='py-[10px] px-[10px] sm:py-[7.5px] sm:px-[24px]  flex-1/2 cursor-pointer  rounded-[64px] text-[#593983] font-[Inter] font-normal text-[14px] leading-[100%] border border-[transparent] hover:bg-[#FFFFFF] hover:border-[#A281CD52] transition-all duration-300'>Выкл</button>
                    </div>
                </div>

                <div>
                    <p className='font-[Inter] text-[12px] font-normal leading-[100%]'>Время работы</p>
                    <div className='flex rounded-[64px] mt-[8px] items-center  bg-[#E1D7EF]'>
                        <button className={`py-[10px] px-[10px] sm:py-[7.5px] sm:px-[24px]   flex-1/2 cursor-pointer   rounded-[64px] text-[#593983] font-[Inter] font-normal text-[14px] leading-[100%] border border-[transparent]    hover:bg-[#FFFFFF]  hover:border-[#A281CD52] transition-all duration-300`}>24/7</button>
                        <button className='py-[10px] px-[10px] sm:py-[7.5px] sm:px-[24px]   flex-1/2 cursor-pointer  rounded-[64px] text-[#593983] font-[Inter] font-normal text-[14px] leading-[100%] border border-[transparent] hover:bg-[#FFFFFF] hover:border-[#A281CD52] transition-all duration-300'>Рабочие часы</button>
                    </div>
                </div>
            </div>



        </motion.div>


        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9 }} className=' rounded-[20px] mx-[16px] mt-[16px]  bg-[#FFFFFF]'>
            <div className='px-[16px] pt-[16px]'>
                <BigText title={'Тестовый диалог'}/>
            </div>



            <div className='max-h-[120px] p-[16px] no-scrollbar overflow-auto '>
                <div className='flex gap-[8px] items-end '>
                    <img className='w-[26px] h-[26px] rounded-full' src={avatar2} alt=""/>
                    <p className='px-[12px] py-[8px] leading-[100%] rounded-bl-[8px] rounded-tl-[12px] rounded-br-[12px] border border-[#F4F4F8] rounded-tr-[12px] text-[14px] font-normal font-[Inter]  text-[#1E112E]'>
                        Здравстуй. Хотел уточнить по поводу нашей встречи на следующей неделе
                    </p>
                </div>

                <div className='flex gap-[8px] mt-[8px] justify-end items-end'>
                    <p className='px-[12px] leading-[100%] py-[8px] rounded-bl-[12px] rounded-tl-[12px] rounded-br-[2px] rounded-tr-[12px] bg-[#F4ECFF] text-[14px] font-normal font-[Inter]  text-[#1E112E]'>
                        Привет! Как дела?
                    </p>
                </div>

            </div>

            <div className='bg-[#F5F5F8] p-[16px] rounded-bl-[20px] flex items-center gap-[8px] rounded-br-[20px]'>
                <FloatingInput value={sms} onChange={(e)=>setSms(e.target.value)} label={'Сообщение'} classNamPlaceholder='text-[gray]'/>


                <SendButton/>
            </div>

        </motion.div>





        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9 }} className='flex buttons-column  rounded-tl-[16px] rounded-tr-[16px]    gap-[10px] border border-[#F4F4F8]   mt-[24px] px-[16px]  pt-[16px] pb-[20px] bg-[#FFFFFF] '>

            <BorderButton
                href={'/onboarding/settings'}
                as="a"
                className=' text-[#1E112E] h-[44px]'
            >
                Изменить

            </BorderButton>
            <BlueGradientButton href={'/onboarding/createExpert'}>
                Создать эксперта
            </BlueGradientButton>

        </motion.div>


    </div>
};

export default CreateExpertStep4;