import PageHeading from "@/components/shared/PageHeading";
import {FC, useState} from "react";

import avatar from "@pages/Onboarding/img/avatar.png";
import BorderButton from "@components/ui/BorderButton.tsx";
import BlueGradientButton from "@components/ui/BlueGradientButton.tsx";
import BigText from "@components/shared/BigText.tsx";
import {ToggleSwitch} from "@/components/shared/ToggleSwitch";
import CustomSlider from "@components/ui/CustomSlider.tsx";
import FloatingSelect from "@components/ui/FloatingSelect.tsx";
import { SegmentedSwitch } from "@/components/shared/SegmentedSwitch";
import { ColorPicker } from "@/components/shared/ColorPicker";
import { motion } from "framer-motion";
import NotificationSettings from "@/components/shared/NotificationSettings";
import PrivacySettings from "@/components/shared/PrivacySettings";
import SupportSection from "@/components/shared/SupportSection";
import {ScrollToTop} from "@components/shared/ScrollToTop.tsx";
import {Link} from "react-router-dom";


const CreateExpertStep4: FC = () => {
    const [active, setActive] = useState<string | null>(null);
    const [language, setLanguage] = useState('')

    const categories = ["Планирование дня", "Спорт", "Рацион", 'Финансовый вопрос', 'Планирование дня', "Восстановление", "Рацион", 'Финансовый вопрос', 'Планирование дня', "Восстановление"];

    return <div
        className='min-h-[725px]   relative overflow-hidden  pt-[24px]  '>
        <ScrollToTop />


        {/*Заголовок*/}
        <motion.div initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 ,delay:.6 }} className='flex  items-center gap-[17px] mx-[16px]'>

            <PageHeading classNameSubtitle={'mt-[12px]'}
                         title="Настройки"/>

        </motion.div>


        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }} className=' border border-[#F4F4F8] mx-[16px]   mt-[35px] p-[16px] bg-[#FFFFFF] rounded-[20px]'>
            <div className=' pb-[24px] '>

                <div className='  pb-[14px]  flex items-center gap-[14px]'>
                    <Link to={'/onboarding/home'} className='flex'>
                        <img className='w-[64px] min-w-[64px] rounded-full  h-[64px]' src={avatar} alt=""/>
                    </Link>
                    <div className='w-full'>
                        <h3 className='font-medium text-[#000000] text-[20px] loading-[100%]'>Степан Романов</h3>

                        <div className='flex w-full mt-[7px] items-center gap-[10px] justify-between'>
                            <p className='font-normal font-[Inter] text-[14px] leading-[100%]  text-[#9494A9]'>@rfgjiuop</p>
                            <p className='font-normal font-[Inter] text-[14px] leading-[100%]  text-[#9494A9]'>с
                                11.05.2025</p>
                        </div>

                    </div>
                </div>
                <BorderButton className='mt-[14px] h-[44px]' href={'/'}>
                    <i className='icon icon-pencil_2_fill text-[14px] bg-[#593983]'></i>
                    <span>Изменить профиль</span>
                </BorderButton>
            </div>

            <div className='p-[12px] bg-[#F5F5F8] rounded-[12px]  flex items-center justify-between'>
                <div className='flex items-center gap-[10px]'>
                    <i className='icon icon-profile_fill  text-[20px] bg-[#9494A9]'></i>
                    <p className='font-[Inter] text-[#1E112E] font-normal text-[14px] loading-[100%]'><span
                        className='text-[#9494A9]'>Подписка:</span> Free</p>
                </div>
                <div className='max-w-max'>
                    <BlueGradientButton href={'/onboarding/premiumSub'} className='py-[9px] px-[16px]'>
                        <span>Улучшить</span>
                    </BlueGradientButton>
                </div>

            </div>

        </motion.div>


        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }} className='  mt-[12px] border border-[#F4F4F8] mx-[16px]  mt-[16px] py-[14px] px-[16px] bg-[#FFFFFF] rounded-[20px]'>
            <div className='border border-b-[#F4F4F8] pb-[18px] border-t-[transparent] border-l-[transparent] border-r-[transparent]'>
                <div className='flex items-center gap-[8px]'>
                    <i className='icon icon-bell_ringing_fill  transition-all duration-300 text-[20px] bg-[#593983]'></i>
                    <BigText title={'Быстрые действия'}/>
                </div>

            </div>

            <div className='flex items-center justify-between border border-b-[#F4F4F8] pb-[14px] pt-[14px] border-t-[transparent] border-l-[transparent] border-r-[transparent]'>
                <p className='font-[Inter] text-[#1E112E] font-normal text-[14px] loading-[100%]'>Автопредложения</p>
                <ToggleSwitch/>
            </div>

            <div className=' border border-b-[#F4F4F8] pb-[14px] pt-[14px] border-t-[transparent] border-l-[transparent] border-r-[transparent]'>
                <p className='font-[Inter] text-[#1E112E] font-normal text-[14px] loading-[100%]'>Что вас
                    интересует?</p>

                <div className="mt-[14px] flex items-center gap-[8px] flex-wrap">
                    {categories.map((item,index) => (
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

            <div className=' pb-[14px] pt-[14px] '>
                <p className='font-[Inter] text-[#1E112E] font-normal text-[14px] loading-[100%]'>Эксперты</p>

                <div className='mt-[14px]'>
                    <BorderButton as={"a"} href={'/onboarding/myExperts'} className={'h-[32px]'}>
                        <span>Настройки экспертов</span>
                    </BorderButton>
                </div>
            </div>

        </motion.div>




        <NotificationSettings />

        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }} className='flex mx-[16px]  border border-[#F4F4F8]  flex-col mt-[36px]  py-[14px] px-[16px] bg-[#FFFFFF] rounded-[20px]'>
            <div className=' pb-[18px] '>
                <div className='flex items-center gap-[8px]'>
                    <i className='icon icon-ai_fill  transition-all duration-300 text-[20px] bg-[#593983]'></i>
                    <BigText title={'AI и эксперты'}/>
                </div>

            </div>

            <div className=' flex flex-col gap-[14px]'>
                <CustomSlider startValue={1} title={'Уровень детализации ответов'}/>

                <CustomSlider startValue={9} title={'Частота инициативных сообщений'}/>

                <CustomSlider clues={true} clueLeft={'Формальный'} clueRight={'Дружеский'} startValue={1} title={'Стиль общения'}/>


                <FloatingSelect
                    label="Язык интерфейса"
                    value={
                    language}
                    onChange={(e) => setLanguage(e.target.value)}
                    options={[
                        {value: 'en', label: 'English '},
                        {value: 'ru', label: 'Русский'},
                        {value: 'ru', label: 'Русский'},
                    ]}
                />
            </div>

        </motion.div>



        <PrivacySettings />
        <div className='flex mx-[16px]  border border-[#F4F4F8]  flex-col mt-[36px]  py-[14px] px-[16px] bg-[#FFFFFF] rounded-[20px]'>
            <div className='flex items-center gap-[8px]'>
                <i className='icon icon-palette_fill  transition-all duration-300 text-[20px] bg-[#593983]'></i>
                <BigText title={'Внешний вид'}/>
            </div>

            <div className='border mt-[18px] border-b-[#F4F4F8] pb-[14px] border-t-[transparent] border-l-[transparent] border-r-[transparent]'>
                <SegmentedSwitch
                    title="Тема приложения"
                    options={["Светлая", "Темная", "Авто"]}
                    onChange={(val) => console.log("Выбрано:", val)}
                />
            </div>


            <div className='mt-[14px]'>
                <CustomSlider clues={true} clueRight={'Маленький'} clueLeft={'Большой'} startValue={1} title={'Размер шрифта'}/>

            </div>

            <div className='pt-[14px] '>
                <p className='font-[Inter] text-[#1E112E] font-normal text-[14px] loading-[100%]'>Цветовые акценты</p>



                <ColorPicker/>


            </div>

        </div>




        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }} className='flex mx-[16px]  border border-[#F4F4F8]  flex-col mt-[12px]  py-[14px] px-[16px] bg-[#FFFFFF] rounded-[20px]'>
            <div className='flex items-center gap-[8px]'>
                <i className='icon icon-palette_fill  transition-all duration-300 text-[20px] bg-[#593983]'></i>
                <BigText title={'Подписка'}/>
            </div>


            <div className='border  border-b-[#F4F4F8] pb-[18px] border-t-[transparent] border-l-[transparent] border-r-[transparent]'>
                <div className='p-[12px] bg-[#F5F5F8]  rounded-[12px] mt-[18px]  flex items-center justify-between'>
                    <div className='flex items-center gap-[10px]'>
                        <i className='icon icon-ai_fill  text-[20px] bg-[#9494A9]'></i>
                        <p className='font-[Inter] text-[#1E112E] font-normal text-[14px] loading-[100%]'><span
                            className='text-[#9494A9]'>Текущий план: </span> Free</p>
                    </div>
                    <div className='font-[Inter] text-[#593983] font-normal text-[14px] loading-[100%]'>
                        Управление
                    </div>

                </div>

            </div>

            <div className='flex mt-[14px] flex-col gap-[14px]'>
                <Link to={'/onboarding/progress'} className='p-[7px] text-[14px] font-[Inter] font-normal rounded-full border border-[#A281CD52]
                cursor-pointer transition-colors flex justify-center duration-200 bg-[#FFFFFF] text-[#593983] hover:bg-[#593983] hover:text-white'>
                    Статистика использования
                </Link>

                <div className='p-[7px] text-[14px] font-[Inter] font-normal rounded-full border border-[#A281CD52]
                cursor-pointer transition-colors flex justify-center duration-200 bg-[#FFFFFF] text-[#593983] hover:bg-[#593983] hover:text-white'>
                    История платежей
                </div>


            </div>

        </motion.div>


        <SupportSection />


    </div>
};

export default CreateExpertStep4;