import PageHeading from "@/components/shared/PageHeading";
import {FC} from "react";
import Menu from "@components/shared/menu.tsx";
import template from './img/template.png'
import IndividualIcon from './img/IndividualIcon.png'


import BigText from "@components/shared/BigText.tsx";
import SmallText from "@components/shared/SmallText.tsx";
import {Link} from "react-router-dom";


const Home: FC = () => {
    return <div
        className='min-h-[725px] pb-[100px] px-[16px] relative overflow-hidden bg-[linear-gradient(180deg,_rgba(89,57,131,0)_20%,_rgba(89,57,131,0.44)_200.84%)] pt-[24px] '>
        {/*Заголовок*/}
        <div>
            <PageHeading classNameSubtitle={'mt-[12px]'} reverse={true} subtitle="Выберите тип эксперта для создания"
                         title="Создать эксперта"/>
        </div>


        {/*Из шаблона*/}

        <div className='mt-[36px] flex flex-col gap-[16px]'>
            <div className='flex gap-[16px] border border-[#F4F4F8]  flex-col   py-[24px] px-[16px] bg-[#FFFFFF] rounded-[20px]'>
                <div className='max-w-[122px] m-auto h-[122px]'>
                    <img src={template} alt=""/>
                </div>

                <div className='mt-[24px]'>
                    <Link to={'/'} className='flex items-center justify-between'>
                        <BigText title='Из шаблона'/>
                        <i className='icon icon-arrow text-[12px]  bg-[#593983]'></i>
                    </Link>
                    <div className='flex items-center justify-between mt-[10px]'>
                        <SmallText text={'Готовые роли и настройки'} className='text-[#1E112E] text-[14px]'/>
                        <p className='bg-[#3BC966] py-[2px] px-[6px] rounded-full text-[12px] text-[#FFFFFF] font-[Inter] font-normal'>3-5
                            минут</p>
                    </div>

                </div>
            </div>

            <div className='flex gap-[16px] border border-[#F4F4F8]  flex-col   py-[24px] px-[16px] bg-[#FFFFFF] rounded-[20px]'>
                <div className='max-w-[101px] m-auto h-[101px]'>
                    <img src={IndividualIcon} alt=""/>
                </div>

                <div className='mt-[24px]'>
                    <Link to={'/onboarding/createExpertStep1'} className='flex items-center justify-between'>
                        <BigText title='Индивидуальный'/>
                        <i className='icon icon-arrow text-[12px]  bg-[#593983]'></i>
                    </Link>
                    <div className='flex items-center justify-between mt-[10px]'>
                        <SmallText text={'Полная настройка'} className='text-[#1E112E] text-[14px]'/>
                        <p className='bg-[#F9C51C] py-[2px] px-[6px] rounded-full text-[12px] text-[#FFFFFF] font-[Inter] font-normal'>5-10 минут</p>

                    </div>

                </div>
            </div>
        </div>



        <Menu/>
    </div>
};

export default Home;