import PageHeading from "@/components/shared/PageHeading";
import {FC, useState} from "react";
import BigText from "@components/shared/BigText.tsx";
import {Link} from "react-router-dom";
import BlueGradientButton from "@/components/ui/BlueGradientButton";
import NewMeetingSteps from "@components/shared/NewMeetingSteps.tsx";
import {Range} from "@components/shared/Range.tsx";
import avatar2 from "@pages/Onboarding/img/avatar2.png";
import addIcon from "@pages/Onboarding/img/addIcons.png";
import FloatingInput from "@components/ui/FloatingInput.tsx";
import pageDecor from "@pages/Onboarding/img/pageDecor.png";
import {ScrollToTop} from "@components/shared/ScrollToTop.tsx";
import { motion } from "framer-motion";

const NewMeetingStep3: FC = () => {
    const [links,setLinks]= useState('')

    return <div className='min-h-[725px] z-[2] flex flex-col  relative overflow-hidden  pt-[24px]  '>
        <ScrollToTop />

        <NewMeetingSteps/>


        {/*Заголовок*/}
        <motion.div initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 ,delay:.6 }} className='flex items-center gap-[17px] mx-[16px]'>
            <Link className='flex' to={'/onboarding/newMeetingStep2'}>
                <i className='icon hover:bg-[#593983] transition duration-300 icon-arrow bg-[#9494A9] cursor-pointer text-[18px] rotate-[180deg]'></i>

            </Link>
            <PageHeading classNameSubtitle={'mt-[12px]'}
                         title="Настройки совещания"/>
        </motion.div>


        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9 }} className='flex mx-[16px]  mt-[36px]  border border-[#F4F4F8]  flex-col   p-[16px] bg-[#FFFFFF] rounded-[20px]'>
            <h3 className='font-medium  font-[Inter] text-[20px] leading-[100%]  text-[#000000] '>
                Улучшить финансовое планирование
            </h3>
            <p className='font-normal mt-[8px] font-[Inter] text-[14px] leading-[140%]  text-[#9494A9] '>
                Брейншторм
            </p>
            <div className='mt-[16px]'>
                <BigText title={'Выбранные эксперты'}/>
                <div className='mt-[16px] flex flex-col gap-[12px]'>
                    <div className='flex items-center gap-[8px]'>
                        <div className='flex'>
                            <img className='w-[28px] min-w-[28px] h-[28px]' src={avatar2} alt=""/>
                        </div>
                        <div className='flex w-full items-center gap-[10px] justify-between'>
                            <p className='font-normal  font-[Inter] text-[14px] leading-[140%]  text-[#1E112E]'>Анна Маркетолог</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-[8px]'>
                        <div className='flex'>
                            <img className='w-[28px] min-w-[28px] h-[28px]' src={avatar2} alt=""/>
                        </div>
                        <div className='flex w-full items-center gap-[10px] justify-between'>
                            <p className='font-normal  font-[Inter] text-[14px] leading-[140%]  text-[#1E112E]'>Анна Маркетолог</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-[8px]'>
                        <div className='flex'>
                            <img className='w-[28px] min-w-[28px] h-[28px]' src={avatar2} alt=""/>
                        </div>
                        <div className='flex w-full items-center gap-[10px] justify-between'>
                            <p className='font-normal  font-[Inter] text-[14px] leading-[140%]  text-[#1E112E]'>Анна Маркетолог</p>
                        </div>
                    </div>


                </div>
            </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9 }} className=' mx-[16px]  border border-[#F4F4F8]   mt-[12px]  py-[14px] px-[16px] bg-[#FFFFFF] rounded-[20px]'>
            <BigText title={'Длительность'}/>

            <div className='mt-[14px] flex flex-col gap-[12px]'>
                <Range text={'Быстрое (20-30 минут))'}/>
                <Range text={'Стандартное (45-60 минут)'}/>
                <Range text={'Стратегическая сессия (планирование)'}/>
                <Range text={'Расширенное (90+ минут)'}/>

            </div>


        </motion.div>


        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9 }} className=' mx-[16px]   border border-[#F4F4F8]   mt-[12px]  py-[14px] px-[16px] bg-[#FFFFFF] rounded-[20px]'>
            <BigText title={'Модерация'}/>

            <div className='mt-[14px] flex flex-col gap-[12px]'>
                <Range text={'AI-модератор (рекомендуется)'}/>
                <Range text={'Самомодерирование'}/>
                <Range text={'Экспертом-модератором'}/>
            </div>


        </motion.div>



        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9 }} className=' mx-[16px]   border border-[#F4F4F8]   mt-[12px]  py-[14px] px-[16px] bg-[#FFFFFF] rounded-[20px]'>
            <BigText title={'Приватность'}/>

            <div className='mt-[14px] flex flex-col gap-[12px]'>
                <Range text={'Только для меня'}/>
                <Range text={'Доступно участникам'}/>
                <Range text={'Публичное (с согласия)'}/>
            </div>


        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9 }} className='flex mx-[16px]  gap-[14px] border border-[#F4F4F8]  flex-col mt-[12px]  py-[12px] px-[16px] bg-[#FFFFFF] rounded-[20px]'>
            <BigText title={'Дополнительные материалы'}/>
            <div className='min-h-[144px] border-dashed border-2 hover:border-[#593983] transition duration-300  border-[#D9D9E2] rounded-[12px]'>
                <label htmlFor="createAvatar" className="cursor-pointer flex flex-col items-center justify-center">
                    <img className='max-w-[40px] mt-[26px]' src={addIcon} alt=""/>

                    <p className='font-medium mt-[18px] text-[16px] leading-[100%] text-[#000000]'>Прикрепить файлы</p>
                    <span className='font-medium mt-[8px] text-[12px] leading-[100%] opacity-[.6] text-[#1E112E]'>Документы, изображения</span>
                </label>

                <input id="createAvatar" name="createAvatar" type="file" className="hidden"/>
            </div>
            {/*Загруженные файлы*/}

            <div className='mt-[10px]'>
                <BigText title={'Загруженные файлы'}/>

                <div className='mt-[14px] flex gap-[14px] pb-[10px]   custom-scroll  overflow-x-auto overflow-y-hidden'>
                    <div className='flex flex-col p-[12px] min-w-[120px] relative    border border-[#F4F4F8] rounded-[20px] gap-[14px]  w-fit'>
                        <i className='icon icon-pdf_fill bg-[#FF664B] text-[26px]'></i>

                        <i className='icon cursor-pointer hover:scale-120 transition duration-300 icon-close bg-[#9494A9] absolute top-[15px] right-[15px] text-[10px]'></i>

                        <div className='mt-[24px]'>
                            <h3 className='font-[Inter] text-[#1E112E] text-[14px] leading-[100%] font-normal'>Формально...</h3>
                            <p className='font-[Inter] mt-[2px] text-[#9494A9] text-[12px] leading-[100%] font-normal'>9.4 mb</p>
                        </div>
                    </div>

                    <div className='flex flex-col p-[12px] min-w-[120px] relative    border border-[#F4F4F8] rounded-[20px] gap-[14px]  w-fit'>
                        <i className='icon icon-doc_fill bg-[#5192E6] text-[26px]'></i>

                        <i className='icon cursor-pointer hover:scale-120 transition duration-300 icon-close bg-[#9494A9] absolute top-[15px] right-[15px] text-[10px]'></i>

                        <div className='mt-[24px]'>
                            <h3 className='font-[Inter] text-[#1E112E] text-[14px] leading-[100%] font-normal'>Формально...</h3>
                            <p className='font-[Inter] mt-[2px] text-[#9494A9] text-[12px] leading-[100%] font-normal'>9.4 mb</p>
                        </div>
                    </div>

                    <div className='flex flex-col p-[12px] min-w-[120px] relative    border border-[#F4F4F8] rounded-[20px] gap-[14px]  w-fit'>
                        <i className='icon icon-document-fill bg-[#9494A9] text-[26px]'></i>

                        <i className='icon cursor-pointer hover:scale-120 transition duration-300 icon-close bg-[#9494A9] absolute top-[15px] right-[15px] text-[10px]'></i>

                        <div className='mt-[24px]'>
                            <h3 className='font-[Inter] text-[#1E112E] text-[14px] leading-[100%] font-normal'>Формально...</h3>
                            <p className='font-[Inter] mt-[2px] text-[#9494A9] text-[12px] leading-[100%] font-normal'>9.4 mb</p>
                        </div>
                    </div>

                    <div className='flex flex-col p-[12px] min-w-[120px] relative    border border-[#F4F4F8] rounded-[20px] gap-[14px]  w-fit'>
                        <i className='icon icon-pdf_fill bg-[#FF664B] text-[26px]'></i>

                        <i className='icon cursor-pointer hover:scale-120 transition duration-300 icon-close bg-[#9494A9] absolute top-[15px] right-[15px] text-[10px]'></i>

                        <div className='mt-[24px]'>
                            <h3 className='font-[Inter] text-[#1E112E] text-[14px] leading-[100%] font-normal'>Формально...</h3>
                            <p className='font-[Inter] mt-[2px] text-[#9494A9] text-[12px] leading-[100%] font-normal'>9.4 mb</p>
                        </div>
                    </div>

                </div>

            </div>




        </motion.div>


        {/*Ссылки*/}
        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9 }} className='flex mx-[16px]  gap-[14px] border border-[#F4F4F8]  flex-col mt-[12px]  py-[12px] px-[16px] bg-[#FFFFFF] rounded-[20px]'>
            <BigText title={'Ссылки'}/>

            <FloatingInput
                classNamPlaceholder={'text-[#9494A9] text-[14px]'}
                label={'Добавить ссылку'}
                value={links}
                onChange={(e)=>setLinks(e.target.value)}
            />

            {/*Добавленные ссылки*/}
            <div className='mt-[10px]'>
                <BigText title={'Добавленные ссылки'}/>

                <div className='mt-[14px] flex gap-[14px] pb-[10px]   custom-scroll  overflow-x-auto overflow-y-hidden'>
                    <div className='flex flex-col min-h-[120px] n p-[12px] max-w-[120px] min-w-[120px] relative mt-[14px]    border border-[#F4F4F8] rounded-[20px] gap-[14px]  '>
                        <i className='icon icon-W bg-[#1E112E] text-[17px]'></i>

                        <i className='icon cursor-pointer hover:scale-120 transition duration-300 icon-close bg-[#9494A9] absolute top-[15px] right-[15px] text-[10px]'></i>

                        <div className='mt-auto pt-[7px]'>
                            <h3 className='font-[Inter] text-[#1E112E] text-[14px] leading-[100%] font-normal'>Википедия</h3>
                            <a className='font-[Inter]  mt-[3px]  text-[#9494A9] text-[12px] block  leading-[100%] font-normal break-all whitespace-normal'>ru.wikipedia.org/wiki/Favicon</a>
                        </div>
                    </div>

                    <div className='flex flex-col min-h-[120px] p-[12px] max-w-[120px] min-w-[120px] relative mt-[14px]    border border-[#F4F4F8] rounded-[20px] gap-[14px]  '>
                        <i className='icon icon-W bg-[#1E112E] text-[17px]'></i>

                        <i className='icon cursor-pointer hover:scale-120 transition duration-300 icon-close bg-[#9494A9] absolute top-[15px] right-[15px] text-[10px]'></i>

                        <div className='mt-auto'>
                            <h3 className='font-[Inter] text-[#1E112E] text-[14px] leading-[100%] font-normal'>Википедия</h3>
                            <a className='font-[Inter]  mt-[3px]  text-[#9494A9] text-[12px]  block  leading-[100%] font-normal break-all whitespace-normal'>ru.wikipedia.org</a>
                        </div>
                    </div>


                </div>

            </div>

        </motion.div>



        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9 }} className=' mx-[16px] mb-[24px]   border border-[#F4F4F8]   mt-[12px]  py-[14px] px-[16px] bg-[#FFFFFF] rounded-[20px]'>
            <BigText title={'Когда начать'}/>

            <div className='mt-[14px] flex flex-col gap-[12px]'>
                <Range text={'Сейчас'}/>
                <Range text={'Запланировать на время'}/>
                <Range text={'Когда все эксперты будут онлайн'}/>
            </div>


        </motion.div>



        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9 }} className='flex  rounded-tl-[16px] rounded-tr-[16px]   w-full  gap-[14px] border border-[#F4F4F8]  flex-col mt-auto px-[16px]  pt-[16px] pb-[20px] bg-[#FFFFFF] '>
            <BlueGradientButton href={'/onboarding/improveFinancial'}>
                Создать совещание
            </BlueGradientButton>

        </motion.div>

        <div className='absolute w-full left-[0] top-[0] z-[-1]'>
            <img className='w-full' src={pageDecor} alt=""/>
        </div>
    </div>
};

export default NewMeetingStep3;