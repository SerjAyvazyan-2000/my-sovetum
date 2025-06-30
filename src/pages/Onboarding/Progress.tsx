import PageHeading from "@/components/shared/PageHeading";
import {FC, useState} from "react";


import pageDecor from "@pages/Onboarding/img/pageDecor.png";
import avatar2 from "@pages/Onboarding/img/avatar2.png";
import BigText from "@components/shared/BigText.tsx";
import SmallText from "@components/shared/SmallText.tsx";
import * as Slider from "@radix-ui/react-slider";
import BlueGradientButton from "@components/ui/BlueGradientButton.tsx";
import {Checkbox} from "@/components/shared/Checkbox";
import {SegmentedSwitch} from "@components/shared/SegmentedSwitch.tsx";
import chart3 from "@pages/Onboarding/img/chart3.png";
import chart4 from "@pages/Onboarding/img/chart4.png";
import BorderButton from "@components/ui/BorderButton.tsx";
import PopUpShare from "@components/shared/PopUpShare.tsx";
import {ScrollToTop} from "@components/shared/ScrollToTop.tsx";
import { motion } from "framer-motion";


const Progress: FC = () => {
    const [value, setValue] = useState<number[]>([2])
    const [modalShare, setModalShare] = useState<boolean>(false)

    const handleShareModal =()=>{
        setModalShare(!modalShare)
    }

    return <div className='min-h-[725px]  bg-[white]  relative z-[2] overflow-hidden  pt-[24px] '>
        <ScrollToTop />

        {/*Заголовок*/}
        <motion.div initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 ,delay:.8 }} className='px-[16px] flex items-start'>
            <PageHeading classNameSubtitle={'mt-[12px]'} reverse={true}
                         subtitle="Отслеживайте свое развитие с помощью экспертов"
                         title="Прогресс и цели"/>
            <i onClick={handleShareModal} className='icon mt-[7px] hover:bg-[#593983]  transition-all duration-300 cursor-pointer icon-share_forward bg-[#9494A9] text-[20px]'></i>
        </motion.div>


        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }} className='flex mx-[16px]  border border-[#F4F4F8]  flex-col mt-[36px]  py-[14px] px-[16px] bg-[#FFFFFF] rounded-[20px]'>

            <div className='flex items-center gap-[12px]'>
                <div className='flex'>
                    <img className='w-[24px] min-w-[24px] h-[24px]' src={avatar2} alt=""/>
                </div>
                <p className='font-normal font-[Inter] text-[14px] leading-[100%]  text-[#1E112E]'>Виктор Капиталов</p>

                <div
                    className='ml-auto px-[8px] py-[2px] bg-[#607AFF] font-[Inter] font-normal text-[#FFFFFF] text-[12px] loading-[100%] rounded-full'>
                    В процессе
                </div>

            </div>

            <div className='mt-[15px] border  border-b-[#F4F4F8] pb-[24px] border-t-[transparent] border-l-[transparent] border-r-[transparent]'>
                <BigText title={'Улучшить финансовое планирование'}/>
                <p className='text-[#9494A9] mt-[12px] text-[14px] loading-[100%] font-[Inter] font-normal'>до 15
                    февраля</p>
            </div>

            <div className=''>
                <div className="flex justify-between items-center mb-[8px]">
                    <SmallText text={'Прогресс'} className='opacity-[1] text-[14px] text-[#593983]'/>

                    <p className=" text-[14px] text-[#593983] leading-[100%] font-medium font-[Inter] ">
                        60%
                    </p>

                </div>
                <Slider.Root
                    className="relative flex items-center select-none touch-none w-full h-[12px]"
                    value={value}
                    onValueChange={(val) => setValue(val)}
                    max={3}
                    min={1}
                    step={1}
                >
                    <Slider.Track className="bg-[#F5F5F8] relative grow rounded-full h-[6px]">
                        <Slider.Range className="absolute bg-[#593983] rounded-full h-full"/>
                    </Slider.Track>

                </Slider.Root>


                <div className='flex flex-col gap-[8px] mt-[14px]'>

                    <BlueGradientButton
                        href={'/'}
                        className='h-[44px] flex group gap-[10px]'
                    >

                        <i className='icon icon-refresh group-hover:bg-[#593983]   transition-all duration-300 text-[15px] bg-[#FFFFFF]'></i>
                        <span>Обновить прогресс</span>

                    </BlueGradientButton>
                    <p className='text-[#9494A9] text-center text-[12px] font-normal font-[Inter] leading-[140%]'>Обновлено:
                        3 дня назад</p>


                </div>
            </div>


        </motion.div>

        <motion.h2 initial={{ opacity: 0, x: -30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true, amount: 0.2 }}
                   transition={{ duration: 0.8 }} className='mx-[16px] text-[#1E112E] text-[24px] font-normal mt-[24px]'>Архив достижений</motion.h2>


        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }} className='mt-[16px] flex flex-col gap-[8px]'>
            <div className='flex mx-[16px]  border border-[#F4F4F8]  flex-col   pt-[16px]  bg-[#FFFFFF] rounded-[20px]'>

                <div className='px-[16px]'>
                    <BigText title={'Улучшить финансовое планирование'}/>
                </div>

                <div className='flex px-[16px] items-center gap-[8px] mt-[12px]'>
                    <div className='flex'>
                        <img className='w-[24px] min-w-[24px] h-[24px]' src={avatar2} alt=""/>
                    </div>
                    <p className='font-normal font-[Inter] text-[14px] leading-[100%]  text-[#1E112E]'>Виктор
                        Капиталов</p>
                </div>
                <div className='mt-[16px] px-[16px] pb-[16px] flex-wrap flex gap-[16px]'>
                    <div className='flex gap-[7px] items-center'>
                        <i className='icon icon-flag transition-all duration-300 text-[15px] bg-[#D9D9E2]'></i>
                        <p className='text-[#9494A9]  text-[14px] loading-[100%] font-[Inter] font-normal'>до 15
                            февраля</p>
                    </div>

                    <div className='flex gap-[7px] items-center'>
                        <i className='icon icon-time_fill transition-all duration-300 text-[15px] bg-[#D9D9E2]'></i>
                        <p className='text-[#9494A9] text-[14px] loading-[100%] font-[Inter] font-normal'>5 месяцев</p>
                    </div>
                    <div className='flex gap-[7px] items-center'>
                        <i className='icon icon-target_fill transition-all duration-300 text-[15px] bg-[#D9D9E2]'></i>
                        <p className='text-[#9494A9] text-[14px] loading-[100%] font-[Inter] font-normal'>Легко</p>
                    </div>
                </div>


                <div className='py-[16px] px-[19px] flex items-center gap-[15px] rounded-bl-[20px] rounded-br-[20px] bg-[#FFF3F3]'>
                    <i className='icon icon-close_fill transition-all duration-300 text-[15px] bg-[#FF5757]'></i>
                    <p className='font-normal font-[Inter] text-[14px] leading-[140%]  text-[#FF5757]'>Не выполнено</p>
                </div>

            </div>

            <div className='flex mx-[16px]  border border-[#F4F4F8]  flex-col   pt-[16px]  bg-[#FFFFFF] rounded-[20px]'>

                <div className='px-[16px]'>
                    <BigText title={'Улучшить финансовое планирование'}/>
                </div>

                <div className='flex px-[16px] items-center gap-[8px] mt-[12px]'>
                    <div className='flex'>
                        <img className='w-[24px] min-w-[24px] h-[24px]' src={avatar2} alt=""/>
                    </div>
                    <p className='font-normal font-[Inter] text-[14px] leading-[100%]  text-[#1E112E]'>Виктор
                        Капиталов</p>
                </div>
                <div className='mt-[16px] px-[16px] pb-[16px] flex-wrap flex gap-[16px]'>
                    <div className='flex gap-[7px] items-center'>
                        <i className='icon icon-flag transition-all duration-300 text-[15px] bg-[#D9D9E2]'></i>
                        <p className='text-[#9494A9]  text-[14px] loading-[100%] font-[Inter] font-normal'>до 15
                            февраля</p>
                    </div>

                    <div className='flex gap-[7px] items-center'>
                        <i className='icon icon-time_fill transition-all duration-300 text-[15px] bg-[#D9D9E2]'></i>
                        <p className='text-[#9494A9] text-[14px] loading-[100%] font-[Inter] font-normal'>5 месяцев</p>
                    </div>
                    <div className='flex gap-[7px] items-center'>
                        <i className='icon icon-target_fill transition-all duration-300 text-[15px] bg-[#D9D9E2]'></i>
                        <p className='text-[#9494A9] text-[14px] loading-[100%] font-[Inter] font-normal'>Легко</p>
                    </div>
                </div>


                <div
                    className='py-[16px] px-[19px] flex items-center gap-[15px] rounded-bl-[20px] rounded-br-[20px] bg-[#F3FFF4]'>
                    <i className='icon icon-check_fill transition-all duration-300 text-[15px] bg-[#46CD51]'></i>
                    <p className='font-normal font-[Inter] text-[14px] leading-[140%]  text-[#46CD51]'>Успешно
                        выполнено</p>
                </div>

            </div>


            <div className='flex mx-[16px]  border border-[#F4F4F8]  flex-col   pt-[16px]  bg-[#FFFFFF] rounded-[20px]'>

                <div className='px-[16px]'>
                    <BigText title={'Улучшить финансовое планирование'}/>
                </div>

                <div className='flex px-[16px] items-center gap-[8px] mt-[12px]'>
                    <div className='flex'>
                        <img className='w-[24px] min-w-[24px] h-[24px]' src={avatar2} alt=""/>
                    </div>
                    <p className='font-normal font-[Inter] text-[14px] leading-[100%]  text-[#1E112E]'>Виктор
                        Капиталов</p>
                </div>
                <div className='mt-[16px] px-[16px] pb-[16px] flex-wrap flex gap-[16px]'>
                    <div className='flex gap-[7px] items-center'>
                        <i className='icon icon-flag transition-all duration-300 text-[15px] bg-[#D9D9E2]'></i>
                        <p className='text-[#9494A9]  text-[14px] loading-[100%] font-[Inter] font-normal'>до 15
                            февраля</p>
                    </div>

                    <div className='flex gap-[7px] items-center'>
                        <i className='icon icon-time_fill transition-all duration-300 text-[15px] bg-[#D9D9E2]'></i>
                        <p className='text-[#9494A9] text-[14px] loading-[100%] font-[Inter] font-normal'>5 месяцев</p>
                    </div>
                    <div className='flex gap-[7px] items-center'>
                        <i className='icon icon-target_fill transition-all duration-300 text-[15px] bg-[#D9D9E2]'></i>
                        <p className='text-[#9494A9] text-[14px] loading-[100%] font-[Inter] font-normal'>Легко</p>
                    </div>
                </div>


                <div
                    className='py-[16px] px-[19px] flex items-center gap-[15px] rounded-bl-[20px] rounded-br-[20px] bg-[#F3FFF4]'>
                    <i className='icon icon-check_fill transition-all duration-300 text-[15px] bg-[#46CD51]'></i>
                    <p className='font-normal font-[Inter] text-[14px] leading-[140%]  text-[#46CD51]'>Успешно
                        выполнено</p>
                </div>

            </div>

        </motion.div>



        <motion.h2 initial={{ opacity: 0, x: -30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true, amount: 0.2 }} className='mx-[16px] text-[#1E112E] text-[24px] font-normal mt-[24px]'>Трекеры привычек</motion.h2>

        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}  className='mt-[16px] flex flex-col gap-[8px]'>
            <div className='flex justify-between  gap-[10px] mx-[16px] p-[16px]  border border-[#F4F4F8]     pt-[16px]  bg-[#FFFFFF] rounded-[20px]'>
                <div className=''>
                    <BigText title={'Планирование дня'}/>
                    <div className='flex gap-[10px] mt-[13px] items-center'>
                        <i className='icon icon-fire_fill transition-all duration-300 text-[15px] bg-[#F49E25]'></i>
                        <p className='text-[#9494A9] text-[14px] font-normal font-[Inter] loading-[140%]'>12 дней</p>
                    </div>
                </div>

                <Checkbox/>


            </div>

            <div className='flex justify-between  gap-[10px] mx-[16px] p-[16px]  border border-[#F4F4F8]     pt-[16px]  bg-[#FFFFFF] rounded-[20px]'>
                <div className=''>
                    <BigText title={'Утренняя медитация'}/>
                    <div className='flex gap-[10px] mt-[13px] items-center'>
                        <i className='icon icon-fire_fill transition-all duration-300 text-[15px] bg-[#F49E25]'></i>
                        <p className='text-[#9494A9] text-[14px] font-normal font-[Inter] loading-[140%]'>3 дней</p>
                    </div>
                </div>

                <Checkbox/>


            </div>

        </motion.div>


        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }} className='mt-[24px] px-[16px] '>
            <div className='border border-[#F4F4F8]   p-[16px] bg-[#FFFFFF] rounded-[20px]'>

                <div className='flex items-center gap-[8px]'>
                    <i className='icon icon-bling_fill  transition-all duration-300 text-[19px] bg-[#593983]'></i>
                    <BigText title={'AI предложения'}/>
                </div>

                <div className='mt-[18px] flex flex-col gap-[8px]'>
                    <div className=' p-[14px] bg-[#F5F5F8] rounded-[12px] '>
                        <p className='font-normal  text-[12px] leading-[140%] text-[#9494A9]'>
                            Пора создать новую цель в области здоровья
                        </p>
                    </div>
                    <div className=' p-[14px] bg-[#F5F5F8] rounded-[12px] '>
                        <p className='font-normal  text-[12px] leading-[140%] text-[#9494A9]'>
                            Обратитесь к Андрею Балансу для работы с стрессом
                        </p>
                    </div>
                    <div className=' p-[14px] bg-[#F5F5F8] rounded-[12px] '>
                        <p className='font-normal  text-[12px] leading-[140%] text-[#9494A9]'>
                            Медицинский консилиум поможет с комплексным планом здоровья
                        </p>
                    </div>
                </div>


            </div>
        </motion.div>


        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }} className='flex mx-[16px]  border border-[#F4F4F8]  flex-col mt-[48px]  py-[14px] px-[16px] bg-[#FFFFFF] rounded-[20px]'>
            <div className='flex items-center gap-[8px]'>
                <i className='icon icon-bling_fill  transition-all duration-300 text-[20px] bg-[#593983]'></i>
                <BigText title={'AI предложения'}/>
            </div>

            <div
                className='border border-b-[#F4F4F8] pb-[18px] border-t-[transparent] border-l-[transparent] border-r-[transparent]'>
                <SegmentedSwitch
                    options={["Изначально", "Сейчас"]}
                    onChange={(val) => console.log("Выбрано:", val)}
                />
            </div>

            <div>
                <img src={chart3} alt=""/>
            </div>

            <div className={'mt-[18px]'}>
                <img src={chart4} alt=""/>
            </div>

        </motion.div>



        <motion.div initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, amount: 0.2 }}
                     transition={{ duration: 0.8 }} className='flex flex-col  rounded-tl-[16px] rounded-tr-[16px]    gap-[10px] border border-[#F4F4F8]   mt-[24px] px-[16px]  pt-[16px] pb-[20px] bg-[#FFFFFF] '>

            <BlueGradientButton
                href={'/'}
                className='h-[44px] group flex gap-[10px]'
            >

                <i className='icon icon-plus  group-hover:bg-[#593983]  transition-all duration-300 text-[15px] bg-[#FFFFFF]'></i>
                <span>Добавить новую цель</span>

            </BlueGradientButton>

            <BorderButton
                href={'/'}
                as="button"
                className='h-[44px]'
            >


                <i className='icon icon-list_check  transition-all duration-300 text-[15px] bg-[#593983]'></i>
                Планировать c экспертом

            </BorderButton>



        </motion.div>


        <div className='absolute w-full left-[0] top-[0] z-[-1]'>
            <img className='w-full' src={pageDecor} alt=""/>
        </div>


        <PopUpShare onClose={handleShareModal} open={modalShare}/>

    </div>
};

export default Progress;