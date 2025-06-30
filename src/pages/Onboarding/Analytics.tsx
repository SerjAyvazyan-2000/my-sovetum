import PageHeading from "@/components/shared/PageHeading";
import {FC} from "react";
import BigText from "@components/shared/BigText.tsx";
import {SegmentedSwitch} from "@components/shared/SegmentedSwitch.tsx";
import chart1 from './img/chart1.webp'
import chart2 from './img/chart2.png'


import pageDecor from "@pages/Onboarding/img/pageDecor.png";
import {ScrollToTop} from "@components/shared/ScrollToTop.tsx";
import { motion } from "framer-motion";
import TopExpertsBlock from "@components/shared/TopExperts.tsx";


const Analytics: FC = () => {
    return <div
        className='min-h-[725px] pb-[24px] bg-[white]  relative z-[2] overflow-hidden  pt-[24px] '>
        <ScrollToTop />

        {/*Заголовок*/}
        <motion.div initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 ,delay:.8 }} className='px-[16px]'>
            <PageHeading classNameSubtitle={'mt-[12px]'} reverse={true}
                         subtitle="Инсайты на основе ваших взаимодействийс экспертами"
                         title="Ваша аналитика"/>
        </motion.div>


        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }} className='gap-[12px] flex items-center mt-[24px] custom-scroll pl-[16px] overflow-auto '>

            <div
                className=' max-w-[200px] min-w-[200px] w-full bg-[#FFFFFF]  p-[16px]  rounded-[20px] border border-[#F4F4F8] '>
                <div className='flex items-center gap-[10px]'>
                    <i className='icon icon-comment_2_fill   transition-all duration-300 text-[19px] bg-[#0B6BE9]'></i>
                    <p>Активность</p>
                </div>
                <div className='flex flex-col gap-[10px] mt-[20px]'>
                    <h3 className='text-[#000000] font-medium text-[20px] leading-[100%]'>127 диалогов</h3>
                    <p className='text-[#9494A9] text-[14px] loading-[140%] font-normal font-[Inter]'>+15% за месяц</p>
                </div>
            </div>
            <div
                className=' max-w-[200px] min-w-[200px] w-full bg-[#FFFFFF]  p-[16px]  rounded-[20px] border border-[#F4F4F8] '>
                <div className='flex items-center gap-[10px]'>
                    <i className='icon icon-chart_bar   transition-all duration-300 text-[19px] bg-[#5BD255]'></i>
                    <p>Рост</p>
                </div>
                <div className='flex flex-col gap-[10px] mt-[20px]'>
                    <h3 className='text-[#000000] font-medium text-[20px] leading-[100%]'>23 цели</h3>
                    <p className='text-[#9494A9] text-[14px] loading-[140%] font-normal font-[Inter]'>8 достигнуто</p>
                </div>
            </div>
            <div
                className=' max-w-[200px] min-w-[200px] w-full bg-[#FFFFFF]  p-[16px]  rounded-[20px] border border-[#F4F4F8] '>
                <div className='flex items-center gap-[10px]'>
                    <i className='icon icon-comment_2_fill   transition-all duration-300 text-[19px] bg-[#0B6BE9]'></i>
                    <p>Активность</p>
                </div>
                <div className='flex flex-col gap-[10px] mt-[20px]'>
                    <h3 className='text-[#000000] font-medium text-[20px] leading-[100%]'>127 диалогов</h3>
                    <p className='text-[#9494A9] text-[14px] loading-[140%] font-normal font-[Inter]'>+15% за месяц</p>
                </div>
            </div>

        </motion.div>


        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }} className='flex mx-[16px]  border border-[#F4F4F8]  flex-col mt-[12px]  py-[14px] px-[16px] bg-[#FFFFFF] rounded-[20px]'>
            <div className='flex items-center gap-[8px]'>
                <i className='icon icon-palette_fill  transition-all duration-300 text-[20px] bg-[#593983]'></i>
                <BigText title={'График активности'}/>
            </div>

            <div className='border border-b-[#F4F4F8] mt-[18px] pb-[18px] border-t-[transparent] border-l-[transparent] border-r-[transparent]'>
                <SegmentedSwitch
                    options={["Светлая", "Темная", "Авто"]}
                    onChange={(val) => console.log("Выбрано:", val)}
                />
            </div>

            <div>
                <img src={chart1} alt=""/>
            </div>

        </motion.div>



        <TopExpertsBlock/>

        <motion.div  initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, amount: 0.2 }}
                     transition={{ duration: 0.7 }} className='mt-[12px] px-[16px]'>
            <div className='border border-[#F4F4F8]  mt-[16px] p-[16px] bg-[#FFFFFF] rounded-[20px]'>

                <div className='flex items-center gap-[8px]'>
                    <i className='icon icon-chart_pie_2_fill  transition-all duration-300 text-[19px] bg-[#593983]'></i>
                    <BigText title={'Области развития'}/>
                </div>

                <div className='flex gap-[10px] mt-[18px] justify-between items-center'>
                    <div className=' flex flex-col gap-[12px]'>
                        <div>
                            <BigText title={'Ваш фокус'}/>
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

                <div className='mt-[18px] p-[16px] bg-[#F5F5F8] rounded-[12px] flex items-start gap-[10px]'>
                    <i className='icon mt-[-7px] icon-warning_line text-[30px] bg-[#D9D9E2]'></i>
                    <div>
                        <h3 className='font-semibold text-[14px] leading-[100%] text-[#1E112E]'>Рекомендации</h3>
                        <p className='font-normal mt-[12px] text-[12px] leading-[140%] text-[#9494A9]'>Жидкость пространственно отклоняет квант, как и предсказывает общая теория </p>
                    </div>
                </div>

            </div>
        </motion.div>

        <motion.div  initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, amount: 0.2 }}
                     transition={{ duration: 0.7 }} className='mt-[12px] px-[16px] '>
            <div className='border border-[#F4F4F8]  mt-[16px] p-[16px] bg-[#FFFFFF] rounded-[20px]'>

                <div className='flex items-center gap-[8px]'>
                    <i className='icon icon-bling_fill  transition-all duration-300 text-[19px] bg-[#593983]'></i>
                    <BigText title={'AI-генерированные наблюдения'}/>
                </div>



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
        </motion.div>

        <div className='absolute w-full left-[0] top-[0] z-[-1]'>
            <img className='w-full' src={pageDecor} alt=""/>
        </div>
    </div>
};

export default Analytics;