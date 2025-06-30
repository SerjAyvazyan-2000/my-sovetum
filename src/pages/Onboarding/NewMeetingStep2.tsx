import PageHeading from "@/components/shared/PageHeading";
import {FC} from "react";

import {Link} from "react-router-dom";
import NewMeetingSteps from "@components/shared/NewMeetingSteps.tsx";
import BigText from "@components/shared/BigText.tsx";

import avatar2 from "@pages/Onboarding/img/avatar2.png";
import {Checkbox} from "@components/shared/Checkbox.tsx";
import FloatingInput from "@components/ui/FloatingInput.tsx";
import pageDecor from "@pages/Onboarding/img/pageDecor.png";
import {ScrollToTop} from "@components/shared/ScrollToTop.tsx";
import { motion } from "framer-motion";

const NewMeetingStep2: FC = () => {


    return <div
        className='min-h-[725px] flex flex-col z-[2]  relative overflow-hidden  pt-[24px]  '>
        <ScrollToTop />

        <NewMeetingSteps/>


        {/*Заголовок*/}
        <motion.div initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 ,delay:.6 }} className='flex items-center gap-[17px] mx-[16px]'>
            <Link className='flex' to={'/onboarding/newMeeting'}>
                <i className='icon hover:bg-[#593983] transition duration-300 icon-arrow bg-[#9494A9] cursor-pointer text-[18px] rotate-[180deg]'></i>

            </Link>
            <PageHeading classNameSubtitle={'mt-[12px]'}
                         title="Выбор экспертов"/>
        </motion.div>


        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9 }} className='flex mx-[16px]  mt-[36px]  border border-[#F4F4F8]  flex-col   p-[16px] bg-[#FFFFFF] rounded-[20px]'>
            <BigText title={'Подходят для вашего вопроса'} className='max-w-[274px]'/>
            <p className='font-normal mt-[12px] font-[Inter] text-[14px] leading-[140%]  text-[#1E112E] opacity-[.6]'>
                Эксперты подходят, потому что обладают глубокими знаниями, практическим опытом и
            </p>
            <div className='mt-[24px] gap-[16px] flex flex-col'>
                <div className='border border-b-[#F4F4F8] pb-[18px] border-t-[transparent] border-l-[transparent] border-r-[transparent]'>
                    <div className='flex items-start gap-[12px]'>
                        <div className='flex'>
                            <img className='w-[40px] min-w-[40px] h-[40px]' src={avatar2} alt=""/>
                        </div>
                        <div className='w-full'>
                            <div className='flex w-full items-center gap-[10px] justify-between'>
                                <BigText title='Анна Маркетолог'/>

                            </div>

                            <div className=' w-full mt-[4px] items-center '>
                                <p className='font-normal font-[Inter] text-[14px] leading-[100%]  text-[#9494A9]'>Специалист
                                    по SMM</p>

                                <div className='flex w-fit items-center gap-[5px] mt-[10px]  '>
                                    <i className='icon icon-star text-[11px] bg-[#FFD650]'></i>
                                    <p className='font-normal font-[Inter] text-[12px] leading-[140%] text-[#9494A9]'>5.0</p>
                                </div>
                            </div>

                        </div>
                        <div className='flex items-center mt-[10px] gap-[10px]'>
                            <i className='icon cursor-pointer icon-information text-[23px] transition-all duration-300 bg-[#D9D9E2] hover:bg-[#593983]'></i>
                            <Checkbox/>

                        </div>
                    </div>
                </div>

                <div className='border border-b-[#F4F4F8] pb-[18px] border-t-[transparent] border-l-[transparent] border-r-[transparent]'>
                    <div className='flex items-start gap-[12px]'>
                        <div className='flex'>
                            <img className='w-[40px] min-w-[40px] h-[40px]' src={avatar2} alt=""/>
                        </div>
                        <div className='w-full'>
                            <div className='flex w-full items-center gap-[10px] justify-between'>
                                <BigText title='Анна Маркетолог'/>

                            </div>

                            <div className=' w-full mt-[4px] items-center '>
                                <p className='font-normal font-[Inter] text-[14px] leading-[100%]  text-[#9494A9]'>Специалист
                                    по SMM</p>

                                <div className='flex w-fit items-center gap-[5px] mt-[10px]  '>
                                    <i className='icon icon-star text-[11px] bg-[#FFD650]'></i>
                                    <p className='font-normal font-[Inter] text-[12px] leading-[140%] text-[#9494A9]'>5.0</p>
                                </div>
                            </div>

                        </div>
                        <div className='flex items-center mt-[10px] gap-[10px]'>
                            <i className='icon cursor-pointer icon-information text-[23px] transition-all duration-300 bg-[#D9D9E2] hover:bg-[#593983]'></i>
                            <Checkbox/>

                        </div>
                    </div>
                </div>


                <div className='flex items-start gap-[12px]'>
                    <div className='flex'>
                        <img className='w-[40px] min-w-[40px] h-[40px]' src={avatar2} alt=""/>
                    </div>
                    <div className='w-full'>
                        <div className='flex w-full items-center gap-[10px] justify-between'>
                            <BigText title='Анна Маркетолог'/>

                        </div>

                        <div className=' w-full mt-[4px] items-center '>
                            <p className='font-normal font-[Inter] text-[14px] leading-[100%]  text-[#9494A9]'>Специалист
                                по SMM</p>

                            <div className='flex w-fit items-center gap-[5px] mt-[10px]  '>
                                <i className='icon icon-star text-[11px] bg-[#FFD650]'></i>
                                <p className='font-normal font-[Inter] text-[12px] leading-[140%] text-[#9494A9]'>5.0</p>
                            </div>
                        </div>

                    </div>
                    <div className='flex items-center mt-[10px] gap-[10px]'>
                        <i className='icon cursor-pointer icon-information text-[23px] transition-all duration-300 bg-[#D9D9E2] hover:bg-[#593983]'></i>
                        <Checkbox/>

                    </div>
                </div>

            </div>
        </motion.div>


        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9 }} className='flex mx-[16px] mb-[24px]  mt-[12px]  border border-[#F4F4F8]  flex-col   p-[16px] bg-[#FFFFFF] rounded-[20px]'>
            <BigText title={'Все эксперты'} className='max-w-[274px]'/>

            <div className='mt-[12px]'>
                <FloatingInput classNamPlaceholder={'text-[#9494A9]'} label={'Поиск по имени'} icon={'icon-search_line'}/>

            </div>

            <p className='font-normal mt-[12px] font-[Inter] text-[14px] leading-[140%]  text-[#1E112E] opacity-[.6]'>
                Эксперты подходят, потому что обладают глубокими знаниями, практическим опытом и
            </p>
            <div className='mt-[24px] gap-[16px] flex flex-col'>
                <div className='border border-b-[#F4F4F8] pb-[18px] border-t-[transparent] border-l-[transparent] border-r-[transparent]'>
                    <div className='flex items-start gap-[12px]'>
                        <div className='flex'>
                            <img className='w-[40px] min-w-[40px] h-[40px]' src={avatar2} alt=""/>
                        </div>
                        <div className='w-full'>
                            <div className='flex w-full items-center gap-[10px] justify-between'>
                                <BigText title='Анна Маркетолог'/>

                            </div>

                            <div className=' w-full mt-[4px] items-center '>
                                <p className='font-normal font-[Inter] text-[14px] leading-[100%]  text-[#9494A9]'>Специалист
                                    по SMM</p>

                                <div className='flex w-fit items-center gap-[5px] mt-[10px]  '>
                                    <i className='icon icon-star text-[11px] bg-[#FFD650]'></i>
                                    <p className='font-normal font-[Inter] text-[12px] leading-[140%] text-[#9494A9]'>5.0</p>
                                </div>
                            </div>

                        </div>
                        <div className='flex items-center mt-[10px] gap-[10px]'>
                            <i className='icon cursor-pointer icon-information text-[23px] transition-all duration-300 bg-[#D9D9E2] hover:bg-[#593983]'></i>
                            <Checkbox/>

                        </div>
                    </div>
                </div>

                <div className='border border-b-[#F4F4F8] pb-[18px] border-t-[transparent] border-l-[transparent] border-r-[transparent]'>
                    <div className='flex items-start gap-[12px]'>
                        <div className='flex'>
                            <img className='w-[40px] min-w-[40px] h-[40px]' src={avatar2} alt=""/>
                        </div>
                        <div className='w-full'>
                            <div className='flex w-full items-center gap-[10px] justify-between'>
                                <BigText title='Анна Маркетолог'/>

                            </div>

                            <div className=' w-full mt-[4px] items-center '>
                                <p className='font-normal font-[Inter] text-[14px] leading-[100%]  text-[#9494A9]'>Специалист
                                    по SMM</p>

                                <div className='flex w-fit items-center gap-[5px] mt-[10px]  '>
                                    <i className='icon icon-star text-[11px] bg-[#FFD650]'></i>
                                    <p className='font-normal font-[Inter] text-[12px] leading-[140%] text-[#9494A9]'>5.0</p>
                                </div>
                            </div>

                        </div>
                        <div className='flex items-center mt-[10px] gap-[10px]'>
                            <i className='icon cursor-pointer icon-information text-[23px] transition-all duration-300 bg-[#D9D9E2] hover:bg-[#593983]'></i>
                            <Checkbox/>

                        </div>
                    </div>
                </div>


                <div className='flex items-start gap-[12px]'>
                    <div className='flex'>
                        <img className='w-[40px] min-w-[40px] h-[40px]' src={avatar2} alt=""/>
                    </div>
                    <div className='w-full'>
                        <div className='flex w-full items-center gap-[10px] justify-between'>
                            <BigText title='Анна Маркетолог'/>

                        </div>

                        <div className=' w-full mt-[4px] items-center '>
                            <p className='font-normal font-[Inter] text-[14px] leading-[100%]  text-[#9494A9]'>Специалист
                                по SMM</p>

                            <div className='flex w-fit items-center gap-[5px] mt-[10px]  '>
                                <i className='icon icon-star text-[11px] bg-[#FFD650]'></i>
                                <p className='font-normal font-[Inter] text-[12px] leading-[140%] text-[#9494A9]'>5.0</p>
                            </div>
                        </div>

                    </div>
                    <div className='flex items-center mt-[10px] gap-[10px]'>
                        <i className='icon cursor-pointer icon-information text-[23px] transition-all duration-300 bg-[#D9D9E2] hover:bg-[#593983]'></i>
                        <Checkbox/>

                    </div>
                </div>

            </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9 }} className='flex  rounded-tl-[16px] rounded-tr-[16px]   w-full  gap-[14px] border border-[#F4F4F8]  flex-col mt-auto px-[16px]  pt-[16px] pb-[20px] bg-[#FFFFFF] '>
            <div className='flex gap-[13px] items-center'>
                <i className='icon cursor-pointer icon-information text-[40px] min-w-[20px] transition-all duration-300 bg-[#D9D9E2] hover:bg-[#593983]'></i>

                <p className='font-normal  font-[Inter] text-[12px] leading-[140%]  text-[#1E112E] opacity-[.6]'>
                    Для лучшего результата выберите экспертов
                    из разных областей, оптимально3-5 экспертов
                </p>
            </div>
            <button className='blue-gradient group  w-full cursor-pointer rounded-full py-[13px] px-[20px] gap-[9px] flex items-center justify-between '>
                <p className='font-[Inter] group-hover:text-[#593983] text-[#FFFFFF] text-[14px] loading-[100%]'>Продолжить</p>
                <p className='font-[Inter] group-hover:text-[#593983] text-[#FFFFFF] text-[14px] loading-[100%]'>Выбрано 3 <span className='text-[#FFFFFF80] group-hover:text-[#593983]'>из 7</span></p>
            </button>

        </motion.div>

        <div className='absolute w-full left-[0] top-[0] z-[-1]'>
            <img className='w-full' src={pageDecor} alt=""/>
        </div>
    </div>
};

export default NewMeetingStep2;