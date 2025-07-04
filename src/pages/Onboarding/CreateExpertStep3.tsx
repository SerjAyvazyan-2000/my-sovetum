import PageHeading from "@/components/shared/PageHeading";
import {FC, useState} from "react";

import {Link} from "react-router-dom";

import BlueGradientButton from "@/components/ui/BlueGradientButton";
import CreateExpertSteps from "@/components/shared/CreateExpertSteps";
import addIcon from "@pages/Onboarding/img/addIcons.png";
import BigText from "@components/shared/BigText.tsx";
import FloatingInput from "@components/ui/FloatingInput.tsx";
import FloatingTextarea from "@components/ui/FloatingTextarea.tsx";
import BorderButton from "@components/ui/BorderButton.tsx";
import { motion } from "framer-motion";
import UploadedFilesList from "@/components/shared/UploadedFilesList";
import {ScrollToTop} from "@components/shared/ScrollToTop.tsx";


const CreateExpertStep3: FC = () => {
const [links,setLinks]= useState('')
    const [instructions,setInstructions]= useState('')

    return <div
        className='min-h-[725px]   relative overflow-hidden bg-[linear-gradient(180deg,_rgba(89,57,131,0)_20%,_rgba(89,57,131,0.44)_200.84%)] pt-[24px]  '>
        <ScrollToTop />


        <CreateExpertSteps/>


        {/*Заголовок*/}
        <motion.div initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 ,delay:.8 }} className='flex items-center gap-[17px] mx-[16px]'>
            <Link className='flex' to={'/onboarding/createExpertStep2'}>
                <i className='icon icon-arrow bg-[#9494A9] hover:bg-[#593983] transition duration-300 cursor-pointer text-[18px] rotate-[180deg]'></i>

            </Link>
            <PageHeading classNameSubtitle={'mt-[12px]'}
                         title="База знаний"/>
        </motion.div>

        {/*Документы*/}
        <motion.div initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 ,delay:.9 }} className='flex mx-[16px]  gap-[14px] border border-[#F4F4F8]  flex-col mt-[36px]  py-[12px] px-[16px] bg-[#FFFFFF] rounded-[20px]'>
            <BigText title={'Документы'}/>
            <div className='min-h-[144px] hover:border-[#593983] transition duration-300 border-dashed border-2  border-[#D9D9E2] rounded-[12px]'>
                <label htmlFor="createAvatar" className="cursor-pointer flex flex-col items-center justify-center">
                    <img className='max-w-[40px] mt-[26px]' src={addIcon} alt=""/>

                    <p className='font-medium mt-[18px] text-[16px] leading-[100%] text-[#000000]'>Загрузить аватар</p>
                    <span className='font-medium mt-[8px] text-[12px] leading-[100%] opacity-[.6] text-[#1E112E]'>Поддержка: PDF, DOCX, TXT • 10MB</span>
                </label>

                <input id="createAvatar" name="createAvatar" type="file" className="hidden"/>
            </div>
            {/*Загруженные файлы*/}


            <UploadedFilesList />

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




        {/*Прямые инструкции*/}
        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }} className='flex mx-[16px]  gap-[14px] border border-[#F4F4F8]  flex-col mt-[12px]  py-[12px] px-[16px] bg-[#FFFFFF] rounded-[20px]'>
            <BigText title={'Прямые инструкции'}/>

            <div>
                <FloatingTextarea
                    className='max-h-[116px]'
                    label='Инструкции'
                    value={instructions}
                    classNameLabel='text-[#D9D9E2]'
                    onChange={(e)=>setInstructions(e.target.value)}
                />
            </div>


        </motion.div>




        <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }} className='flex  rounded-tl-[16px] rounded-tr-[16px]    gap-[14px] border border-[#F4F4F8]  flex-col mt-[24px] px-[16px]  pt-[16px] pb-[20px] bg-[#FFFFFF] '>

            <div className='flex  gap-[8px] w-full'>
                <BorderButton
                    href={'/'}
                    as="button"
                    className='h-[48px] text-[#1E112E]'
                >
                    <i className='icon icon-file_fill text-[16px] opacity-[.9]  bg-[#593983]'></i>
                    5 файлов

                </BorderButton>

                <BorderButton
                    href={'/'}
                    as="button"
                    className='h-[48px] text-[#1E112E]'

                >
                    <i className='icon icon-earth_2_fill opacity-[.9] text-[16px] bg-[#593983]'></i>
                    10 Ссылок

                </BorderButton>


            </div>


            <BlueGradientButton href={'/onboarding/createExpertStep4'}>
                Продолжить
            </BlueGradientButton>

        </motion.div>


    </div>
};

export default CreateExpertStep3;