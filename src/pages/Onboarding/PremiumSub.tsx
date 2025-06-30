import PageHeading from "@/components/shared/PageHeading";
import {FC, useState} from "react";

import {Link} from "react-router-dom";
import pageDecor from "@pages/Onboarding/img/pageDecor.png";


import BigText from "@components/shared/BigText.tsx";
import FloatingInput from "@components/ui/FloatingInput.tsx";
import {ScrollToTop} from "@components/shared/ScrollToTop.tsx";
import { motion } from "framer-motion";
import PaymentHistoryBlock from "@components/shared/PaymentHistoryBlock.tsx";


const PremiumSub: FC = () => {
const [promoCode,setPromoCode] = useState('')

    return <div className='relative z-[2] overflow-hidden pt-[24px] bg-[#FFFFFF]  '>
        <ScrollToTop />


        {/*Заголовок*/}
        <motion.div initial={{ opacity: 0, y: -30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 ,delay:.6 }} className='flex items-center gap-[17px] mx-[16px]'>
            <Link className='flex' to={'/onboarding/settings'}>
                <i className='icon icon-arrow bg-[#9494A9] hover:bg-[#593983] transition duration-300 cursor-pointer text-[18px] rotate-[180deg]'></i>
            </Link>
            <div>
                <PageHeading classNameSubtitle={'mt-[12px]'} title="Подписка Premium"/>
            </div>

        </motion.div>


        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9 }} className='mt-[35px] px-[16px]'>
            <div className='border border-[#F4F4F8]  mt-[16px] p-[16px] bg-[#FFFFFF] rounded-[20px]'>

                <div
                    className='flex items-center gap-[8px] border border-b-[#F4F4F8] pb-[16px] border-t-[transparent] border-l-[transparent] border-r-[transparent]'>
                    <i className='icon icon-ai_fill   transition-all duration-300 text-[19px] bg-[#9494A9]'></i>
                    <BigText title={'Free план'}/>
                </div>

                <div className='mt-[16px] flex flex-col gap-[16px]'>
                    <div
                        className='border border-b-[#F4F4F8] pb-[16px] border-t-[transparent] border-l-[transparent] border-r-[transparent] '>
                        <h3 className='text-[#1E112E] font-[Inter] font-normal text-[14px] loading-[100%]'>
                            Предустановленные эксперты
                        </h3>

                        <div className='flex flex-col gap-[6px] mt-[12px]'>
                            <div className='flex items-center gap-[8px]'>
                                <span className='block w-[6px] h-[6px] bg-[#D9D9E2] rounded-full'></span>
                                <p className='text-[#9494A9] font-[Inter] font-normal text-[14px] loading-[100%]'>5
                                    предустановленных экспертовв</p>
                            </div>

                            <div className='flex items-center gap-[8px]'>
                                <span className='block w-[6px] h-[6px] bg-[#D9D9E2] rounded-full'></span>
                                <p className='text-[#9494A9] font-[Inter] font-normal text-[14px] loading-[100%]'>До 3
                                    пользовательских экспертов</p>
                            </div>
                            <div className='flex items-center gap-[8px]'>
                                <span className='block w-[6px] h-[6px] bg-[#D9D9E2] rounded-full'></span>
                                <p className='text-[#9494A9] font-[Inter] font-normal text-[14px] loading-[100%]'>Базовые
                                    совещания: <span className='text-[#593983]'>до 3</span></p>
                            </div>
                            <div className='flex items-center gap-[8px]'>
                                <span className='block w-[6px] h-[6px] bg-[#D9D9E2] rounded-full'></span>
                                <p className='text-[#9494A9] font-[Inter] font-normal text-[14px] loading-[100%]'>Базовая
                                    аналитика</p>
                            </div>
                            <div className='flex items-center gap-[8px]'>
                                <span className='block w-[6px] h-[6px] bg-[#D9D9E2] rounded-full'></span>
                                <p className='text-[#9494A9] font-[Inter] font-normal text-[14px] loading-[100%]'>До 2
                                    консилиумов в месяц</p>
                                <span
                                    className='ml-auto block font-[Inter] font-normal text-[12px] loading-[100%] text-[#593983] px-[8px] py-[2px] bg-[#E1D7EF] rounded-[64px]'>NEW</span>
                            </div>


                        </div>
                    </div>


                    <div>
                        <h3 className='text-[#1E112E] font-[Inter] font-normal text-[14px] loading-[100%]'>
                            Лимиты
                        </h3>

                        <div className='flex flex-col gap-[6px] mt-[12px]'>
                            <div className='flex items-center gap-[8px]'>
                                <span className='block w-[6px] h-[6px] bg-[#D9D9E2] rounded-full'></span>
                                <p className='text-[#9494A9] font-[Inter] font-normal text-[14px] loading-[100%]'>100
                                    сообщений в день</p>
                            </div>


                            <div className='flex items-center gap-[8px]'>
                                <span className='block w-[6px] h-[6px] bg-[#D9D9E2] rounded-full'></span>
                                <p className='text-[#9494A9] font-[Inter] font-normal text-[14px] loading-[100%]'>Консилиумы <span
                                    className='text-[#593983]'>только медицинский</span></p>
                                <span
                                    className='ml-auto block font-[Inter] font-normal text-[12px] loading-[100%] text-[#593983] px-[8px] py-[2px] bg-[#E1D7EF] rounded-[64px]'>NEW</span>

                            </div>
                            <div className='flex items-center gap-[8px]'>
                                <span className='block w-[6px] h-[6px] bg-[#D9D9E2] rounded-full'></span>
                                <p className='text-[#9494A9] font-[Inter] font-normal text-[14px] loading-[100%]'>История
                                    на 30 дней</p>
                            </div>


                        </div>
                    </div>


                </div>


            </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9 }} className='mt-[12px] px-[16px] '>
            <div className='border border-[#593983]  mt-[16px] p-[16px] bg-[#FFFFFF] rounded-tl-[20px] rounded-tr-[20px]'>

                <div
                    className='flex items-center gap-[8px] border border-b-[#F4F4F8] pb-[16px] border-t-[transparent] border-l-[transparent] border-r-[transparent]'>
                    <i className='icon icon-ai_fill   transition-all duration-300 text-[19px] bg-[#593983]'></i>
                    <BigText title={'Premium план'}/>
                </div>

                <div className='mt-[16px] flex flex-col gap-[16px]'>
                    <div
                        className='border border-b-[#F4F4F8] pb-[16px] border-t-[transparent] border-l-[transparent] border-r-[transparent] '>
                        <h3 className='text-[#1E112E] font-[Inter] font-normal text-[14px] loading-[100%]'>
                            Что добавляется
                        </h3>

                        <div className='flex flex-col gap-[6px] mt-[12px]'>
                            <div className='flex items-center gap-[8px]'>
                                <span className='block w-[6px] h-[6px] bg-[#593983] rounded-full'></span>
                                <p className='text-[#9494A9] font-[Inter] font-normal text-[14px] loading-[100%]'>Неограниченные
                                    эксперты</p>
                            </div>

                            <div className='flex items-center gap-[8px]'>
                                <span className='block w-[6px] h-[6px] bg-[#593983] rounded-full'></span>
                                <p className='text-[#9494A9] font-[Inter] font-normal text-[14px] loading-[100%]'>Все
                                    типы консилиумов</p>
                                <span
                                    className='ml-auto block font-[Inter] font-normal text-[12px] loading-[100%] text-[#593983] px-[8px] py-[2px] bg-[#E1D7EF] rounded-[64px]'>NEW</span>

                            </div>
                            <div className='flex items-center gap-[8px]'>
                                <span className='block w-[6px] h-[6px] bg-[#593983] rounded-full'></span>
                                <p className='text-[#9494A9] font-[Inter] font-normal text-[14px] loading-[100%]'>Неограниченные
                                    консультации консилиумов</p>
                                <span
                                    className='ml-auto block font-[Inter] font-normal text-[12px] loading-[100%] text-[#593983] px-[8px] py-[2px] bg-[#E1D7EF] rounded-[64px]'>NEW</span>

                            </div>
                            <div className='flex items-center gap-[8px]'>
                                <span className='block w-[6px] h-[6px] bg-[#593983] rounded-full'></span>
                                <p className='text-[#9494A9] font-[Inter] font-normal text-[14px] loading-[100%]'>Приоритетная
                                    поддержка</p>
                            </div>
                            <div className='flex items-center gap-[8px]'>
                                <span className='block w-[6px] h-[6px] bg-[#593983] rounded-full'></span>
                                <p className='text-[#9494A9] font-[Inter] font-normal text-[14px] loading-[100%]'>Экспорт
                                    данных</p>
                            </div>


                            <div className='flex items-center gap-[8px]'>
                                <span className='block w-[6px] h-[6px] bg-[#593983] rounded-full'></span>
                                <p className='text-[#9494A9] font-[Inter] font-normal text-[14px] loading-[100%]'>Продвинутая
                                    аналитика</p>
                            </div>


                            <div className='flex items-center gap-[8px]'>
                                <span className='block w-[6px] h-[6px] bg-[#593983] rounded-full'></span>
                                <p className='text-[#9494A9] font-[Inter] font-normal text-[14px] loading-[100%]'>Ранний
                                    доступ к новым функциям</p>
                            </div>


                        </div>
                    </div>


                    <div>
                        <h3 className='text-[#1E112E] font-[Inter] font-normal text-[14px] loading-[100%]'>
                            Статистика использования
                        </h3>

                        <div className='flex flex-col gap-[6px] mt-[12px]'>


                            <div className='flex items-center gap-[8px]'>
                                <span className='block w-[6px] h-[6px] bg-[#593983] rounded-full'></span>
                                <p className='text-[#9494A9] font-[Inter] font-normal text-[14px] loading-[100%]'>Сообщения <span
                                    className='text-[#593983]'>847 из 3000</span></p>

                            </div>

                            <div className='flex items-center gap-[8px]'>
                                <span className='block w-[6px] h-[6px] bg-[#593983] rounded-full'></span>
                                <p className='text-[#9494A9] font-[Inter] font-normal text-[14px] loading-[100%]'>Консилиумы <span
                                    className='text-[#593983]'>2 из ∞</span></p>
                                <span
                                    className='ml-auto block font-[Inter] font-normal text-[12px] loading-[100%] text-[#593983] px-[8px] py-[2px] bg-[#E1D7EF] rounded-[64px]'>NEW</span>


                            </div>

                            <div className='flex items-center gap-[8px]'>
                                <span className='block w-[6px] h-[6px] bg-[#593983] rounded-full'></span>
                                <p className='text-[#9494A9] font-[Inter] font-normal text-[14px] loading-[100%]'>Эксперты <span
                                    className='text-[#593983]'>8 из ∞</span></p>

                            </div>

                            <div className='flex items-center gap-[8px]'>
                                <span className='block w-[6px] h-[6px] bg-[#593983] rounded-full'></span>
                                <p className='text-[#9494A9] font-[Inter] font-normal text-[14px] loading-[100%]'>Совещания <span
                                    className='text-[#593983]'>5 из ∞</span></p>

                            </div>


                        </div>
                    </div>


                </div>

            </div>
        </motion.div>


        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9 }} className=' mx-[16px] p-[16px] bg-[#150628] rounded-bl-[20px] rounded-br-[20px]'>
            <div className='flex items-center gap-[8px] '>
                <BigText title={'Варианты подписки'} className='text-[#FFFFFF]'/>
            </div>

            <div className={'mt-[16px] gap-[12px] flex flex-col'}>
                <div className='rounded-[16px] py-[2px] px-[2px]
                 border-2 border-[#C89EFF] '>
                    <div className='bg-[#FFFFFF] rounded-[14px] px-[16px] py-[12px] '>
                        <div className='flex items-center gap-[10px] justify-between '>
                            <p className='font-medium text-[16px] loading-[100%] text-[#000000]'>Месячная</p>
                            <p className='font-normal text-[16px] loading-[100%] text-[#000000]'>299₽<span
                                className='text-[#9494A9]'>/месяц</span></p>
                        </div>

                        <div className='flex flex-col gap-[6px] mt-[12px]'>
                            <div className='flex items-center gap-[8px]'>
                                <span className='block w-[6px] h-[6px] bg-[#593983] rounded-full'></span>
                                <p className='text-[#9494A9] font-[Inter] font-normal text-[14px] loading-[100%]'>Полный
                                    доступ</p>
                            </div>
                            <div className='flex items-center gap-[8px]'>
                                <span className='block w-[6px] h-[6px] bg-[#593983] rounded-full'></span>
                                <p className='text-[#9494A9] font-[Inter] font-normal text-[14px] loading-[100%]'>Отмена
                                    в любое время</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-[#FFFFFF] rounded-[14px] px-[16px] py-[12px] '>
                    <div className='flex items-center gap-[10px] justify-between '>
                        <p className='font-medium text-[16px] loading-[100%] text-[#000000]'>Годовая</p>
                        <p className='font-normal text-[16px] loading-[100%] text-[#000000]'>2390₽<span
                            className='text-[#9494A9]'>/год</span> <span
                            className='ml-[8px]  font-[Inter] font-normal text-[12px] loading-[100%] text-[#FF5757] px-[8px] py-[2px] bg-[#FFDEDE] rounded-[64px]'>-33%</span>
                        </p>
                    </div>

                    <div className='flex flex-col gap-[6px] mt-[12px]'>
                        <div className='flex items-center gap-[8px]'>
                            <span className='block w-[6px] h-[6px] bg-[#593983] rounded-full'></span>
                            <p className='text-[#9494A9] font-[Inter] font-normal text-[14px] loading-[100%]'>Полный
                                доступ</p>
                        </div>
                        <div className='flex items-center gap-[8px]'>
                            <span className='block w-[6px] h-[6px] bg-[#593983] rounded-full'></span>
                            <p className='text-[#9494A9] font-[Inter] font-normal text-[14px] loading-[100%]'>2 месяца
                                бесплатно</p>
                        </div>
                    </div>
                </div>


                <div className='rounded-[16px]
                 border-2 border-[#C89EFF]'>
                    <div className='bg-[#FFFFFF] rounded-[14px] px-[16px] py-[12px] '>
                        <div className='flex items-center gap-[10px] justify-between '>
                            <p className='font-medium text-[16px] loading-[100%] text-[#593983]'>Семейная</p>
                            <p className='font-normal text-[16px] loading-[100%] text-[#000000]'>500₽<span
                                className='text-[#9494A9]'>/месяц</span></p>
                        </div>

                        <div className='flex flex-col gap-[6px] mt-[12px]'>
                            <div className='flex items-center gap-[8px]'>
                                <span className='block w-[6px] h-[6px] bg-[#593983] rounded-full'></span>
                                <p className='text-[#9494A9] font-[Inter] font-normal text-[14px] loading-[100%]'>До 5
                                    аккаунтов</p>
                            </div>
                            <div className='flex items-center gap-[8px]'>
                                <span className='block w-[6px] h-[6px] bg-[#593983] rounded-full'></span>
                                <p className='text-[#9494A9] font-[Inter] font-normal text-[14px] loading-[100%]'>Общие
                                    консилиумы</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </motion.div>


        <motion.div  className='mt-[12px] px-[16px]'>
            <PaymentHistoryBlock/>
        </motion.div>

        <div className='  rounded-tl-[16px] rounded-tr-[16px]   border border-[#F4F4F8]   mt-[24px] px-[16px]  pt-[16px] pb-[20px] bg-[#FFFFFF] '>


                <div className='flex gap-[4px] items-center'>
                    <FloatingInput value={promoCode} onChange={(e)=>setPromoCode(e.target.value)} label={'Промокод'}/>
                    <button
                        className='w-[44px] group hover:bg-[#A281CD] transition duration-300 min-w-[44px] h-[44px] cursor-pointer bg-[#FFFFFF] rounded-full border flex justify-center items-center border-[#A281CD52]'>
                        <i className='icon icon-arrow group-hover:bg-[white] text-[14px] bg-[#593983]'></i>
                    </button>
                </div>
                <button className='blue-gradient group mt-[12px] w-full cursor-pointer rounded-full py-[13px] px-[20px] gap-[9px] flex items-center justify-between '>
                    <p className='font-[Inter] text-[#FFFFFF] text-[14px] transition duration-300 group-hover:text-[#593983] loading-[100%]'>Оформить подписку</p>
                    <p className='font-[Inter] text-[#FFFFFF] text-[14px] transition duration-300 group-hover:text-[#593983] loading-[100%]'>299₽<span className='text-[#FFFFFF80] transition duration-300 group-hover:text-[#593983]'>/месяц</span></p>
                </button>



        </div>

        <div className='absolute w-full left-[0] top-[0] z-[-1]'>
            <img className='w-full' src={pageDecor} alt=""/>
        </div>

    </div>;
};

export default PremiumSub;