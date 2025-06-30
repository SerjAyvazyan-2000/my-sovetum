import PageHeading from "@/components/shared/PageHeading";
import {FC, useState} from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Link} from "react-router-dom";
import profileImg from "./img/profileImg.png";
import BigText from "@components/shared/BigText.tsx";
import SmallText from "@components/shared/SmallText.tsx";
import profileDecor from "./img/profileDecor.png";
import BorderButton from "@/components/ui/BorderButton";
import BlueGradientButton from "@components/ui/BlueGradientButton.tsx";
import pageDecor3 from "@pages/Onboarding/img/pageDecor3.png";
import avatar2 from "@pages/Onboarding/img/avatar2.png";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import {ToggleSwitch} from "@components/shared/ToggleSwitch.tsx";
import CustomSlider from "@components/ui/CustomSlider.tsx";
import FloatingInput from "@components/ui/FloatingInput.tsx";
import {ScrollToTop} from "@components/shared/ScrollToTop.tsx";
import { motion } from "framer-motion";
import PopUpShare from "@components/shared/PopUpShare.tsx";
import StatisticsBlock from "@/components/shared/StatisticsBlock";


const ExpertProfile: FC = () => {


    const categories = ["Рацион", "Финансовый вопрос", "Рацион", 'Финансовый вопрос', 'Планирование дня', "Восстановление", "Рацион", 'Финансовый вопрос', 'Планирование дня', "Восстановление"];
    const [active, setActive] = useState<string | null>(null);
    const [availability, setAvailability] = useState<string>('');
    const [modalShare, setModalShare] = useState<boolean>(false)

    const handleShareModal =()=>{
        setModalShare(!modalShare)
    }


    return <div className='relative z-[2] overflow-hidden pb-[24px] pt-[24px] bg-[#FFFFFF]  '>

        <ScrollToTop />

        {/*Заголовок*/}
        <motion.div initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 ,delay:.8 }} className='flex items-center gap-[17px] mx-[16px]'>
            <Link className='flex' to={'/onboarding/chatWithExpert'}>
                <i className='icon bg-[#9494A9] hover:bg-[#593983] transition duration-300 icon-arrow bg-[#9494A9] cursor-pointer text-[18px] rotate-[180deg]'></i>
            </Link>
            <div>
                <PageHeading title="Профиль эксперта"/>
            </div>


            <div className=' ml-auto '>
                <i onClick={handleShareModal} className='icon cursor-pointer icon-setting text-[15px] transition-all duration-300 bg-[#9494A9] hover:bg-[#593983]'></i>
            </div>

        </motion.div>

        <div className='mx-[16px] mt-[36px] '>


            <motion.div initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }} className='border border-[#F4F4F8] overflow-hidden px-[16px] relative z-[2]   bg-[#FFFFFF] rounded-[20px]'>

                <div className='w-[128px] m-auto h-[128px] pb-[20px] pt-[14px]'>
                    <img src={profileImg} alt=""/>
                </div>

                <div className='pb-[16px]  flex items-center gap-[12px]'>

                    <div className='w-full mt-[20px]'>
                        <div className='flex w-full items-center gap-[10px] justify-between'>
                            <BigText title='Анна Маркетолог'/>
                            <div className='flex items-center gap-[5px] bg-[#FFF8E2] py-[3px] px-[7px] rounded-[16px]'>
                                <i className='icon icon-star text-[11px] bg-[#FFD650]'></i>
                                <p className='font-normal font-[Inter] text-[12px] leading-[140%] text-[#1E112E]'>5.0</p>
                            </div>
                        </div>

                        <div className='flex w-full  items-center gap-[10px] justify-between'>
                            <SmallText text={'Специалист по SMM'}/>
                        </div>


                        <div className='flex flex-col gap-[8px] mt-[24px]'>

                            <BlueGradientButton
                                href={'/'}
                                className='h-[44px] flex gap-[10px] group'
                            >

                                <i className='icon icon-send_fill group-hover:bg-[#593983] transition-all duration-300 text-[15px] bg-[#FFFFFF]'></i>
                                <span>Написать сообщение</span>

                            </BlueGradientButton>

                            <BorderButton
                                href={'/'}
                                as="button"
                                className='h-[44px]'
                            >


                                <i className='icon icon-plus  transition-all duration-300 text-[15px] bg-[#593983]'></i>
                                Пригласить на совещание

                            </BorderButton>

                        </div>


                    </div>


                </div>


                <div className='absolute z-[-1] left-[0] top-[0]'>
                    <img src={profileDecor} alt=""/>
                </div>
            </motion.div>



            <StatisticsBlock />


            <motion.div initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }} className='mt-[12px] bg-[#FFFFFF] px-[16px] pt-[16px] pb-[20px] rounded-[20px] border border-[#F4F4F8] '>

                <div className='flex items-center gap-[8px] '>
                    <i className='icon icon-document_fill   transition-all duration-300 text-[19px] bg-[#593983]'></i>
                    <BigText title={'Описание и специализация'}/>
                </div>

                <div className='mt-[20px] flex flex-col gap-[20px]'>
                    <div className='border border-b-[#F4F4F8] pb-[20px] flex items-center gap-[8px]
                     border-t-[transparent] border-l-[transparent] border-r-[transparent] '>
                        <div className='flex flex-col  gap-[12px]'>
                            <h3 className='text-[#1E112E] font-[Inter] font-normal text-[14px] loading-[100%]'>Подробное
                                описание эксперта</h3>
                            <p className='text-[#9494A9] font-[Inter] font-normal text-[12px] loading-[100%]'>
                                Сверхновая, даже при наличии сильных аттракторов, отталкивает экситон. Струя, если
                                рассматривать процессы в рамках специальной теории относительности, возбуждает
                                циркулирующий электрон. Силовое поле поглощает погранслой. Многочисленные расчеты
                                предсказывают, а эксперименты подтверждают, что плазменное образование тормозит пульсар.
                            </p>
                        </div>


                    </div>

                    <div
                        className=' border border-b-[#F4F4F8] pb-[20px]  border-t-[transparent] border-l-[transparent] border-r-[transparent]'>
                        <p className='font-[Inter] text-[#1E112E] font-normal text-[14px] loading-[100%]'>Области
                            экспертизы</p>

                        <div className="mt-[12px] flex items-center gap-[8px] flex-wrap">
                            {categories.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => setActive(item)}
                                    className={`px-[8px] py-[6px] text-[12px] font-[Inter] font-normal rounded-full border border-[rgba(162,129,205,0.32)] whitespace-nowrap cursor-pointer transition-colors duration-200
            ${
                                        active === item
                                            ? "bg-[#593983] text-white"
                                            : "bg-[#FFFFFF] text-[#593983] hover:bg-[#593983] hover:text-white"
                                    }
          `}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>

                    </div>

                    <div className='border border-b-[#F4F4F8] pb-[20px] flex items-center gap-[8px]
                     border-t-[transparent] border-l-[transparent] border-r-[transparent] '>
                        <div className='flex flex-col  gap-[12px]'>
                            <h3 className='text-[#1E112E] font-[Inter] font-normal text-[14px] loading-[100%]'>Методы
                                работы</h3>
                            <p className='text-[#9494A9] font-[Inter] font-normal text-[12px] loading-[100%]'>
                                Сверхновая, даже при наличии сильных аттракторов, отталкивает экситон. Струя, если
                                рассматривать процессы в рамках специальной теории относительности
                            </p>
                        </div>


                    </div>


                    <div className='border border-b-[#F4F4F8] pb-[20px] flex items-center gap-[8px]
                     border-t-[transparent] border-l-[transparent] border-r-[transparent] '>
                        <div className='flex flex-col  gap-[12px]'>
                            <h3 className='text-[#1E112E] font-[Inter] font-normal text-[14px] loading-[100%]'>Стиль
                                общения</h3>
                            <p className='text-[#9494A9] font-[Inter] font-normal text-[12px] loading-[100%]'>
                                Сверхновая, даже при наличии сильных аттракторов, отталкивает экситон. Струя, если
                                рассматривать процессы в рамках специальной теории относительности
                            </p>
                        </div>


                    </div>

                </div>

            </motion.div>


            <motion.div initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }}  className='mt-[12px] bg-[#FFFFFF] px-[16px] pt-[16px] pb-[20px] rounded-[20px] border border-[#F4F4F8] '>

                <div className='flex items-center gap-[8px] '>
                    <i className='icon icon-comment_2_fill   transition-all duration-300 text-[19px] bg-[#593983]'></i>
                    <BigText title={'Примеры взаимодействия'}/>
                    <div className='custom-swiper-pagination ml-auto'></div>
                </div>

                <Swiper
                    spaceBetween={8}
                    modules={[Pagination]}
                    pagination={{
                        el: '.custom-swiper-pagination',
                        clickable: true,
                    }}

                    breakpoints={{
                        430: {
                            slidesPerView: 1,
                        },
                        320: {
                            slidesPerView: 1,
                        },
                    }}
                    className=" mt-[24px]">
                    <SwiperSlide>
                        <div className='  mt-[20px] flex flex-col gap-[8px]  '>
                            <div className='flex gap-[8px] mt-[8px] justify-end items-end'>
                                <p className='px-[12px] leading-[100%] py-[8px] rounded-bl-[12px] rounded-tl-[12px] rounded-br-[2px] rounded-tr-[12px] bg-[#F4ECFF] text-[14px] font-normal font-[Inter]  text-[#1E112E]'>
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='  mt-[20px] flex flex-col gap-[8px]  '>
                            <div className='flex gap-[8px] mt-[8px] justify-end items-end'>
                                <p className='px-[12px] leading-[100%] py-[8px] rounded-bl-[12px] rounded-tl-[12px] rounded-br-[2px] rounded-tr-[12px] bg-[#F4ECFF] text-[14px] font-normal font-[Inter]  text-[#1E112E]'>
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
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='  mt-[20px] flex flex-col gap-[8px]  '>
                            <div className='flex gap-[8px] mt-[8px] justify-end items-end'>
                                <p className='px-[12px] leading-[100%] py-[8px] rounded-bl-[12px] rounded-tl-[12px] rounded-br-[2px] rounded-tr-[12px] bg-[#F4ECFF] text-[14px] font-normal font-[Inter]  text-[#1E112E]'>
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
                    </SwiperSlide>
                </Swiper>

            </motion.div>


            <motion.div initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }}  className=' mt-[12px] border border-[#F4F4F8]   mt-[16px] py-[14px] px-[16px] bg-[#FFFFFF] rounded-[20px]'>
                <div className=' pb-[18px] '>
                    <div className='flex items-center gap-[8px]'>
                        <i className='icon icon-settings_3_fill transition-all duration-300 text-[20px] bg-[#593983]'></i>
                        <BigText title={'Настройки'}/>
                    </div>

                </div>

                <div className='flex items-center justify-between border border-b-[#F4F4F8] pb-[14px]  border-t-[transparent] border-l-[transparent] border-r-[transparent]'>
                    <p className='font-[Inter] text-[#1E112E] font-normal text-[14px] loading-[100%]'>Уведомления от
                        эксперта</p>
                    <ToggleSwitch/>
                </div>


                <div className='mt-[14px] flex flex-col gap-[14px]'>
                    <CustomSlider startValue={9} title={'Частота инициативных сообщений'}/>

                    <CustomSlider startValue={9} title={'Уровень детализации ответов'}/>


                    <FloatingInput
                        onChange={(e) => setAvailability(e.target.value)}
                        icon={'icon-time_line'}
                        label={'Время доступности'}
                        value={availability}
                        classNamPlaceholder='text-[#D9D9E2]'
                    />

                </div>


            </motion.div>

        </div>

        <div className='absolute w-full left-[0] top-[0] z-[-1]'>
            <img className='w-full' src={pageDecor3} alt=""/>
        </div>

        <PopUpShare onClose={handleShareModal} open={modalShare}/>

    </div>;
};

export default ExpertProfile;