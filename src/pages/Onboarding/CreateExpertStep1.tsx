import PageHeading from "@/components/shared/PageHeading";
import {FC, useState} from "react";
import BigText from "@components/shared/BigText.tsx";
import FloatingInput from "@/components/ui/FloatingInput";
import FloatingSelect from "@/components/ui/FloatingSelect";
import {Link} from "react-router-dom";
import FloatingTextarea from "@components/ui/FloatingTextarea.tsx";
import addIcon from './img/addIcons.png'
import BorderButton from "@components/ui/BorderButton.tsx";
import BlueGradientButton from "@/components/ui/BlueGradientButton";
import CreateExpertSteps from "@/components/shared/CreateExpertSteps";
import { motion } from "framer-motion";
import {ScrollToTop} from "@components/shared/ScrollToTop.tsx";

const CreateExpertStep1: FC = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const [role, setRole] = useState('')


    return <div className='min-h-[725px]  relative overflow-hidden bg-[linear-gradient(180deg,_rgba(89,57,131,0)_20%,_rgba(89,57,131,0.44)_200.84%)] pt-[24px]  '>
        <ScrollToTop />



        <CreateExpertSteps/>


        {/*Заголовок*/}
        <motion.div initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 ,delay:.4 }} className='flex items-center gap-[17px] mx-[16px]'>
            <Link className='flex' to={'/onboarding/createExpert'}>
                <i className='icon icon-arrow bg-[#9494A9] hover:bg-[#593983] transition duration-300 cursor-pointer text-[18px] rotate-[180deg]'></i>

            </Link>
            <PageHeading classNameSubtitle={'mt-[12px]'}
                         title="Базовая информация"/>
        </motion.div>


        <motion.div initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 ,delay:.6 }} className='flex mx-[16px] gap-[16px] border border-[#F4F4F8]  flex-col mt-[36px]  py-[24px] px-[16px] bg-[#FFFFFF] rounded-[20px]'>
            <BigText title={'Информация о эксперте'}/>

            <FloatingInput
                label="Имя эксперта"
                required
                value={name}
                classNamPlaceholder='text-[#D9D9E2]'
                onChange={(e) => setName(e.target.value)}
            />

            <FloatingSelect
                label="Роль/Специализация"
                required
                value={role}
                onChange={(e) => setRole(e.target.value)}
                options={[
                    {value: 'smm', label: 'Специалист по SMM'},
                    {value: 'seo', label: 'SEO-эксперт'},
                    {value: 'design', label: 'Дизайнер'},
                ]}
            />
            <FloatingTextarea
                label={'Краткое описание'}
                value={description}
                classNameLabel='text-[#D9D9E2]'
                onChange={(e) => setDescription(e.target.value)}

            />
        </motion.div>


        <motion.div initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 ,delay:.8 }} className='flex mx-[16px] gap-[14px] border border-[#F4F4F8]  flex-col mt-[12px]  py-[12px] px-[16px] bg-[#FFFFFF] rounded-[20px]'>
            <div className='min-h-[144px] group border-dashed border-2 hover:border-[#593983] transition duration-300  border-[#D9D9E2] rounded-[12px]'>
                <label htmlFor="createAvatar" className="cursor-pointer flex flex-col items-center justify-center">
                    <img className='max-w-[40px] mt-[26px]' src={addIcon} alt=""/>

                    <p className='font-medium mt-[18px] group-hover:text-[#493E56] transition duration-300 text-[16px] leading-[100%] text-[#000000]'>Загрузить аватар</p>
                    <span className='font-medium mt-[8px] group-hover:text-[#593983] transition duration-300 text-[12px] leading-[100%] opacity-[.6] text-[#1E112E]'>Выберите изображение с устройства</span>
                </label>

                <input id="createAvatar" name="createAvatar" type="file" className="hidden"/>
            </div>


            <div className='flex buttons-column gap-[8px] w-full'>
                <BorderButton
                    href={'/'}
                    as="file"
                    className={'h-[44px] '}

                    onFileChange={(e) => console.log(e.target.files?.[0])}
                >
                    <i className='icon icon-photo_album text-[16px] bg-[#593983]'></i>
                    Из галереи

                </BorderButton>

                <BorderButton
                    href={'/'}
                    as="button"
                    className='h-[44px]'

                >
                    <i className='icon icon-ai_fill  text-[16px] bg-[#593983]'></i>
                    Сгенерировать

                </BorderButton>


            </div>

        </motion.div>




        <motion.div   initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6, delay:.1 }} className='flex  rounded-tl-[16px] rounded-tr-[16px]   w-full  gap-[14px] border border-[#F4F4F8]  flex-col mt-[12px] px-[16px]  pt-[16px] pb-[20px] bg-[#FFFFFF] '>
            <BlueGradientButton href={'/onboarding/createExpertStep2'}>
                Продолжить
            </BlueGradientButton>

        </motion.div>


    </div>
};

export default CreateExpertStep1;