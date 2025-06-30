import PageHeading from "@/components/shared/PageHeading";
import {FC, useState} from "react";

import pageDecor from "@pages/Onboarding/img/pageDecor.png";

import avatars3 from "@pages/Onboarding/img/avatars3.png";
import BlueGradientButton from "@components/ui/BlueGradientButton.tsx";
import BigText from "@components/shared/BigText.tsx";
import avatar2 from "@pages/Onboarding/img/avatar2.png";
import chart2 from "@pages/Onboarding/img/chart2.png";
import {Checkbox} from "@components/shared/Checkbox.tsx";
import FloatingTextarea from "@components/ui/FloatingTextarea.tsx";
import PopUpError from "@components/shared/PopUpError.tsx";
import PopUpSuccess from "@/components/shared/PopUpSuccess";
import {ScrollToTop} from "@components/shared/ScrollToTop.tsx";
import { motion } from "framer-motion";
import PopUpShare from "@components/shared/PopUpShare.tsx";


const ResultsMeeting: FC = () => {

    const [comments, setComments] = useState('')
    const [modalError, setModalError] = useState<boolean>(false)
    const [modalSuccess, setModalSuccess] = useState<boolean>(false)
    const [modalShare, setModalShare] = useState<boolean>(false)

    const handleErrorModal =()=>{
        setModalError(!modalError)
    }

    const handleSuccessModal =()=>{
        setModalSuccess(!modalSuccess)
    }


    const handleShareModal =()=>{
        setModalShare(!modalShare)
    }



    return <div
        className='min-h-[725px] bg-[white] flex flex-col  relative z-[2] overflow-hidden  pt-[24px] '>
        <ScrollToTop />

        {/*Заголовок*/}
        <motion.div initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 ,delay:.6 }} className='px-[16px]'>
            <PageHeading classNameSubtitle={'mt-[12px]'} reverse={true}
                         subtitle="Протокол и рекомендации"
                         title="Результаты совещания"/>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9 }} className='flex mx-[16px] mt-[36px]  border border-[#F4F4F8]  flex-col p-[16px]  bg-[#FFFFFF] rounded-[20px]'>

            <h3 className='font-medium text-[20px] leading-[100%] text-[#000000]'>Улучшить финансовое планирование</h3>


            <div className='flex items-center flex-wrap mt-[12px] gap-[21px]'>
                <div className='flex items-center gap-[8px]'>
                    <i className='icon icon-time_fill text-[16px] bg-[#D9D9E2]'></i>
                    <p className='font-normal font-[Inter] text-[12px] leading-[140%]  text-[#1E112E] opacity-[.6]'>27.04.25</p>
                    <p className='font-normal font-[Inter] text-[14px] leading-[140%]  text-[#1E112E] opacity-[.6]'>1
                        час 15 минут</p>
                </div>

                <div className='flex items-center gap-[8px]'>
                    <i className='icon icon-chat text-[16px] bg-[#D9D9E2]'></i>
                    <p className='font-normal font-[Inter] text-[14px] leading-[140%]  text-[#1E112E] opacity-[.6]'>47
                        сообщений</p>
                </div>


            </div>

            <div className=' mt-[20px] flex gap-[12px] items-center'>
                <img className='max-w-[92px]' src={avatars3} alt=""/>
            </div>


        </motion.div>


        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9 }} className='mt-[12px] px-[16px] '>
            <div className='border border-[#F4F4F8]   p-[16px] bg-[#FFFFFF] rounded-[20px]'>

                <div className='flex items-center gap-[8px]'>
                    <i className='icon icon-bling_fill  transition-all duration-300 text-[19px] bg-[#593983]'></i>
                    <BigText title={'AI-генерированная сводка'}/>


                </div>


                <div className='mt-[18px] flex flex-col gap-[8px]'>
                    <div className='p-[14px] bg-[#F5F5F8] rounded-[12px] '>
                        <p className='font-normal  text-[14px] leading-[100%] text-[#1E112E]'>Основные темы
                            обсуждения</p>
                        <div className='flex items-center gap-[7px] pl-[5px] mt-[7px]'>
                            <span className="block w-[3px] h-[3px] bg-[#9494A9] rounded-full"></span>
                            <p className='font-normal  text-[12px] leading-[140%] text-[#9494A9]'>
                                Вы стали чаще обращаться к психологу
                            </p>
                        </div>

                        <div className='flex items-center gap-[7px] pl-[5px] mt-[7px]'>
                            <span className="block w-[3px] h-[3px] bg-[#9494A9] rounded-full"></span>
                            <p className='font-normal  text-[12px] leading-[140%] text-[#9494A9]'>
                                Вы стали чаще
                            </p>
                        </div>

                    </div>

                    <div className='p-[14px] bg-[#F5F5F8] rounded-[12px] '>
                        <p className='font-normal  text-[14px] leading-[100%] text-[#1E112E]'>Точки согласия между
                            экспертами</p>
                        <div className='flex items-center gap-[7px] pl-[5px] mt-[7px]'>
                            <span className="block w-[3px] h-[3px] bg-[#9494A9] rounded-full"></span>
                            <p className='font-normal  text-[12px] leading-[140%] text-[#9494A9]'>
                                Вы стали чаще обращаться к психологу
                            </p>
                        </div>
                        <div className='flex items-center gap-[7px] pl-[5px] mt-[7px]'>
                            <span className="block w-[3px] h-[3px] bg-[#9494A9] rounded-full"></span>
                            <p className='font-normal  text-[12px] leading-[140%] text-[#9494A9]'>
                                Вы стали чаще
                            </p>
                        </div>
                    </div>


                    <div className='p-[14px] bg-[#F5F5F8] rounded-[12px] '>
                        <p className='font-normal  text-[14px] leading-[100%] text-[#1E112E]'>Спорные моменты</p>
                        <div className='flex items-center gap-[7px] pl-[5px] mt-[7px]'>
                            <span className="block w-[3px] h-[3px] bg-[#9494A9] rounded-full"></span>
                            <p className='font-normal  text-[12px] leading-[140%] text-[#9494A9]'>
                                Вы стали чаще обращаться к психологу
                            </p>
                        </div>
                        <div className='flex items-center gap-[7px] pl-[5px] mt-[7px]'>
                            <span className="block w-[3px] h-[3px] bg-[#9494A9] rounded-full"></span>
                            <p className='font-normal  text-[12px] leading-[140%] text-[#9494A9]'>
                                Вы стали чаще
                            </p>
                        </div>
                    </div>


                    <div className='p-[14px] bg-[#F5F5F8] rounded-[12px] '>
                        <p className='font-normal  text-[14px] leading-[100%] text-[#1E112E]'>Неожиданные инсайты</p>
                        <div className='flex items-center gap-[7px] pl-[5px] mt-[7px]'>
                            <span className="block w-[3px] h-[3px] bg-[#9494A9] rounded-full"></span>
                            <p className='font-normal  text-[12px] leading-[140%] text-[#9494A9]'>
                                Вы стали чаще обращаться к психологу
                            </p>
                        </div>
                        <div className='flex items-center gap-[7px] pl-[5px] mt-[7px]'>
                            <span className="block w-[3px] h-[3px] bg-[#9494A9] rounded-full"></span>
                            <p className='font-normal  text-[12px] leading-[140%] text-[#9494A9]'>
                                Вы стали чаще
                            </p>
                        </div>
                    </div>

                </div>


            </div>
        </motion.div>


        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9 }} className='mt-[12px] px-[16px] '>
            <div className='border border-[#F4F4F8]   p-[16px] bg-[#FFFFFF] rounded-[20px]'>

                <div className='flex items-center gap-[8px]'>
                    <i className='icon icon-message_2_fill  transition-all duration-300 text-[19px] bg-[#593983]'></i>
                    <BigText title={'Рекомендации'}/>


                </div>


                <div className='mt-[18px] flex flex-col gap-[8px]'>
                    <div className='p-[14px] bg-[#F5F5F8] rounded-[12px] '>
                        <div
                            className='border border-b-[#D9D9E2] pb-[18px] border-t-[transparent] border-l-[transparent] border-r-[transparent]'>
                            <p className='font-normal  text-[14px] leading-[100%] text-[#1E112E]'><span
                                className='font-semibold text-[#1E112E]'>1.</span> Немедленные шаги (на этой неделе)</p>
                            <p className='font-normal mt-[8px]  text-[12px] leading-[140%] text-[#9494A9]'>
                                Сверхновая, даже при наличии сильных аттракторов, отталкивает экситон.
                            </p>
                        </div>
                        <div className='mt-[16px] flex items-center gap-[10px] justify-between'>
                            <div className='flex items-center gap-[8px]'>
                                <div className='flex'>
                                    <img className='w-[24px] min-w-[24px] h-[24px]' src={avatar2} alt=""/>
                                </div>
                                <p className='font-mnormal text-[12px] leading-[140%] text-[#1E112E]'>Анна
                                    Маркетолог</p>
                            </div>

                            <div className='flex items-center gap-[7.5px]'>
                                <i className='icon icon-warning_fill text-[15px] bg-[#FF5757]'></i>
                                <p className='text-[#FF5757] font-[Inter] font-normal text-[12px]'>Высокий</p>
                            </div>


                        </div>
                    </div>


                    <div className='p-[14px] bg-[#F5F5F8] rounded-[12px] '>
                        <div
                            className='border border-b-[#D9D9E2] pb-[18px] border-t-[transparent] border-l-[transparent] border-r-[transparent]'>
                            <p className='font-normal  text-[14px] leading-[100%] text-[#1E112E]'><span
                                className='font-semibold text-[#1E112E]'>2.</span> Краткосрочные цели (1-3 месяца)</p>
                            <p className='font-normal mt-[8px]  text-[12px] leading-[140%] text-[#9494A9]'>
                                Сверхновая, даже при наличии сильных аттракторов, отталкивает экситон.
                            </p>
                        </div>
                        <div className='mt-[16px] flex items-center gap-[10px] justify-between'>
                            <div className='flex items-center gap-[8px]'>
                                <div className='flex'>
                                    <img className='w-[24px] min-w-[24px] h-[24px]' src={avatar2} alt=""/>
                                </div>
                                <p className='font-mnormal text-[12px] leading-[140%] text-[#1E112E]'>Анна
                                    Маркетолог</p>
                            </div>

                            <div className='flex items-center gap-[7.5px]'>
                                <i className='icon icon-warning_fill text-[15px] bg-[#FFBC02]'></i>
                                <p className='text-[#FFBC02] font-[Inter] font-normal text-[12px]'>Средний</p>
                            </div>


                        </div>
                    </div>


                    <div className='p-[14px] bg-[#F5F5F8] rounded-[12px] '>
                        <div
                            className='border border-b-[#D9D9E2] pb-[18px] border-t-[transparent] border-l-[transparent] border-r-[transparent]'>
                            <p className='font-normal  text-[14px] leading-[100%] text-[#1E112E]'><span
                                className='font-semibold text-[#1E112E]'>3.</span> Долгосрочная стратегия (6+ месяцев)
                            </p>
                            <p className='font-normal mt-[8px]  text-[12px] leading-[140%] text-[#9494A9]'>
                                Сверхновая, даже при наличии сильных аттракторов, отталкивает экситон.
                            </p>
                        </div>
                        <div className='mt-[16px] flex items-center gap-[10px] justify-between'>
                            <div className='flex items-center gap-[8px]'>
                                <div className='flex'>
                                    <img className='w-[24px] min-w-[24px] h-[24px]' src={avatar2} alt=""/>
                                </div>
                                <p className='font-mnormal text-[12px] leading-[140%] text-[#1E112E]'>Анна
                                    Маркетолог</p>
                            </div>

                            <div className='flex items-center gap-[7.5px]'>
                                <i className='icon icon-warning_fill text-[15px] bg-[#3BC966]'></i>
                                <p className='text-[#3BC966] font-[Inter] font-normal text-[12px]'>Средний</p>
                            </div>


                        </div>
                    </div>


                </div>


            </div>
        </motion.div>


        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9 }} className='mt-[12px] px-[16px]'>
            <div className='border border-[#F4F4F8]  p-[16px] bg-[#FFFFFF] rounded-[20px]'>

                <div
                    className='border border-b-[#D9D9E2] pb-[18px] border-t-[transparent] border-l-[transparent] border-r-[transparent]'>
                    <div className='flex items-center gap-[8px]'>
                        <i className='icon icon-chart_pie_2_fill  transition-all duration-300 text-[19px] bg-[#593983]'></i>
                        <BigText title={'Консенсус экспертов'}/>
                    </div>

                    <div className='flex gap-[10px] mt-[18px] justify-between items-center'>
                        <div className=' flex flex-col gap-[12px]'>
                            <div>
                                <BigText title={'Сгласия экспертов'}/>
                            </div>
                            <div className='flex items-center gap-[8px]'>
                                <span className='block w-[6px] h-[6px] bg-[#593983] rounded-full'></span>
                                <p className='text-[#1E112E] font-[Inter] font-normal text-[14px] loading-[100%]'>Елена
                                    Фокус</p>
                            </div>
                            <div className='flex items-center gap-[8px]'>
                                <span className='block w-[6px] h-[6px] bg-[#0B6BE9] rounded-full'></span>
                                <p className='text-[#1E112E] font-[Inter] font-normal text-[14px] loading-[100%]'>Елена
                                    Фокус</p>
                            </div>

                            <div className='flex items-center gap-[8px]'>
                                <span className='block w-[6px] h-[6px] bg-[#F49E25] rounded-full'></span>
                                <p className='text-[#1E112E] font-[Inter] font-normal text-[14px] loading-[100%]'>Елена
                                    Фокус</p>
                            </div>
                        </div>

                        <div className='max-w-[159px]'>
                            <img src={chart2} alt=""/>
                        </div>
                    </div>
                </div>


                <div className='mt-[18px]'>
                    <BigText title={'Области разногласий'}/>

                    <div className='mt-[18px] flex flex-col gap-[8px]'>
                        <div className=' p-[14px] bg-[#F5F5F8] rounded-[12px] '>
                            <p className='font-normal  text-[12px] leading-[140%] text-[#9494A9]'>
                                Вы стали чаще обращаться к психологу в стрессовые периоды
                            </p>
                        </div>
                        <div className=' p-[14px] bg-[#F5F5F8] rounded-[12px] '>
                            <p className='font-normal  text-[12px] leading-[140%] text-[#9494A9]'>
                                Ваша продуктивность выросла после внедрения советов Елены
                            </p>
                        </div>
                        <div className=' p-[14px] bg-[#F5F5F8] rounded-[12px] '>
                            <p className='font-normal  text-[12px] leading-[140%] text-[#9494A9]'>
                                Медицинские консультации помогли вам найти комплексный подход
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </motion.div>


        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9 }} className='mt-[12px] px-[16px]'>
            <div className='border border-[#F4F4F8]  p-[16px] bg-[#FFFFFF] rounded-[20px]'>

                <div className='flex items-center gap-[8px]'>
                    <i className='icon icon-list_check transition-all duration-300 text-[19px] bg-[#593983]'></i>
                    <BigText title={'План действий'}/>
                </div>

                <div className='flex flex-col gap-[18px] mt-[18px]'>
                    <div
                        className='border border-b-[#D9D9E2] pb-[18px] border-t-[transparent] border-l-[transparent] border-r-[transparent]  flex items-start gap-[12px]'>
                        <Checkbox/>
                        <div className=''>
                            <p className='font-[Inter] text-[#1E112E] font-normal text-[14px] loading-[140%]'>Провести
                                исследование рынка</p>
                            <div className='flex items-center gap-[6px] mt-[10px]'>
                                <img className='w-[18px] h-[18px]' src={avatar2} alt=""/>
                                <p className='font-[Inter] text-[#9494A9] font-normal text-[12px] loading-[140%]'>Рекомендация
                                    Виктора</p>
                            </div>

                        </div>
                    </div>


                    <div
                        className='border border-b-[#D9D9E2] pb-[18px] border-t-[transparent] border-l-[transparent] border-r-[transparent] flex items-start gap-[12px]'>
                        <Checkbox/>
                        <div className=''>
                            <p className='font-[Inter] text-[#1E112E] font-normal text-[14px] loading-[140%]'>Провести
                                исследование рынка</p>
                            <div className='flex items-center gap-[6px] mt-[10px]'>
                                <img className='w-[18px] h-[18px]' src={avatar2} alt=""/>
                                <p className='font-[Inter] text-[#9494A9] font-normal text-[12px] loading-[140%]'>Рекомендация
                                    Виктора</p>
                            </div>

                        </div>
                    </div>

                    <div
                        className='border border-b-[#D9D9E2] pb-[18px] border-t-[transparent] border-l-[transparent] border-r-[transparent] flex items-start gap-[12px]'>
                        <Checkbox/>
                        <div className=''>
                            <p className='font-[Inter] text-[#1E112E] font-normal text-[14px] loading-[140%]'>Провести
                                исследование рынка</p>
                            <div className='flex items-center gap-[6px] mt-[10px]'>
                                <img className='w-[18px] h-[18px]' src={avatar2} alt=""/>
                                <p className='font-[Inter] text-[#9494A9] font-normal text-[12px] loading-[140%]'>Рекомендация
                                    Виктора</p>
                            </div>

                        </div>
                    </div>

                </div>


            </div>
        </motion.div>


        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9 }} className='mt-[12px] px-[16px]'>
            <div className='border border-[#F4F4F8]  p-[16px] bg-[#FFFFFF] rounded-[20px]'>

                <div className='flex items-center gap-[8px]'>
                    <i className='icon icon-document_fill2 transition-all duration-300 text-[19px] bg-[#593983]'></i>
                    <BigText title={'Материалы'}/>
                </div>

                <div className='mt-[14px] flex gap-[14px] pb-[10px]   custom-scroll  overflow-x-auto overflow-y-hidden'>
                    <div className='flex flex-col p-[12px] min-w-[120px] relative    border border-[#F4F4F8] rounded-[20px] gap-[14px]  w-fit'>
                        <i className='icon icon-pdf_fill bg-[#FF664B] text-[26px]'></i>

                        <i onClick={handleErrorModal} className='icon cursor-pointer hover:scale-120 transition duration-300 icon-close bg-[#9494A9] absolute top-[15px] right-[15px] text-[10px]'></i>

                        <div className='mt-[24px]'>
                            <h3 className='font-[Inter] text-[#1E112E] text-[14px] leading-[100%] font-normal'>Формально...</h3>
                            <p className='font-[Inter] mt-[2px] text-[#9494A9] text-[12px] leading-[100%] font-normal'>9.4
                                mb</p>
                        </div>
                    </div>

                    <div
                        className='flex flex-col p-[12px] min-w-[120px] relative    border border-[#F4F4F8] rounded-[20px] gap-[14px]  w-fit'>
                        <i className='icon icon-doc_fill bg-[#5192E6] text-[26px]'></i>

                        <i onClick={handleSuccessModal} className='icon cursor-pointer hover:scale-120 transition duration-300 icon-close bg-[#9494A9] absolute top-[15px] right-[15px] text-[10px]'></i>

                        <div className='mt-[24px]'>
                            <h3 className='font-[Inter] text-[#1E112E] text-[14px] leading-[100%] font-normal'>Формально...</h3>
                            <p className='font-[Inter] mt-[2px] text-[#9494A9] text-[12px] leading-[100%] font-normal'>9.4
                                mb</p>
                        </div>
                    </div>

                    <div
                        className='flex flex-col p-[12px] min-w-[120px] relative    border border-[#F4F4F8] rounded-[20px] gap-[14px]  w-fit'>
                        <i className='icon icon-document-fill bg-[#9494A9] text-[26px]'></i>

                        <i className='icon cursor-pointer hover:scale-120 transition duration-300 icon-close bg-[#9494A9] absolute top-[15px] right-[15px] text-[10px]'></i>

                        <div className='mt-[24px]'>
                            <h3 className='font-[Inter] text-[#1E112E] text-[14px] leading-[100%] font-normal'>Формально...</h3>
                            <p className='font-[Inter] mt-[2px] text-[#9494A9] text-[12px] leading-[100%] font-normal'>9.4
                                mb</p>
                        </div>
                    </div>

                    <div
                        className='flex flex-col p-[12px] min-w-[120px] relative    border border-[#F4F4F8] rounded-[20px] gap-[14px]  w-fit'>
                        <i className='icon icon-pdf_fill bg-[#FF664B] text-[26px]'></i>

                        <i className='icon cursor-pointer hover:scale-120 transition duration-300 icon-close bg-[#9494A9] absolute top-[15px] right-[15px] text-[10px]'></i>

                        <div className='mt-[24px]'>
                            <h3 className='font-[Inter] text-[#1E112E] text-[14px] leading-[100%] font-normal'>Формально...</h3>
                            <p className='font-[Inter] mt-[2px] text-[#9494A9] text-[12px] leading-[100%] font-normal'>9.4
                                mb</p>
                        </div>
                    </div>

                </div>


            </div>
        </motion.div>


        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9 }} className='mt-[12px] mb-[24px] px-[16px]'>
            <div className='border border-[#F4F4F8]  p-[16px] bg-[#FFFFFF] rounded-[20px]'>

                <div className='flex items-center gap-[8px]'>
                    <i className='icon icon-star transition-all duration-300 text-[19px] bg-[#593983]'></i>
                    <BigText title={'Оценка'}/>
                </div>


                <div
                    className='border border-b-[#D9D9E2] pb-[14px] border-t-[transparent] border-l-[transparent] border-r-[transparent]  flex items-start gap-[12px]'>
                    <div className='mt-[14px] w-full flex items-center justify-between gap-[10px]'>
                        <p className='font-[Inter] text-[#1E112E] font-normal text-[14px] loading-[140%]'>Оценка
                            совещания</p>
                        <div className='flex gap-[7px] items-center '>
                            <i className='icon cursor-pointer icon-star_line text-[20px] bg-[#D9D9E2]'></i>
                            <i className='icon cursor-pointer icon-star_line text-[20px] bg-[#D9D9E2]'></i>
                            <i className='icon cursor-pointer icon-star_line text-[20px] bg-[#D9D9E2]'></i>
                            <i className='icon cursor-pointer icon-star_line text-[20px] bg-[#D9D9E2]'></i>
                            <i className='icon cursor-pointer icon-star_line text-[20px] bg-[#D9D9E2]'></i>
                        </div>
                    </div>
                </div>

                <div
                    className='mt-[14px] flex flex-col gap-[14px] border border-b-[#D9D9E2] pb-[14px] border-t-[transparent] border-l-[transparent] border-r-[transparent]'>
                    <div className=' w-full flex items-center justify-between gap-[10px]'>
                        <div className='flex items-center gap-[8px]'>
                            <img className='w-[28px] h-[28px]' src={avatar2} alt=""/>
                            <p className='font-[Inter] text-[#1E112E] font-normal text-[14px] loading-[140%]'>Анна</p>

                        </div>
                        <div className='flex gap-[7px] items-center '>
                            <i className='icon cursor-pointer icon-star_line text-[20px] bg-[#D9D9E2]'></i>
                            <i className='icon cursor-pointer icon-star_line text-[20px] bg-[#D9D9E2]'></i>
                            <i className='icon cursor-pointer icon-star_line text-[20px] bg-[#D9D9E2]'></i>
                            <i className='icon cursor-pointer icon-star_line text-[20px] bg-[#D9D9E2]'></i>
                            <i className='icon cursor-pointer icon-star_line text-[20px] bg-[#D9D9E2]'></i>
                        </div>
                    </div>
                    <div className=' w-full flex items-center justify-between gap-[10px]'>
                        <div className='flex items-center gap-[8px]'>
                            <img className='w-[28px] h-[28px]' src={avatar2} alt=""/>
                            <p className='font-[Inter] text-[#1E112E] font-normal text-[14px] loading-[140%]'>Василий</p>

                        </div>

                        <div className='flex gap-[7px] items-center '>
                            <i className='icon cursor-pointer icon-star_line text-[20px] bg-[#D9D9E2]'></i>
                            <i className='icon cursor-pointer icon-star_line text-[20px] bg-[#D9D9E2]'></i>
                            <i className='icon cursor-pointer icon-star_line text-[20px] bg-[#D9D9E2]'></i>
                            <i className='icon cursor-pointer icon-star_line text-[20px] bg-[#D9D9E2]'></i>
                            <i className='icon cursor-pointer icon-star_line text-[20px] bg-[#D9D9E2]'></i>
                        </div>
                    </div>


                    <div className=' w-full flex items-center justify-between gap-[10px]'>
                        <div className='flex items-center gap-[8px]'>
                            <img className='w-[28px] h-[28px]' src={avatar2} alt=""/>
                            <p className='font-[Inter] text-[#1E112E] font-normal text-[14px] loading-[140%]'>Анна</p>

                        </div>

                        <div className='flex gap-[7px] items-center '>
                            <i className='icon cursor-pointer icon-star_line text-[20px] bg-[#D9D9E2]'></i>
                            <i className='icon cursor-pointer icon-star_line text-[20px] bg-[#D9D9E2]'></i>
                            <i className='icon cursor-pointer icon-star_line text-[20px] bg-[#D9D9E2]'></i>
                            <i className='icon cursor-pointer icon-star_line text-[20px] bg-[#D9D9E2]'></i>
                            <i className='icon cursor-pointer icon-star_line text-[20px] bg-[#D9D9E2]'></i>
                        </div>
                    </div>


                </div>

                <div className='mt-[24px]'>
                    <FloatingTextarea value={comments} onChange={(e) =>setComments(e.target.value)} classNameLabel='text-[#9494A9]' label='Комментарий для улучшения'/>
                </div>


            </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9 }} className='flex flex-wrap justify-center gap-[8px] mt-auto  rounded-tl-[16px] rounded-tr-[16px]  border border-[#F4F4F8] px-[16px]  pt-[16px] pb-[20px] bg-[#FFFFFF] '>

            <BlueGradientButton
                href={'/'}
                className='h-[44px] max-w-[254px] group flex gap-[10px]'
            >

                <i className='icon icon-pdf_fill group-hover:bg-[#593983]  transition-all duration-300 text-[15px] bg-[#FFFFFF]'></i>
                <span>Экспорт в PDF</span>

            </BlueGradientButton>


            <button onClick={handleShareModal}
                className='w-[44px] min-w-[44px] h-[44px] group hover:bg-[#A281CD] transition duration-300 cursor-pointer bg-[#FFFFFF] rounded-full border flex justify-center items-center border-[#A281CD52]'>
                <i className='icon group-hover:bg-[white] icon-share_forward_line text-[16px] bg-[#593983]'></i>
            </button>

            <button
                className='w-[44px] min-w-[44px] h-[44px] group hover:bg-[#A281CD] transition duration-300 cursor-pointer bg-[#FFFFFF] rounded-full border flex justify-center items-center border-[#A281CD52]'>
                <i className='icon group-hover:bg-[white] icon-setting text-[16px] bg-[#593983]'></i>
            </button>

        </motion.div>


        <div className='absolute w-full left-[0] top-[0] z-[-1]'>
            <img className='w-full' src={pageDecor} alt=""/>
        </div>

        <PopUpError onClose={handleErrorModal} open={modalError}/>

        <PopUpSuccess onClose={handleSuccessModal} open={modalSuccess}/>

        <PopUpShare onClose={handleShareModal} open={modalShare}/>

    </div>
};

export default ResultsMeeting;