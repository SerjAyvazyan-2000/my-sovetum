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


const CreateExpertStep4: FC = () => {
    const [active, setActive] = useState<string | null>(null);
    const [language, setLanguage] = useState('')

    const categories = ["Планирование дня", "Спорт", "Рацион", 'Финансовый вопрос', 'Планирование дня', "Восстановление", "Рацион", 'Финансовый вопрос', 'Планирование дня', "Восстановление"];

    return <div
        className='min-h-[725px]   relative overflow-hidden  pt-[24px]  '>

        {/*Заголовок*/}
        <div className='flex  items-center gap-[17px] mx-[16px]'>

            <PageHeading classNameSubtitle={'mt-[12px]'}
                         title="Настройки"/>

        </div>


        <div className=' border border-[#F4F4F8] mx-[16px]   mt-[35px] p-[16px] bg-[#FFFFFF] rounded-[20px]'>
            <div className=' pb-[24px] '>

                <div className='  pb-[14px]  flex items-center gap-[14px]'>
                    <div className='flex'>
                        <img className='w-[64px] min-w-[64px] rounded-full  h-[64px]' src={avatar} alt=""/>
                    </div>
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
                    <BlueGradientButton className='py-[9px] px-[16px]'>
                        <span>Улучшить</span>
                    </BlueGradientButton>
                </div>

            </div>

        </div>


        <div
            className='  mt-[12px] border border-[#F4F4F8] mx-[16px]  mt-[16px] py-[14px] px-[16px] bg-[#FFFFFF] rounded-[20px]'>
            <div
                className='border border-b-[#F4F4F8] pb-[18px] border-t-[transparent] border-l-[transparent] border-r-[transparent]'>
                <div className='flex items-center gap-[8px]'>
                    <i className='icon icon-bell_ringing_fill  transition-all duration-300 text-[20px] bg-[#593983]'></i>
                    <BigText title={'Быстрые действия'}/>
                </div>

            </div>

            <div
                className='flex items-center justify-between border border-b-[#F4F4F8] pb-[14px] pt-[14px] border-t-[transparent] border-l-[transparent] border-r-[transparent]'>
                <p className='font-[Inter] text-[#1E112E] font-normal text-[14px] loading-[100%]'>Автопредложения</p>
                <ToggleSwitch/>
            </div>

            <div
                className=' border border-b-[#F4F4F8] pb-[14px] pt-[14px] border-t-[transparent] border-l-[transparent] border-r-[transparent]'>
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
                    <BorderButton href={'/'} className={'h-[32px]'}>
                        <span>Настройки экспертов</span>
                    </BorderButton>
                </div>
            </div>

        </div>


        <div className='  mt-[12px] border border-[#F4F4F8] mx-[16px]  mt-[16px] py-[14px] px-[16px] bg-[#FFFFFF] rounded-[20px]'>
            <div className=' pb-[18px] '>
                <div className='flex items-center gap-[8px]'>
                    <i className='icon icon-bell_ringing_fill  transition-all duration-300 text-[20px] bg-[#593983]'></i>
                    <BigText title={'Уведомления'}/>
                </div>

            </div>

            <div
                className='flex items-center justify-between border border-b-[#F4F4F8] pb-[14px] pt-[14px] border-t-[transparent] border-l-[transparent] border-r-[transparent]'>
                <p className='font-[Inter] text-[#1E112E] font-normal text-[14px] loading-[100%]'>Push-уведомления</p>
                <ToggleSwitch/>
            </div>

            <div
                className='flex items-center justify-between border border-b-[#F4F4F8] pb-[14px] pt-[14px] border-t-[transparent] border-l-[transparent] border-r-[transparent]'>
                <p className='font-[Inter] text-[#1E112E] font-normal text-[14px] loading-[100%]'>Сообщения от
                    экспертов</p>
                <ToggleSwitch/>
            </div>


            <div
                className='flex items-center justify-between border border-b-[#F4F4F8] pb-[14px] pt-[14px] border-t-[transparent] border-l-[transparent] border-r-[transparent]'>
                <p className='font-[Inter] text-[#1E112E] font-normal text-[14px] loading-[100%]'>Напоминания о
                    целях</p>
                <ToggleSwitch/>
            </div>


            <div
                className='flex items-center justify-between border border-b-[#F4F4F8] pb-[14px] pt-[14px] border-t-[transparent] border-l-[transparent] border-r-[transparent]'>
                <p className='font-[Inter] text-[#1E112E] font-normal text-[14px] loading-[100%]'>Результаты
                    совещаний/консилиумов</p>
                <ToggleSwitch/>
            </div>

            <div
                className='flex items-center justify-between border border-b-[#F4F4F8] pb-[14px] pt-[14px] border-t-[transparent] border-l-[transparent] border-r-[transparent]'>
                <p className='font-[Inter] text-[#1E112E] font-normal text-[14px] loading-[100%]'>Еженедельная
                    аналитика</p>
                <ToggleSwitch/>
            </div>
            <div className='flex items-center justify-between  pt-[14px] '>
                <p className='font-[Inter] text-[#1E112E] font-normal text-[14px] loading-[100%]'>Маркетинговые
                    уведомления</p>
                <ToggleSwitch/>
            </div>


        </div>


        <div className='flex mx-[16px]  border border-[#F4F4F8]  flex-col mt-[36px]  py-[14px] px-[16px] bg-[#FFFFFF] rounded-[20px]'>
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

        </div>


        <div className='flex mx-[16px]  border border-[#F4F4F8]  flex-col mt-[36px]  py-[14px] px-[16px] bg-[#FFFFFF] rounded-[20px]'>
            <div className='flex items-center gap-[8px]'>
                <i className='icon icon-message_2_fill  transition-all duration-300 text-[20px] bg-[#593983]'></i>
                <BigText title={'Данные и приватность'}/>
            </div>

            <div className='flex mt-[18px] flex-col gap-[14px]'>
                <div className='p-[7px] text-[14px] font-[Inter] font-normal rounded-full border border-[#A281CD52]
                cursor-pointer transition-colors flex justify-center duration-200 bg-[#FFFFFF] text-[#593983] hover:bg-[#593983] hover:text-white'>
                    Настройки приватности
                </div>

                <div className='p-[7px] text-[14px] font-[Inter] font-normal rounded-full border border-[#A281CD52]
                cursor-pointer transition-colors flex justify-center duration-200 bg-[#FFFFFF] text-[#593983] hover:bg-[#593983] hover:text-white'>
                    Экспорт всех данных
                </div>
                <div className='p-[7px] text-[14px] font-[Inter] font-normal rounded-full border border-[#A281CD52]
                cursor-pointer transition-colors flex justify-center duration-200 bg-[#FFFFFF] text-[#593983] hover:bg-[#593983] hover:text-white'>
                    Согласия на обработку данных
                </div>

                <div className='p-[7px] text-[14px] font-[Inter] font-normal rounded-full border border-[#FF4D4D52]
                cursor-pointer transition-colors flex justify-center duration-200 bg-[#FFFFFF] text-[#FF4D4D] hover:bg-[#FF4D4D] hover:text-[white]'>
                    Удаление истории диалогов
                </div>

            </div>

        </div>

        <div className='flex mx-[16px]  border border-[#F4F4F8]  flex-col mt-[36px]  py-[14px] px-[16px] bg-[#FFFFFF] rounded-[20px]'>
            <div className='flex items-center gap-[8px]'>
                <i className='icon icon-palette_fill  transition-all duration-300 text-[20px] bg-[#593983]'></i>
                <BigText title={'Внешний вид'}/>
            </div>

            <div className='border border-b-[#F4F4F8] pb-[14px] border-t-[transparent] border-l-[transparent] border-r-[transparent]'>
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




        <div className='flex mx-[16px]  border border-[#F4F4F8]  flex-col mt-[12px]  py-[14px] px-[16px] bg-[#FFFFFF] rounded-[20px]'>
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
                <div className='p-[7px] text-[14px] font-[Inter] font-normal rounded-full border border-[#A281CD52]
                cursor-pointer transition-colors flex justify-center duration-200 bg-[#FFFFFF] text-[#593983] hover:bg-[#593983] hover:text-white'>
                    Статистика использования
                </div>

                <div className='p-[7px] text-[14px] font-[Inter] font-normal rounded-full border border-[#A281CD52]
                cursor-pointer transition-colors flex justify-center duration-200 bg-[#FFFFFF] text-[#593983] hover:bg-[#593983] hover:text-white'>
                    История платежей
                </div>


            </div>

        </div>


        <div className='flex mx-[16px]  border border-[#F4F4F8]  flex-col mt-[12px]  py-[14px] px-[16px] bg-[#FFFFFF] rounded-[20px]'>
            <div className='flex items-center gap-[8px]'>
                <i className='icon icon-question_fill  transition-all duration-300 text-[20px] bg-[#593983]'></i>
                <BigText title={'Поддержка'}/>
            </div>

            <div className='flex mt-[18px] flex-col gap-[14px]'>
                <div className='p-[7px] text-[14px] font-[Inter] font-normal rounded-full border border-[#A281CD52]
                cursor-pointer transition-colors flex justify-center duration-200 bg-[#FFFFFF] text-[#593983] hover:bg-[#593983] hover:text-white'>
                    FAQ
                </div>

                <div className='p-[7px] text-[14px] font-[Inter] font-normal rounded-full border border-[#A281CD52]
                cursor-pointer transition-colors flex justify-center duration-200 bg-[#FFFFFF] text-[#593983] hover:bg-[#593983] hover:text-white'>
                    Обратная связь
                </div>
                <div className='p-[7px] text-[14px] font-[Inter] font-normal rounded-full border border-[#A281CD52]
                cursor-pointer transition-colors flex justify-center duration-200 bg-[#FFFFFF] text-[#593983] hover:bg-[#593983] hover:text-white'>
                    Сообщить о проблеме
                </div>
                <div className='p-[7px] text-[14px] font-[Inter] font-normal rounded-full border border-[#A281CD52]
                cursor-pointer transition-colors flex justify-center duration-200 bg-[#FFFFFF] text-[#593983] hover:bg-[#593983] hover:text-white'>
                    Оценить приложение
                </div>

            </div>

        </div>


    </div>
};

export default CreateExpertStep4;